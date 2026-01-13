"use client";

import { useRouter } from "next/navigation";
import { useInView } from "react-intersection-observer";
import { useState, useRef, useEffect } from "react";
import ReelProductScroller from "./ReelScrollProducts";
import {
  Upload,
  Bookmark,
  ArrowLeft,
  SearchIcon,
  LucideShoppingBag,
} from "lucide-react";
import BottomSheet from "./BottomSheet";
import Product from "./Product";
import Link from "next/link";
// import { BottomNavigation } from "./BottomNavigation";

type Props = {
  src: string;
};

export default function AutoPlayReel({ src }: Props) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const { ref, inView } = useInView({ threshold: 0.6 });
  const [isPlaying, setIsPlaying] = useState(true);
  const router = useRouter();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!videoRef.current) return;

    if (inView && isPlaying) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  }, [inView, isPlaying]);

  const togglePlay = () => {
    if (!videoRef.current) return;

    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <>
      <div ref={ref} className="h-screen snap-start snap-always relative w-md">
        <video
          ref={videoRef}
          src={src}
          className="h-full w-full object-cover"
          loop
          playsInline
          onClick={togglePlay}
        />

        <div className="absolute left-4 top-[6%] flex flex-col text-white items-center gap-5">
          <button
            onClick={() => router.push("/ProfileSection")}
            className="flex flex-col items-center cursor-pointer"
          >
            <ArrowLeft color="#FFFFFF" size={28} />{" "}
          </button>
        </div>

        <div className="absolute right-4 top-[6%] flex flex-col items-center gap-5">
          <div className="bg-[#252525] rounded-full w-10 h-10 flex items-center justify-center">
            <SearchIcon color="#FFFFFF" size={20} />
          </div>
        </div>

        <div className="absolute right-3 top-[36%] flex flex-col items-center gap-5 text-white">
          <button className="flex flex-col items-center cursor-pointer">
            <Bookmark color="#FFFFFF" size={30} />
            <span className="text-xs">1.3k</span>
          </button>
          <button className="flex flex-col items-center cursor-pointer">
            <Upload color="#FFFFFF" size={30} />
          </button>
        </div>

        <div className="absolute left-4 top-[60%] flex flex-col items-center gap-4 text-white">
          <div className="flex flex-row">
            <div>
              <Link href="ProfileSection">
                <img
                  src="https://wishlink-proxy.gumlet.io/fetch/https%3A//cdn-alabaster.wishlink.com/dp_sanagrover_insta.jpeg"
                  className="w-9.5 h-9.5 rounded-full cursor-pointer"
                  alt=""
                />
              </Link>
            </div>

            <div>
              <Link href="ProfileSection">
                <h1 className="mx-2 my-1 text-[white] text-sm">Sana Grover</h1>
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute top-[65%] p-1 pb-2 flex items-end w-full cursor-pointer z-10">
          <div className="flex flex-1 leading-snug m-4 max-h-64">
            <p className="text-white text-sm font-light">
              {"Libas Floral Yoke".slice(0, 25) + "..."}
            </p>
          </div>

          <button
            onClick={() => setOpen(true)}
            className="py-1 px-3 flex bg-[#444a] rounded-lg text-[white] text-sm font-light items-center border-gray-500 border-2"
          >
            <LucideShoppingBag color="#ffffff" size={18} />
            <p className="text-[12px] font-normal mx-2">
              Shop Products <span>(5)</span>
            </p>
          </button>
        </div>

        {/* {!open && <BottomNavigation />} */}
        <ReelProductScroller />
      </div>
      <BottomSheet open={open} onClose={() => setOpen(false)}>
        <h2 className="font-semibold text-lg mb-3 text-black">
          Tagged Products (5)
        </h2>
        <div className="grid grid-cols-2">
          <Product
            img="https://wishlink-proxy.gumlet.io/fetch/https%3A//assets.myntassets.com/h_1440%2Cq_95%2Cw_1080/assets/images/27672386/2024/2/19/a0888962-db90-4634-802c-cce561fcf2411708320320989KurtaSets1.jpg?width=480"
            brandName="Myntra"
            descripition="Libas Floral Yoke Design Regular Thread Work Pure Cotton Kurta With Salwar & Dupatta"
            price="2149"
            navLink="https://www.myntra.com/apparel-set/libas/libas-floral-yoke-design-regular-thread-work-pure-cotton-kurta-with-salwar-&-dupatta/27672386/buy?utm_source=Wishlink&utm_medium=wishlink&atgSessionId=AhWYbPE2RTFAweaSEAMgDQ_p18258057&utm_campaign=AhWYbPE2RTFAweaSEAMgDQ_p18258057&af_xp=custom&af_force_deeplink=true&af_pmod_priority=equal&pid=wishlink_int&is_retargeting=true&af_click_lookback=1d&expires=1796124804&signature=TAgl4KReDmrL3sNX9M2o61K7vmqmkso7BUWa_9z1YYo&utm_source=Wishlink&utm_medium=wishlink&utm_campaign=AhWYbPE2RTFAweaSEAMgDQ_p18258057&deep_link_value=myntra%3A%2F%2Fmyntra.com%2F27672386&clickid=AhWYbPE2RTFAweaSEAMgDQ_p18258057&af_siteid=Wishlink&af_ref=Wishlink_AhWYbPE2RTFAweaSEAMgDQ_p18258057&c=AhWYbPE2RTFAweaSEAMgDQ_p18258057"
          />
          <Product
            img="https://wishlink-proxy.gumlet.io/fetch/https%3A//assets.myntassets.com/h_1440%2Cq_95%2Cw_1080/assets/images/32102892/2024/12/31/721bc365-69b7-49c3-b17f-d18fafa781311735641962840-Libas-Women-Ethnic-Motifs-Embroidered-Regular-Sequinned-Kurt-1.jpg?width=480"
            brandName="Myntra"
            descripition="Libas Ethnic Women Ethnic Motifs Embroidered Sequinned Kurta with Trouser & Dupatta"
            price="2349"
            navLink="https://www.myntra.com/apparel-set/libas/libas-ethnic-women-ethnic-motifs-embroidered-sequinned-kurta-with-trouser-&-dupatta/32102892/buy?utm_source=Wishlink&utm_medium=wishlink&atgSessionId=MiKoaexVUhWN4wczDDXfjQ_p18258058&utm_campaign=MiKoaexVUhWN4wczDDXfjQ_p18258058&af_xp=custom&af_force_deeplink=true&af_pmod_priority=equal&pid=wishlink_int&is_retargeting=true&af_click_lookback=1d&expires=1796125545&signature=TnwMNMBAlAkoL5ApTnNmBavRGYARdzXBtbu7FWnGgKk&utm_source=Wishlink&utm_medium=wishlink&utm_campaign=MiKoaexVUhWN4wczDDXfjQ_p18258058&deep_link_value=myntra%3A%2F%2Fmyntra.com%2F32102892&clickid=MiKoaexVUhWN4wczDDXfjQ_p18258058&af_siteid=Wishlink&af_ref=Wishlink_MiKoaexVUhWN4wczDDXfjQ_p18258058&c=MiKoaexVUhWN4wczDDXfjQ_p18258058"
          />
          <Product
            img="https://wishlink-proxy.gumlet.io/fetch/https%3A//assets.myntassets.com/h_1440%2Cq_95%2Cw_1080/assets/images/33262296/2025/4/5/51fb1c62-cf45-4cc3-9741-643a34b3e3571743848395972-Libas-Floral-Embroidered-V-Neck-Thread-Work-Straight-Kurta-W-1.jpg?width=480"
            brandName="Myntra"
            descripition="Libas Floral Embroidered V-Neck Thread Work Straight Kurta With Trousers & Dupatta"
            price="1849"
            navLink="https://www.myntra.com/apparel-set/libas/libas-floral-embroidered-v-neck-thread-work-straight-kurta-with-trousers-&-dupatta/33262296/buy?utm_source=Wishlink&utm_medium=wishlink&atgSessionId=LxHy3sEyS6PhGbLswFZg8S_p18258059&utm_campaign=LxHy3sEyS6PhGbLswFZg8S_p18258059&af_xp=custom&af_force_deeplink=true&af_pmod_priority=equal&pid=wishlink_int&is_retargeting=true&af_click_lookback=1d&expires=1796125545&signature=ng6cfXjGYSeS629Rh10Myrb-7P-g5cUSvgKKYCN_XXc&utm_source=Wishlink&utm_medium=wishlink&utm_campaign=LxHy3sEyS6PhGbLswFZg8S_p18258059&deep_link_value=myntra%3A%2F%2Fmyntra.com%2F33262296&clickid=LxHy3sEyS6PhGbLswFZg8S_p18258059&af_siteid=Wishlink&af_ref=Wishlink_LxHy3sEyS6PhGbLswFZg8S_p18258059&c=LxHy3sEyS6PhGbLswFZg8S_p18258059"
          />
          <Product
            img="https://wishlink-proxy.gumlet.io/fetch/https%3A//assets.myntassets.com/h_1440%2Cq_95%2Cw_1080/assets/images/2025/FEBRUARY/20/UcOIpOJs_19fbe9cae5204d59b82207a8ed2ccde9.jpg?width=480"
            brandName="Myntra"
            descripition="Khushal K Floral Printed V-Neck Pure Cotton Straight Kurta With Palazzos & Dupatta"
            price="1175"
            navLink="https://www.myntra.com/apparel-set/khushal-k/khushal-k-floral-printed-v-neck-pure-cotton-straight-kurta-with-palazzos-&-dupatta/32822388/buy?utm_source=Wishlink&utm_medium=wishlink&atgSessionId=3texb6ZMKe2wX8GCseD54y_p18258060&utm_campaign=3texb6ZMKe2wX8GCseD54y_p18258060&af_xp=custom&af_force_deeplink=true&af_pmod_priority=equal&pid=wishlink_int&is_retargeting=true&af_click_lookback=1d&expires=1796125624&signature=nOQz884s3bkl6geni4dfZaZis364fWaGt0cJjirHnCw&utm_source=Wishlink&utm_medium=wishlink&utm_campaign=3texb6ZMKe2wX8GCseD54y_p18258060&deep_link_value=myntra%3A%2F%2Fmyntra.com%2F32822388&clickid=3texb6ZMKe2wX8GCseD54y_p18258060&af_siteid=Wishlink&af_ref=Wishlink_3texb6ZMKe2wX8GCseD54y_p18258060&c=3texb6ZMKe2wX8GCseD54y_p18258060"
          />
          <Product
            img="https://wishlink-proxy.gumlet.io/fetch/https%3A//assets.myntassets.com/h_1440%2Cq_95%2Cw_1080/assets/images/32418416/2025/3/3/ac2145ff-e77f-4a0e-830d-aa987fe496671741008993229-Libas-Off-White-Floral-Printed-High-Slit-Keyhole-Neck-Straig-1.jpg?width=480"
            brandName="Myntra"
            descripition="Libas Off White Floral Printed High Slit Keyhole Neck Straight Kurta With Salwar & Dupatta"
            price="1149"
            navLink="https://www.myntra.com/apparel-set/libas/libas-off-white-floral-printed-high-slit-keyhole-neck-straight-kurta-with-salwar-&-dupatta/32418416/buy?utm_source=Wishlink&utm_medium=wishlink&atgSessionId=VJRHPAKPZDL473AkRx7E47_p18258061&utm_campaign=VJRHPAKPZDL473AkRx7E47_p18258061&af_xp=custom&af_force_deeplink=true&af_pmod_priority=equal&pid=wishlink_int&is_retargeting=true&af_click_lookback=1d&expires=1796125624&signature=kXRChCKuZWbWIfuQdt2jeQMiVyoURrA90zgUr6DlPE4&utm_source=Wishlink&utm_medium=wishlink&utm_campaign=VJRHPAKPZDL473AkRx7E47_p18258061&deep_link_value=myntra%3A%2F%2Fmyntra.com%2F32418416&clickid=VJRHPAKPZDL473AkRx7E47_p18258061&af_siteid=Wishlink&af_ref=Wishlink_VJRHPAKPZDL473AkRx7E47_p18258061&c=VJRHPAKPZDL473AkRx7E47_p18258061"
          />
        </div>
      </BottomSheet>
    </>
  );
}

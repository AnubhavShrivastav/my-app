"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState, useRef, useEffect } from "react";
import ReelProductScroller from "../newComponents/ReelScrollProducts";
import {
  Upload,
  Bookmark,
  ArrowLeft,
  SearchIcon,
  LucideShoppingBag,
} from "lucide-react";
import BottomSheet from "../newComponents/BottomSheet";
import Product from "../newComponents/Product";
import Link from "next/link";
import { BottomNavigation } from "../newComponents/BottomNavigation";

type ReelBox = {
  src: string;
};

export function ReelBox({ src }: ReelBox) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const { ref, inView } = useInView({ threshold: 0.6 });

  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (inView) {
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  }, [inView]);

  return (
    <>
      <motion.div
        ref={ref}
        animate={{
          scale: inView ? 1 : 0.92,
          opacity: inView ? 1 : 0.5,
        }}
        transition={{ duration: 0.3 }}
        className="snap-start flex justify-center items-center h-screen w-full bg-white"
      >
        <div className="relative w-112.5 h-screen bg-black overflow-y-hidden">
          <video
            src={src}
            autoPlay={inView}
            ref={videoRef}
            loop
            className="w-full h-full object-cover overflow-hidden"
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

          <div className="absolute left-4 top-[62%] flex flex-col items-center gap-4 text-white">
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
                  <h1 className="mx-2 my-1 text-[white] text-md">
                    Sana Grover
                  </h1>
                </Link>
              </div>
            </div>
          </div>

          <div className="absolute top-[67%] p-3 pb-2 flex flex-col items-end">
            <div className="flex flex-row">
              <p className="text-white font-light">
                {"Libas Floral Yoke".slice(0, 25) + "..."}
              </p>
              <button
                onClick={() => setOpen(true)}
                className="py-1.5 px-3 flex bg-[#444a] cursor-pointer rounded-lg text-[white] text-sm font-light items-end ml-2 sm:ml-30 border border-gray-500"
              >
                <LucideShoppingBag color="#ffffff" size={18} />
                <p className="text-[12px] font-normal mx-2">
                  Shop Products <span>(5)</span>
                </p>
              </button>
            </div>
          </div>
          <ReelProductScroller />

          {!open && <BottomNavigation />}
        </div>
      </motion.div>
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

export default function ReelFeed() {
  const videos = [
    {
      reelUrl:
        "https://gcp-cdn.wishlink.com/creator-media-videos/media_0_sanagrover_p1603940_80b6615f-0b3f-4b91-a378-7478d5d0bd14.mp4",
      caption:
        "I think I’m ready for the season already 🪔💁🏻‍♀️ Follow for more styling ideas 🤍✨ The second outfit is from my fav @theboozybutton 💗 For all other fits, comment ‘glow up’ to get outfit links straight to your DM! #IndianOutfitInspo #FestiveOutfitIdeas #OOTDIdeas",
    },
    {
      reelUrl:
        "https://video.gumlet.io/6862713e523fd47aca04de26/68fb5817609b9e4625c9a1d6/download.mp4",
      caption:
        "Always dress like you have afternoon tea with angels and dinner with royalty 👑 Fashion girlies, follow along 🤍 All outfits are linked, just comment & they’ll reach your DM!",
    },
    {
      reelUrl:
        "https://video.gumlet.io/6862713e523fd47aca04de26/68f0e659558b404636d306ad/download.mp4",
      caption:
        "Time to put the IT in humidITy ☀️💁🏻‍♀️ All outfits are linked, all you have to do is comment 😉",
    },
    {
      reelUrl:
        "https://video.gumlet.io/6862713e523fd47aca04de26/68fb57a246e3ad8295bfac0e/download.mp4",
      caption: "Elegant Fit Favs",
    },
    {
      reelUrl:
        "https://video.gumlet.io/6862713e523fd47aca04de26/68fb58173b3b7b4917f67bc2/download.mp4",
      caption: "Myntra Festive Picks",
    },
  ];

  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory snap-always no-scrollbar flex flex-col items-center">
      {videos.map((content, i) => (
        <ReelBox key={i} src={content.reelUrl} />
      ))}
    </div>
  );
}

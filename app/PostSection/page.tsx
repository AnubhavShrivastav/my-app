import PostHeader from "../newComponents/PostHeader";
import Product from "../newComponents/Product";
import { BottomNavigation } from "../newComponents/BottomNavigation";
import Slider from "../newComponents/Slider";

function PostDetails() {
  return (
    <div className="flex justify-center bg-white">
      <div className="flex flex-col text-black">
        <PostHeader username={"Sana Grover"} />
        <Slider />
        <h1 className="text-md font-normal px-3 py-4">
          Tagged Products<span className="px-1 text-md font-normal">(4)</span>
        </h1>
        <div className="grid grid-cols-2 pb-16">
          <Product
            img="https://wishlink-proxy.gumlet.io/fetch/https%3A//cdn.shopify.com/s/files/1/1780/3381/files/default_09-11-202402681.jpg%3Fv%3D1731746684?width=480"
            price="2420"
            brandName={"Uptownie"}
            descripition={"Corset Style Cotton Poplin Midi Dress"}
            navLink="https://www.myntra.com/apparel-set/libas/libas-ethnic-women-ethnic-motifs-embroidered-sequinned-kurta-with-trouser-&-dupatta/32102892/buy?utm_source=Wishlink&utm_medium=wishlink&atgSessionId=MiKoaexVUhWN4wczDDXfjQ_p18258058&utm_campaign=MiKoaexVUhWN4wczDDXfjQ_p18258058&af_xp=custom&af_force_deeplink=true&af_pmod_priority=equal&pid=wishlink_int&is_retargeting=true&af_click_lookback=1d&expires=1796125545&signature=TnwMNMBAlAkoL5ApTnNmBavRGYARdzXBtbu7FWnGgKk&utm_source=Wishlink&utm_medium=wishlink&utm_campaign=MiKoaexVUhWN4wczDDXfjQ_p18258058&deep_link_value=myntra%3A%2F%2Fmyntra.com%2F32102892&clickid=MiKoaexVUhWN4wczDDXfjQ_p18258058&af_siteid=Wishlink&af_ref=Wishlink_MiKoaexVUhWN4wczDDXfjQ_p18258058&c=MiKoaexVUhWN4wczDDXfjQ_p18258058"
          />
          <Product
            img="https://wishlink-proxy.gumlet.io/fetch/https://img105.savana.com/goods-pic/7d591ee7679d40e4a9ad16d2970ab618_w1440_q90?width=480"
            price="1950"
            brandName={"Savana"}
            descripition={"Ditsy Floral Hair Tie"}
            navLink="https://www.myntra.com/apparel-set/libas/libas-ethnic-women-ethnic-motifs-embroidered-sequinned-kurta-with-trouser-&-dupatta/32102892/buy?utm_source=Wishlink&utm_medium=wishlink&atgSessionId=MiKoaexVUhWN4wczDDXfjQ_p18258058&utm_campaign=MiKoaexVUhWN4wczDDXfjQ_p18258058&af_xp=custom&af_force_deeplink=true&af_pmod_priority=equal&pid=wishlink_int&is_retargeting=true&af_click_lookback=1d&expires=1796125545&signature=TnwMNMBAlAkoL5ApTnNmBavRGYARdzXBtbu7FWnGgKk&utm_source=Wishlink&utm_medium=wishlink&utm_campaign=MiKoaexVUhWN4wczDDXfjQ_p18258058&deep_link_value=myntra%3A%2F%2Fmyntra.com%2F32102892&clickid=MiKoaexVUhWN4wczDDXfjQ_p18258058&af_siteid=Wishlink&af_ref=Wishlink_MiKoaexVUhWN4wczDDXfjQ_p18258058&c=MiKoaexVUhWN4wczDDXfjQ_p18258058"
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
        </div>

        <BottomNavigation />
      </div>
    </div>
  );
}

export default PostDetails;

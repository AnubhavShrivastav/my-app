"use client";

import Link from "next/link";

const collection = [
  {
    imgUrl:
      "https://wishlink-proxy.gumlet.io/fetch/https%3A//assets.myntassets.com/h_1440%2Cq_95%2Cw_1080/assets/images/2025/MAY/28/8CGJt14x_7c562e9d9d9643b39292171223cbc905.jpg?width=240",
    title: "Coord sets you must have 🫶🏼",
    productsNum: "5",
  },
  {
    imgUrl:
      "https://wishlink-proxy.gumlet.io/fetch/https%3A//assets.myntassets.com/h_1440%2Cq_95%2Cw_1080/assets/images/2024/AUGUST/21/cwQHiIDK_de117c21380b4389aeba45e2ad2b9608.jpg?width=240",
    title: "Black Heels 🖤",
    productsNum: "5",
  },
  {
    imgUrl:
      "https://wishlink-proxy.gumlet.io/fetch/https%3A//assets.myntassets.com/h_1440%2Cq_95%2Cw_1080/assets/images/31044030/2024/10/29/f30b4a17-1c3f-49d5-bc53-5cc9612959e51730199170621-Indo-Era-Floral-Embroidered-Kurta-With-Trousers--Dupatta-444-1.jpg?width=240",
    title: "Desi fits you can wear everyday 🪄",
    productsNum: "5",
  },
  {
    imgUrl:
      "https://wishlink-proxy.gumlet.io/fetch/https%3A//assets.myntassets.com/h_1440%2Cq_95%2Cw_1080/assets/images/29247524/2024/10/24/b0546b16-be7b-4466-be67-90af78ac130e1729769181492-HM-Tie--Dye-Top-8671729769180864-1.jpg?width=240",
    title: "Summer tops I’m loving ☀️",
    productsNum: "5",
  },
  {
    imgUrl:
      "https://wishlink-proxy.gumlet.io/fetch/https%3A//assets.myntassets.com/h_1440%2Cq_95%2Cw_1080/assets/images/2025/FEBRUARY/11/GsAZORiN_9214a64c502143049112ed98857f28e4.jpg?width=240",
    title: "Fits for College",
    productsNum: "5",
  },
  {
    imgUrl:
      "https://wishlink-proxy.gumlet.io/fetch/https%3A//assets.myntassets.com/h_200%2Cw_200%2Cc_fill%2Cg_auto/h_1440%2Cq_100%2Cw_1080/v1/assets/images/27564998/2024/2/13/1555e195-093a-46f8-ab93-9a3c687e52371707822611903TheWellnessBasket1.jpg?width=240",
    title: "Myntra Beauty Haul",
    productsNum: "5",
  },
  {
    imgUrl:
      "https://wishlink-proxy.gumlet.io/fetch/https://cdn-alabaster.wishlink.com/blob_diy_collection_thumbnail_28096?width=240",
    title: "Myntra Links!",
    productsNum: "5",
  },
  {
    imgUrl:
      "https://wishlink-proxy.gumlet.io/fetch/https://cdn-alabaster.wishlink.com/blob_diy_collection_thumbnail_11980?width=240",
    title: "The Glow Up Guide",
    productsNum: "5",
  },
  {
    imgUrl:
      "https://wishlink-proxy.gumlet.io/fetch/https%3A//m.media-amazon.com/images/I/4137%2By0tuwL.jpg?width=240",
    title: "Amazon Kurtis Under Rs. 399 (Everyday Wear)",
    productsNum: "5",
  },
  {
    imgUrl:
      "https://wishlink-proxy.gumlet.io/fetch/https%3A//assets.myntassets.com/h_200%2Cw_200%2Cc_fill%2Cg_auto/h_1440%2Cq_100%2Cw_1080/v1/assets/images/22513384/2023/3/25/b744921e-e363-472b-83c2-b4ceb57968c11679740818105TokyoTalkiesBlueEmbellishedPrintHalterNeckTop1.jpg?width=240",
    title: "Fav Amazon Kurtis Under Rs. 999",
    productsNum: "5",
  },
  {
    imgUrl:
      "https://wishlink-proxy.gumlet.io/fetch/http%3A//assets.myntassets.com/h_1000%2Cq_100%2Cw_750/v1/assets/images/17000638/2022/2/7/5c1dcb01-09d2-411e-9975-3b94fac9f2221644215789532SweerDreamsWomensHalfSleevesPolyBrushPrintedRoundNeckBlueNig1.jpg?width=240",
    title: "Amazon Home Decor Finds 🤍",
    productsNum: "5",
  },
];

export function CollectionContent() {
  return (
    <div className="flex justify-center w-full">
      <div className="grid grid-cols-2">
        {collection.map((item) => (
          <div className="relative">
            <div className="absolute right-[3%] top-[3%] bg-black opacity-50 rounded-[3px] px-0.75 py-px">
              <span className="font-medium text-white text-[10px]">
                X{" "}
                <span className="font-medium text-white text-[10px]">
                  {item.productsNum}
                </span>
              </span>
            </div>
            <div className="absolute bottom-[0.1%]">
              <h1 className="text-sm font-normal text-white p-2">
                {item.title}
              </h1>
            </div>
            <Link href="/CollectionSection">
              <img
                src={item.imgUrl}
                className="p-[0.8px] w-53.75 h-71.25"
                alt="collection"
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

const Posts = [
  {
    imgUrl:
      "https://wishlink-proxy.gumlet.io/fetch/https%3A//gcp-cdn.wishlink.com/creator-media-images/thumbnail_sanagrover_p1812157_89341cfc-5c96-4655-b3f4-bc424aff15d3.jpg?width=240",
  },
  {
    imgUrl:
      "https://wishlink-proxy.gumlet.io/fetch/https%3A//gcp-cdn.wishlink.com/creator-media-images/thumbnail_sanagrover_p554179_d1758f1c-e881-42d2-ba4f-5cb7b3f044c2.jpg?width=240",
  },
  {
    imgUrl:
      "https://wishlink-proxy.gumlet.io/fetch/https%3A//cdn-alabaster.wishlink.com/thumbnail_sanagrover_p64814.jpg?width=240",
  },
  {
    imgUrl:
      "https://wishlink-proxy.gumlet.io/fetch/https%3A//cdn-alabaster.wishlink.com/thumbnail_sanagrover_p27567.jpg?width=240",
  },
  {
    imgUrl:
      "https://wishlink-proxy.gumlet.io/fetch/https%3A//cdn-alabaster.wishlink.com/thumbnail_sanagrover_p25641.jpg?width=240",
  },
  {
    imgUrl:
      "https://wishlink-proxy.gumlet.io/fetch/https%3A//cdn-alabaster.wishlink.com/thumbnail_sanagrover_CAROUSEL_ALBUM_Clu5ckxpiMX_19240.jpeg?width=240",
  },
  {
    imgUrl:
      "https://wishlink-proxy.gumlet.io/fetch/https%3A//cdn-alabaster.wishlink.com/thumbnail_sanagrover_CAROUSEL_ALBUM_CochXgXpud8_17368.jpeg?width=240",
  },
  {
    imgUrl:
      "https://wishlink-proxy.gumlet.io/fetch/https%3A//cdn-alabaster.wishlink.com/thumbnail_sanagrover_CAROUSEL_ALBUM_CikqMfTpnSG_19623.jpeg?width=240",
  },
];

export function PostContent() {
  return (
    <div className="flex justify-center w-full">
      <div className="grid grid-cols-3">
        {Posts.map((url) => (
          <Link href="/PostSection">
            <img
              src={url.imgUrl}
              className="p-px"
              height={"147.73px"}
              width={"147.73px"}
              alt="posts"
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

const ProductData = [
  {
    id: 1,
    imgUrl:
      "https://wishlink-proxy.gumlet.io/fetch/https%3A//gcp-cdn.wishlink.com/creator-media-images/thumbnail_sanagrover_p2407851_5b23ccf6-2870-4418-ac1c-6c6291b7ceaa.jpg?width=360",
  },
  {
    id: 2,
    imgUrl:
      "https://wishlink-proxy.gumlet.io/fetch/https%3A//gcp-cdn.wishlink.com/creator-media-images/thumbnail_sanagrover_p1603940_16b7772e-eb83-4f1e-a4f3-5a1eef7e9472.jpg?width=360",
  },
  {
    id: 3,
    imgUrl:
      "https://wishlink-proxy.gumlet.io/fetch/https%3A//gcp-cdn.wishlink.com/creator-media-images/thumbnail_sanagrover_p1554196_4d3460c7-be68-475f-92ea-3899b707c162.jpg?width=360",
  },
  {
    id: 4,
    imgUrl:
      "https://wishlink-proxy.gumlet.io/fetch/https%3A//gcp-cdn.wishlink.com/creator-media-images/thumbnail_sanagrover_p848044_e96b372a-a7d2-40c7-99b8-5ffe4bf13554.jpg?width=360",
  },
  {
    id: 5,
    imgUrl:
      "https://wishlink-proxy.gumlet.io/fetch/https%3A//gcp-cdn.wishlink.com/creator-media-images/thumbnail_sanagrover_p830738_49f0632d-7b98-4373-b856-5e9225575573.jpg?width=360",
  },
  {
    id: 6,
    imgUrl:
      "https://wishlink-proxy.gumlet.io/fetch/https%3A//gcp-cdn.wishlink.com/creator-media-images/thumbnail_sanagrover_p709475_15c5e82e-6f86-4e1b-b332-c2a898b2f2ce.jpg?width=360",
  },
  {
    id: 7,
    imgUrl:
      "https://wishlink-proxy.gumlet.io/fetch/https%3A//gcp-cdn.wishlink.com/creator-media-images/thumbnail_sanagrover_p659881_26eb3309-6b1d-4b39-879e-99d771c10be7.jpg?width=360",
  },
  {
    id: 8,
    imgUrl:
      "https://wishlink-proxy.gumlet.io/fetch/https%3A//gcp-cdn.wishlink.com/creator-media-images/thumbnail_sanagrover_p643805_9ba46046-2b3d-441f-ac8f-970fdb74dd8e.jpg?width=360",
  },
  {
    id: 9,
    imgUrl:
      "https://wishlink-proxy.gumlet.io/fetch/https%3A//gcp-cdn.wishlink.com/creator-media-images/thumbnail_sanagrover_p602233_38eb3832-08e6-4ef2-afd4-70d0158ab7a5.jpg?width=360",
  },
  {
    id: 10,
    imgUrl:
      "https://wishlink-proxy.gumlet.io/fetch/https%3A//gcp-cdn.wishlink.com/creator-media-images/thumbnail_sanagrover_p514209_5d2710e4-e61f-411d-968f-46c37a1c8f7b.jpg?width=360",
  },
  {
    id: 11,
    imgUrl:
      "https://wishlink-proxy.gumlet.io/fetch/https%3A//cdn-alabaster.wishlink.com/thumbnail_sanagrover_p194490.jpg?width=360",
  },
  {
    id: 12,
    imgUrl:
      "https://wishlink-proxy.gumlet.io/fetch/https%3A//cdn-alabaster.wishlink.com/thumbnail_sanagrover_p165468.jpg?width=360",
  },
  {
    id: 13,
    imgUrl:
      "https://wishlink-proxy.gumlet.io/fetch/https%3A//cdn-alabaster.wishlink.com/thumbnail_sanagrover_p64084.jpg?width=360",
  },
  {
    id: 14,
    imgUrl:
      "https://wishlink-proxy.gumlet.io/fetch/https%3A//cdn-alabaster.wishlink.com/thumbnail_sanagrover_p53408.jpg?width=360",
  },
  {
    id: 15,
    imgUrl:
      "https://wishlink-proxy.gumlet.io/fetch/https%3A//cdn-alabaster.wishlink.com/thumbnail_sanagrover_p25229.jpg?width=360",
  },
];

export function ReelContent() {
  return (
    <div className="flex justify-center w-full">
      <div className="grid grid-cols-3">
        {ProductData.map((url) => (
          <Link key={url.id} href="/ReelSection">
            <img
              src={url.imgUrl}
              className="p-[0.9px]"
              height="298px"
              width="143px"
              alt="posts"
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

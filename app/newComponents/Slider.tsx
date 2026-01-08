"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

type SlideImage = {
  id: number;
  src: string;
};

const images: SlideImage[] = [
  {
    id: 1,
    src: "https://wishlink-proxy.gumlet.io/fetch/https%3A//gcp-cdn.wishlink.com/creator-media-images/media_2_sanagrover_p1812157_8c825331-4b2e-4570-a91b-af8397455715.jpg?width=720",
  },
  {
    id: 2,
    src: "https://wishlink-proxy.gumlet.io/fetch/https%3A//gcp-cdn.wishlink.com/creator-media-images/media_1_sanagrover_p1812157_c88d50aa-5993-42c4-a175-abb024801b46.jpg?width=720",
  },
  {
    id: 3,
    src: "https://wishlink-proxy.gumlet.io/fetch/https%3A//gcp-cdn.wishlink.com/creator-media-images/media_0_sanagrover_p1812157_560d713f-30c2-4b97-956e-354508c5e742.jpg?width=720",
  },
  {
    id: 4,
    src: "https://wishlink-proxy.gumlet.io/fetch/https%3A//gcp-cdn.wishlink.com/creator-media-images/media_0_sanagrover_p554179_17172e2b-72b6-4524-b156-3a1f03b46415.jpg?width=720",
  },
  {
    id: 5,
    src: "https://wishlink-proxy.gumlet.io/fetch/https%3A//gcp-cdn.wishlink.com/creator-media-images/media_2_sanagrover_p554179_a70c3bef-a08b-4fca-9245-0438ed089c5c.jpg?width=720",
  },
];

function PostSlider() {
  return (
    <>
      <div>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          loop
          className="w-screen sm:w-md customSwiper"
        >
          {images.map((img) => (
            <SwiperSlide key={img.id} className="customSwiper">
              <div className="w-112.5 h-122.5">
                <img src={img.src} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="flex pt-3 px-2 justify-between items-center">
        <p className="pl-1 font-normal text-lg">
          recent fits I’ve been luvinggg🪄
        </p>

        <div className="flex items-end justify-end space-x-3">
          <div>
            <div className="cursor-pointer px-2 flex justify-end">
              <img src="/upload.svg" className="w-5 h-5" alt="shareIcon" />
            </div>
          </div>
          <div>
            <div className="cursor-pointer px-2 flex justify-end">
              <img src="/bookmark.svg" className="w-5 h-5" alt="bookmarkIcon" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PostSlider;

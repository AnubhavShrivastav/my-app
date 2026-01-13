"use client";

import useEmblaCarousel from "embla-carousel-react";
import Link from "next/link";

type Product = {
  id: number;
  title: string;
  image: string;
  price: number;
  Link: string;
  OriginalPrice: number;
};

export default function ReelProductScroller() {
  const [emblaRef] = useEmblaCarousel({
    align: "start",
    dragFree: true,
  });

  const products: Product[] = [
    {
      id: 1,
      title: "Printed Maxi Dress",
      image:
        "https://wishlink-proxy.gumlet.io/fetch/https%3A//cdn.shopify.com/s/files/1/0028/9806/7554/files/09june2024_6725-Edit_dab82ed0-6160-409d-866a-1399dd45b82d.jpg%3Fv%3D1720600809",
      price: 1339,
      OriginalPrice: 2000,
      Link: "https://www.amazon.in/dp/B098DZXS12/ref=cm_sw_r_as_gl_api_gl_i_VR08Y4H4WM2X5RCTFFXX?tag=wishlinkfip_4537-21&ref=326864",
    },
    {
      id: 2,
      title: "Black Evening Dress",
      image:
        "https://wishlink-proxy.gumlet.io/fetch/https%3A//assets.myntassets.com/h_1440%2Cq_95%2Cw_1080/assets/images/25377328/2023/10/18/50fd5e92-d1a4-491e-93f6-d6562ca0542c1697608050316BlazersMANGOWomenJeansMANGOWomenTrousersMANGOWomenJeansMANGO1.jpg",
      price: 1049,
      OriginalPrice: 1900,
      Link: "https://www.amazon.in/dp/B098DZXS12/ref=cm_sw_r_as_gl_api_gl_i_VR08Y4H4WM2X5RCTFFXX?tag=wishlinkfip_4537-21&ref=326864",
    },
    {
      id: 3,
      title: "Printed Maxi Dress",
      image:
        "https://wishlink-proxy.gumlet.io/fetch/https%3A//assets.myntassets.com/h_1440%2Cq_95%2Cw_1080/assets/images/29850548/2024/5/30/e9c8a4ce-55b3-478e-8bde-17ee2c13d4771717060205260HMPrintedLinenBlendDresses1.jpg",
      price: 1899,
      OriginalPrice: 2000,
      Link: "https://www.amazon.in/dp/B098DZXS12/ref=cm_sw_r_as_gl_api_gl_i_VR08Y4H4WM2X5RCTFFXX?tag=wishlinkfip_4537-21&ref=326864",
    },
    {
      id: 4,
      title: "Printed Maxi Dress",
      image:
        "https://wishlink-proxy.gumlet.io/fetch/https%3A//cdn.shopify.com/s/files/1/0604/6957/5837/products/efd47013fbf98155ff873c5d3367eaa6.jpg%3Fv%3D1698230104",
      price: 1899,
      OriginalPrice: 3000,
      Link: "https://www.amazon.in/dp/B098DZXS12/ref=cm_sw_r_as_gl_api_gl_i_VR08Y4H4WM2X5RCTFFXX?tag=wishlinkfip_4537-21&ref=326864",
    },
    {
      id: 5,
      title: "Printed Maxi Dress",
      image:
        "https://wishlink-proxy.gumlet.io/fetch/https%3A//m.media-amazon.com/images/I/41MENfckdQL.jpg",
      price: 1899,
      OriginalPrice: 2000,
      Link: "https://www.amazon.in/dp/B098DZXS12/ref=cm_sw_r_as_gl_api_gl_i_VR08Y4H4WM2X5RCTFFXX?tag=wishlinkfip_4537-21&ref=326864",
    },
    {
      id: 6,
      title: "Printed Maxi Dress",
      image:
        "https://wishlink-proxy.gumlet.io/fetch/https%3A//m.media-amazon.com/images/I/31UUAhzJcFL.jpg",
      price: 1899,
      OriginalPrice: 3000,
      Link: "https://www.amazon.in/dp/B098DZXS12/ref=cm_sw_r_as_gl_api_gl_i_VR08Y4H4WM2X5RCTFFXX?tag=wishlinkfip_4537-21&ref=326864",
    },
  ];

  return (
    <div className="absolute bottom-16 left-0 w-full px-3 z-20">
      <div className="flex items-center justify-between mb-2"></div>

      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex gap-3">
          {products.map((product) => (
            <Link
              href={product.Link}
              key={product.id}
              className="min-w-51 min-h-17.5 bg-white rounded-xl shadow-md p-2 flex gap-3"
            >
              <div className="relative h-20 w-16 shrink-0 rounded-lg overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="object-cover"
                />
              </div>

              <div className="flex flex-col justify-center">
                <p className="text-sm font-medium text-gray-900 line-clamp-2">
                  {product.title}
                </p>

                {product.OriginalPrice && (
                  <span className="text-xs line-through text-gray-400">
                    ₹{product.OriginalPrice}
                  </span>
                )}
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-sm font-semibold text-black">
                    ₹{product.price}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

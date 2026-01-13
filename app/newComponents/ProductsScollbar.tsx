import { motion } from "framer-motion";

interface ProductCardProps {
  id: number;
  image: string;
  price: number;
  title: string;
}

const ProductCardProps: ProductCardProps[] = [
  {
    id: 1,
    title: "Printed Maxi Dress",
    image:
      "https://wishlink-proxy.gumlet.io/fetch/https%3A//cdn.shopify.com/s/files/1/0028/9806/7554/files/09june2024_6725-Edit_dab82ed0-6160-409d-866a-1399dd45b82d.jpg%3Fv%3D1720600809",
    price: 1339,
  },
  {
    id: 2,
    title: "Black Evening Dress",
    image:
      "https://wishlink-proxy.gumlet.io/fetch/https%3A//assets.myntassets.com/h_1440%2Cq_95%2Cw_1080/assets/images/25377328/2023/10/18/50fd5e92-d1a4-491e-93f6-d6562ca0542c1697608050316BlazersMANGOWomenJeansMANGOWomenTrousersMANGOWomenJeansMANGO1.jpg",
    price: 1049,
  },
  {
    id: 3,
    title: "Printed Maxi Dress",
    image:
      "https://wishlink-proxy.gumlet.io/fetch/https%3A//assets.myntassets.com/h_1440%2Cq_95%2Cw_1080/assets/images/29850548/2024/5/30/e9c8a4ce-55b3-478e-8bde-17ee2c13d4771717060205260HMPrintedLinenBlendDresses1.jpg",
    price: 1899,
  },
  {
    id: 4,
    title: "Printed Maxi Dress",
    image:
      "https://wishlink-proxy.gumlet.io/fetch/https%3A//cdn.shopify.com/s/files/1/0604/6957/5837/products/efd47013fbf98155ff873c5d3367eaa6.jpg%3Fv%3D1698230104",
    price: 1899,
  },
  {
    id: 5,
    title: "Printed Maxi Dress",
    image:
      "https://wishlink-proxy.gumlet.io/fetch/https%3A//m.media-amazon.com/images/I/41MENfckdQL.jpg",
    price: 1899,
  },
  {
    id: 6,
    title: "Printed Maxi Dress",
    image:
      "https://wishlink-proxy.gumlet.io/fetch/https%3A//m.media-amazon.com/images/I/31UUAhzJcFL.jpg",
    price: 1899,
  },
];

const ProductCard = () => {
  return (
    <motion.div
      whileTap={{ scale: 0.98 }}
      className="flex items-center gap-2 bg-card rounded-lg overflow-hidden border border-border/50 min-w-45 max-w-50 p-2 cursor-pointer"
    >
      <>
        <div className="overflow-hidden">
          <div className="flex gap-3">
            {ProductCardProps.map((product) => (
              <div
                key={product.id}
                className="min-w-65 bg-white rounded-xl shadow-md p-2 flex gap-3"
              >
                <div className="relative h-16 w-16 shrink-0 rounded-lg overflow-hidden">
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

                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-sm font-semibold text-black">
                      ₹{product.price}
                    </span>
                    {/* {product.originalPrice && (
                        <span className="text-xs line-through text-gray-400">
                          ₹{prod.originalPrice}
                        </span>
                      )} */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    </motion.div>
  );
};

export default ProductCard;

import Link from "next/link";

interface ProfileProps {
  img: string;
  brandName: string;
  descripition: string;
  price: string;
  navLink: string;
}

function Product({
  img,
  brandName,
  descripition,
  price,
  navLink,
}: ProfileProps) {
  return (
    <div className="text-black">
      <div>
        <Link href={navLink} target="_blank">
          <div className="hover:bg-gray-100 transition-colors duration-200">
            <div className="flex relative flex-col items-center pb-4 cursor-pointer border-[0.5px] border-[#e0e0e0]">
              <div>
                <img src={img} className="w-56 h-72.75" alt="productImage" />
                <div className="relative px-2 pt-1.5 pb-1">
                  <div>
                    <p className="text-[12px] font-normal">{brandName}</p>
                    <div>
                      <div className="cursor-pointer px-2 flex items-center absolute right-0 top-1">
                        <img
                          src="/bookmark.svg"
                          alt="bookmark"
                          className="h-5 w-5"
                        />
                      </div>
                    </div>
                  </div>
                  <p className="w-11/12 font-light text-[12px]">
                    {descripition.slice(0, 30) + "..."}
                  </p>
                  <div className="flex pt-1 items-center">
                    <p className="font-semibold text-[14px]">₹{price}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Product;

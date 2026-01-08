"use client";

import { ArrowLeft } from "lucide-react";
import Link from "next/link";

interface user {
  username: string;
}

function PostHeader({ username }: user) {
  return (
    <div className="flex justify-center pb-2 pt-3 bg-white w-screen sm:w-md">
      <div className="cursor-pointer px-2 flex items-center">
        <Link href="/">
          <ArrowLeft size="22px" />
        </Link>
      </div>

      <div className="flex flex-1 items-center pl-2">
        <Link href="/">
          <img
            src="https://wishlink-proxy.gumlet.io/fetch/https%3A//cdn-alabaster.wishlink.com/dp_sanagrover_insta.jpeg"
            className="w-8.5 h-8.5 rounded-full cursor-pointer"
            alt=""
          />
        </Link>
        <div className="pl-2.5 pr-5 cursor-pointer">
          <Link href="/">
            <p className="font-medium text-[1rem]">{username}</p>
          </Link>

          <div className="flex -mt-0.5">
            <p className="font-light text-[10.88px] text-[#6b7280]">Powered by Lehlah</p>
          </div>
        </div>
        <div>
          <button className="inline-flex items-center justify-center font-medium leading-0.5 cursor-pointer text-[12.8px] text-black border border-black rounded-lg px-2 py-3.5 border-solid">
            Follow
          </button>
        </div>
      </div>

      <div className="cursor-pointer px-2 flex items-center pr-4 pl-3">
        <img src="/search.svg" className="w-5 h-5" alt="searchLogo" />
      </div>
    </div>
  );
}

export default PostHeader;

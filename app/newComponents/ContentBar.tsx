"use client";

import Link from "next/link";
import { useState } from "react";
import { PostContent } from "./Content";
import { ReelContent } from "./Content";
import { CollectionContent } from "./Content";

function ContentBar() {
  const Tab = [
    { id: 1, label: "Reels", path: "/ReelSection" },
    { id: 2, label: "Posts", path: "/PostSection" },
    { id: 3, label: "Collections", path: "/CollectionSection" },
  ];

  const [activeTab, setActiveTab] = useState("Reels");

  return (
    <div className="flex justify-center w-full">
      <div className="">
        <div className="flex list-none cursor-pointer pt-1">
          {Tab.map((item) => (
            <div key={item.id} className="flex-1 text-center">
              <Link
                href={""}
                onClick={() => setActiveTab(item.label)}
                className={`inline-block mt-3 ${
                  activeTab === item.label
                    ? "font-semibold border-b-2 h-8 w-full"
                    : "font-normal text-[15px]"
                }`}
              >
                {item.label}
              </Link>
            </div>
          ))}
        </div>

        <div className="w-full">
          {activeTab === "Reels" && <ReelContent />}
          {activeTab === "Posts" && <PostContent />}
          {activeTab === "Collections" && <CollectionContent />}
        </div>
      </div>
    </div>
  );
}

export default ContentBar;

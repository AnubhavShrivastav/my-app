"use client";

import { useState } from "react";
import Link from "next/link";
import HomeIcon from "@mui/icons-material/Home";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";

const navItems = [
  {
    id: "home",
    label: "Home",
    icon: HomeIcon,
    navigate: "/",
  },
  {
    id: "reels",
    label: "My Reels",
    icon: PlayCircleIcon,
    navigate: "/ReelSection",
  },
  {
    id: "wishlist",
    label: "Wishlist",
    icon: BookmarkIcon,
    navigate: "/bookmark",
  },
];

export const BottomNavigation = () => {
  const [active, setActive] = useState("");

  return (
    <div className="bottom-0 bg-white fixed right-0 left-0 z-50">
      <div className="flex justify-center h-14 space-x-16">
        {navItems.map((item) => (
          <div
            key={item.id}
            className="inline-flex items-center justify-evenly relative cursor-pointer min-w-20 max-w-42 flex-col"
          >
            <Link
              onClick={() => {
                setActive(item.id);
              }}
              href={item.navigate}
              // className={`${
              //   "Home" === item.label ? "text-amber-600" : "text-[#4c4b4b]"
              // }`} 
              className="text-[#4c4b4b]"
            >
              {<item.icon />}
            </Link>
            <Link href={item.navigate} className="text-[#4c4b4b] text-sm">
              {item.label}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

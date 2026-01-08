"use client";

import Link from "next/link";
import HomeIcon from "@mui/icons-material/Home";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";

const navItems = [
  {
    id: "home",
    label: "Home",
    icon: <HomeIcon sx={{ color: "#4c4b4b" }} />,
    navigate: "/",
  },
  {
    id: "reels",
    label: "My Viral Reels",
    icon: <PlayCircleIcon sx={{ color: "#4c4b4b" }} />,
    navigate: "/ReelSection",
  },
  {
    id: "wishlist",
    label: "Wishlist",
    icon: <BookmarkIcon sx={{ color: "#4c4b4b" }} />,
    navigate: "/bookmark",
  },
];

export const BottomNavigation = () => {
  return (
    <div className="bottom-0 bg-white fixed right-0 left-0 z-50">
      <div className="flex justify-center h-14 space-x-16">
        {navItems.map((item) => (
          <div
            key={item.id}
            className="inline-flex items-center justify-evenly relative cursor-pointer min-w-20 max-w-42 flex-col"
          >
            <Link
              href={item.navigate}
              className={`${
                "Home" === item.label
                  ? "text-amber-600"
                  : "text-[#4c4b4b] text-sm"
              }`}
            >
              {item.icon}
            </Link>
            <Link
              href={item.navigate}
              className="text-[#4c4b4b] text-sm"
              // style={({ isActive }) => ({
              //   color: isActive ? "#4c4b4b" : "#4c4b4b",
              //   fontSize: isActive ? "14px" : "12px",
              // })}
            >
              {item.label}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

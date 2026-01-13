"use client";

import { motion } from "framer-motion";
import AutoPlayReel from "../newComponents/Reel";

const ReelData = [
  {
    id: 1,
    reelUrl:
      "https://gcp-cdn.wishlink.com/creator-media-videos/media_0_sanagrover_p1603940_80b6615f-0b3f-4b91-a378-7478d5d0bd14.mp4",
    caption:
      "I think I’m ready for the season already 🪔💁🏻‍♀️ Follow for more styling ideas 🤍✨ The second outfit is from my fav @theboozybutton 💗 For all other fits, comment ‘glow up’ to get outfit links straight to your DM! #IndianOutfitInspo #FestiveOutfitIdeas #OOTDIdeas",
  },
  {
    id: 2,
    reelUrl:
      "https://video.gumlet.io/6862713e523fd47aca04de26/68fb5817609b9e4625c9a1d6/download.mp4",
    caption:
      "Always dress like you have afternoon tea with angels and dinner with royalty 👑 Fashion girlies, follow along 🤍 All outfits are linked, just comment & they’ll reach your DM!",
  },
  {
    id: 3,
    reelUrl:
      "https://video.gumlet.io/6862713e523fd47aca04de26/68f0e659558b404636d306ad/download.mp4",
    caption:
      "Time to put the IT in humidITy ☀️💁🏻‍♀️ All outfits are linked, all you have to do is comment 😉",
  },
  {
    id: 4,
    reelUrl:
      "https://video.gumlet.io/6862713e523fd47aca04de26/68fb57a246e3ad8295bfac0e/download.mp4",
    caption: "Elegant Fit Favs",
  },
  {
    id: 5,
    reelUrl:
      "https://video.gumlet.io/6862713e523fd47aca04de26/68fb58173b3b7b4917f67bc2/download.mp4",
    caption: "Myntra Festive Picks",
  },
  {
    id: 6,
    reelUrl:
      "https://video.gumlet.io/6862713e523fd47aca04de26/68fb58e746e3ad8295c0cf80/download.mp4",
    caption: "Look expensive on a budget from Newme!",
  },
  {
    id: 7,
    reelUrl:
      "https://video.gumlet.io/6862713e523fd47aca04de26/68fb588e3b3b7b4917f6e770/download.mp4",
    caption: "Valentines Day Outfit",
  },
  {
    id: 8,
    reelUrl:
      "https://video.gumlet.io/6862713e523fd47aca04de26/68fb58c4609b9e4625ca3f8b/download.mp4",
    caption: "Urbanic Keep or Return",
  },
  {
    id: 9,
    reelUrl: "https://cdn-alabaster.wishlink.com/media_0_sanagrover_p64084.mp4",
    caption: "Black suit 🖤",
  },
  {
    id: 10,
    reelUrl:
      "https://cdn-alabaster.wishlink.com/media_sanagrover_VIDEO_CtdlHQzJxr1_21724.mp4",
    caption: "Westside Favourites",
  },
];

export default function AnimatedReels() {
  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory no-scrollbar">
      {ReelData.map((i) => (
        <motion.div
          key={i.id}
          whileInView={{ scale: 1 }}
          initial={{ scale: 0.95 }}
          transition={{ duration: 0.3 }}
          className="h-screen snap-start snap-always overflow-y-hidden flex items-center justify-center text-5xl bg-white text-white"
        >
          <AutoPlayReel src={i.reelUrl} />
        </motion.div>
      ))}
    </div>
  );
}

import Link from "next/link";
import SearchBar from "./SearchBar";

interface Profile {
  username: string;
  totalPosts: number;
  totalFollowers: number;
  instaUsername: string;
  instaFollowers: string;
  instaLink: string;
  youTubeUsername: string;
  youTubeSubscribers: string;
  youTubeLink: string;
  bio: string;
}

function Profile({
  username,
  totalPosts,
  totalFollowers,
  instaUsername,
  instaFollowers,
  instaLink,
  youTubeUsername,
  youTubeSubscribers,
  youTubeLink,
  bio,
}: Profile) {
  return (
    <div className="h-full w-full flex justify-center items-center pt-1">
      <div className="flex flex-col mx-4">
        <div className="bg-white my-2 space-x-4 flex flex-row justify-evenly">
          <SearchBar />

          <div className="cursor-pointer flex items-center">
            <button className="">
              <img src="/upload.svg" className="h-[20px] w-[20px]" />
            </button>
          </div>
        </div>

        <div className="flex flex-row justify-between my-2">
          <div className="flex flex-col">
            <img
              className="w-25 h-25 rounded-[50%] border-2 border-black"
              src="https://wishlink-proxy.gumlet.io/fetch/https%3A//cdn-alabaster.wishlink.com/dp_sanagrover_insta.jpeg?width=180"
              alt="userImg"
            />
            <h1 className="font-normal text-[20px] mt-2">{username}</h1>
          </div>

          <div className="flex flex-row my-5">
            <div className="mx-3">
              <h1 className="text-[#71717a] text-lg font-bold ml-1">
                {totalPosts}
              </h1>
              <p className="text-[#4b5563] font-normal text-sm">Posts</p>
            </div>

            <div className="mx-3">
              <h1 className="text-[#71717a] text-lg font-bold ml-1">
                {totalFollowers}
              </h1>
              <p className="text-[#4b5563] font-normal text-sm">Followers</p>
            </div>
          </div>
        </div>

        <div className="my-1 flex flex-row space-x-1.5">
          <img src="/InstaLogo.svg" alt="InstaLogo" height={24} width={24} />
          <Link
            target="_blank"
            href={instaLink}
            className="text-[#144cc7] font-medium text-sm"
          >
            {instaUsername}
          </Link>

          <div className="border-black font-medium text-sm">|</div>
          <span className="font-normal text-sm">
            <span className="font-semibold text-sm">{instaFollowers}</span>{" "}
            followers
          </span>
        </div>

        <div className="my-1 flex flex-row space-x-1.5">
          <img
            src="/youtubeLogo.svg"
            alt="youtubeLogo"
            height={24}
            width={24}
          />
          <Link
            target="_blank"
            href={youTubeLink}
            className="text-[rgb(20,76,199)] font-medium text-sm"
          >
            {youTubeUsername}
          </Link>

          <div className="border-black font-medium text-sm">|</div>
          <span className="font-normal text-sm">
            <span className="font-semibold text-sm">{youTubeSubscribers}</span>{" "}
            subscribers
          </span>
        </div>

        <div className="my-2">
          <h1 className="font-normal text-sm">{bio}</h1>
          <p className="font-normal text-sm">✌🏼 Welcome to my Account!</p>
        </div>

        <div className="pt-2">
          <h1 className="font-bold text-[1.2rem]">Shop My Looks</h1>
        </div>
      </div>
    </div>
  );
}

export default Profile;

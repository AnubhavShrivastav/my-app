import ContentBar from "../newComponents/ContentBar";
import Profile from "../newComponents/Profile";
import { BottomNavigation } from "../newComponents/BottomNavigation";

function ProfileSection() {
  return (
    <div className="bg-white">
      <div className="pb-30 text-black">
        <Profile
          username={"Sana Grover"}
          totalPosts={84}
          totalFollowers={2500}
          instaUsername={"@sanagrover"}
          instaFollowers={"250k"}
          youTubeUsername={"@@sanagrover"}
          youTubeSubscribers={"100k"}
          bio={
            "Fashion, beauty & a little bit of lots🪞All my favs linked right here!"
          }
          instaLink={"https://www.instagram.com/sanagrover/#"}
          youTubeLink={
            "https://www.youtube.com/channel/UCq3BP0ghOcQ_r5oV9803aMA"
          }
        />
        <ContentBar />
      </div>

      <BottomNavigation />
    </div>
  );
}

export default ProfileSection;

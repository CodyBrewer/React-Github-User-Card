import React from "react";
import Follower from "./Follower";

const Followers = props => {
  const followersData = props.followersData;

  return (
    <ul className="mx-auto w-1/2">
      Followers:
      {followersData.map(followerData => (
        <Follower followerData={followerData} />
      ))}
    </ul>
  );
};

export default Followers;

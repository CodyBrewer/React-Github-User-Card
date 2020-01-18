import React from "react";
import Follow from "./Follow";

const Following = props => {
  const followingData = props.followingData;
  return (
    <ul className="mx-auto w-1/2">
      Following:
      {followingData.map(followData => (
        <Follow followData={followData} />
      ))}
    </ul>
  );
};

export default Following;

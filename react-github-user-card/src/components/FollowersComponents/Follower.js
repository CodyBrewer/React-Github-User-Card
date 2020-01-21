import React from "react";

const Follower = props => {
  const { login, avatar_url } = props.followerData;

  return (
    <li className="py-2">
      <div className="flex flex-col items-center justify-center bg-radial-red-green-blue h-32">
        <img className="w-1/4 mx-auto my-2" src={avatar_url} alt={login} />
        <p className="text-base text-white">{login}</p>
      </div>
    </li>
  );
};

export default Follower;

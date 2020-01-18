import React from "react";

const Follower = props => {
  const { login } = props.followerData;
  return <li>{login}</li>;
};

export default Follower;

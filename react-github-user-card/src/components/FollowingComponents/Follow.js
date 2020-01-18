import React from "react";

const Follow = props => {
  const { login } = props.followData;
  return <li>{login}</li>;
};

export default Follow;

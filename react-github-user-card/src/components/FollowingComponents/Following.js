import React, { Component } from "react";
import Follow from "./Follow";

class Following extends Component {
  componentDidMount() {
    this.props.getFollowingData(this.props.user);
  }

  render() {
    return (
      <ul className="mx-auto w-1/2">
        Following:
        {this.props.followingData.map(followData => (
          <Follow followData={followData} />
        ))}
      </ul>
    );
  }
}

export default Following;

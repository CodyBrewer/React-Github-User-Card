import React, { Component } from "react";
import Follower from "./Follower";

class Followers extends Component {
  state = {
    followersData: []
  };

  componentDidMount() {
    this.getFollowerData(this.props.user);
  }

  getFollowerData = user => {
    fetch(`https://api.github.com/users/${user}/followers`)
      .then(res => res.json())
      .then(githubData => {
        this.setState({
          ...this.state,
          followersData: githubData
        });
      })
      .catch(err => console.log(err.message));
  };

  render() {
    return (
      <ul className="mx-auto w-1/2">
        Followers:
        {this.state.followersData.map(followerData => (
          <Follower followerData={followerData} />
        ))}
      </ul>
    );
  }
}

export default Followers;

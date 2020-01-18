import React, { Component } from "react";
import "./styles/styles.css";

import GithubUser from "./components/UserComponents/GithubUser";
import Followers from "./components/FollowersComponents/Followers";
import Following from "./components/FollowingComponents/Following";

class App extends Component {
  state = {
    user: "CodyBrewer",
    userData: [],
    followersData: [],
    followingData: []
  };

  componentDidMount() {
    this.getGithubData();
  }

  // - [ ] Fetch data from the Github API for a Github user
  getGithubData = () => {
    this.getUserData(this.state.user);
    this.getFollowerData(this.state.user);
    this.getFollowingData(this.state.user);
  };

  getUserData = user => {
    fetch(`https://api.github.com/users/${user}`)
      .then(res => res.json())
      .then(githubData => {
        this.setState({
          ...this.state,
          userData: githubData
        }).then(res => console.log(res));
      })
      .catch(err => console.log(err.message));
  };

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

  getFollowingData = user => {
    fetch(`https://api.github.com/users/${user}/following`)
      .then(res => res.json())
      .then(githubData => {
        this.setState({
          ...this.state,
          followingData: githubData
        });
      })
      .catch(err => console.log(err.message));
  };

  render() {
    return (
      <div className="container mx-auto">
        <GithubUser userData={this.state.userData} />
        <section className="w-11/12 mx-auto flex">
          <Followers followersData={this.state.followersData} />
          <Following followingData={this.state.followingData} />
        </section>
      </div>
    );
  }
}

export default App;

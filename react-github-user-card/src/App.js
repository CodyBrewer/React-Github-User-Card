import React, { Component } from "react";
import "./styles/styles.css";

import GithubUser from "./components/UserComponents/GithubUser";
import Followers from "./components/FollowersComponents/Followers";
import Following from "./components/FollowingComponents/Following";
import Search from "./components/SearchComponents/Search";

class App extends Component {
  state = {
    user: "CodyBrewer",
    followingData: [],
    search: ""
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

  handleSearchUser = user => {
    this.setState({
      user: user
    });
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSearchSubmit = e => {
    e.preventDefault();
    this.handleSearchUser(this.state.search);
    this.setState({ search: "" });
  };

  render() {
    return (
      <div className="container mx-auto bg-gradient-tr-green-blue">
        <Search
          handleSearchSubmit={this.handleSearchSubmit}
          handleChange={this.handleChange}
          search={this.state.search}
        />
        <GithubUser user={this.state.user} />
        <section className="w-11/12 mx-auto flex">
          <Followers
            user={this.state.user}
            followersData={this.state.followersData}
          />
          <Following
            user={this.state.user}
            getFollowingData={this.getFollowingData}
            followingData={this.state.followingData}
          />
        </section>
      </div>
    );
  }
}

export default App;

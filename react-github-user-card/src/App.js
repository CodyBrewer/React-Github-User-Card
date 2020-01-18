import React, { Component } from "react";
import "./styles/styles.css";

import GithubUser from "./components/UserComponents/GithubUser";
import Followers from "./components/FollowersComponents/Followers";
import Following from "./components/FollowingComponents/Following";
import Search from "./components/SearchComponents/Search";

class App extends Component {
  state = {
    user: "CodyBrewer",
    userData: [],
    followingData: [],
    search: ""
  };

  componentDidMount() {
    this.getGithubData();
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(this.state);
    if (prevState.user !== this.state.user) {
      this.getGithubData();
    }
  }

  // - [ ] Fetch data from the Github API for a Github user
  getGithubData = () => {
    this.getUserData(this.state.user);
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

  // getFollowerData = user => {
  //   fetch(`https://api.github.com/users/${user}/followers`)
  //     .then(res => res.json())
  //     .then(githubData => {
  //       this.setState({
  //         ...this.state,
  //         followersData: githubData
  //       });
  //     })
  //     .catch(err => console.log(err.message));
  // };

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
        <GithubUser userData={this.state.userData} />
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

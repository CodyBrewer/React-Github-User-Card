import React, { Component } from "react";
import Follow from "./Follow";

class Following extends Component {
  constructor(props) {
    super(props);
    this.state = {
      followingData: []
    };
  }

  componentDidMount() {
    this.getFollowingData(this.props.user);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.user !== this.props.user) {
      this.getFollowingData(this.props.user);
    }
  }

  getFollowingData = user => {
    fetch(`https://api.github.com/users/${user}/following`)
      .then(res => res.json())
      .then(githubData => {
        this.setState({
          ...this.state,
          followingData: githubData
        });
      })
      .catch(err => console.log(err => console.log(err.message)));
  };

  render() {
    return (
      <ul className="mx-auto w-1/2">
        Following:
        {this.state.followingData.map(followData => (
          <Follow
            key={followData.login}
            changeUser={this.props.changeUser}
            followData={followData}
          />
        ))}
      </ul>
    );
  }
}

export default Following;

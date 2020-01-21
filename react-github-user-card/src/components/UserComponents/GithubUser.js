import React, { Component } from "react";

class GithubUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: []
    };
  }

  componentDidMount() {
    this.getUserData(this.props.user);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.user !== this.props.user) {
      this.getUserData(this.props.user);
    }
  }

  getUserData = user => {
    fetch(`https://api.github.com/users/${this.props.user}`)
      .then(res => res.json())
      .then(githubData => {
        this.setState({
          ...this.state,
          userData: githubData
        }).then(res => console.log(res));
      })
      .catch(err => console.log(err.message));
  };

  render() {
    return (
      <div className="flex mx-auto my-4 items-center w-11/12 border-red-200 border-2 bg-gradient-bl-red-blue">
        <section className="w-1/2 m-4">
          <img
            className="w-1/2"
            src={this.state.userData.avatar_url}
            alt={this.state.userData.name}
          />
          <h2 className="text-white">{this.state.userData.name}</h2>
          <a
            className="text-white"
            href={`https://${this.state.userData.blog}`}
          >
            {this.state.userData.blog}
          </a>
        </section>
        <section className="w-1/2 m-4 text-center">
          <p className="text-base text-white">{this.state.userData.bio}</p>
          {this.state.userData.hireable && this.state.userData.email ? (
            <p className="text-sm">
              Looking for coding opportunities!{" "}
              <a href={`mailto:${this.state.userData.email}`}>Contact</a>
            </p>
          ) : null}
        </section>
      </div>
    );
  }
}

export default GithubUser;

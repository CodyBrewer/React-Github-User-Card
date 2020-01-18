import React, { Component } from "react";

class GithubUser extends Component {
  componentDidMount() {}

  render() {
    return (
      <div className="flex mx-auto my-4 items-center w-11/12 border-red-200 border-2">
        <section className="w-1/2 m-4">
          <img
            className="w-1/2"
            src={this.props.userData.avatar_url}
            alt={this.props.userData.name}
          />
          <h2 className="text-blue-400">{this.props.userData.name}</h2>
          <a href={`https://${this.props.userData.blog}`}>
            {this.props.userData.blog}
          </a>
        </section>
        <section className="w-1/2 m-4 text-center">
          <p className="text-base">{this.props.userData.bio}</p>
          {this.props.userData.hireable && this.props.userData.email ? (
            <p className="text-sm">
              Looking for coding opportunities!{" "}
              <a href={`mailto:${this.props.userData.email}`}>Contact</a>
            </p>
          ) : null}
        </section>
      </div>
    );
  }
}

export default GithubUser;

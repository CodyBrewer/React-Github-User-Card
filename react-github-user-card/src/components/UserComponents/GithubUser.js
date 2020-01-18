import React from "react";

const GithubUser = props => {
  const { name, avatar_url, bio, blog, hireable, email } = props.userData;
  return (
    <div className="flex mx-auto my-4 items-center w-11/12 border-red-200 border-2">
      <section className="w-1/2 m-4">
        <img className="w-1/2" src={avatar_url} alt={name} />
        <h2 className="text-blue-400">{name}</h2>
        <a href={`https://${blog}`}>{blog}</a>
      </section>
      <section className="w-1/2 m-4 text-center">
        <p className="text-base">{bio}</p>
        {hireable && email ? (
          <p className="text-sm">
            Looking for coding opportunities!{" "}
            <a href={`mailto:${email}`}>Contact</a>
          </p>
        ) : null}
      </section>
    </div>
  );
};

export default GithubUser;

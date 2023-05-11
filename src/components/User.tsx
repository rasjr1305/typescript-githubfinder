import React from "react";
import { UserProps } from "../types/user";
import { useState } from "react";
import { MdLocationPin } from "react-icons/md";
import { Link } from "react-router-dom";
import "./User.css";

const User = ({
  login,
  avatar_url,
  followers,
  following,
  location,
}: UserProps) => {
  return (
    <div className="user">
      <img className="user_image" src={avatar_url} alt={login} />
      <h2>{login}</h2>
      {location ? (
        <p className="user_location">
          <MdLocationPin className="svg" />
          <span className="locationSpan">{location}</span>
        </p>
      ) : null}
      <div className="user_stats">
        <div className="user_stats_div">
          <p>Followers:</p>
          <p className="user_number">{followers}</p>
        </div>
        <div className="user_stats_div">
          <p>Following:</p>
          <p className="user_number">{following}</p>
        </div>
      </div>
      <Link className="user_link" to={`http://github.com/${login}`}>
        See {login} best projects
      </Link>
    </div>
  );
};

export default User;

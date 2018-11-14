import React from "react";
import Classes from "./Card.module.css";
import Label from "../Label/Label";
const Card = props => {
  return (
    <div
      className={Classes.Card}
      style={
        props.display
          ? { display: "block", ...props.style }
          : { display: "none" }
      }
    >
      <img
        src={props.response.avatar_url}
        style={{ height: "250px", width: "200px" }}
      />
      <div style={{ display: "inline-block", marginLeft: "10px" }}>
        <Label value={"Username name: " + props.response.name} />
        <br />
        <Label value={"Login Name: " + props.response.login} />
        <br />
        <Label value={"Company Name: " + props.response.company} />
        <br />
        <Label value={"Location: " + props.response.location} />
        <br />
        <Label value={"Followers: " + props.response.followers} />
        <br />
        <Label value={"Biography: " + props.response.bio} />
        <br />
        <Label value={"Blog: " + props.response.blog} />
        <br />

        <br />
      </div>
    </div>
  );
};

export default Card;

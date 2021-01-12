import React from "react";

function Blogpost(props) {
  return (<div className="blogpost">
    <h2>{props.heading}</h2>
    <p>{props.content}</p>
  </div>);
}

export default Blogpost;

import React from "react";

const Box = ({ id, title, text }) => {
  return (
    <div className="Box">
      <h3 className="Box__Heading">
        <a href={`/items/${id}`}>{title}</a>
      </h3>
      <p className="Box__Text">
        {text}
        <br />
        (ID: {id})
      </p>
    </div>
  );
};

export default Box;

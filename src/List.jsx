import React from "react";

const List = ({ person }) => {
  const { name, image, age } = person;
  return (
    <div className="container">
      <div className="images">
        <img src={image} alt="image" style={{ width: "100px" }} />
      </div>
      <div className="side">
        <p>{name}</p>
        <p>{age} years</p>
      </div>
    </div>
  );
};

export default List;

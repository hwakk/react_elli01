import React from "react";

function Avatar({ image, isNew }) {
  return (
    <div className="avatar">
      <img className="photo" src={image} alt="avatar" />
      {isNew && <span className="new">New</span>}
    </div>
  );
}

export default Avatar;

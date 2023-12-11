import React from "react";
import "./BookImage.css";

const BookImage = (props) => {
  return (
    <div className="book-image">
      <img src={props.image} />
    </div>
  );
};

export default BookImage;

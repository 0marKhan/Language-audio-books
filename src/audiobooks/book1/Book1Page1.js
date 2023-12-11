import React from "react";
import "./Book1Page1.css";

import BookImage from "../../components/BookImage";
import Row1Bar from "../../components/Row1Bar";
import Row2Bar from "../../components/Row2Bar";

import silva from "../../assets/book1Images/silva.png";
import silva2 from "../../assets/book1Images/silva2.jpg";

const Book1Page1 = () => {
  const PashtoLatinScript = "This is Pashto in Latin Script";
  const EnglishText = "This is English Text";
  const DariLatinScript = "This is Dari in Latin Script";
  const PashtoArabicScript = "This is Pashto in Arabic Script";
  const DariArabicScript = "This is Dari in Arabic Script";

  return (
    <div className="page-container">
      <div className="image-and-arrows">
        <div className="arrow-prev">
          <span className="arrow prev">Prev Page</span>
        </div>
        <div className="book-image">
          <BookImage image={silva} />
        </div>
        <div className="arrow-next">
          <span className="arrow next">Next Page</span>
        </div>
      </div>
      <div className="text-bars">
        <div className="row1">
          <Row1Bar className="row1-bar" text={PashtoLatinScript} />
          <Row1Bar className="row1-bar" text={EnglishText} />
          <Row1Bar className="row1-bar" text={DariLatinScript} />
        </div>
        <div className="row2">
          <Row2Bar className="row2-bar-1" text={PashtoArabicScript} />
          <Row2Bar className="row2-bar-2" text={DariArabicScript} />
        </div>
      </div>
    </div>
  );
};

export default Book1Page1;

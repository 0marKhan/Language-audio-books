import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div>
        <Link to="/book1/page1">Book1</Link>
      </div>
    </div>
  );
};

export default Home;

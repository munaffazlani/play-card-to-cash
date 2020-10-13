import React from "react";
import { Link } from "react-router-dom";
import Image from "@app/assets/images/rob.png";

export default function () {
  return (
    <>
      <div>
        <h1>
          Server Side error bro - Code : 500
        </h1>
        <p>
        </p>
        <Link to="/dashboard">
          <button type="button">
           Go to Home
          </button>
        </Link>
      </div>

      <div className="iso500Artwork">
        <img alt="#" src={Image} />
      </div>
    </>
  );
}

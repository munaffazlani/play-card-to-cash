import React from "react";
import { Link } from "react-router-dom";

export default function () {
  return (
    <div>
      404 Not Found error bro
      <Link to="/">
        <button>Go To Home</button>
      </Link>
    </div>
  );
}

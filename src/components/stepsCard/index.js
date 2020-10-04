import React from "react";
import './steps.scss'

function StepsCard({ front, back }) {
  return (
    <div className="card-container">
      <div class="main-card">
        <h1>
          <strong>Sign up</strong>
        </h1>
          <p>Sign up or login here and get started</p>
      </div>
      <div class="step">
        <h1>1</h1>
      </div>
    </div>
  );
}

export default StepsCard;

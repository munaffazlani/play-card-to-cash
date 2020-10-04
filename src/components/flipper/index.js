import React, { useEffect, useState } from "react";
import ReactCardFlip from "react-card-flip";
import "./flipper.scss";
function Flipper({ front, back }) {
  const [flipped, setflipped] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setflipped((f) => !f);
    }, 2000);
    return () => clearTimeout(timer);
  }, [flipped]);
  return (
    <div className='hovering'>
      <ReactCardFlip
        flipSpeedBackToFront={1}
        flipSpeedFrontToBack={1}
        isFlipped={!flipped}
        flipDirection="horizontal"
      >
        <div className="imageContainer">
          <img src={front} alt="1" />
        </div>
        <div className="imageContainer">
          <img src={back} alt="2" />
        </div>
      </ReactCardFlip>
    </div>
  );
}

export default Flipper;

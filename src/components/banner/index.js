import React from 'react'
import banner from '@app/assets/images/banner.jpg'

import playCard from "@app/assets/images/gpayCard.png";
import cash2 from "@app/assets/images/cash2.png";
import Flipper from '../flipper'
import './banner.scss'

function Banner() {
    return (
      <div className="banner-container">
        <img src={banner} alt="1" />
        <div className="banner-text-container hovering">
          <h1 className="cashText">Cash Your</h1>
          <h1 className="playCardText">Google Play Gift Card</h1>
        </div>
        <div className="animated-object">
          <Flipper front={playCard} back={cash2} />
        </div>
      </div>
    );
}

export default Banner

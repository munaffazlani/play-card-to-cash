import React from "react";

import StepsCard from "@app/components/stepsCard";
import Drawer from "@app/components/drawer";
import Header from "@app/components/header";
import Login from "@app/components/login";
import Banner from "@app/components/banner";

function MobileLanding() {
  return (
    <div className="app">
      <Header />
      <Banner />
      <Drawer>
        <Login />
      </Drawer>
      <StepsCard />
      <StepsCard />
      <StepsCard />
      <StepsCard />
    </div>
  );
}

export default MobileLanding;

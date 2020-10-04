import React from "react";
import "./App.css";
import Flipper from "./components/flipper";
import StepsCard from "./components/stepsCard";
import Drawer from "./components/drawer";
import Header from "./components/header";
import Login from "@app/components/login"
import Banner from "./components/banner";

function App() {
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

export default App;

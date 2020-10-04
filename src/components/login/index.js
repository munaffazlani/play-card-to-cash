import React, { useState } from "react";
import { Tabs } from "antd";
import LoginWithGoogle from "./google";
import "antd/dist/antd.css";
import "./login.scss";

const { TabPane } = Tabs;

function Login() {
  return (
    <div>
    <div className='step-heading'>
        <h2>1.</h2>
        <h2>Signup Now</h2>
    </div>
    <div class="tabs-container">
    <Tabs defaultActiveKey="1" centered>
      <TabPane tab="Sign Up" key="1">
        <div className="login-form-container">
          <LoginWithGoogle />
        </div>
      </TabPane>
      <TabPane tab="Sign In" key="2"></TabPane>
    </Tabs>
    </div>
    </div>
  );
}

export default Login;

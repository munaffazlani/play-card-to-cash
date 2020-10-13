import React from "react";
import styled from "styled-components";
import { palette } from "styled-theme";
import { refreshTokenSetup } from "@app/utils/refreshToken";

const GoogleLoginButton = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid blue;
`;

function LoginWithGoogle() {
  const handleLogin = () => {
    
  }
  return (<GoogleLoginButton onClick={handleLogin}>
    Login With Google
  </GoogleLoginButton>);
}

export default LoginWithGoogle;

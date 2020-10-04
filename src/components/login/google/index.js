import React from "react";
import { GoogleLogin } from "react-google-login";
// refresh token
import { refreshTokenSetup } from "@app/utils/refreshToken";

const clientId =
  "763549019844-s6kgkjr9uiimhfdlp9vgsq9cambhhssg.apps.googleusercontent.com";

function LoginWithGoogle() {
  const onSuccess = (res) => {
    console.log("Login Success: currentUser:", res.profileObj);
    refreshTokenSetup(res);
  };

  const onFailure = (res) => {
    console.log("Login failed: res:", res);
    alert(
      `Failed to login. 😢 Please ping this to repo owner twitter.com/sivanesh_fiz`
    );
  };

  return (
    <div>
      <GoogleLogin
        light={false}
        clientId={clientId}
        buttonText="Login With Google"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={"single_host_origin"}
        style={{ marginTop: "100px" }}
        isSignedIn={true}
      />
    </div>
  );
}

export default LoginWithGoogle;

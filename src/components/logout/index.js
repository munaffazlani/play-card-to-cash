import React from "react";
import { GoogleLogout } from "react-google-login";

const clientId =
  "707788443358-u05p46nssla3l8tmn58tpo9r5sommgks.apps.googleusercontent.com";

function Logout({children}) {
  const onSuccess = () => {
    console.log("Logout made successfully");
    alert("Logout made successfully ✌");
  };

  return (
    <div>
      <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        render={(renderProps) => (
          <div onClick={renderProps.onClick} disabled={renderProps.disabled}>
           {children}
          </div>
        )}
        onLogoutSuccess={onSuccess} />
    </div>
  );
}

export default Logout;

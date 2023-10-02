import { GoogleLogout } from "react-google-login";

const ClientID =
  "303647766373-i6unql6vklssl3ikf2u24d01ur9uii0m.apps.googleusercontent.com";

function Logout() {
  const onSuccess = (res) => {
    console.log("Logout Successfull", res);
    window.location = "/";
  };

  return (
    <div id="signInButton">
      <GoogleLogout
        clientId={ClientID}
        buttontext="Logout"
        onLogoutSuccess={onSuccess}
      />
    </div>
  );
}

export default Logout;

import { GoogleLogin } from "react-google-login";

const clientId =
  "303647766373-i6unql6vklssl3ikf2u24d01ur9uii0m.apps.googleusercontent.com";

function Login() {
  const onSuccess = (res) => {
    console.log("Login Successfull", res.profileObj);
    window.location = "/home";
  };

  const onFailure = (res) => {
    console.log("Login failure", res);
  };

  return (
    <div id="signInButton">
      <GoogleLogin
        clientId={clientId}
        buttontext="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={"single_host_origin"}
        isSignedIn={true}
      />
    </div>
  );
}

export default Login;

import React from "react";
import GoogleLogin from "react-google-login";

const Login = () => {
  const responseGoogle = response => {
    const idToken = response.getAuthResponse().id_token;
  };
  return (
    <div>
      <GoogleLogin
        clientId={process.env.GOOGLE_CLIENT_ID}
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
        isSignedIn={true}
      />
    </div>
  );
};

export default Login;

import React, { useContext, useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import { parseJwt } from "../misc/helper";

function OAuth2Redirect() {
  const { userLogin } = useContext(AuthContext);
  const [redirectTo, setRedirectTo] = useState("/login");

  const location = useLocation();
  console.log(location);

  useEffect(() => {
    const accessToken = extractUrlParameter("token");
    console.log(accessToken);
    if (accessToken) {
      handleLogin(accessToken);
      const redirect = "/";
      setRedirectTo(redirect);
    }
  }, []);

  const extractUrlParameter = (key) => {
    return new URLSearchParams(location.search).get(key);
  };

  const handleLogin = (accessToken) => {
    const data = parseJwt(accessToken);
    const user = { data, accessToken };
    console.log(data);

    userLogin(user);
  };

  return <Navigate to={redirectTo} />;
}

export default OAuth2Redirect;

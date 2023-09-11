import React, { useState } from "react";
import CardWrapper from "../common/Card";

const withFunctions = (Component) => {
    const [isAuth, setIsAuth] = useState(!!localStorage.getItem("auth"));

    const onLogin = () => {
      localStorage.setItem("auth", "test");
      setIsAuth(true);
    };
    const onLogOut = () => {
      localStorage.removeItem("auth");
      setIsAuth(false);
    };

  const MyComponent = (props) => {
    return <CardWrapper><Component isAuth={isAuth} onLogin={onLogin} onLogOut={onLogOut} {...props}></Component></CardWrapper>;
  };

  return MyComponent;
};

export default withFunctions;

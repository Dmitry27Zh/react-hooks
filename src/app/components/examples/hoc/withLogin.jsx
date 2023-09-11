import React from "react";
import SmallTitle from "../../common/typografy/smallTitle";

const withLogin = (Component) => {
  const MyComponent = (props) => {
  const isLogin = !!localStorage.getItem("auth");

    if (isLogin) {
      return <Component {...props}/>;
    } else {
      return <SmallTitle>Auth</SmallTitle>;
    }
  };
  MyComponent.displayName = "My component";

  return MyComponent;
};

export default withLogin;

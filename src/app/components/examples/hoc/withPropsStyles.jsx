import React from "react";
import CardWrapper from "../../common/Card";

const withPropsStyles = (Component) => {
  const SomeComponent = (props) => {
    return <CardWrapper><Component {...props} name="some name"/></CardWrapper>;
  };

  return SomeComponent;
};

export default withPropsStyles;

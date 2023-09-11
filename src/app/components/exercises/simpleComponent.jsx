import React from "react";
import PropTypes from "prop-types";

const SimpleComponent = (props) => {
  const { onLogin, onLogOut, isAuth } = props;

  if (isAuth) {
      return <button className="btn btn-primary" onClick={onLogOut}>Выйти</button>;
  } else {
      return <button className="btn btn-primary" onClick={onLogin}>Войти</button>;
  }
};

SimpleComponent.propTypes = {
    onLogin: PropTypes.func,
    onLogOut: PropTypes.func,
    isAuth: PropTypes.bool
};

export default SimpleComponent;

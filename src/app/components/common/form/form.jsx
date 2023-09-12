import React, { useState, useEffect } from "react";
import { validator } from "../../../utils/validator";
import PropTypes from "prop-types";

const Form = ({ validatorConfig, onSubmit, defaultData, children }) => {
  const [data, setData] = useState(defaultData);
  const [errors, setErrors] = useState({});
  const handleChange = (change) => {
    const { name, value } = change;
    setData((prevState) => ({ ...prevState, [name]: value }));
  };
  useEffect(() => validate(), [data]);
  const validate = () => {
    const errors = validator(data, validatorConfig);
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };
  const isValid = Object.keys(errors).length === 0;
  const clonedElements = React.Children.map(children, (child) => {
    let config = {};

    if (typeof child.type === "function") {
      data[child.props.name] = data[child.props.name] ?? "";
      const value = data[child.props.name];
      const error = errors[child.props.name];
      config = { ...child.props, onChange: handleChange, value, error };
    }

    if (child.type === "button" &&
      (child.props.type === "submit" || !child.props.type)) {
        config = { ...child.props, disabled: !isValid };
      }

    return React.cloneElement(child, config);
  });
  const handleSubmit = (event) => {
    event.preventDefault();
    const isValid = validate();

    if (isValid) {
      onSubmit(data);
    } else {
      console.log(data);
    }
  };

  return <form onSubmit={handleSubmit}>{clonedElements}</form>;
};

Form.defaultProps = {
  defaultData: {}
};

Form.propTypes = {
  validatorConfig: PropTypes.object,
  onSubmit: PropTypes.func,
  defaultData: PropTypes.object,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
};

export default Form;

import React, { useState, useEffect, useCallback } from "react";
import { validator } from "../../../utils/validator";
import PropTypes from "prop-types";

const Form = ({ validatorConfig, onSubmit, defaultData, children }) => {
  const [data, setData] = useState(defaultData);
  const [errors, setErrors] = useState({});
  const handleChange = useCallback((change) => {
    const { name, value } = change;
    setData((prevState) => ({ ...prevState, [name]: value }));
  }, [setData]);
  const handleKeyDown = useCallback((event) => {
    if (event.keyCode === 13) {
      event.preventDefault();
      const currentField = event.target;
      const form = event.target.form;
      const currentFieldIndex = [].indexOf.call(form, currentField);
      form.elements[currentFieldIndex + 1].focus();
    }
  }, []);
  useEffect(() => validate(), [data]);
  const validate = useCallback((data) => {
    const errors = validator(data, validatorConfig);
    setErrors(errors);
    return Object.keys(errors).length === 0;
  }, [validatorConfig, setErrors]);
  const isValid = Object.keys(errors).length === 0;
  const clonedElements = React.Children.map(children, (child) => {
    let config = {};

    if (typeof child.type === "object") {
      data[child.props.name] = data[child.props.name] ?? "";
      const value = data[child.props.name];
      const error = errors[child.props.name];
      config = { ...child.props, onChange: handleChange, onKeyDown: handleKeyDown, value, error };
    }

    if (child.type === "button" &&
      (child.props.type === "submit" || !child.props.type)) {
        config = { ...child.props, disabled: !isValid };
      }

    return React.cloneElement(child, config);
  });
  const handleSubmit = (event) => {
    event.preventDefault();
    const isValid = validate(data);

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

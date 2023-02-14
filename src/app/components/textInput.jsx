import React from "react";
import PropTypes from "prop-types";

const TextInput = ({ name, label, value, onChange, type, error, hasValidate }) => {
    const getInputClassname = () => {
        return "form-control " + (error ? "is-invalid" : "is-valid");
    };
    return (
        <div className="mb-3">
            <label htmlFor={name}>{label}</label>
            <div className={"input-group " + (hasValidate ? "has-validation" : "")}>
                <input
                    type={type}
                    className={hasValidate ? getInputClassname() : "form-control"}
                    id={name}
                    name={name}
                    value={value}
                    onChange={onChange}/>
                {error && <div className="invalid-feedback">{error}</div>}
            </div>
        </div>
    );
};

TextInput.defaultProps = {
    type: "text",
    hasValidate: true
};

TextInput.propTypes = {
    error: PropTypes.string,
    type: PropTypes.string,
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
    value: PropTypes.string,
    hasValidate: PropTypes.bool,
    onChange: PropTypes.func.isRequired
};

export default TextInput;

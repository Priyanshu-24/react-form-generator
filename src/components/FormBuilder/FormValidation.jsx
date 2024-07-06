const FormValidation = ({ validation, onChange }) => {
  const handleRequiredChange = (e) => {
    onChange({
      ...validation,
      required: e.target.checked,
    });
  };

  const handleMinLengthChange = (e) => {
    onChange({
      ...validation,
      minLength: e.target.value,
    });
  };

  const handleMaxLengthChange = (e) => {
    onChange({
      ...validation,
      maxLength: e.target.value,
    });
  };

  const handlePatternChange = (e) => {
    onChange({
      ...validation,
      pattern: e.target.value,
    });
  };

  return (
    <div className="validation-container">
      <div className="validation-box">
        <label>
          <input
            type="checkbox"
            checked={validation?.required || false}
            onChange={handleRequiredChange}
          />
          Required
        </label>
      </div>
      <div>
        <label>
          Min Length
          <input
            type="number"
            value={validation?.minLength || ""}
            onChange={handleMinLengthChange}
          />
        </label>
      </div>
      <div>
        <label>
          Max Length
          <input
            type="number"
            value={validation?.maxLength || ""}
            onChange={handleMaxLengthChange}
          />
        </label>
      </div>
      <div>
        <label>
          Regex Pattern
          <input
            type="text"
            value={validation?.pattern || ""}
            onChange={handlePatternChange}
          />
        </label>
      </div>
    </div>
  );
};

export default FormValidation;

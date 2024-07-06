import { FIELD_VALUES } from "../../../utils/constant";

const FormValidation = ({ validation, onChange, type }) => {
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
        <label>Required</label>
        <input
          type="checkbox"
          checked={validation?.required || false}
          onChange={handleRequiredChange}
        />
      </div>
      {(type === FIELD_VALUES?.TEXT || type === FIELD_VALUES?.TEXTAREA) && (
        <div className="min-max-container">
          <div>
            <label>Min Length</label>
            <input
              type="number"
              value={validation?.minLength || ""}
              onChange={handleMinLengthChange}
            />
          </div>
          <div>
            <label>Max Length</label>
            <input
              type="number"
              value={validation?.maxLength || ""}
              onChange={handleMaxLengthChange}
            />
          </div>
          <div>
            <label>Regex Pattern</label>

            <input
              type="text"
              value={validation?.pattern || ""}
              onChange={handlePatternChange}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default FormValidation;

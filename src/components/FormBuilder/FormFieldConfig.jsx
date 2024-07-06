import { FIELD_VALUES } from "../../utils/constant";
import FormValidation from "./FormValidation";

export const fieldTypes = [
  { label: "Text Input", value: FIELD_VALUES?.TEXT },
  { label: "Text Area", value: FIELD_VALUES?.TEXTAREA },
  { label: "Dropdown", value: FIELD_VALUES?.DROPDOWN },
  { label: "Checkbox", value: FIELD_VALUES?.CHECKBOX },
  { label: "Radio Button", value: FIELD_VALUES?.RADIO },
];

const FormFieldConfig = ({ field, onRemove, onUpdate, index }) => {
  const handleTypeChange = (e) => {
    onUpdate({ ...field, type: e.target.value });
  };

  const handleLabelChange = (e) => {
    onUpdate({ ...field, label: e.target.value });
  };

  const handleValidationChange = (validation) => {
    onUpdate({ ...field, validation });
  };

  return (
    <div className="field-config-container">
      <div className="field-config-label">Field - {index + 1}</div>
      <div className="field-config-option-container">
        <select value={field?.type} onChange={handleTypeChange}>
          {fieldTypes.map((type) => (
            <option key={type.value} value={type.value}>
              {type.label}
            </option>
          ))}
        </select>
        <input
          type="text"
          value={field?.label}
          onChange={handleLabelChange}
          placeholder="Label"
        />
      </div>
      <FormValidation
        type={field?.type}
        validation={field?.validation}
        onChange={handleValidationChange}
      />
      <button className="remove-field-btn" onClick={onRemove}>
        Remove Field
      </button>
    </div>
  );
};

export default FormFieldConfig;

import { useContext, useState } from "react";

import { FIELD_VALUES } from "../../utils/constant";
import { FormContext } from "../../context/FormContext";
import { validateField } from "../../utils/validations";

const FormPreview = () => {
  const { fields } = useContext(FormContext);
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});

  const handleChange = (id, value) => {
    setErrors({
      ...errors,
      [id]: "",
    });
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    fields.forEach((field) => {
      const error = validateField(field, formData[field?.id]);
      if (error) {
        newErrors[field?.id] = error;
      }
    });

    if (Object.keys(newErrors).length === 0) {
      console.log(formData);
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className="form-preview">
      <h2>Form Preview</h2>
      <form onSubmit={handleSubmit}>
        {fields?.map((field) => (
          <div key={field?.id} className="field-container">
            <label>{field?.label}</label>
            {field?.type === FIELD_VALUES?.TEXT && (
              <input
                type="text"
                value={formData[field?.id] || ""}
                onChange={(e) => handleChange(field?.id, e.target.value)}
              />
            )}
            {field?.type === FIELD_VALUES?.TEXTAREA && (
              <textarea
                value={formData[field?.id] || ""}
                onChange={(e) => handleChange(field?.id, e.target.value)}
              />
            )}
            {field?.type === FIELD_VALUES?.CHECKBOX && (
              <input
                type="checkbox"
                checked={!!formData[field?.id]}
                onChange={(e) => handleChange(field?.id, e.target.checked)}
              />
            )}
            {errors[field?.id] && (
              <div className="error">{errors[field?.id]}</div>
            )}
          </div>
        ))}
        {fields?.length > 0 && (
          <button className="submit-btn" type="submit">
            Submit
          </button>
        )}
      </form>
    </div>
  );
};

export default FormPreview;

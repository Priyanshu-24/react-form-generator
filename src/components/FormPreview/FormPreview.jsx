import { useContext, useState } from "react";

import { FIELD_VALUES } from "../../utils/constant";
import { FormContext } from "../../context/FormContext";

const FormPreview = () => {
  const { fields } = useContext(FormContext);
  const [formData, setFormData] = useState({});

  const handleChange = (label, value) => {
    setFormData({
      ...formData,
      [label]: value,
    });
  };

  console.log(formData);

  const handleSubmit = () => {};

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
                value={formData[field?.label] || ""}
                onChange={(e) => handleChange(field?.label, e.target.value)}
              />
            )}
          </div>
        ))}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormPreview;

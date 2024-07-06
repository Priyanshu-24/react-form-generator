import { FormContext } from "../../context/FormContext";
import FormFieldConfig from "./FormFieldConfig";
import { useContext } from "react";

const FormBuilder = () => {
  const { fields, addField, removeField, updateField } =
    useContext(FormContext);

  return (
    <div className="form-builder">
      <h2>Form Builder</h2>
      <button className="add-field-btn" onClick={addField}>
        Add Field
      </button>
      <div>
        {fields.map((field, idx) => {
          return (
            <FormFieldConfig
              key={field?.id}
              field={field}
              onUpdate={(newField) => updateField(idx, newField)}
              onRemove={() => removeField(idx)}
              index={idx}
            />
          );
        })}
      </div>
    </div>
  );
};

export default FormBuilder;

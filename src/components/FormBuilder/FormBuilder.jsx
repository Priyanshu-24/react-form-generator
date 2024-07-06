import { FormContext } from "../../context/FormContext";
import FormFieldConfig from "./FieldConfig/FormFieldConfig";
import { useContext } from "react";

const FormBuilder = () => {
  const { fields, addField, removeField, updateField, saveForm, loadForm } =
    useContext(FormContext);

  return (
    <div className="form-builder">
      <h2>Form Builder</h2>
      <div className="add-field-btn-container">
        <button className="add-field-btn" onClick={addField}>
          Add Field
        </button>
        <div>
          <button className="add-field-btn" onClick={saveForm}>
            Save Form
          </button>
          <button className="add-field-btn load-form-btn" onClick={loadForm}>
            Load Form
          </button>
        </div>
      </div>
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

import { FormContext } from "../../context/FormContext";
import { useContext } from "react";

const FormBuilder = () => {
  const { fields, addField, removeField } = useContext(FormContext);

  console.log(fields);

  return (
    <div className="form-builder">
      <h2>Form Builder</h2>
      <button onClick={addField}>Add Field</button>
    </div>
  );
};

export default FormBuilder;

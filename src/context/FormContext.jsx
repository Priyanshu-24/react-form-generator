import { createContext, useState } from "react";

import { FIELD_VALUES } from "../utils/constant";

export const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [fields, setFields] = useState([]);

  const addField = () => {
    setFields([
      ...fields,
      { type: FIELD_VALUES?.TEXT, label: "", options: [], validations: {} },
    ]);
  };

  const removeField = (index) => {
    setFields((prevFields) => {
      let newFields = structuredClone(prevFields);
      newFields = newFields.filter((_, i) => i !== index);
      return newFields;
    });
  };

  const updateField = (index, newField) => {
    const newFields = [...fields];
    newFields[index] = newField;
    setFields(newFields);
  };

  return (
    <FormContext.Provider
      value={{ fields, addField, removeField, updateField }}
    >
      {children}
    </FormContext.Provider>
  );
};

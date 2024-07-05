import { createContext, useState } from "react";

export const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [fields, setFields] = useState([]);

  const addField = () => {
    setFields([
      ...fields,
      { type: "text", label: "", options: [], validations: {} },
    ]);
  };

  const removeField = (index) => {
    setFields((prevFields) => {
      let newFields = structuredClone(prevFields);
      newFields = newFields.filter((_, i) => i !== index);
      return newFields;
    });
  };

  return (
    <FormContext.Provider value={{ fields, addField, removeField }}>
      {children}
    </FormContext.Provider>
  );
};

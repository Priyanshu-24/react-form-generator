import { createContext, useState } from "react";

import { FIELD_VALUES } from "../utils/constant";
import toast from "react-hot-toast";
import { v4 as uuidv4 } from "uuid";

export const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [fields, setFields] = useState([]);

  const addField = () => {
    setFields([
      ...fields,
      {
        id: uuidv4(),
        type: FIELD_VALUES?.TEXT,
        label: "",
        options: [],
        validation: {},
      },
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

  const saveForm = () => {
    if (fields?.length) {
      const jsonData = JSON.stringify(fields);
      localStorage.setItem("formConfiguration", jsonData);
      toast.success("Form saved successfully");
    } else {
      toast.error("Cannot save empty form configuration");
    }
  };

  const loadForm = () => {
    const jsonData = localStorage.getItem("formConfiguration");
    if (jsonData) {
      setFields(JSON.parse(jsonData));
    } else {
      toast.error("Cannot load form, no previous saved form found");
    }
  };

  return (
    <FormContext.Provider
      value={{ fields, addField, removeField, updateField, saveForm, loadForm }}
    >
      {children}
    </FormContext.Provider>
  );
};

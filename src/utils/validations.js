export const validateField = (field, value) => {
  if (field?.validation?.required && !value) {
    return "This field is required";
  }
  if (
    field?.validation?.minLength &&
    Number(value.length) < Number(field?.validation?.minLength)
  ) {
    return `Must be at least ${field?.validation?.minLength} characters`;
  }
  if (
    field?.validation?.maxLength &&
    Number(value?.length) > Number(field?.validation?.maxLength)
  ) {
    return `Must be no more than ${field?.validation?.maxLength} characters`;
  }
  if (
    field?.validation?.pattern &&
    !new RegExp(field?.validation?.pattern).test(value)
  ) {
    return "Invalid format";
  }
  return null;
};

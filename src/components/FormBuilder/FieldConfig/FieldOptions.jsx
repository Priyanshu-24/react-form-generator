const FieldOptions = ({ options, onChange }) => {
  const handleOptionChange = (index, value) => {
    const newOptions = [...options];
    newOptions[index] = value;
    onChange(newOptions);
  };

  const addOption = () => {
    onChange([...options, ""]);
  };

  const removeOption = (index) => {
    onChange(options.filter((_, i) => i !== index));
  };

  return (
    <div className="options-container">
      {options?.map((option, index) => (
        <div key={index} className="option-box">
          <input
            type="text"
            value={option}
            onChange={(e) => handleOptionChange(index, e.target.value)}
          />
          <button
            onClick={() => removeOption(index)}
            className="remove-option-btn"
          >
            Remove Option
          </button>
        </div>
      ))}
      <button onClick={addOption} className="add-option-btn">
        Add Option
      </button>
    </div>
  );
};

export default FieldOptions;

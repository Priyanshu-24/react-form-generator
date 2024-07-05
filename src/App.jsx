import FormBuilder from "./components/FormBuilder/FormBuilder";
import FormPreview from "./components/FormPreview/FormPreview";

const App = () => {
  return (
    <div>
      <h1>Form Generator</h1>
      <div className="main-container">
        <FormBuilder />
        <FormPreview />
      </div>
    </div>
  );
};

export default App;

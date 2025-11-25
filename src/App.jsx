import { useState } from "react";
import "./App.css";
import DataForm from "./components/DataForm";

function App() {
  const [isFormVisible, setIsFormVisible] = useState(true);
  const [formData, setFormData] = useState({
    positions: [{}],
  });

  function handleChange(key, value) {
    const newFormData = { ...formData, [key]: value };

    setFormData(newFormData);
  }

  return (
    <>
      {isFormVisible && (
        <DataForm data={formData} onFieldChange={handleChange} />
      )}
      <button
        onClick={(e) => {
          e.preventDefault();
          setIsFormVisible(!isFormVisible);
        }}
      >
        {isFormVisible ? "Submit" : "Edit"}
      </button>
    </>
  );
}

export default App;

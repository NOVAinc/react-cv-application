import { useState } from "react";
import "./App.css";
import DataForm from "./components/DataForm";

function App() {
  const [isFormVisible, setIsFormVisible] = useState(true);
  const [formData, setFormData] = useState({});

  return (
    <>
      {isFormVisible && <DataForm data={formData} />}
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

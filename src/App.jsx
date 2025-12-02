import { useState } from "react";
import "./App.css";
import DataForm from "./components/DataForm";

function App() {
  const [isFormVisible, setIsFormVisible] = useState(true);
  const [formData, setFormData] = useState({});
  const [formPositions, setFormPositions] = useState([
    { responsibilities: [""] },
  ]);

  // TODO: Fix broken X button for responsibilities
  // TODO: Add html output
  function handleDataChange(key, value) {
    const newFormData = { ...formData, [key]: value };

    setFormData(newFormData);
  }

  function handlePositionChange(index, key, value) {
    const newPositions = [...formPositions];

    newPositions[index][key] = value;

    setFormPositions(newPositions);
  }

  function handleResponsibilityChange(jobIndex, responsibilityIndex, value) {
    const newPositions = [...formPositions];

    newPositions[jobIndex]["responsibilities"][responsibilityIndex] = value;

    setFormPositions(newPositions);
  }

  function handlePositionAdd() {
    const newPositions = [...formPositions];

    newPositions.push({ responsibilities: [""] });

    setFormPositions(newPositions);
  }

  function handlePositionRemove(index) {
    const newPositions = [...formPositions];
    newPositions.splice(index, 1);

    setFormPositions(newPositions);
  }

  return (
    <>
      {isFormVisible && (
        <>
          <DataForm
            data={formData}
            positions={formPositions}
            changeData={handleDataChange}
            changePositions={handlePositionChange}
            removePosition={handlePositionRemove}
            changeResponsibility={handleResponsibilityChange}
          />
          <button
            onClick={(e) => {
              e.preventDefault();
              handlePositionAdd();
            }}
          >
            Add Position
          </button>
        </>
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

import { useState } from "react";
import "./App.css";
import DataForm from "./components/DataForm";
import DataDisplay from "./components/DataDisplay";

function App() {
  const [isFormVisible, setIsFormVisible] = useState(true);
  const [formData, setFormData] = useState({});
  const [formPositions, setFormPositions] = useState([
    { responsibilities: [""] },
  ]);

  // TODO: Add experience section to DataDisplay
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

  function handleResponsibilityRemove(jobIndex, responsibilityIndex) {
    const newPositions = [...formPositions];
    const newResponsibilities = [
      ...formPositions[jobIndex]["responsibilities"],
    ];

    console.log("previous job responsibilities " + newResponsibilities);

    newResponsibilities.splice(responsibilityIndex, 1);

    console.log("new job responsibilities " + newResponsibilities);

    newPositions[jobIndex]["responsibilities"] = newResponsibilities;

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

    if (newPositions.length === 0) {
      newPositions.push({ responsibilities: [""] });
    }

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
            removeResponsibility={handleResponsibilityRemove}
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
      {!isFormVisible && (
        <DataDisplay data={formData} positions={formPositions} />
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

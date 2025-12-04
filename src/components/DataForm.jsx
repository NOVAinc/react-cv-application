import { Fragment } from "react";
import FormField from "./FormField";
import "../App.css";

function DataForm({
  data,
  positions = [{ responsibilities: [""] }],
  changeData,
  changePositions,
  changeResponsibility,
  removePosition,
  removeResponsibility,
}) {
  function addResponsibilityForm(jobIndex, responsibilities = [""]) {
    return responsibilities.map((responsibility, index) => {
      return (
        <Fragment key={index}>
          <FormField
            index={jobIndex}
            responsibilityIndex={index}
            id={"job-" + jobIndex + "-responsibility-" + index}
            value={responsibility}
            changeResponsibility={changeResponsibility}
          >
            <button
              className="inline-button"
              onClick={(e) => {
                e.preventDefault();
                removeResponsibility(jobIndex, index);
              }}
            >
              X
            </button>
          </FormField>
        </Fragment>
      );
    });
  }

  function addExperienceForm(positions) {
    return positions.map((position, index) => {
      let jobNumber = index + 1;

      return (
        <Fragment key={index}>
          <h3>Position {jobNumber}</h3>
          <button
            className="inline-button"
            onClick={(e) => {
              e.preventDefault();
              removePosition(index);
            }}
          >
            X
          </button>
          <FormField
            index={index}
            id={"job-role-" + index}
            label="Role Name"
            type="text"
            formKey={"jobRole"}
            value={position["jobRole"]}
            changePositions={changePositions}
          />
          <FormField
            index={index}
            id={"job-company-" + index}
            label="Company Name"
            type="text"
            formKey={"jobCompany"}
            value={position["jobCompany"]}
            changePositions={changePositions}
          />
          <FormField
            index={index}
            id={"job-year-start-" + jobNumber}
            label="Start Month and Year"
            type="month"
            formKey={"jobStartYear"}
            value={position["jobStartYear"]}
            changePositions={changePositions}
          />
          <FormField
            index={index}
            id={"job-year-end-" + jobNumber}
            label="End Month and Year"
            type="month"
            formKey={"jobEndYear"}
            value={position["jobEndYear"]}
            changePositions={changePositions}
          />
          <h3>Responsibilities</h3>
          {addResponsibilityForm(index, position["responsibilities"])}
          <button
            onClick={(e) => {
              e.preventDefault();
              const newResponsibilities = [...position["responsibilities"]];
              newResponsibilities.push("");

              changePositions(index, "responsibilities", newResponsibilities);
            }}
          >
            Add Responsibility
          </button>
          <br />
        </Fragment>
      );
    });
  }

  return (
    <form action="">
      <h1>Résumé</h1>
      <h2>Contact</h2>
      <FormField
        id="contact-name"
        label="Full Name"
        type="text"
        formKey="contactName"
        value={data["contactName"]}
        changeData={changeData}
      />
      <FormField
        id="contact-phone"
        label="Telephone Number"
        type="tel"
        formKey="contactPhone"
        value={data["contactPhone"]}
        changeData={changeData}
      />
      <FormField
        id="contact-email"
        label="Email Address"
        type="email"
        formKey="contactEmail"
        value={data["contactEmail"]}
        changeData={changeData}
      />
      <h2>Education</h2>
      <FormField
        id="education-title"
        label="Title"
        type="text"
        formKey="educationTitle"
        value={data["educationTitle"]}
        changeData={changeData}
      />
      <FormField
        id="education-institution"
        label="Institution"
        type="text"
        formKey="educationInstitution"
        value={data["educationInstitution"]}
        changeData={changeData}
      />
      <FormField
        id="education-year"
        label="Year"
        type="tel"
        formKey="educationYear"
        value={data["educationYear"]}
        changeData={changeData}
      />
      <h2>Experience</h2>
      {addExperienceForm(positions)}
    </form>
  );
}

export default DataForm;

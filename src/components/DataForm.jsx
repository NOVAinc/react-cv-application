import { useState } from "react";
import { Fragment } from "react";
import FormField from "./FormField";

function DataForm() {
  const [resume, setResume] = useState({});
  const [positions, setPositions] = useState([
    {
      // jobRole: undefined,
      // jobCompany: undefined,
      // jobMonthStart: undefined,
      // jobMonthEnd: undefined,
    },
  ]);

  // TODO: Add onChange function for fields

  function handleChange(key, value) {
    const newResume = { ...resume, [key]: value };
    setResume(newResume);
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
        onChange={handleChange}
      />
      <FormField
        id="contact-phone"
        label="Telephone Number"
        type="tel"
        formKey="contactPhone"
        onChange={handleChange}
      />
      <FormField
        id="contact-email"
        label="Email Address"
        type="email"
        formKey="contactEmail"
        onChange={handleChange}
      />
      <h2>Education</h2>
      <FormField
        id="education-title"
        label="Title"
        type="text"
        formKey="educationTitle"
        onChange={handleChange}
      />
      <FormField
        id="education-institution"
        label="Institution"
        type="text"
        formKey="educationInstitution"
        onChange={handleChange}
      />
      <FormField
        id="education-year"
        label="Year"
        type="tel"
        formKey="educationYear"
        onChange={handleChange}
      />
      <h2>Experience</h2>
      {addExperienceForm(positions)}
    </form>
  );
}

function addExperienceForm(positions) {
  return positions.map((position, index) => {
    let jobNumber = index + 1;

    return (
      <Fragment key={jobNumber}>
        <h3>Position {jobNumber}</h3>
        <FormField
          id={"job-" + jobNumber + "-role"}
          label="Role Name"
          type="text"
        />
        <FormField
          id={"job-" + jobNumber + "-company"}
          label="Company Name"
          type="text"
        />
        <FormField id={"job-" + jobNumber + "-year"} label="Year" type="tel" />
      </Fragment>
    );
  });
}

export default DataForm;

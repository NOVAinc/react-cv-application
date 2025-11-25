import { Fragment } from "react";
import FormField from "./FormField";

// Add support for saving position data in an array

function DataForm({ data, onFieldChange }) {
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
            formKey={"job" + jobNumber + "name"}
            onChange={onFieldChange}
          />
          <FormField
            id={"job-" + jobNumber + "-company"}
            label="Company Name"
            type="text"
            formKey={"job" + jobNumber + "company"}
            onChange={onFieldChange}
          />
          <FormField
            id={"job-" + jobNumber + "-year"}
            label="Year"
            type="tel"
            formKey={"job" + jobNumber + "year"}
            onChange={onFieldChange}
          />
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
        onChange={onFieldChange}
      />
      <FormField
        id="contact-phone"
        label="Telephone Number"
        type="tel"
        formKey="contactPhone"
        value={data["contactPhone"]}
        onChange={onFieldChange}
      />
      <FormField
        id="contact-email"
        label="Email Address"
        type="email"
        formKey="contactEmail"
        value={data["contactEmail"]}
        onChange={onFieldChange}
      />
      <h2>Education</h2>
      <FormField
        id="education-title"
        label="Title"
        type="text"
        formKey="educationTitle"
        value={data["educationTitle"]}
        onChange={onFieldChange}
      />
      <FormField
        id="education-institution"
        label="Institution"
        type="text"
        formKey="educationInstitution"
        value={data["educationInstitution"]}
        onChange={onFieldChange}
      />
      <FormField
        id="education-year"
        label="Year"
        type="tel"
        formKey="educationYear"
        value={data["educationYear"]}
        onChange={onFieldChange}
      />
      <h2>Experience</h2>
      {addExperienceForm(data["positions"])}
    </form>
  );
}

export default DataForm;

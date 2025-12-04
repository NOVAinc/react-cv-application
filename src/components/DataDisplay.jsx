import { Fragment } from "react";

export default function DataDisplay({ data, positions }) {
  return (
    <>
      <h1>{data.contactName}</h1>
      <h2>Contact details</h2>
      <p>{data.contactPhone + " | " + data.contactEmail}</p>
      <h2>Education</h2>
      <p>
        {data.educationTitle +
          ", " +
          data.educationInstitution +
          " - " +
          data.educationYear}
      </p>
      <h2>Experience</h2>
      {positions.map((position, index) => {
        return (
          <Fragment key={index}>
            <h3>
              {position.jobRole +
                ", " +
                position.jobCompany +
                " - " +
                position.jobStartYear +
                " to " +
                position.jobEndYear}
            </h3>
            <h4>Responsibilities</h4>
            <ul>
              {position.responsibilities.map((responsibility, index) => {
                return <li key={index}>{responsibility}</li>;
              })}
            </ul>
          </Fragment>
        );
      })}
    </>
  );
}

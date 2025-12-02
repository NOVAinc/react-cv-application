import { children } from "react";
import "../styles/FormField.css";

export default function FormField({
  index,
  responsibilityIndex,
  id,
  label = "",
  type = "text",
  formKey,
  value = undefined,
  changeData,
  changePositions,
  changeResponsibility,
  children,
}) {
  return (
    <li>
      {label && (
        <>
          <label htmlFor={id}>{label}</label>
          <br />
        </>
      )}
      <input
        id={id}
        type={type}
        value={value}
        onChange={(e) => {
          if (e.target.id.includes("responsibility")) {
            changeResponsibility(index, responsibilityIndex, e.target.value);
          } else if (e.target.id.includes("job")) {
            changePositions(index, formKey, e.target.value);
          } else {
            changeData(formKey, e.target.value);
          }
        }}
      />
      {children}
    </li>
  );
}

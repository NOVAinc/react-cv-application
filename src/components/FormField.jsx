import "../styles/FormField.css";

export default function FormField({
  id = label,
  label = "Data",
  type = "text",
  formKey,
  onChange,
}) {
  return (
    <li>
      <label htmlFor={id}>{label}</label>
      <br />
      <input
        id={id}
        type={type}
        onChange={(e) => {
          e.preventDefault();
          onChange(formKey, e.target.value);
        }}
      />
    </li>
  );
}

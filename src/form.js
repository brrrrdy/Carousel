export const createForm = (fields) => {
  const form = document.createElement("form");
  form.className = "custom-form";

  fields.forEach((field) => {
    const fieldContainer = document.createElement("div");
    fieldContainer.className = "form-field";

    const label = document.createElement("label");
    label.textContent = field.label;
    label.setAttribute("for", field.name);
    fieldContainer.appendChild(label);

    let input;
    if (field.type === "textarea") {
      input = document.createElement("textarea");
    } else {
      input = document.createElement("input");
      input.type = field.type || "text";
    }
    input.name = field.name;
    input.id = field.name;
    input.required = field.required || false;

    fieldContainer.appendChild(input);
    form.appendChild(fieldContainer);
  });

  const submitButton = document.createElement("button");
  submitButton.type = "submit";
  submitButton.textContent = "Submit";
  form.appendChild(submitButton);

  return form;
};

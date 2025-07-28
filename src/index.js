import { initializeCarousel, renderForm } from "./ui.js";
import { createForm } from "./form.js";
import "./styles.css";

document.addEventListener("DOMContentLoaded", () => {
  initializeCarousel(".carousel-container");
  renderForm();
});

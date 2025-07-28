import { initializeCarousel, renderForm } from "./ui.js";
import "./styles.css";

document.addEventListener("DOMContentLoaded", () => {
  initializeCarousel(".carousel-container");
  renderForm();
});

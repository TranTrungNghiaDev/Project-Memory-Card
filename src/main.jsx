import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ImageList from "./components/ImageList";
import "./styles/styles.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <h1>Yu-gi-oh Memory Game</h1>
    <ImageList />
  </StrictMode>
);

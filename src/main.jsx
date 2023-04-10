import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { MantineProvider } from "@mantine/core";
import "./index.css";
import { CharacterAnimationsProvider } from "./contexts/CharacterAnimations";
import { CharacterCustomizationProvider } from "./contexts/CharacterCustomizationContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <CharacterCustomizationProvider>
        <CharacterAnimationsProvider>
          <App />
        </CharacterAnimationsProvider>
      </CharacterCustomizationProvider>
    </MantineProvider>
  </React.StrictMode>
);

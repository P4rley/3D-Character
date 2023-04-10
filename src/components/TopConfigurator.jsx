import { ColorInput, Stack } from "@mantine/core";
import React from "react";
import {
  SwatchesColors,
  useCharacterCustomization,
} from "../contexts/CharacterCustomizationContext";

const TopConfigurator = () => {
  const { shirtColor, setShirtColor } = useCharacterCustomization();
  return (
    <Stack spacing={"sm"} py={"sm"}>
      <ColorInput
        label="Shirt"
        format="hex"
        swatches={SwatchesColors}
        value={shirtColor}
        onChange={setShirtColor}
      />
    </Stack>
  );
};

export default TopConfigurator;

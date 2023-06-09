import React from "react";
import {
  SwatchesColors,
  useCharacterCustomization,
} from "../contexts/CharacterCustomizationContext";
import { ColorInput, Stack } from "@mantine/core";

const BottomConfigurator = () => {
  const {
    pantsColor,
    setPantsColor,
    shoesColor,
    setShoesColor,
    soleColor,
    setSoleColor,
    lacesColor,
    setLacesColor,
  } = useCharacterCustomization();
  return (
    <Stack spacing={"sm"} py={"sm"}>
      <ColorInput
        label="Pants"
        format="hex"
        swatches={SwatchesColors}
        value={pantsColor}
        onChange={setPantsColor}
      />
      <ColorInput
        label="Shoes"
        format="hex"
        swatches={SwatchesColors}
        value={shoesColor}
        onChange={setShoesColor}
      />
      <ColorInput
        label="Sole"
        format="hex"
        swatches={SwatchesColors}
        value={soleColor}
        onChange={setSoleColor}
      />
      <ColorInput
        label="Hair"
        format="hex"
        swatches={SwatchesColors}
        value={lacesColor}
        onChange={setLacesColor}
      />
    </Stack>
  );
};

export default BottomConfigurator;

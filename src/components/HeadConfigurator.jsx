import { ColorInput, Stack } from "@mantine/core";
import React from "react";
import {
  SwatchesColors,
  useCharacterCustomization,
} from "../contexts/CharacterCustomizationContext";

const HeadConfigurator = () => {
  const {
    hairColor,
    setHairColor,
    eyesColor,
    setEyesColor,
    glassesColor,
    setGlassesColor,
    skinColor,
    setSkinColor,
    mouthColor,
    setMouthColor,
  } = useCharacterCustomization();
  return (
    <Stack spacing={"sm"} py={"sm"}>
      <ColorInput
        label="Hair"
        format="hex"
        swatches={SwatchesColors}
        value={hairColor}
        onChange={setHairColor}
      />
      <ColorInput
        label="Eyes"
        format="hex"
        swatches={SwatchesColors}
        value={eyesColor}
        onChange={setEyesColor}
      />
      <ColorInput
        label="Glasses"
        format="hex"
        swatches={SwatchesColors}
        value={glassesColor}
        onChange={setGlassesColor}
      />
      <ColorInput
        label="Skin"
        format="hex"
        swatches={SwatchesColors}
        value={skinColor}
        onChange={setSkinColor}
      />
      <ColorInput
        label="Mouth"
        format="hex"
        swatches={SwatchesColors}
        value={mouthColor}
        onChange={setMouthColor}
      />
    </Stack>
  );
};

export default HeadConfigurator;

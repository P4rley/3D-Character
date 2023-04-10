import { Affix, Button, Group, Stack } from "@mantine/core";
import { useCharacterAnimations } from "../contexts/CharacterAnimations";
import {
  CameraModes,
  useCharacterCustomization,
} from "../contexts/CharacterCustomizationContext";
import HeadConfigurator from "./HeadConfigurator";
import BottomConfigurator from "./BottomConfigurator";
import TopConfigurator from "./TopConfigurator";

const Interface = () => {
  const { animations, animationIndex, setAnimationIndex } =
    useCharacterAnimations();

  const { cameraMode, setCameraMode } = useCharacterCustomization();
  return (
    <>
      <Affix position={{ top: 50, right: 20 }}>
        <Group>
          {Object.keys(CameraModes).map((mode) => (
            <Button
              key={mode}
              variant={mode === cameraMode ? "filled" : "light"}
              onClick={() => setCameraMode(mode)}
            >
              {mode}
            </Button>
          ))}
        </Group>
      </Affix>
      <Affix position={{ top: 100, right: 20 }}>
        {cameraMode === CameraModes.HEAD && <HeadConfigurator />}
        {cameraMode === CameraModes.BOTTOM && <BottomConfigurator />}
        {cameraMode === CameraModes.TOP && <TopConfigurator />}
      </Affix>
      <Affix position={{ bottom: 50, right: 20 }}>
        <Stack>
          {animations.map((animation, index) => (
            <Button
              key={animation}
              variant={index === animationIndex ? "filled" : "light"}
              onClick={() => setAnimationIndex(index)}
              style={{ fontSize: "12px" }}
            >
              {animation}
            </Button>
          ))}
        </Stack>
      </Affix>
    </>
  );
};

export default Interface;

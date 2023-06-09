/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 public/models/trooper.glb
Author: Kirifuki (https://sketchfab.com/Kirifuki)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/clone-trooper-dancing-clone-wars-style-8ac0bbd07383423f813ae39415c059ac
Title: Clone trooper Dancing! (Clone wars style)
*/

import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export default function Trooper(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("./models/trooper.glb");
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    actions["Take 001"].reset().fadeIn(0.5).play();
  });
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="dancing_clone_trooperfbx" rotation={[Math.PI / 2, 0, 0]}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="Object_4">
                  <primitive object={nodes._rootJoint} />
                  <group name="Object_6" scale={0.01} />
                  <group name="Object_8" scale={0.01} />
                  <group name="Object_10" scale={0.01} />
                  <group name="Object_12" scale={0.01} />
                  <group name="Object_14" scale={0.01} />
                  <group name="Object_16" scale={0.01} />
                  <group name="Object_18" scale={0.01} />
                  <group name="Object_20" scale={0.01} />
                  <group name="Object_22" scale={0.01} />
                  <group name="Object_24" scale={0.01} />
                  <group
                    name="122_model_0"
                    position={[-0.03, 0.03, -0.24]}
                    scale={0.07}
                  />
                  <group
                    name="125_model_0"
                    position={[-0.03, 0.03, -0.24]}
                    scale={0.07}
                  />
                  <group
                    name="126_model_0"
                    position={[-0.03, 0.03, -0.24]}
                    scale={0.07}
                  />
                  <group
                    name="127_model_0"
                    position={[-0.03, 0.03, -0.24]}
                    scale={0.07}
                  />
                  <group
                    name="128_model_0"
                    position={[-0.03, 0.03, -0.24]}
                    scale={0.07}
                  />
                  <group
                    name="129_model_0"
                    position={[-0.03, 0.03, -0.24]}
                    scale={0.07}
                  />
                  <group
                    name="130_model_0"
                    position={[-0.03, 0.03, -0.24]}
                    scale={0.07}
                  />
                  <group
                    name="131_model_0"
                    position={[-0.03, 0.03, -0.24]}
                    scale={0.07}
                  />
                  <group
                    name="132_model_0"
                    position={[-0.03, 0.03, -0.24]}
                    scale={0.07}
                  />
                  <group
                    name="133_model_0"
                    position={[-0.03, 0.03, -0.24]}
                    scale={0.07}
                  />
                  <skinnedMesh
                    castShadow
                    name="Object_7"
                    geometry={nodes.Object_7.geometry}
                    material={materials["02_-_Default"]}
                    skeleton={nodes.Object_7.skeleton}
                  />
                  <skinnedMesh
                    castShadow
                    name="Object_9"
                    geometry={nodes.Object_9.geometry}
                    material={materials["02_-_Default"]}
                    skeleton={nodes.Object_9.skeleton}
                  />
                  <skinnedMesh
                    castShadow
                    name="Object_11"
                    geometry={nodes.Object_11.geometry}
                    material={materials["02_-_Default_0"]}
                    skeleton={nodes.Object_11.skeleton}
                  />
                  <skinnedMesh
                    castShadow
                    name="Object_13"
                    geometry={nodes.Object_13.geometry}
                    material={materials["02_-_Default"]}
                    skeleton={nodes.Object_13.skeleton}
                  />
                  <skinnedMesh
                    castShadow
                    name="Object_15"
                    geometry={nodes.Object_15.geometry}
                    material={materials["02_-_Default"]}
                    skeleton={nodes.Object_15.skeleton}
                  />
                  <skinnedMesh
                    castShadow
                    name="Object_17"
                    geometry={nodes.Object_17.geometry}
                    material={materials["02_-_Default_0"]}
                    skeleton={nodes.Object_17.skeleton}
                  />
                  <skinnedMesh
                    castShadow
                    name="Object_19"
                    geometry={nodes.Object_19.geometry}
                    material={materials["02_-_Default"]}
                    skeleton={nodes.Object_19.skeleton}
                  />
                  <skinnedMesh
                    castShadow
                    name="Object_21"
                    geometry={nodes.Object_21.geometry}
                    material={materials["02_-_Default"]}
                    skeleton={nodes.Object_21.skeleton}
                  />
                  <skinnedMesh
                    castShadow
                    name="Object_23"
                    geometry={nodes.Object_23.geometry}
                    material={materials["02_-_Default"]}
                    skeleton={nodes.Object_23.skeleton}
                  />
                  <skinnedMesh
                    castShadow
                    name="Object_25"
                    geometry={nodes.Object_25.geometry}
                    material={materials["02_-_Default_1"]}
                    skeleton={nodes.Object_25.skeleton}
                  />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("./models/trooper.glb");

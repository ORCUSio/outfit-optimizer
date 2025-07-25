import { usePanGesture } from "@/hooks/outfitPage";
import { SliderProps } from "@/types/outfitPage/slider";
import { useState } from "react";
import { View } from "react-native";
import {
  GestureDetector,
  GestureHandlerRootView,
} from "react-native-gesture-handler";
import Animated from "react-native-reanimated";
export const Slider = ({ children, uris }: SliderProps) => {
  const [index, setIndex] = useState(0);

  const handleLeft = () => {
    setIndex((index - 1 + uris.length) % uris.length);
  };
  const handleRight = () => {
    setIndex((index + 1) % uris.length);
  };
  const { animatedStyle, panGesture } = usePanGesture(handleRight, handleLeft);

  return (
    <GestureHandlerRootView
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
    >
      <GestureDetector gesture={panGesture}>
        <View>
          {Array.isArray(children) && children.length > 0 ? (
            index >= 0 && index < children.length ? (
              <Animated.View style={animatedStyle}>
                {children[index]}
              </Animated.View>
            ) : (
              <></>
            )
          ) : (
            <></>
          )}
        </View>
      </GestureDetector>
    </GestureHandlerRootView>
  );
};

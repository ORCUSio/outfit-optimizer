import { usePanGesture } from "@/hooks/outfitPage";
import { SliderProps } from "@/types/outfitPage/slider";
import { View } from "react-native";
import {
  GestureDetector,
  GestureHandlerRootView
} from "react-native-gesture-handler";
export const Slider = ({ children, index, setIndex, uris }: SliderProps) => {
  const handleLeft = () => {
    setIndex((index - 1 + uris.length) % uris.length);
  };
  const handleRight = () => {
    setIndex((index + 1) % uris.length);
  };
  const panGesture = usePanGesture(handleRight, handleLeft);
  return (
    <GestureHandlerRootView
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
    >
      <GestureDetector gesture={panGesture}>
        <View>
          {Array.isArray(children) && children.length > 0 ? (
            index >= 0 && index < children.length ? (
              children[index]
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

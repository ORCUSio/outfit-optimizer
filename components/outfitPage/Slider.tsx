import { View } from "react-native";
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from "react-native-gesture-handler";

export const Slider = ({
  children,
  index,
  setIndex,
  uris
}: {
  children: React.ReactNode;
  index: number;
  setIndex: (index: number) => void;
  uris: string[];
}) => {
  const handleLeft = () => {
    setIndex((index - 1 + uris.length) % uris.length);
  };
  const handleRight = () => {
    setIndex((index + 1) % uris.length);
  };
  const panGesture = Gesture.Pan()
    .onEnd((event) => {
      const { translationX, translationY } = event;
      if (Math.abs(translationX) > Math.abs(translationY)) {
        // Horizontal swipe
        if (translationX < 0) {
          // Swiped left
          handleRight();
        } else if (translationX > 0) {
          // Swiped right
          handleLeft();
        }
      }
    })
    .runOnJS(true);

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

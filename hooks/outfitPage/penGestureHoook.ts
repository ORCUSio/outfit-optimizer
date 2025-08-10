import { Gesture } from "react-native-gesture-handler";
import {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
const END_POSITION = 200;

export function usePanGesture(handleRight: () => void, handleLeft: () => void) {
  const position = useSharedValue(0);
  const onLeft = useSharedValue(true);
  const pressed = useSharedValue<boolean>(false);
  const angle = useSharedValue(0);
  const startAngle = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      { translateX: position.value },
      { rotate: `${angle.value}rad` },
    ],
  }));
  const panGesture = Gesture.Pan()

    .onUpdate((e) => {
      if (onLeft.value) {
        // if (position.value < 20) {
        pressed.value = true;
        position.value = e.translationX;
        angle.value = interpolate(
          position.value,
          [0, END_POSITION],
          [0, Math.PI / 2]
        );

        // }
      } else {
        // if (position.value < 20) {

        position.value = END_POSITION + e.translationX;
        // }
      }
    })
    .onEnd((event) => {
      const { translationX, translationY } = event;

      position.value = withTiming(0, { duration: 100 });
      if (Math.abs(translationX) > Math.abs(translationY)) {
        // Horizontal swipe
        if (translationX < 0) {
          // Swiped left
          pressed.value = false;
          handleRight();
        } else if (translationX > 0) {
          // Swiped right
          pressed.value = false;
          handleLeft();
        }
      }
      angle.value = startAngle.value;
    })
    .runOnJS(true);

  return {
    panGesture,
    position,
    animatedStyle,
  };

  // Example usage in a component:
  // import { usePanGesture } from "@/hooks/outfitPage/penGestureHoook";
  // import { GestureDetector } from "react-native-gesture-handler";
  // import Animated from "react-native-reanimated";
  //
  // export function PanRotateDemo({ children }) {
  //   const { composedGesture, animatedStyle } = usePanGesture(() => {}, () => {});
  //   return (
  //     <GestureDetector gesture={composedGesture}>
  //       <Animated.View style={animatedStyle}>
  //         {children}
  //       </Animated.View>
  //     </GestureDetector>
  //   );
  // }
}

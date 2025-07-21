import { Gesture } from "react-native-gesture-handler";

export function usePanGesture(handleRight: () => void, handleLeft: () => void) {
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

  return panGesture;
}

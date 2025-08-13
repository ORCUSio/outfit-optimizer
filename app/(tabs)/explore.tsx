import { outfitStore } from "@/store";
import { styles } from "@/styles/explorePage";
import { OutfitInterface } from "@/types/outfitStore";
import { useRouter } from "expo-router";
import React from "react";
import { Image, Pressable, ScrollView, Text } from "react-native";
import Animated, {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
const basescale = 1;
export default function ExploreScreen() {
  const router = useRouter();
  const AllOutfits = outfitStore((state: any) => state.outfits);
  const scalevalue = useSharedValue(basescale);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: scalevalue.value,
        },
      ],
    };
  });

  const handleAnimationbyPress = (outfit: OutfitInterface) => {
    scalevalue.value = withTiming(1.05, { duration: 120 }, (finished) => {
      if (finished) {
        scalevalue.value = withTiming(1, { duration: 120 }, () => {
          runOnJS(router.navigate)(`/(outfit)/${outfit.id}`);
        });
      }
    });
  };
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {AllOutfits.map((outfit: OutfitInterface) => (
        <Pressable
          key={outfit.id}
          onPress={() => {
            handleAnimationbyPress(outfit);
          }}
        >
          <Animated.View style={[styles.card, animatedStyle]}>
            <Image
              source={{ uri: outfit.image }}
              style={styles.productImage}
              resizeMode="contain"
            />
            <Text style={styles.productName}>{outfit.name}</Text>
          </Animated.View>
        </Pressable>
      ))}
    </ScrollView>
  );
}

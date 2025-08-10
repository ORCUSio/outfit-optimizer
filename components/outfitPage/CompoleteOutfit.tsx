import { BodyOutfit } from "@/components/outfitPage";
import { styles } from "@/styles/outfitPage";
import { CompleteOutfitProps } from "@/types/outfitPage";
import React from "react";
import { Text, View } from "react-native";
export const CompoleteOutfit = ({
  hats,
  tshirts,
  pants,
  shoes,
}: CompleteOutfitProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Your Outfit</Text>
      <BodyOutfit uris={hats} />
      <BodyOutfit uris={tshirts} />
      <BodyOutfit uris={pants} />
      <BodyOutfit uris={shoes} />
    </View>
  );
};

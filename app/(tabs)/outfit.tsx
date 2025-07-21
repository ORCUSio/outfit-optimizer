import { BodyOutfit } from "@/components/outfitPage";
import { hats, pants, shoes, tshirts } from "@/constants/outfitPage";
import { styles } from "@/styles/outfitPage";
import React from "react";
import { Text, View } from "react-native";
const Outfit = () => {
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

export default Outfit;

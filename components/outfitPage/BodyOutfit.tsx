import { styles } from "@/styles/outfitPage";
import { BodyOutfitProps } from "@/types/outfitPage";
import React, { useState } from "react";
import { Image, View } from "react-native";
import { Slider } from "./Slider";
export const BodyOutfit = ({ uris }: BodyOutfitProps) => {
  const [index, setIndex] = useState(0);
  return (
    <View style={styles.row}>
      <Slider index={index} setIndex={setIndex} uris={uris}>
      {uris.map((uri, idx) => (
        <Image
          key={idx}
          source={{
            uri,
          }}
          style={styles.image}
        />
      ))}
    </Slider>
  </View>
  );
};

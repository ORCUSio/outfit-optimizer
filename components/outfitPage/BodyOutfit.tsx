import { styles } from "@/styles/outfitPage";
import { BodyOutfitProps } from "@/types/outfitPage";
import React from "react";
import { Image, View } from "react-native";
import { Slider } from "./Slider";
export const BodyOutfit = ({ uris }: BodyOutfitProps) => {
  return (
    <View style={styles.row}>
      <Slider uris={uris}>
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

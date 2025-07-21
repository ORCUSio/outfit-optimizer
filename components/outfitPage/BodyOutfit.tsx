import { styles } from "@/styles/outfitPage";
import React, { useState } from "react";
import { Image, View } from "react-native";
import { Slider } from "./Slider";
export const BodyOutfit = ({ uris }: { uris: string[] }) => {
  const [index, setIndex] = useState(0);
  return (
    <View style={styles.row}>
      {/* <TouchableOpacity onPress={handleLeft}>
          <Text style={styles.arrow}>{"<"}</Text>
        </TouchableOpacity> */}
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
    {/* <TouchableOpacity onPress={handleRight}>
        <Text style={styles.arrow}>{">"}</Text>
      </TouchableOpacity> */}
  </View>
  );
};

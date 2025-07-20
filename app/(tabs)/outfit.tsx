import React, { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

import { hats, pants, shoes, tshirts } from "@/constants/outfitPage";
import { styles } from "@/styles/outfitPage";
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
const BodyOutfit = ({ uris }: { uris: string[] }) => {
  const [index, setIndex] = useState(0);
  const handleLeft = () => {
    setIndex((index - 1 + uris.length) % uris.length);
  };
  const handleRight = () => {
    setIndex((index + 1) % uris.length);
  };
  return (
    <View style={styles.row}>
      <TouchableOpacity onPress={handleLeft}>
        <Text style={styles.arrow}>{"<"}</Text>
      </TouchableOpacity>

      <Image
        source={{
          uri: uris[index],
        }}
        style={styles.image}
      />
      <TouchableOpacity onPress={handleRight}>
        <Text style={styles.arrow}>{">"}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Outfit;

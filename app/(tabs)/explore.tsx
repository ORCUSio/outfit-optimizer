import { outfitStore } from "@/store";
import { styles } from "@/styles/explorePage";
import { Link } from "expo-router";
import React from "react";
import { Image, ScrollView, Text, View } from "react-native";

export default function ExploreScreen() {
  const AllOutfits = outfitStore((state: any) => state.outfits);
 

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {AllOutfits.map((outfit: any) => (
        <Link
          href={{
            pathname: "/(tabs)/(outfit)/[id]",
            params: { id: outfit.id },
          }}
          key={outfit.id}
        >
          <View style={styles.card}>
            <Image
              source={outfit.image}
              style={styles.productImage}
              resizeMode="contain"
            />
            <Text style={styles.productName}>{outfit.name}</Text>
          </View>
        </Link>
      ))}
    </ScrollView>
  );
}

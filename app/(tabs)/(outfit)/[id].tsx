import { CompoleteOutfit } from "@/components/outfitPage";
import { outfitStore } from "@/store";
import { CompleteOutfitProps } from "@/types/outfitPage";
import { OutfitInterface } from "@/types/outfitStore";
import { useLocalSearchParams } from "expo-router";
import React, { useEffect, useState } from "react";
import { Text } from "react-native";
const CompleteOutfitScreen = () => {
  const { id  } = useLocalSearchParams();
  const outfits = outfitStore((state: any) => state.outfits);
  const [currentOutfits, setcurrentOutfits] = useState<CompleteOutfitProps>();
  useEffect(() => {
    const AllValuesCurrentOutfitObject = outfits.find(
      (outfit: OutfitInterface) => String(id) === String(outfit.id)
    );
    const {
      id: outiftID,
      image,
      name,
      ...currentOutfits
    } = AllValuesCurrentOutfitObject;
    setcurrentOutfits(currentOutfits);
  }, []);
  return (
    <>
      <Text>Outfit Screen</Text>
      {currentOutfits ? <CompoleteOutfit {...currentOutfits} /> : <></>}
    </>
  );
};

export default CompleteOutfitScreen;

import { CompoleteOutfit } from "@/components/outfitPage";
import { outfitStore } from "@/store";
import { CompleteOutfitProps } from "@/types/outfitPage";
import { OutfitInterface } from "@/types/outfitStore";
import { useLocalSearchParams } from "expo-router";
import React, { useEffect, useState } from "react";
import { Text } from "react-native";

const CompleteOutfitScreen = () => {
  const { id } = useLocalSearchParams();
  const outfits = outfitStore((state: any) => state.outfits);
  const [currentoutfits, setcurrentOutfits] = useState<CompleteOutfitProps>();
  useEffect(() => {
    const AllValuesCurrentOutfitObject = outfits.find(
      (outfit: OutfitInterface) => String(id) === String(outfit.id)
    );
    const {
      id: outfitid,
      image,
      name,
      ...currentoutfitsDestructured
    } = AllValuesCurrentOutfitObject;
    setcurrentOutfits(currentoutfitsDestructured);
  }, []);
  return (
    <>
      <Text>Outfit Screen</Text>
      {currentoutfits ? <CompoleteOutfit {...currentoutfits} /> : <></>}
    </>
  );
};

export default CompleteOutfitScreen;

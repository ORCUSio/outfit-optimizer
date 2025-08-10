import { CompleteOutfitProps } from "@/types/outfitPage";
export interface OutfitInterface extends CompleteOutfitProps {
  name: string;
  id: string;
  image: string;
}

export type OutfitStoreType = {
  outfits: OutfitInterface[] | null;
};

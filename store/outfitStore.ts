import { OutfitStoreType } from "@/types/outfitStore";
import { create } from "zustand";
export const outfitStore = create<OutfitStoreType>((set) => ({
  outfits: [
    {
      name: "streetwear",
      id: "1",
      image:
        "https://l6jg1o9dee.ufs.sh/f/Vkdt1CIPD4KcVvBI0WPD4Kc69CZkhMjSRXlLoQyFx3NfYtsv",
      tshirts: [
        "https://l6jg1o9dee.ufs.sh/f/Vkdt1CIPD4KcdchvWsT3JpPFVC789n06OMe4oNZQAWy12gDh",
        "https://l6jg1o9dee.ufs.sh/f/Vkdt1CIPD4KcD8nVPVQEeuRdV2TUcGxAjgozBXCFlZPQLWrf",
        "https://l6jg1o9dee.ufs.sh/f/Vkdt1CIPD4KcoLwkKlpdA3J4SVGvFnIy57rca9QR1Ppjsiw2",
      ],
      pants: [
        "https://l6jg1o9dee.ufs.sh/f/Vkdt1CIPD4Kc4njcaSRRQKsyNF3h6MBe8outW7kYUX5EwmIOhttps://l6jg1o9dee.ufs.sh/f/Vkdt1CIPD4Kc4njcaSRRQKsyNF3h6MBe8outW7kYUX5EwmIO",
        "https://l6jg1o9dee.ufs.sh/f/Vkdt1CIPD4Kc6iYH8kfVjzLxYqksW39ZNy1oUGROJKCu0HFD",
        "https://l6jg1o9dee.ufs.sh/f/Vkdt1CIPD4Kck9YVpiq2G4ciX0dIAFuxKRkSOEhr8p3mtslQ",
      ],
      shoes: [
        "https://l6jg1o9dee.ufs.sh/f/Vkdt1CIPD4KctZwYUnMxIWlgeuZLkRTs6rn4qMHYEoOF5AXb",
        "https://l6jg1o9dee.ufs.sh/f/Vkdt1CIPD4Kcs0Te4jS57Ib21OtCPmNdyoKEuJSVRvHnzkr8",
        "https://l6jg1o9dee.ufs.sh/f/Vkdt1CIPD4KcMV2AWJmNyL2Sz4QFjRcNATMgWkC5tafVnmi0",
      ],
      hats: [
        "https://l6jg1o9dee.ufs.sh/f/Vkdt1CIPD4KcVvBI0WPD4Kc69CZkhMjSRXlLoQyFx3NfYtsv",
        "https://l6jg1o9dee.ufs.sh/f/Vkdt1CIPD4Kc13QBIwh9kLMQaHPD4nlw2GTS8gxrVehJOpAq",
        "https://l6jg1o9dee.ufs.sh/f/Vkdt1CIPD4KciXKJQQDkYwE6Rc9e0hbPydKGNWBotkMl5Vmp",
      ],
    },
  ],
}));

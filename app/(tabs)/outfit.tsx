import React, { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
const Outfit = () => {
  const tshirts = [
    "https://l6jg1o9dee.ufs.sh/f/Vkdt1CIPD4KcdchvWsT3JpPFVC789n06OMe4oNZQAWy12gDh",
    "https://l6jg1o9dee.ufs.sh/f/Vkdt1CIPD4KcD8nVPVQEeuRdV2TUcGxAjgozBXCFlZPQLWrf",
    "https://l6jg1o9dee.ufs.sh/f/Vkdt1CIPD4KcoLwkKlpdA3J4SVGvFnIy57rca9QR1Ppjsiw2",
  ];
  const pants = [
    "https://l6jg1o9dee.ufs.sh/f/Vkdt1CIPD4Kc4njcaSRRQKsyNF3h6MBe8outW7kYUX5EwmIOhttps://l6jg1o9dee.ufs.sh/f/Vkdt1CIPD4Kc4njcaSRRQKsyNF3h6MBe8outW7kYUX5EwmIO",
    "https://l6jg1o9dee.ufs.sh/f/Vkdt1CIPD4Kc6iYH8kfVjzLxYqksW39ZNy1oUGROJKCu0HFD",
    "https://l6jg1o9dee.ufs.sh/f/Vkdt1CIPD4Kck9YVpiq2G4ciX0dIAFuxKRkSOEhr8p3mtslQ",
  ];
  const shoes = [
    "https://l6jg1o9dee.ufs.sh/f/Vkdt1CIPD4KctZwYUnMxIWlgeuZLkRTs6rn4qMHYEoOF5AXb",
    "https://l6jg1o9dee.ufs.sh/f/Vkdt1CIPD4Kcs0Te4jS57Ib21OtCPmNdyoKEuJSVRvHnzkr8",
    "https://l6jg1o9dee.ufs.sh/f/Vkdt1CIPD4KcMV2AWJmNyL2Sz4QFjRcNATMgWkC5tafVnmi0",
  ];
  const hats = [
    "https://l6jg1o9dee.ufs.sh/f/Vkdt1CIPD4KcVvBI0WPD4Kc69CZkhMjSRXlLoQyFx3NfYtsv",
    "https://l6jg1o9dee.ufs.sh/f/Vkdt1CIPD4Kc13QBIwh9kLMQaHPD4nlw2GTS8gxrVehJOpAq",
    "https://l6jg1o9dee.ufs.sh/f/Vkdt1CIPD4KciXKJQQDkYwE6Rc9e0hbPydKGNWBotkMl5Vmp",
  ];

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
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  itemContainer: {
    marginBottom: 20,
    alignItems: "center",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: 100,
    height: 100,
    marginHorizontal: 10,
    resizeMode: "contain",
  },
  arrow: {
    fontSize: 20,
    paddingHorizontal: 10,
  },
});

export default Outfit;

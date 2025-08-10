import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    paddingVertical: 24,
  },
  card: {
    backgroundColor: "#f7f7f7",
    borderRadius: 18,
    marginBottom: 24,
    paddingBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 2,
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start", // ensure children align left
  },
  productImage: {
    alignSelf: "flex-start",
    width: 120,
    height: 120,
    get borderTopLeftRadius(): number {
      return styles.card.borderRadius;
    },
    get borderTopRightRadius(): number {
      return styles.card.borderRadius;
    },
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    marginBottom: 16,
    backgroundColor: "#e0e0e0",
  },
  productName: {
    fontSize: 14,
    fontWeight: "600",
    color: "#222",
    textAlign: "left",
    alignSelf: "flex-start",
    marginLeft: 8,
  },
});

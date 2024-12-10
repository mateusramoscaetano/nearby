import { StyleSheet } from "react-native";
import { colors, fontFamily } from "@/styles/theme";

export const s = StyleSheet.create({
  container: {
    width: 310,
    height: 56,
    maxHeight: 56,
    backgroundColor: colors.green.base,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 12,
  },
  title: {
    fontFamily: fontFamily.semiBold,
    fontSize: 16,
    color: colors.gray[100],
  },
});

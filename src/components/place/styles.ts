import { StyleSheet } from "react-native";

import { colors, fontFamily } from "@/styles/theme";

export const styles = StyleSheet.create({
  container: {
    height: 120,
    width: "100%",
    flexDirection: "row",
    gap: 16,
    borderWidth: 1,
    borderColor: colors.gray[200],
    borderRadius: 12,
    padding: 8,
    alignItems: "center",
  },
  image: {
    width: 116,
    height: 104,
    backgroundColor: colors.gray[200],
    borderRadius: 8,
  },
  content: { flex: 1, gap: 4 },
  name: {
    fontFamily: fontFamily.medium,
    fontSize: 14,
    color: colors.gray[600],
  },
  description: {
    fontFamily: fontFamily.regular,
    fontSize: 12,
    color: colors.gray[500],
  },
  footer: { flexDirection: "row", marginTop: 10, gap: 7 },
  tickets: {
    fontFamily: fontFamily.regular,
    fontSize: 12,
    color: colors.gray[400],
  },
});

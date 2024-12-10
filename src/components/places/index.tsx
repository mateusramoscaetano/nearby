import BottomSheet, { BottomSheetFlatList } from "@gorhom/bottom-sheet";
import { PlaceProps, Place } from "../place";
import { styles } from "./styles";

import { View, useWindowDimensions, Text } from "react-native";
import { useRef } from "react";

type Props = {
  data: PlaceProps[];
};

export function Places({ data }: Props) {
  const dimensions = useWindowDimensions();
  const bottomSheetRef = useRef<BottomSheet>(null);

  const snapPoint = {
    min: 278,
    max: dimensions.height - 208,
  };

  return (
    <BottomSheet
      snapPoints={[snapPoint.min, snapPoint.max]}
      handleIndicatorStyle={styles.indicator}
      backgroundStyle={styles.container}
      enableOverDrag={false}
      ref={bottomSheetRef}
      style={styles.container}
    >
      <BottomSheetFlatList
        contentContainerStyle={styles.content}
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Place data={item} />}
        ListHeaderComponent={() => (
          <Text style={styles.title}>Explore locais perto de você</Text>
        )}
        showsVerticalScrollIndicator={false}
      />
    </BottomSheet>
  );
}

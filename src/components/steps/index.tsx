import { Text, View } from "react-native";

import { styles } from "./styles";
import { Step } from "../step";
import { IconMapPin, IconQrcode, IconTicket } from "@tabler/icons-react-native";
import { Button } from "../button";

export function Steps() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Veja como funciona:</Text>
      <Step
        title="Encontre estabelecimentos"
        description="Veja locais perto de você que são parceiros Nearby"
        icon={IconMapPin}
      />
      <Step
        title="Ative o cupom com QR Code"
        description="Escaneie o código no estabelecimento para usar o benefício"
        icon={IconQrcode}
      />
      <Step
        title="Garanta vantagens perto de você"
        description="Veja locais perto de você que são parceiros Nearby"
        icon={IconTicket}
      />
    </View>
  );
}

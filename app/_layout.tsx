import { Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function RootLayout() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={{ padding: 16 }}>
        <Text>Edit app/index.tsx to edit this screen.</Text>
        <TextInput
          placeholder="Search city.."
          placeholderTextColor="#999"
          style={{
            borderWidth: 1,
            borderColor: "#ddd",
            borderRadius: 8, 
            padding: 10, 
            marginTop: 12,
           }}

        />
      </View>
    </SafeAreaView>
  );
}

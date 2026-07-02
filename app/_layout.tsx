import { Text, TextInput, TouchableOpacity, View } from "react-native";
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
        <TouchableOpacity
          onPress={() => alert("Searching!")}
          style={{
          backgroundColor: "#2563EB",
          padding: 12,
          borderRadius: 8,
          marginTop: 10,
          alignItems: "center",
        }}>
          <Text style={{ color: "white", fontWeight: "bold" }}>Search</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

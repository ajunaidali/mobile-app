import { FlatList, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const properties = [
  { id: '1', title: 'Modern Villa', city: 'Mumbai', price: '₹1.2Cr' },
  { id: '2', title: 'Sea View Flat', city: 'Mumbai', price: '₹85L' },
  { id: '3', title: 'Studio Loft', city: 'Bangalore', price: '₹32L' },
]

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

      <FlatList
        data={properties}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ padding: 16 }}
        renderItem={({ item }) => (
          <View 
          style={{
           backgroundColor: "#f9f9f9",
           padding: 12,
           borderRadius: 10,
           marginBottom: 10,
          }}>
            <Text style={{fontWeight: "bold" }}>{item.title}</Text>
            <Text style={{ color: "#666" }}>{item.city}</Text>
            <Text style={{ color: "#2563EB", fontWeight: "bold" }}>{item.price}</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
}

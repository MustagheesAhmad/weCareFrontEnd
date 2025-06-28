// screens/RequestDietPlanScreen.tsx
import { useNavigation } from "@react-navigation/native";
import { router } from "expo-router";
import React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const nutritionists = [
  {
    id: 1,
    name: "Dr. Umer Sami",
    specialization: "Specialization",
    fee: "Rs: 2000",
    profileImage: require("../../assets/images/profile-icon.png"), // replace with your image path
  },
  {
    id: 2,
    name: "Dr. Umer Sami",
    specialization: "Specialization",
    fee: "Rs: 2000",
    profileImage: require("../../assets/images/profile-icon.png"), // replace with your image path
  },
  {
    id: 3,
    name: "Dr. Umer Sami",
    specialization: "Specialization",
    fee: "Rs: 2000",
    profileImage: require("../../assets/images/profile-icon.png"), // replace with your image path
  },
];

export default function RequestDietPlanScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.replace("/ParentHome")}>
          <Text style={styles.backText}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Request Diet Plan</Text>
        <View style={{ width: 24 }} />
      </View>
      <ScrollView style={styles.list}>
        {nutritionists.map((item) => (
          <View key={item.id} style={styles.card}>
            <Image source={item.profileImage} style={styles.image} />
            <View style={{ flex: 1 }}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.specialization}>{item.specialization}</Text>
              <Text style={styles.fee}>Fee: {item.fee}</Text>
            </View>
            <View style={styles.buttons}>
              <TouchableOpacity style={styles.viewProfile}>
                <Text style={styles.buttonText}>View Profile</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.requestButton}
                onPress={() => router.push("child-diet-plan")}
              >
                <Text style={styles.buttonText}>Request Diet Plan</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
      <TouchableOpacity
        style={styles.bottomButton}
        onPress={() => {
          router.push("/child-diet-plan");
        }}
      >
        <Text style={styles.bottomButtonText}>Request Diet Plan</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#ffcce5" },
  header: {
    backgroundColor: "#8B347B",
    height: 70,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    justifyContent: "space-between",
  },
  backText: {
    fontSize: 24,
    color: "#fff",
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  list: { flex: 1 },
  card: {
    flexDirection: "row",
    backgroundColor: "#fff",
    padding: 10,
    marginVertical: 8,
    borderRadius: 8,
    alignItems: "center",
  },
  image: { width: 60, height: 60, borderRadius: 30, marginRight: 10 },
  name: { fontWeight: "bold", fontSize: 16 },
  specialization: { fontSize: 12, color: "#777" },
  fee: { marginTop: 4, fontWeight: "500" },
  buttons: { justifyContent: "space-between", alignItems: "flex-end", gap: 5 },
  viewProfile: {
    backgroundColor: "#fff",
    borderColor: "#952D93",
    borderWidth: 1,
    borderRadius: 6,
    padding: 6,
  },
  requestButton: {
    backgroundColor: "#8B347B",
    borderRadius: 6,
    padding: 6,
  },
  buttonText: { color: "#fff", fontSize: 12 },
  bottomButton: {
    backgroundColor: "#8B347B",
    padding: 16,
    borderRadius: 25,
    marginTop: 10,
    alignItems: "center",
  },
  bottomButtonText: { color: "#fff", fontWeight: "bold", fontSize: 16 },
});


import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Profile() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>My Profile</Text>
        <Text style={styles.description}>
          Manage your personal information here.
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FCE7F3",
  },

  content: {
    flex: 1,
    padding: 25,
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#831843",
  },

  description: {
    fontSize: 15,
    color: "#9D174D",
    marginTop: 10,
  },
});

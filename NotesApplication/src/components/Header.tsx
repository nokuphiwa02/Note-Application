
import {View, Text,StyleSheet,TouchableOpacity,} from "react-native";
import { useRouter } from "expo-router";

export default function Header() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <View>
          <Text style={styles.appName}>NOTEBOOK</Text>
          <Text style={styles.subtitle}>
            Your personal notes space
          </Text>
        </View>

        <TouchableOpacity
          style={styles.profileIcon}
          onPress={() => router.push("/profile")}
        >
          <Text style={styles.profileLetter}>N</Text>
        </TouchableOpacity>
      </View>

      {/* Welcome section */}
      <View style={styles.welcomeSection}>
        <Text style={styles.welcomeTitle}>
          Hello!
        </Text>

        <Text style={styles.description}>
          What would you like to write today?
        </Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginBottom: 25,
  },

  topSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 30,
  },

  appName: {
    color: "#BE185D",
    fontSize: 20,
    fontWeight: "bold",
    letterSpacing: 3,
  },

  subtitle: {
    color: "#9D174D",
    fontSize: 12,
    marginTop: 5,
  },

  profileIcon: {
    width: 45,
    height: 45,
    borderRadius: 25,
    backgroundColor: "#F9A8D4",
    justifyContent: "center",
    alignItems: "center",
  },

  profileLetter: {
    color: "#831843",
    fontSize: 20,
    fontWeight: "bold",
  },

  welcomeSection: {
    gap: 7,
  },

  welcomeTitle: {
    color: "#831843",
    fontSize: 28,
    fontWeight: "bold",
  },

  description: {
    color: "#9D174D",
    fontSize: 15,
  },
});

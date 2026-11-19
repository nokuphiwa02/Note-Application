
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import { useRouter } from "expo-router";

export default function Landing() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.content}>

        <Text style={styles.appName}>
          NOTEBOOK
        </Text>

        <Text style={styles.title}>
          Your Thoughts,{"\n"}Your Space.
        </Text>

        <Text style={styles.description}>
          Keep your ideas, memories and important
          information organized in one place.
          Create notes and never lose a thought.
        </Text>

        <View style={styles.noteIcon}>
          <Text style={styles.iconText}>✎</Text>
        </View>

        {/* Register Button */}
        <TouchableOpacity
          style={styles.registerButton}
          onPress={() => router.push("/register")}
        >
          <Text style={styles.registerText}>
            Get Started
          </Text>
        </TouchableOpacity>

        {/* Login Button */}
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => router.push("/login")}
        >
          <Text style={styles.loginText}>
            Already have an account? Login
          </Text>
        </TouchableOpacity>

        <Text style={styles.footerText}>
          Your personal space for every thought.
        </Text>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FCE7F3",
    justifyContent: "center",
    padding: 25,
  },

  content: {
    alignItems: "center",
    gap: 20,
  },

  appName: {
    color: "#BE185D",
    fontSize: 20,
    fontWeight: "bold",
    letterSpacing: 4,
    marginBottom: 25,
  },

  title: {
    color: "#831843",
    fontSize: 38,
    fontWeight: "bold",
    textAlign: "center",
    lineHeight: 46,
  },

  description: {
    color: "#9D174D",
    fontSize: 16,
    textAlign: "center",
    lineHeight: 25,
    marginBottom: 15,
  },

  noteIcon: {
    width: 110,
    height: 110,
    borderRadius: 30,
    backgroundColor: "#F9A8D4",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 15,
  },

  iconText: {
    color: "#831843",
    fontSize: 65,
    fontWeight: "bold",
  },

  registerButton: {
    backgroundColor: "#DB2777",
    padding: 17,
    borderRadius: 15,
    width: "100%",
    alignItems: "center",
    elevation: 3,
  },

  registerText: {
    color: "#FFFFFF",
    fontSize: 17,
    fontWeight: "bold",
  },

  loginButton: {
    backgroundColor: "#FFFFFF",
    padding: 17,
    borderRadius: 15,
    width: "100%",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#F9A8D4",
  },

  loginText: {
    color: "#BE185D",
    fontSize: 16,
    fontWeight: "bold",
  },

  footerText: {
    color: "#BE185D",
    fontSize: 13,
    marginTop: 15,
  },
});

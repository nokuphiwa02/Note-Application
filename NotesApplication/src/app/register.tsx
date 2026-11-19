
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  TextInput,
  ScrollView,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { useRouter } from "expo-router";

export default function Register() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />

      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.content}>

          <Text style={styles.appName}>
            NOTEBOOK
          </Text>

          <Text style={styles.formTitle}>
            Create Account
          </Text>

          <Text style={styles.description}>
            Join Notebook and keep all your thoughts
            organized in one place.
          </Text>

          {/* Full Name */}
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Full Name</Text>
            <TextInput
              placeholder="Enter your full name"
              style={styles.input}
              placeholderTextColor="#9D174D"
            />
          </View>

          {/* Surname */}
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Surname</Text>
            <TextInput
              placeholder="Enter your surname"
              style={styles.input}
              placeholderTextColor="#9D174D"
            />
          </View>

          {/* Email */}
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Email Address</Text>
            <TextInput
              placeholder="Enter your email"
              style={styles.input}
              placeholderTextColor="#9D174D"
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>

          {/* Password */}
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Password</Text>
            <TextInput
              placeholder="Create a password"
              style={styles.input}
              placeholderTextColor="#9D174D"
              secureTextEntry
            />
          </View>

          {/* Register Button */}
          <Pressable
            style={styles.button}
            onPress={() => console.log("Registration button pressed!")}
          >
            <Text style={styles.buttonText}>
              Create Account
            </Text>
          </Pressable>

          {/* Back to Landing Page */}
          <Pressable
            style={styles.backButton}
            onPress={() => router.replace("/")}
          >
            <Text style={styles.backButtonText}>
              Back to Home
            </Text>
          </Pressable>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FCE7F3",
    paddingHorizontal: 24,
  },

  scrollView: {
    flexGrow: 1,
    paddingVertical: 30,
  },

  content: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
  },

  appName: {
    color: "#BE185D",
    fontSize: 18,
    fontWeight: "bold",
    letterSpacing: 4,
    textAlign: "center",
    marginBottom: 25,
  },

  formTitle: {
    color: "#831843",
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 10,
  },

  description: {
    color: "#9D174D",
    fontSize: 15,
    lineHeight: 23,
    marginBottom: 25,
  },

  inputContainer: {
    gap: 8,
    marginBottom: 18,
  },

  label: {
    color: "#831843",
    fontSize: 15,
    fontWeight: "600",
  },

  input: {
    backgroundColor: "#FFFFFF",
    borderColor: "#F9A8D4",
    borderWidth: 1,
    paddingHorizontal: 14,
    paddingVertical: 15,
    color: "#831843",
    fontSize: 16,
    borderRadius: 12,
  },

  button: {
    backgroundColor: "#DB2777",
    paddingVertical: 17,
    paddingHorizontal: 20,
    marginTop: 12,
    borderRadius: 12,
    alignItems: "center",
    elevation: 3,
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
    textTransform: "uppercase",
  },

  backButton: {
    padding: 15,
    alignItems: "center",
    marginTop: 10,
  },

  backButtonText: {
    color: "#BE185D",
    fontSize: 15,
    fontWeight: "600",
  },
});

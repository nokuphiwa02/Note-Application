
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
import { useState } from "react";

import { registerUser } from "../storage/userStorage";

export default function Register() {
  // Store user's information
  const [fullName, setFullName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Track registration loading
  const [loading, setLoading] = useState(false);

  // Navigation
  const router = useRouter();

  // Handle registration
  const handleRegister = async () => {
    // Remove unnecessary spaces
    const trimmedName = fullName.trim();
    const trimmedSurname = surname.trim();
    const trimmedEmail = email.trim();

    // Validate empty fields
    if (
      !trimmedName ||
      !trimmedSurname ||
      !trimmedEmail ||
      !password.trim()
    ) {
      window.alert(
        "Incomplete Information!\nPlease complete all fields."
      );
      return;
    }

    // Validate email format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(trimmedEmail)) {
      window.alert("Invalid Email!\nPlease enter a valid email address.");
      return;
    }

    try {
      setLoading(true);

      // Save user
      await registerUser({
        fullName: trimmedName,
        surname: trimmedSurname,
        email: trimmedEmail,
        password: password,
      });

      // Success message and navigation
      window.alert(
        "Registration Successful!\nYour account has been created successfully."
      );

      // Navigate to Home after user clicks OK
      router.replace("/home");

    } catch (error) {
      console.log("Registration error:", error);

      const message =
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again.";

      // Display error message
      window.alert("Registration Failed!\n" + message);

    } finally {
      setLoading(false);
    }
  };

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
              value={fullName}
              onChangeText={setFullName}
            />
          </View>

          {/* Surname */}
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Surname</Text>

            <TextInput
              placeholder="Enter your surname"
              style={styles.input}
              placeholderTextColor="#9D174D"
              value={surname}
              onChangeText={setSurname}
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
              value={email}
              onChangeText={setEmail}
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
              value={password}
              onChangeText={setPassword}
            />
          </View>

          {/* Register Button */}
          <Pressable
            style={[
              styles.button,
              loading && styles.disabledButton,
            ]}
            onPress={handleRegister}
            disabled={loading}
          >
            <Text style={styles.buttonText}>
              {loading ? "Creating Account..." : "Create Account"}
            </Text>
          </Pressable>

          {/* Back to Home */}
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

  disabledButton: {
    opacity: 0.6,
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

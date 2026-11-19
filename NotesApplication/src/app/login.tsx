
import {View, Text, Pressable, StyleSheet, TextInput, ScrollView,}
 from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { useRouter } from "expo-router";
import { loginUser } from "@/storage/userStorage";
import { useState } from "react";

export default function Login() {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

  const router = useRouter();

  const handleLogin = async () => {
  if (!email.trim() || !password.trim()) {
    window.alert("Please enter your email and password.");
    return;
  }

  try {
    const user = await loginUser(email, password);

    window.alert(`Welcome back, ${user.fullName}!`);

    router.replace("/home");
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Something went wrong.";

    window.alert(message);
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
            Welcome Back!
          </Text>

          <Text style={styles.description}>
            Log in to access your notes and keep
            your thoughts organized.
          </Text>

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

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Password</Text>

            <TextInput
              placeholder="Enter your password"
              style={styles.input}
              placeholderTextColor="#9D174D"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />
          </View>

    
          <Pressable
            style={styles.button}
            onPress={handleLogin}
          >
            <Text style={styles.buttonText}>
              Login
            </Text>
          </Pressable>

          {/* Register Navigation */}
          <View style={styles.registerContainer}>
            <Text style={styles.accountText}>
              Don't have an account?
            </Text>

            <Pressable onPress={() => router.push("/register")}>
              <Text style={styles.registerText}>
                Register
              </Text>
            </Pressable>
          </View>

          {/* Back to Landing */}
          <Pressable
        style={styles.backButton}
        onPress={() => router.replace("/home")}
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
    justifyContent: "center",
  },

  appName: {
    color: "#BE185D",
    fontSize: 18,
    fontWeight: "bold",
    letterSpacing: 4,
    textAlign: "center",
    marginBottom: 30,
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
    marginBottom: 30,
  },

  inputContainer: {
    gap: 8,
    marginBottom: 20,
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
    marginTop: 10,
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

  registerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
    marginTop: 25,
  },

  accountText: {
    color: "#9D174D",
    fontSize: 14,
  },

  registerText: {
    color: "#DB2777",
    fontSize: 14,
    fontWeight: "bold",
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

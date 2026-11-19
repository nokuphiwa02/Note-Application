
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";

import Header from "../components/Header";
import Search from "../components/Search";
import CategorySelector from "../components/CategorySelector";

export default function Home() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      <View style={styles.content}>

        {/* Back Button */}
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.replace("/landing")}
        >
          <Text style={styles.backText}>← </Text>
        </TouchableOpacity>

        <Header />

        <Search />

        <CategorySelector />

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
    paddingHorizontal: 25,
    paddingTop: 20,
  },

  backButton: {
    alignSelf: "flex-start",
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 15,
    paddingVertical: 9,
    borderRadius: 10,
    marginBottom: 15,
  },

  backText: {
    color: "#BE185D",
    fontSize: 14,
    fontWeight: "bold",
  },
});

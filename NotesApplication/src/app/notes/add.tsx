
import {View, Text,TextInput, TouchableOpacity,StyleSheet, StatusBar,ScrollView,} 
from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useLocalSearchParams, useRouter } from "expo-router";

export default function AddNote() {
  const router = useRouter();

  const { category } = useLocalSearchParams<{
    category: string;
  }>();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      <ScrollView contentContainerStyle={styles.content}>

        {/* Back Button */}
        <TouchableOpacity
          onPress={() => router.back()}
          style={styles.backButton}
        >
          <Text style={styles.backText}>← </Text>
        </TouchableOpacity>

        {/* Screen Heading */}
        <Text style={styles.title}>Create New Note</Text>

        <Text style={styles.description}>
          Capture your thoughts and keep everything organized.
        </Text>

        {/* Category */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Category</Text>

          <View style={styles.categoryBox}>
            <Text style={styles.categoryText}>
              {category || "All Notes"}
            </Text>
          </View>
        </View>

        {/* Note Title */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Note Title</Text>

          <TextInput
            style={styles.input}
            placeholder="Enter note title"
            placeholderTextColor="#9D174D"
          />
        </View>

        {/* Note Description */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Description</Text>

          <TextInput
            style={[styles.input, styles.textArea]}
            placeholder="Write your note here..."
            placeholderTextColor="#9D174D"
            multiline
            textAlignVertical="top"
          />
        </View>

        {/* Date */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Date</Text>

          <TextInput
            style={styles.input}
            placeholder="DD/MM/YYYY"
            placeholderTextColor="#9D174D"
          />
        </View>

        {/* Save Button */}
        <TouchableOpacity
          style={styles.saveButton}
          activeOpacity={0.7}
          onPress={() => router.back()}
        >
          <Text style={styles.saveButtonText}>
            Save Note
          </Text>
        </TouchableOpacity>

        {/* Cancel Button */}
        <TouchableOpacity
          style={styles.cancelButton}
          onPress={() => router.back()}
        >
          <Text style={styles.cancelButtonText}>
            Cancel
          </Text>
        </TouchableOpacity>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FCE7F3",
  },

  content: {
    flexGrow: 1,
    padding: 25,
  },

  backButton: {
    marginBottom: 25,
  },

  backText: {
    color: "#BE185D",
    fontSize: 16,
    fontWeight: "600",
  },

  title: {
    color: "#831843",
    fontSize: 28,
    fontWeight: "bold",
  },

  description: {
    color: "#9D174D",
    fontSize: 14,
    marginTop: 8,
    marginBottom: 25,
    lineHeight: 21,
  },

  inputContainer: {
    marginBottom: 18,
  },

  label: {
    color: "#831843",
    fontSize: 15,
    fontWeight: "600",
    marginBottom: 8,
  },

  categoryBox: {
    backgroundColor: "#F9A8D4",
    padding: 15,
    borderRadius: 12,
  },

  categoryText: {
    color: "#831843",
    fontSize: 15,
    fontWeight: "600",
  },

  input: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    padding: 15,
    fontSize: 14,
    color: "#831843",
    borderWidth: 1,
    borderColor: "#F9A8D4",
  },

  textArea: {
    height: 140,
  },

  saveButton: {
    backgroundColor: "#DB2777",
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 15,
  },

  saveButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },

  cancelButton: {
    padding: 15,
    alignItems: "center",
    marginTop: 5,
  },

  cancelButtonText: {
    color: "#BE185D",
    fontSize: 15,
    fontWeight: "600",
  },
});

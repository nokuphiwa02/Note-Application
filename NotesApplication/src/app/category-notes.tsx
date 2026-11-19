
import {View, Text,StyleSheet,TouchableOpacity,StatusBar,ScrollView,} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useLocalSearchParams, useRouter } from "expo-router";
import NoteCard from "../components/NoteCard";

export default function CategoryNotes() {
  const router = useRouter();

  const { category } = useLocalSearchParams<{
    category: string;
  }>();

  const categoryName = category || "All Notes";

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

        {/* Category Header */}
        <Text style={styles.title}>
          {categoryName}
        </Text>

        <Text style={styles.description}>
          View and organize all your {categoryName.toLowerCase()} notes.
        </Text>

        {/* Add Note Button */}
        <TouchableOpacity
          style={styles.addButton}
          activeOpacity={0.7}
          onPress={() =>
            router.push({
              pathname: "/notes/add",
              params: { category: categoryName },
            })
          }
        >
          <Text style={styles.addButtonText}>
            + Add New Note
          </Text>
        </TouchableOpacity>

        {/* Notes Section */}
        <View style={styles.notesHeader}>
          <Text style={styles.sectionTitle}>
            Your Notes
          </Text>

          <Text style={styles.notesCount}>
            0 Notes
          </Text>
        </View>

        {/* Empty Notes Container */}
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyIcon}>📝</Text>

          <Text style={styles.emptyTitle}>
            No notes yet
          </Text>

          <Text style={styles.emptyDescription}>
            You haven't added any notes to this category.
            Start creating your first note!
          </Text>
        </View>
        <NoteCard
        title="My First Note"
        category="Personal"
        content="This is my first note."
        date="19/11/2026"
        onUpdate={() => console.log("Update clicked")}
        onDelete={() => console.log("Delete clicked")}
        />

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

  addButton: {
    backgroundColor: "#DB2777",
    padding: 16,
    borderRadius: 14,
    alignItems: "center",
    marginBottom: 30,
  },

  addButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },

  notesHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },

  sectionTitle: {
    color: "#831843",
    fontSize: 20,
    fontWeight: "bold",
  },

  notesCount: {
    color: "#9D174D",
    fontSize: 13,
  },

  emptyContainer: {
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    padding: 30,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#F9A8D4",
  },

  emptyIcon: {
    fontSize: 45,
    marginBottom: 12,
  },

  emptyTitle: {
    color: "#831843",
    fontSize: 18,
    fontWeight: "bold",
  },

  emptyDescription: {
    color: "#9D174D",
    fontSize: 13,
    textAlign: "center",
    marginTop: 8,
    lineHeight: 20,
  },
});

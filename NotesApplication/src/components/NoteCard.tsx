
import {View,Text,StyleSheet,TouchableOpacity,} from "react-native";

type NoteCardProps = {
  title: string;
  category: string;
  content: string;
  date: string;
  onUpdate: () => void;
  onDelete: () => void;
};

export default function NoteCard({title,category, content,date,onUpdate,onDelete,}: NoteCardProps) {
  return (
    <View style={styles.card}>
      <View style={styles.topSection}>
        <Text style={styles.title}>{title}</Text>

        <Text style={styles.category}>{category}</Text>
      </View>

      <Text style={styles.content}>{content}</Text>

      <Text style={styles.date}>Created: {date}</Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.updateButton}
          onPress={onUpdate}
        >
          <Text style={styles.updateText}>Update</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.deleteButton}
          onPress={onDelete}
        >
          <Text style={styles.deleteText}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFFFFF",
    padding: 16,
    borderRadius: 18,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#F9A8D4",
  },
  topSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  title: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#831843",
    flex: 1,
  },
  category: {
    backgroundColor: "#FCE7F3",
    color: "#BE185D",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
    fontSize: 11,
  },
  content: {
    fontSize: 14,
    color: "#9D174D",
    lineHeight: 21,
    marginBottom: 12,
  },
  date: {
    fontSize: 12,
    color: "#9D174D",
    marginBottom: 15,
  },
  buttonContainer: {
    flexDirection: "row",
    gap: 10,
  },
  updateButton: {
    flex: 1,
    backgroundColor: "#DB2777",
    padding: 11,
    borderRadius: 10,
    alignItems: "center",
  },
  updateText: {
    color: "#FFFFFF",
    fontWeight: "bold",
  },
  deleteButton: {
    flex: 1,
    backgroundColor: "#FCE7F3",
    padding: 11,
    borderRadius: 10,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#DB2777",
  },
  deleteText: {
    color: "#BE185D",
    fontWeight: "bold",
  },
});

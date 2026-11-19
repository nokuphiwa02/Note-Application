
import {
  View,
  TextInput,
  StyleSheet,
  Text,
} from "react-native";

export default function SearchBar() {
  return (
    <View style={styles.container}>
      <Text style={styles.searchIcon}>⌕</Text>

      <TextInput
        style={styles.input}
        placeholder="Search your notes..."
        placeholderTextColor="#9D174D"
        autoCapitalize="none"
      />

      <Text style={styles.filterIcon}>☷</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    paddingHorizontal: 15,
    height: 55,
    borderWidth: 1,
    borderColor: "#F9A8D4",
    marginBottom: 25,
  },

  searchIcon: {
    fontSize: 27,
    color: "#BE185D",
    marginRight: 10,
  },

  input: {
    flex: 1,
    fontSize: 15,
    color: "#831843",
  },

  filterIcon: {
    fontSize: 23,
    color: "#BE185D",
    marginLeft: 10,
  },
});

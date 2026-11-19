
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import { useRouter } from "expo-router";

const categories = [
  { id: "1", name: "All Notes", icon: "📝", count: 12 },
  { id: "2", name: "Personal", icon: "👤", count: 5 },
  { id: "3", name: "Study", icon: "📚", count: 4 },
  { id: "4", name: "Work", icon: "💼", count: 3 },
];

export default function CategorySelector() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Categories</Text>

      <View style={styles.categoryList}>
        {categories.map((category) => (
          <TouchableOpacity
            key={category.id}
            style={styles.categoryCard}
            activeOpacity={0.7}
            onPress={() =>
              router.push({
                pathname: "/category-notes",
                params: { category: category.name },
              })
            }
          >
            <View style={styles.iconContainer}>
              <Text style={styles.icon}>
                {category.icon}
              </Text>
            </View>

            <Text style={styles.categoryName}>
              {category.name}
            </Text>

            <Text style={styles.categoryCount}>
              {category.count} notes
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 25,
  },

  heading: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#831843",
    marginBottom: 15,
  },

  categoryList: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    rowGap: 15,
  },

  categoryCard: {
    width: "48%",
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    padding: 15,
    borderWidth: 1,
    borderColor: "#F9A8D4",
  },

  iconContainer: {
    width: 42,
    height: 42,
    borderRadius: 13,
    backgroundColor: "#FCE7F3",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
  },

  icon: {
    fontSize: 22,
  },

  categoryName: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#831843",
  },

  categoryCount: {
    fontSize: 12,
    color: "#9D174D",
    marginTop: 5,
  },
});

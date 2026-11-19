import { Text, View, StyleSheet, ScrollView } from "react-native";
// import Home from "./home"
import Landing from "./landing";

export default function Index() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <Landing/>
       {/* <Home/> */}
      </ScrollView>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    gap:15,
  paddingVertical: 20,
},
});

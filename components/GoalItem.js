import { StyleSheet, Text, View } from "react-native";

function GoalItem({ text, index }) {
  return (
    <View style={styles.goalItem}>
      <Text style={styles.goalText}>{index + 1 + ". " + text}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  goalItem: {
    marginBottom: 8,
    backgroundColor: "#5e0acc",
    padding: 10,
    borderRadius: 6,
  },
  goalText: {
    color: "white",
  },
});

export default GoalItem;

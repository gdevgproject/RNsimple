import { Pressable, StyleSheet, Text, View } from "react-native";

function GoalItem({ text, index, id, ...props }) {
  return (
    <Pressable onPress={props.onDeleteGoal.bind(this, id)}>
      {/* <Pressable onPress={() => props.onDeleteGoal(id)}> */}
      <View style={styles.goalItem}>
        <Text style={styles.goalText}>{index + 1 + ". " + text}</Text>
      </View>
    </Pressable>
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

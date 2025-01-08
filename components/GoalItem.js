import { Pressable, StyleSheet, Text, View } from "react-native";

function GoalItem({ text, index, id, ...props }) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        // android_ripple={{ color: "black" }}
        onPress={props.onDeleteGoal.bind(this, id)}
        style={(pressData) => pressData.pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>{index + 1 + ". " + text}</Text>
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    backgroundColor: "#5e0acc",
    // padding: 10,
    borderRadius: 6,
  },
  goalText: {
    color: "white",
    padding: 10,
  },
  pressedItem: {
    opacity: 0.5,
  },
});

export default GoalItem;

import { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  FlatList,
  ScrollView,
} from "react-native";

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  const [courseGoals, setCourseGoals] = useState([
    { text: "Learn React Native", key: "1" },
    { text: "Learn Firebase", key: "2" },
    { text: "Learn NestJS", key: "3" },
    { text: "Learn React Native", key: "4" },
    { text: "Learn Firebase", key: "5" },
    { text: "Learn NestJS", key: "6" },
    { text: "Learn React Native", key: "7" },
    { text: "Learn Firebase", key: "8" },
    { text: "Learn NestJS", key: "9" },
    { text: "Learn React Native", key: "10" },
    { text: "Learn Firebase", key: "11" },
    { text: "Learn NestJS", key: "12" },
    { text: "Learn React Native", key: "13" },
    { text: "Learn Firebase", key: "14" },
    { text: "Learn NestJS", key: "15" },
    { text: "Learn React Native", key: "16" },
    { text: "Learn Firebase", key: "17" },
    { text: "Learn NestJS", key: "18" },
  ]);
  // const [courseGoals, setCourseGoals] = useState([
  //   "Learn React Native",
  //   "Learn Firebase",
  //   "Learn NestJS",
  //   "Learn React Native",
  //   "Learn Firebase",
  //   "Learn NestJS",
  //   "Learn React Native",
  //   "Learn Firebase",
  //   "Learn NestJS",
  //   "Learn React Native",
  //   "Learn Firebase",
  //   "Learn NestJS",
  //   "Learn React Native",
  //   "Learn Firebase",
  //   "Learn NestJS",
  //   "Learn React Native",
  //   "Learn Firebase",
  //   "Learn NestJS",
  // ]);

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, key: Math.random().toString() },
    ]);
    // setEnteredGoalText("");
  }
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal!"
          onChangeText={goalInputHandler}
        />
        <Button title="add goal" onPress={addGoalHandler} />
      </View>
      <View style={styles.goalsContainer}>
        <FlatList
          alwaysBounceVertical={false}
          data={courseGoals}
          renderItem={(itemData) => (
            <View style={styles.goalItem}>
              <Text style={styles.goalText}>{itemData.item.text}</Text>
            </View>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: "#cccccc",
    // height: "100%",
    flex: 1,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 18,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
  goalsContainer: {
    flex: 8,
  },
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

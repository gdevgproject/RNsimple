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
    "Learn React Native",
    "Learn Firebase",
    "Learn NestJS",
    "Learn React Native",
    "Learn Firebase",
    "Learn NestJS",
    "Learn React Native",
    "Learn Firebase",
    "Learn NestJS",
    "Learn React Native",
    "Learn Firebase",
    "Learn NestJS",
    "Learn React Native",
    "Learn Firebase",
    "Learn NestJS",
    "Learn React Native",
    "Learn Firebase",
    "Learn NestJS",
  ]);

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      enteredGoalText,
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
        <ScrollView>
          {courseGoals.map((goal, index) => (
            <View key={index} style={styles.goalItem}>
              <Text style={styles.goalText}>
                {index + 1}. {goal}
              </Text>
            </View>
          ))}
        </ScrollView>
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

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
    { text: "Learn React Native", id: "1" },
    { text: "Learn Firebase", id: "2" },
    { text: "Learn NestJS", id: "3" },
    { text: "Learn React Native", id: "4" },
    { text: "Learn Firebase", id: "5" },
    { text: "Learn NestJS", id: "6" },
    { text: "Learn React Native", id: "7" },
    { text: "Learn Firebase", id: "8" },
    { text: "Learn NestJS", id: "9" },
    { text: "Learn React Native", id: "10" },
    { text: "Learn Firebase", id: "11" },
    { text: "Learn NestJS", id: "12" },
    { text: "Learn React Native", id: "13" },
    { text: "Learn Firebase", id: "14" },
    { text: "Learn NestJS", id: "15" },
    { text: "Learn React Native", id: "16" },
    { text: "Learn Firebase", id: "17" },
    { text: "Learn NestJS", id: "18" },
  ]);

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, id: Math.random().toString() },
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
          keyExtractor={(item, index) => item.id}
          renderItem={(itemData) => (
            <View style={styles.goalItem}>
              <Text style={styles.goalText}>
                {itemData.index + 1 + ". " + itemData.item.text}
              </Text>
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

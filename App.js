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
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
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

  function addGoalHandler(enteredGoalText) {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
    // setEnteredGoalText("");
  }

  function deleteGoalHandler(id) {
    setCourseGoals((currentCourseGoals) =>
      currentCourseGoals.filter((goal) => goal.id !== id)
    );
  }

  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={addGoalHandler} />
      <View style={styles.goalsContainer}>
        <FlatList
          alwaysBounceVertical={false}
          data={courseGoals}
          keyExtractor={(item, index) => item.id}
          renderItem={(itemData) => (
            <GoalItem
              text={itemData.item.text}
              index={itemData.index}
              id={itemData.item.id}
              onDeleteGoal={deleteGoalHandler}
            />
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
  goalsContainer: {
    flex: 8,
  },
});

import { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([
    { text: "Master HTML, CSS and JavaScript fundamentals", id: "1" },
    { text: "Learn React core concepts and hooks", id: "2" },
    { text: "Build responsive web apps with React", id: "3" },
    { text: "Learn Next.js for SSR and static generation", id: "4" },
    { text: "Master state management with Redux/Context", id: "5" },
    { text: "Learn React Native basics", id: "6" },
    { text: "Build cross-platform mobile UIs", id: "7" },
    { text: "Implement navigation in React Native", id: "8" },
    { text: "Master React Native animations", id: "9" },
    { text: "Learn TypeScript for type-safety", id: "10" },
    { text: "Implement testing with Jest and RTL", id: "11" },
    { text: "Master API integration and data fetching", id: "12" },
    { text: "Learn authentication and authorization", id: "13" },
    { text: "Optimize performance in React apps", id: "14" },
    { text: "Master deployment and CI/CD", id: "15" },
    { text: "Learn PWA development", id: "16" },
    { text: "Implement security best practices", id: "17" },
    { text: "Master debugging and DevTools", id: "18" },
  ]);
  const [modalIsViable, setModalIsVisible] = useState(false);

  function addGoalHandler(enteredGoalText) {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
    endAddGoalHandler();
  }

  function deleteGoalHandler(id) {
    setCourseGoals((currentCourseGoals) =>
      currentCourseGoals.filter((goal) => goal.id !== id)
    );
  }

  function startAddGoalHandler() {
    setModalIsVisible(true);
  }

  function endAddGoalHandler() {
    setModalIsVisible(false);
  }

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button title="Add new goal" onPress={startAddGoalHandler} />
        {modalIsViable && (
          <GoalInput
            onAddGoal={addGoalHandler}
            visable={modalIsViable}
            onCancel={endAddGoalHandler}
          />
        )}
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
    </>
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

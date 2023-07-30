import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, Platform } from 'react-native';

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState('');
  const [comment, setComment] = useState('');
  const [date, setDate] = useState('');

  const addTaskHandler = () => {
    setTasks((prevTasks) => [...prevTasks, { id: Math.random().toString(), title, comment, date }]);
    setTitle('');
    setComment('');
    setDate('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Todo App</Text>

      <View style={styles.addTaskContainer}>
        <Text style={styles.addTaskLabel}>Title:</Text>
        <TextInput
          style={styles.input}
          value={title}
          onChangeText={(text) => setTitle(text)}
        />
        <Text style={styles.addTaskLabel}>Comment:</Text>
        <TextInput
          style={styles.input}
          value={comment}
          onChangeText={(text) => setComment(text)}
        />
        <Text style={styles.addTaskLabel}>Date:</Text>
        <TextInput
          style={styles.input}
          value={date}
          onChangeText={(text) => setDate(text)}
        />
        <Button
          title="Add Task"
          onPress={addTaskHandler}
          color="#007bff" // Blue background color for the button
        />
      </View>

      <ScrollView style={styles.tasksContainer}>
        {tasks.map((task) => (
          <View key={task.id} style={styles.taskContainer}>
            <View style={styles.task}>
              <Text style={styles.taskTitle}>Title: {task.title}</Text>
              <Text style={styles.taskComment}>Comment: {task.comment}</Text>
              <Text style={styles.taskDate}>Date: {task.date}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 50,
    backgroundColor: 'black', // Black background
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'white', // White text color
  },
  addTaskContainer: {
    backgroundColor: 'black', // Black background
    borderRadius: 8,
    padding: 20,
    marginBottom: 20,
  },
  addTaskLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: 'white', // White text color
  },
  input: {
    borderColor: 'white', // White border color
    borderWidth: 1,
    borderRadius: 4,
    padding: 10,
    marginBottom: 10,
    color: 'white', // White text color
  },
  tasksContainer: {
    flex: 1,
  },
  taskContainer: {
    backgroundColor: '#007bff', // Blue background color
    padding: 10, // Padding around tasks
    marginBottom: 10,
    borderRadius: 8,
  },
  task: {
    backgroundColor: 'black', // Black background
    borderRadius: 8,
    padding: 20,
  },
  taskTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white', // White text color
  },
  taskComment: {
    fontSize: 16,
    marginBottom: 5,
    color: 'white', // White text color
  },
  taskDate: {
    fontSize: 16,
    color: 'white', // White text color
  },
});


import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  Keyboard,
} from 'react-native';

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState('');
  const [comment, setComment] = useState('');
  const [date, setDate] = useState('');

  const addTask = () => {
    Keyboard.dismiss();
    setTasks([...tasks, { title: title, comment: comment, date: date }]);
    setTitle('');
    setComment('');
    setDate('');
  };

  return (
    <View style={styles.container}>
      <View style={styles.addTaskBar}>
        <TextInput
          style={styles.input}
          placeholder="Title"
          value={title}
          onChangeText={(text) => setTitle(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Comment"
          value={comment}
          onChangeText={(text) => setComment(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Date"
          value={date}
          onChangeText={(text) => setDate(text)}
        />
        <TouchableOpacity style={styles.addButton} onPress={addTask}>
          <Text style={styles.addButtonText}>Add Task</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.tasksContainer}>
        <Text style={styles.tasksTitle}>All Tasks:</Text>
        <FlatList
          data={tasks}
          renderItem={({ item }) => (
            <View style={styles.taskItem}>
              <Text style={styles.taskTitle}>{item.title}</Text>
              <Text style={styles.taskComment}>{item.comment}</Text>
              <Text style={styles.taskDate}>{item.date}</Text>
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={styles.tasksList}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  addTaskBar: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderRadius: 8,
    marginRight: 10,
    paddingHorizontal: 10,
  },
  addButton: {
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    paddingHorizontal: 20,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  tasksContainer: {
    flex: 1,
  },
  tasksTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  tasksList: {
    paddingBottom: 20,
  },
  taskItem: {
    marginBottom: 10,
  },
  taskTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  taskComment: {
    fontSize: 14,
  },
  taskDate: {
    fontSize: 14,
    color: 'gray',
  },
});

import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const TodoItem = () => {
  const [title, setTitle] = useState('');
  const [comment, setComment] = useState('');
  const [date, setDate] = useState('');

  const handleAddTodo = () => {
    console.log('Todo Title:', title);
    console.log('Todo Comment:', comment);
    console.log('Todo Date:', date);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Title"
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        style={styles.input}
        placeholder="Comment"
        value={comment}
        onChangeText={setComment}
      />
      <TextInput
        style={styles.input}
        placeholder="Date"
        value={date}
        onChangeText={setDate}
      />
      <Button title="Add Todo" onPress={handleAddTodo} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 8,
    marginBottom: 12,
  },
});

export default TodoItem;
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Colors } from '../assets/colors';
import { Button } from '@rneui/themed';
import ListItem from './ListItem';
import 'react-native-gesture-handler';

function DayList() {

    const [tasks, setTasks] = useState([{ id: 0, text: 'erstes', completed: false }]);
  
  
    const addTask = () => {
      const task = { id: tasks.length, text: '', completed: false };
      setTasks(tasks.concat(task));
      
    };
  
    const toggleTaskCompletion = (taskId) => {
      const updatedTasks = tasks.map((task) => {
        if (task.id === taskId) {
          return { ...task, completed: !task.completed };
        }
        return task;
      });
      setTasks(updatedTasks);
    };
  
    const removeTask = (taskId) => {
      const updatedTasks = tasks.filter((task) => task.id !== taskId);
      setTasks(updatedTasks);
    };
  
    return (
      <View style={styles.container}>
        {
          tasks.map((task) => (
            <ListItem
              key={task}
              task={task}
              onToggle={toggleTaskCompletion}
              onRemove={removeTask}
            />
          ))
        }
  
        <Button style={styles.addButton} onPress={addTask}>
          <Text style={styles.buttonText}>Add Task</Text>
        </Button>
      </View>
    );
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
    },
    heading: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 16,
    },
    input: {
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 4,
      padding: 8,
      marginBottom: 8,
    },
    addButton: {
      backgroundColor: 'blue',
      padding: 12,
      borderRadius: 4,
      alignItems: 'center',
      marginBottom: 16,
    },
    emptyMessage: {
      fontStyle: 'italic',
      marginBottom: 16,
    },
  });

  export default DayList;
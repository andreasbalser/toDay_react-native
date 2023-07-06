import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Styles } from '../assets/styles';
import { Colors } from '../assets/colors';
import App from '../App';
import { CheckBox, Button, Icon } from '@rneui/themed';
import { TextInput } from 'react-native-gesture-handler';


function ListItem ({ task, onToggle, onRemove }) {
  return (
    <View key={task.id} style={styles.taskContainer}>
      <CheckBox
        checked={task.completed}
        onPress={() => onToggle(task.id)}
        iconType="material-community"
        checkedIcon="checkbox-marked"
        uncheckedIcon={'checkbox-blank-outline'}
        checkedColor={Colors.black}
        containerStyle={styles.checkboxContainer}
      />
      <TextInput
        style={[
          styles.taskText,
          task.completed ? styles.completedTask : null,
        ]}
        onChangeText={text => { task.text = text }}
      >
        {task.text}
      </TextInput>
      <Icon
        color="#000"
        name="clear"
        onPress={() => onRemove(task.id)}
        size={30}
        type="material"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  taskContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  taskText: {
    flex: 1,
    marginRight: 8,
  },
  completedTask: {
    opacity: .4
  },
  checkboxContainer: {
    padding: 0,
    marginRight: 8,
  },
  removeButton: {
    backgroundColor: 'red',
    padding: 8,
    borderRadius: 4,
    alignItems: 'center',
  },
});

export default ListItem;
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Colors } from './assets/colors';
import { Button } from '@rneui/themed';
import ListItem from './components/ListItem';
import { render } from 'react-dom';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import 'react-native-gesture-handler';

import RootNavigator from './navigation/TabNavigator/RootNavigator.js';
import { TabView, SceneMap } from 'react-native-tab-view';



const Tab = createMaterialTopTabNavigator();

const App = () => {

  return (
    < >
      <RootNavigator />
    </>
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

export default App;
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import DayList from '../../components/DayList';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="1" component={DayList} />
      <Tab.Screen name="2" component={DayList} />
      <Tab.Screen name="3" component={DayList} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
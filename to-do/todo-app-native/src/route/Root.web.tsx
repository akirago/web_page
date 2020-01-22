import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import TaskList from '../TaskList';
import TaskDetail from '../TaskDetail';
import { NavigationNativeContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

// https://reactnavigation.org/docs/en/next/hello-react-navigation.html

const Root = () => {
  return (
    <View>
      <TaskList />
      <TaskDetail />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Root;
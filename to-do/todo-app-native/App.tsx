import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import TaskList from './src/TaskList';
import CustomButton from './src/CustomButton';

export default function App() {
  return (
    <View style={styles.container}>
      <TaskList />
      <CustomButton />
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

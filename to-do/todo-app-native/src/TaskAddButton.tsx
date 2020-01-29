import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Button,
  Alert,
  Text,
  View,
} from 'react-native'
import CustomButton from './CustomButton';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';


const styles = StyleSheet.create({
  container: {
    // position: 'absolute',
    // right:10,
    // bottom:10
  }
});

const TaskAddButton = () => {
    return(
      <TouchableOpacity onPress={() => {}} style={styles.container}>
        <Ionicons name="ios-add-circle" size={80} color="green" />
      </TouchableOpacity>
    );
};

export default TaskAddButton;
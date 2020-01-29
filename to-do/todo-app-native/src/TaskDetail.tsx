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

const TaskDetail = (props) => {
    return(
      <View>
        <Text>{props.route.params.task.id}</Text>
        <Text>{props.route.params.task.title}</Text>
      </View>
    );
};

export default TaskDetail;
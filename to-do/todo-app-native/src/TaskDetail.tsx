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
        <Text>{props.route.params.id}</Text>
      </View>
    );
};

export default TaskDetail;
import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Button,
  Alert,
  Text,
  View,
} from 'react-native'

const TaskDetail = () => {
    return(

        <Button
          title="Press me"
          onPress={() => Alert.alert('Androidやで')}
          color={'#ffaa99'}
        />
    );
};

export default TaskDetail;
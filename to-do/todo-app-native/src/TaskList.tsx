import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Button,
  Alert,
  Text,
  View,
} from 'react-native'
// functional conponent 
// https://facebook.github.io/react-native/docs/button
const TaskList = (props) => {
    return(
        <View>
            <Text>タスク一覧画面</Text>
        <Button
          title="Press me"
          onPress={() => props.navigation.navigate('タスク詳細')}
          color={'#ffaa99'}
        />
        </View>
    );
};

export default TaskList;
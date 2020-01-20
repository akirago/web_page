import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  View,
} from 'react-native'
// functional conponent 
// https://facebook.github.io/react-native/docs/button
const TaskList = (navigation) => {
    return(
        <View>
            <Text>タスク一覧画面</Text>
        <Button
          title="Press me"
          onPress={() => Alert.alert('iOSやで')}
          color={'#ffaa99'}
        />
        </View>
    );
};

export default TaskList;
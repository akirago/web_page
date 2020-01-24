import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Button,
  Alert,
  Text,
  View,
} from 'react-native'
import Task from './model/TaskModel';
// functional conponent 
// https://facebook.github.io/react-native/docs/button

interface Props {
    task: Task
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#92bbee',
        marginVertical: 5,
        marginHorizontal: 10,
        padding: 10
    }
});

const TaskListItem: React.FC<Props> = (props: Props) => {
    return (
        <View style={styles.container}>
            <Text>{props.task.title}</Text>
            <Text>{props.task.completed ? "完了" : '未完了'}</Text>
        </View>
    )
}

export default TaskListItem
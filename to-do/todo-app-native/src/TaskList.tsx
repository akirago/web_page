import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Button,
  FlatList,
  Alert,
  Text,
  View,
} from 'react-native'
import Task from './model/TaskModel';
import TaskListItem from './TaskListItem';
// functional conponent 
// https://facebook.github.io/react-native/docs/button

const tasks:Task[] = [
  {
    id: 1,
    title: '牛乳を買う',
    completed: false
  },

  {
    id: 2,
    title: '牛乳をもう一つ買う',
    completed: false
  },

  {
    id: 3,
    title: '牛乳をさらにもう一つ　買う',
    completed: false
  }
];

const TaskList = (props) => {
  const moveToTaskDetailFunc = (taskId: number) => {
    props.navigation.navigate('タスク詳細', {
      id: taskId,
    })
  };

    return(
        <View>
          <Text>タスク一覧画面</Text>
          <FlatList
            data={tasks}
            renderItem={({ item }) => <TaskListItem task={item} moveToDetail={moveToTaskDetailFunc}/>}
            keyExtractor={item => item.id.toString()}
          />
        </View>
    );
};

export default TaskList;
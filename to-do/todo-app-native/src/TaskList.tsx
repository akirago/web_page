import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Button,
  FlatList,
  Alert,
  Text,
  View,
  Image,
} from 'react-native'
import Task from './model/TaskModel';
import TaskListItem from './TaskListItem';
import TaskAddButton from './TaskAddButton';
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


const styles = StyleSheet.create({
  container: {
    height: '100%',
  }
});

const TaskList = (props) => {
  const moveToTaskDetailFunc = (task: Task) => {
    props.navigation.navigate('タスク詳細', {
      task,
    })
  };


const moveToTaskCreateFunc = () => {
  props.navigation.navigate('タスク作成', {createTask: (task: Task) => {
    console.log(task);
  }});
}

    return(
        <View style={styles.container}>
          <FlatList
            data={tasks}
            renderItem={({ item }) => <TaskListItem task={item} moveToDetail={moveToTaskDetailFunc}/>}
            keyExtractor={item => item.id.toString()}
          />
          <TaskAddButton moveToAdd={moveToTaskCreateFunc}/>
        </View>
    );
};

export default TaskList;
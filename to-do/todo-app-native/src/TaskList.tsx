import React, {useState} from 'react';
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
import {SwipeListView} from 'react-native-swipe-list-view'
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
  },
  rowBack: {
    alignItems: 'center',
    backgroundColor: '#DDD',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 15,
  },
});

const TaskList = (props) => {
  const [data, setData] = useState(tasks);

  const moveToTaskDetailFunc = (task: Task) => {
    props.navigation.navigate('タスク詳細', {
      task,
    })
  };


const moveToTaskCreateFunc = () => {
  props.navigation.navigate('タスク作成', {createTask: (task: Task) => {
    task.id = data.length + 1;
    setData(data.concat(task))
  }});
}

    return(
        <View style={styles.container}>
          <SwipeListView
            data={data}
            renderItem={({ item }, rowMap) => <TaskListItem task={item} moveToDetail={moveToTaskDetailFunc}/>}
            renderHiddenItem={ (data, rowMap) => (
              <View style={styles.rowBack}>
                  <Text>Left</Text>
                  <Text>Right</Text>
              </View>
       )}
        leftOpenValue={75}
        rightOpenValue={-75}
            keyExtractor={item => item.id.toString()}
          />
          <TaskAddButton moveToAdd={moveToTaskCreateFunc}/>
        </View>
    );
};

export default TaskList;
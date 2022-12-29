import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { globalStyles  } from '../styles/globalStyles';
import { StyleSheet, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Header from '../components/Header';
import TaskItem from '../components/TaskItem';
import AddTask from '../components/AddTask';

export default function Inbox({ onLayoutRootView }) {
  const [tasks, setTasks] = useState([
    {text: 'feed dogs', key: '1'},
    {text: 'watch cats', key: '2'},
    {text: 'catch birds', key: '3'}
  ])

  const pressHandler = (key) => {
    setTasks((prevTasks) => {
      return prevTasks.filter(task => task.key != key)
    })
  }

  const submitHandler = (text) => {
    if(text.length >= 3) {
      setTasks((prevTasks) => {
        let lastTaskKey = 1
        
        if(prevTasks.length != 0) {
          lastTaskKey = parseInt(prevTasks[prevTasks.length-1].key) + 1
        }
        // console.log(lastTaskKey)
        return [
          ...prevTasks,
          {text: text, key: lastTaskKey.toString() }
        ]
      })
    }
    else {
      Alert.alert('Oh no!', 'Must be at least 3 characters long.', [
        {text: 'Ok', onPress: () => console.log('alert closed.')}
      ])
    }
  }

  return (
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss()
    }}>  
      <View style={globalStyles.container} onLayout={onLayoutRootView} >
        <Header headerTitle='Inbox' />
        <View style={globalStyles.content}>
          <AddTask submitHandler={submitHandler} />
          <View style={styles.list}>
            <FlatList
              data={tasks}
              renderItem={({ item }) => (
                <TaskItem item={item} pressHandler={pressHandler} />
              )}
            />
          </View>
        </View>

        <StatusBar style="auto" />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  list: {
    flex: 1,
    marginTop: 20,
  }
});

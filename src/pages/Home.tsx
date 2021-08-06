import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { Header } from '../components/Header';
import { Task, TasksList } from '../components/TasksList';
import { TodoInput } from '../components/TodoInput';

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleAddTask(newTaskTitle: string) {
    setTasks(prevValue => [...prevValue, {
      id: Math.random(),
      title: newTaskTitle,
      done: false,
    }]);
  }

  function handleToggleTaskDone(id: number) {
    const formatTasksArray = tasks.map(task => {
      if(task.id === id){
        return {
          ...task,
          done: true,
        };
      }

      return task;
    });

    setTasks(formatTasksArray);
  }

  function handleRemoveTask(id: number) {
    const removeTask = tasks.filter(task => task.id !== id);

    setTasks(removeTask);
  }

  return (
    <View style={styles.container}>
      <Header tasksCounter={tasks.length} />

      <TodoInput addTask={handleAddTask} />

      <TasksList 
        tasks={tasks} 
        toggleTaskDone={handleToggleTaskDone}
        removeTask={handleRemoveTask} 
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBEBEB'
  }
})
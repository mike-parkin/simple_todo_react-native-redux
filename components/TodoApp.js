import React, { useState } from 'react'
import { 
  Text,
  View,
  StyleSheet,
  FlatList
} from 'react-native'
import { Title, Paragraph, Card, Button, TextInput } from 'react-native-paper';

import { connect } from 'react-redux'
import { addTodo, deleteTodo } from '../redux/actions'


const TodoApp = (props) => {
  const todo_list = props.todo_list
  const [task, setTask] = useState('')

  const handleAddTodo = () => {
    props.dispatch(addTodo(task))
    setTask("")
  }

  const handleDelete = (id) => {
    props.dispatch(deleteTodo(id))
  }

  return (
    <View>
      <Card>
        <Card.Content>
          <Title>Add a Todo!!</Title>
          <TextInput
            mode='outlined'
            label='task'
            value={task}
            onChangeText={task => setTask(task)}
          />
        </Card.Content>
      </Card>
      <Button mode="contained" onPress={handleAddTodo}>
        Add Task
      </Button>
      <FlatList
        data={todo_list}
        keyExtractor={(item => item.id)}
        renderItem={({item, index}) => {
          return (
            <>
              <Text>task number: {item.id}</Text>
              <Text>task: {item.task}</Text>
              <Button onPress={() => handleDelete(item.id)}>delete</Button>
            </>
          )
        }}

      />
    </View>
  )
}


const mapStateToProps = (state, ownProps) => {
  return {
    todo_list: state.todos.todo_list
  }
}

export default connect(mapStateToProps)(TodoApp)
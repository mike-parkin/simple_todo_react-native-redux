import React, { userState } from 'react'
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
  
  const [task, setTask] = useState('')

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




    </View>
  )
}


const mapStateToProps = (state) => {
  return {
    todo_list: state.todos.todo_list
  }
}

export default connect(mapStateToProps)(TodoApp)
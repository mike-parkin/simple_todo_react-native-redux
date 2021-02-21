export const ADD_TODO = 'ADD_TODO'
export const DELETE_TODO = 'DELETE_TODO'

export const addTodo = task => ({
  type: ADD_TODO,
  payload: {
    id: ++nextTodoId,
    task: task
  }
})

export const deleteTodo = id => ({
  type: DELETE_TODO,
  payload: {
    id: id
  }
})
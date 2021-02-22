export const ADD_TODO = 'ADD_TODO'
export const DELETE_TODO = 'DELETE_TODO'

let todoId = 0

export const addTodo = task => ({
  type: ADD_TODO,
  payload: {
    id: ++todoId,
    task: task
  }
})

export const deleteTodo = id => ({
  type: DELETE_TODO,
  payload: {
    id: id
  }
})
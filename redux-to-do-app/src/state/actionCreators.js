import * as types from './actionTypes'
import uuid from 'uuid'

// STEP-7 MAKE ACTION CREATORS THE COMPONENTS CAN USE DIRECTLY
export function changeInput({ inputName, inputValue }) {
  return { 
    type: types.INPUT_CHANGE,
    payload: {
      inputName,
      inputValue,
    }
  }
}

export function addTodo({ todo }) {
  return {
    type: types.ADD_TODO,
    payload: { 
      id: uuid(),
      todo,
      completed: false,
    }
  }
}

export function markTodoComplete(id) {
  return {
    type: types.COMPLETED,
    payload: id,
  }
}

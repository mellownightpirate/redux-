// STEP-3 CREATE ON REDUCER PER SLICE OF STATE
import * as types from './actionTypes'


const initialStateForm = { todo: ''}
export function formReducer(state = initialStateForm, action) {

  switch (action.type) {
    case types.INPUT_CHANGE:
      return {
        ...state,
        [action.payload.inputName]: action.payload.inputValue
      }
    case types.ADD_TODO:
      return initialStateForm
    default:
      return state
  }
}

const initialStateTodoList = []
export function listReducer(state = initialStateTodoList, action) {
  switch (action.type) {
    case types.ADD_TODO:
      return state.concat(action.payload)
    case types.COMPLETED:
      return state.map(todo => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            completed: !todo.completed
          };
        }
        return todo;
      })
    default:
      return state
  }
}

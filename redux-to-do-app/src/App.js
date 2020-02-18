import React from "react";
import { connect } from "react-redux";
import {
  addTodo,
  changeInput,
  markTodoComplete,
  removeCompleted
} from "./state/actionCreators";
// STEP-9 BRING IN THE ACTION CREATORS
import "./App.css";

function App({
  // PROPS COME IN SEVERAL FLAVORS:
  // A- data from redux state
  formValues,
  todoList,
  // B- callbacks to change state (action creators)
  changeInput,
  addTodo,
  markTodoComplete,
  removeCompleted
  // C- props actually injected by the parent component
}) {
  // Event listeners (we still need 'em)
  const onChange = event => {
    // get the interesting stuff from the event
    // call an action creator that comes through props
    changeInput({
      inputName: event.target.name,
      inputValue: event.target.value
    });
  };
  const onSubmit = event => {
    event.preventDefault();
    if (formValues.todo==="")
    return
    // use the event to prevent an undesirable reload
    // call an action creator that comes through props

    // call an action creator that comes through props
    addTodo({
      todo: formValues.todo
    });
  };
  const onMarkTodoComplete = id => event => {
    // call an action creator
    markTodoComplete(id);
  };

  const onRemoveCompleted = event => {
    removeCompleted();
  };

  return (
    <div className="App">
      {/* here we can add a new friend */}
      <h4>Add a todo:</h4>
      <form className="form" onSubmit={onSubmit}>
        <input value={formValues.todo} onChange={onChange} name="todo" />
        <br />        
        
       
        <input type="submit" />
      </form>
      <button onClick={onRemoveCompleted}>Clear Completed</button>

      {/* list of current friends */}
      <h4>Todo List:</h4>
      {todoList.map(td => (
        <div key={td.id}>
          <p
            style={
              td.completed
                ? {
                    textDecoration: "line-through"
                  }
                : null
            }
          >
            {td.todo}
          </p>
          <button onClick={onMarkTodoComplete(td.id)}>Mark Complete</button>
         

        </div>
      ))}
    </div>
  );
}

// STEP-8 USE connect FROM react-redux TO WRAP OUR COMPONENT
function mapStateToProps(state) {
  return {
    // explaining what props the component is interested in
    // left hand side of the colon is the prop received by the component
    // right hand side of the colon is what part of the redux state
    formValues: state.formValues,
    todoList: state.todoList
  };
}
export default connect(
  mapStateToProps,
  // object with action creators imported at the top,
  { addTodo, changeInput, markTodoComplete, removeCompleted }
)(App);

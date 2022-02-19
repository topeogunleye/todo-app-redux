const TODO_ADD = 'todos/TODO_ADD';
const TODO_TOGGLE = 'todos/TODO_TOGGLE';

function reducer(state, action) {
  switch(action.type) {
    case TODO_ADD : {
      // do something and return new state
      return applyAddTodo(state, action);   
    }
    case TODO_TOGGLE : {
      // do something and return new state
      return applyToggleTodo(state, action);
    }
    default : return state;
  }
}

function applyAddTodo(state, action) {
  return state.concat(action.todo);
}


function applyToggleTodo(state, action) {
  return state.map(todo =>
    todo.id === action.todo.id
      ? Object.assign({}, todo, { completed: !todo.completed })
      : todo
  );
}

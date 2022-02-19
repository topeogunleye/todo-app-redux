import { createStore } from 'redux';

const store = createStore(reducer, []);

store.dispatch({
  type: 'TODO_ADD',
  todo: { id: '0', name: 'learn redux', completed: false },
});

console.log(store.getState());


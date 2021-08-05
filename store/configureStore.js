import aluno from './alunos.js';
import aula from './aulas.js';

const reducer = Redux.combineReducers({ aluno, aula });

const store = Redux.createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
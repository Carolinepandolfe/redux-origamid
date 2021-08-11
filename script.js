const reducer = (state = 0, action) => {
  switch(action.type) {
    case 'INCREMENTAR':
      return state + 1;
    case 'REDUZIR':
      return state - 1;
    default:
      return state;     
  }
}

const logger = (store) => (next) => (action) => {
  const result = next(action)
  console.log(action);
  return result;
}

const teste = (store) => (next) => (action) => {
  if(action.type === 'REDUZIR') {
    window.alert('REDUZIR');
  }
  return next(action)
}

const { applyMiddleware, compose } = Redux;

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(applyMiddleware(logger, teste));

const store = Redux.createStore(reducer, enhancer);

const middleware = Redux.applyMiddleware(logger);

store.dispatch({type:'INCREMENTAR'})
store.dispatch({type:'INCREMENTAR'})
store.dispatch({type:'INCREMENTAR'})
store.dispatch({type:'INCREMENTAR'})
store.dispatch({type:'INCREMENTAR'})

console.log(store.getState());
teste()

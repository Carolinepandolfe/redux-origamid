const initialState = {
  loading: false,
  data: null,
  error: null
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case 'FETCH_STARTED':
      return { ...state, loading: true};
    case 'FETCH_SUCCESS':
      return {...state, data: action.payload, loading: false};
    case 'FETCH_ERRROR':
      return {...state, error: action.payload, loading: false}  
    default:
      return state;     
  }
}

const thunk = (store) => (next) => (action) => {
  if(typeof action === 'function') {
    return action(store.dispatch, store.getState);
  }
  return next(action);
}

const { applyMiddleware, compose } = Redux;

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));

const store = Redux.createStore(reducer, enhancer);

const fetchUrl = (url) => {
  return async (dispatch) => {
    try {
      dispatch({ type: 'FETCH_STARTED'});
      const data = await fetch(url).then(res => res.json());
      dispatch({ type: 'FETCH_SUCCESS', payload: data})
    } catch (error) {
      dispatch({ type: 'FETCH_ERROR', payload: error.message });
    }
  }
}

store.dispatch(
  fetchUrl('https://dogsapi.origamid.dev/json/api/photo')
)
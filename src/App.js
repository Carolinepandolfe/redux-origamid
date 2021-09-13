import { useDispatch, useSelector } from "react-redux";

function App() {
  const state     = useSelector(state => state);
  const dispacth  = useDispatch();
  
  return (
    <div>
      <h1>
        Total: {state}
      </h1>
      <button onClick={() => dispacth({ type: 'INCREMENTAR' })}>
        INCREMENTAR
      </button>
    </div>
  );
}

export default App;
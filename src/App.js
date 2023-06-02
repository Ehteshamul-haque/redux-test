import { useSelector, useDispatch } from "react-redux";
import { IncrementNum, DecrementNum } from "./actions";
function App() {
  const myState = useSelector((state) => {
    return state.changeTheNumber
  })
  const dispatch = useDispatch()
  return (
    <div style={{textAlign: 'center'}}>
    <div style={{width: '80%', margin: '50px auto'}}>
     <h1>Redux Counter</h1>
     <button onClick={() => dispatch(IncrementNum(2))}>Increment +</button>
     <p>{myState}</p>
     <button onClick={() => dispatch(DecrementNum(1))}>Decrement -</button>
     </div>
    </div>
  );
}

export default App;

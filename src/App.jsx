import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, incrementByAmount } from './store/slices/counter';

function App() {
  const { counter } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <>
      <h1>
        El contador es
        {' '}
        {counter}
      </h1>
      <div className="card">
        <button type="button" onClick={() => dispatch(increment())}>
          increment
        </button>
        <button type="button" onClick={() => dispatch(decrement())}>
          decrement
        </button>
        <button type="button" onClick={() => dispatch(incrementByAmount(2))}>
          incremente by 2
        </button>
      </div>
    </>
  );
}

export default App;

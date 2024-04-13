import classes from './Counter.module.css';
import {useSelector, useDispatch} from 'react-redux';

import { counterActions } from '../Store';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter);
  const show = useSelector((state) => state.showCounter)

  const incrementCounter = () => {
    dispatch(counterActions.increment());
  }

  const incrementTenCounter = () => {
    dispatch(counterActions.increase(5));
  }

  const decrementCounter = () => {
    dispatch(counterActions.decrement());
  }

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      { show  && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementCounter}>Increment</button>
        <button onClick={incrementTenCounter}>Increase</button>
        <button onClick={decrementCounter}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

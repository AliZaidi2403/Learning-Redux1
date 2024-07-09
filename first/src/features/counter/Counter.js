import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, incrementByAmount, reset } from "./counterSlice";
import { useState } from "react";
function Counter() {
  const [incrementAmount, setIncrementAmount] = useState(0);
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  function addAmount() {
    dispatch(incrementByAmount(incrementAmount));
    setIncrementAmount(0);
  }
  function resetAll() {
    setIncrementAmount(0);
    dispatch(reset());
  }
  return (
    <section>
      <p>{count}</p>
      <div>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>
      <input
        value={incrementAmount}
        onChange={(e) => setIncrementAmount(Number(e.target.value))}
      />
      <div>
        <button onClick={addAmount}>Add Amount</button>
        <button onClick={resetAll}>Reset</button>
      </div>
    </section>
  );
}

export default Counter;

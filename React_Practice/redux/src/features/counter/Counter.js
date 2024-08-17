import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset, incByAmm } from "./counterSlice";
export default function Counter() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  const [incrementByAmmount, setIncrementByAmmount] = useState(0);
  const addvalue = Number(incrementByAmmount) || 0;
  const resetAll = () => {
    setIncrementByAmmount(0);
    dispatch(reset());
  };

  return (
    <div>
      <section>
        <p style={{ color: "white" }}>{count}</p>
        <div>
          <button onClick={() => dispatch(increment())}>+increment</button>
          <button onClick={() => dispatch(decrement())}>- decrement</button>
          <input
            type="text"
            value={incrementByAmmount}
            onChange={(e) => setIncrementByAmmount(e.target.value)}
          ></input>
          <button
            onClick={() => dispatch(incByAmm(addvalue))}
          >AddAmount</button>
          <button onClick={resetAll} >Reset</button>
        </div>
      </section>
    </div>
  );
}

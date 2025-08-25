import { useContext } from "react";
import { Context } from "../context/Context";

const Counter = () => {
  const {count,increment,decrement} = useContext(Context);
  return (
    <div >
        <h1>{count}</h1>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
    </div>
  )
}
export default Counter;

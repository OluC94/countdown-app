import { useState } from "react"
import countdownDisplay from "./countdownDisplay"

export default function Countdown(){
    const [count, setCount] = useState(5);

    function handleDecrement() {
        if (count > 0) {
            setCount(currCount => currCount - 1)
        }
    }

    function handleReset() {
        setCount(5);
    }

    return(
        <div>
            <h1>{countdownDisplay(count)}</h1>
            <p>{count}</p>
            <div className="card">
                <button onClick={handleDecrement}>
                Decrement
                </button>
                <button onClick={handleReset}>
                Reset
                </button>
            </div>
      </div>
    )
}
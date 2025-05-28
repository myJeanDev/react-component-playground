import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);
    function handleCounterChange(inCount) {
        const newCount = count + inCount
        setCount(newCount);
    }

    return (
        <>
            <div className="badge bg-light text-dark m-2">
                <p>{count}</p>
                <div className="d-flex flex-row gap-3">
                    <button onClick={() => handleCounterChange(-1)} className="btn bg-danger">-</button>
                    <button onClick={() => handleCounterChange(1)} className="btn bg-primary">+</button>
                </div>
            </div>
        </>
    );
}

export default Counter;
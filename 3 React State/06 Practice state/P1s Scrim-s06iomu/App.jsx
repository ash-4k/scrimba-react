import React from "react"

export default function App() {
    /**
     * Challenge: 
     * Create state to track our count value (initial value is 0)
     * Don't forget to replace the hard-coded "0" with your new state
     */
    const [counter, updateCounter] = React.useState(0)
    
    function reduceCount() {
        updateCounter(counter - 1);
    }
    
    function increaseCount() {
        updateCounter(counter + 1);
    }
    
    return (
        <main className="container">
            <h1>How many times will Bob say "state" in this section?</h1>
            <div className="counter">
                <button className="minus" aria-label="Decrease count" onClick={reduceCount}>–</button>
                <h2 className="count">{counter}</h2>
                <button className="plus" aria-label="Increase count" onClick={increaseCount}>+</button>
            </div>
        </main>
    )
}

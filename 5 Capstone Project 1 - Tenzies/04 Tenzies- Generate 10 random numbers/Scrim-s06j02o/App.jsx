import Die from "./Die"

/**
 * Challenge:
 * 
 * Write a function (generateAllNewDice) that returns an array 
 * of 10 random numbers between 1-6 inclusive.
 * 
 * Log the array of numbers to the console for now
 */

function generateRandomNum() {
    return Math.floor(Math.random() * 6) + 1;
}

function generateAllNewDice() {
    // const arr = [];
    // for (let i = 0; i < 10; i++) {
    //     arr.push(generateRandomNum())
    // }
    // return arr;
    return new Array(10)
        .fill(0)
        .map(() => generateRandomNum())
}

console.log(generateAllNewDice())

export default function App() {
    return (
        <main>
            <div className="dice-container">
                <Die value={1} />
                <Die value={2} />
                <Die value={3} />
                <Die value={4} />
                <Die value={5} />
                <Die value={6} />
                <Die value={1} />
                <Die value={1} />
                <Die value={1} />
                <Die value={1} />
            </div>
        </main>
    )
}
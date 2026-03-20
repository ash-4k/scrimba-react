import Die from "./Die";
import { use, useState } from "react";

/**
 * Challenge:
 *
 * Create state to hold our array of numbers. (Initialize
 * the state by calling our `generateAllNewDice` function so it
 * loads all new dice as soon as the app loads)
 *
 * Map over the state numbers array to generate our array
 * of Die components and render those in place of our
 * manually-written 10 Die elements.
 */

export default function App() {
  const [diceArray, setDiceArray] = useState(generateAllNewDice());

  function generateAllNewDice() {
    return new Array(10).fill(0).map(() => Math.ceil(Math.random() * 6));
  }

  /** map over dice here */
  const dieElems = diceArray.map((elem) => <Die value={elem}/>);
  console.log(dieElems);

  return (
    <main>
      <div className="dice-container">
        {dieElems}
      </div>
    </main>
  );
}

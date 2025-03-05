import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}
// The use of AI helped me generate some of this helper function
function getDifferentRoll(exclude: number): number {
    let newRoll = d6();
    let attempts = 5;
    while (newRoll === exclude && attempts > 0) {
        newRoll = d6();
        attempts--;
    }
    return newRoll !== exclude ? newRoll : (exclude % 6) + 1; // Pick a fallback if unlucky
}

const first = d6();
const second = getDifferentRoll(first);

export function TwoDice(): React.JSX.Element {
    const [leftDie, setLeftDie] = useState<number>(first);
    const [rightDie, setRightDie] = useState<number>(second);

    const rollLeft = () => setLeftDie(d6());
    const rollRight = () => setRightDie(d6());

    const isWin = leftDie === rightDie && leftDie !== 1;
    const isLose = leftDie === rightDie && leftDie === 1;

    return (
        <div>
            <span data-testid="left-die">{leftDie}</span>
            <span data-testid="right-die">{rightDie}</span>
            <div>
                <Button onClick={rollLeft}>Roll Left</Button>
                <Button onClick={rollRight}>Roll Right</Button>
            </div>
            {isWin && <p>Win</p>}
            {isLose && <p>Lose</p>}
        </div>
    );
}

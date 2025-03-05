import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): React.JSX.Element {
    const [inProgress, setProgress] = useState<boolean>(
            false
        );
    const [attempts, setAttempts] = useState<number>(4);

    function startQuiz() {
        if (attempts > 0) {
            setProgress(true);
            setAttempts(attempts - 1);
        }
    }

    function stopQuiz() {
        setProgress(false);
    }

    function addAttempt() {
        setAttempts(attempts + 1);
    }

    return (
        <div>
            <p>Attempts Remaining: {attempts}</p>
            <Button onClick={startQuiz} disabled={inProgress || attempts === 0}>
                Start Quiz
            </Button>
            <Button onClick={stopQuiz} disabled={!inProgress}>
                Stop Quiz
            </Button>
            <Button onClick={addAttempt} disabled={inProgress}>
                Mulligan
            </Button>
        </div>
    );
}

import { setServers } from "dns";
import React, { useState } from "react";
import { Board } from './Board'


import { calculateWinner } from "../utils/tictactoe";

export function Game() {


    const [stepNumber, setStepNumber] = useState(0)
    const [xIsNext, setxIsNext] = useState(true)

    const [squares, setSquares] = useState(new Array(9))

    const handleClick = (i: number) => {
        console.log('Cell ', i, ' is clicked');

        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        squares[i] = xIsNext ? 'X' : 'O';
        setSquares(squares)
        setStepNumber(stepNumber + 1)
        setxIsNext(!xIsNext)

    }


    const createNewGame = (event: any): void => {
        setSquares(Array(9))
        setxIsNext(true)
        setStepNumber(0)
    }


    const winner = calculateWinner(squares);
    

    let status;
    if (winner) {
        status = 'Winner: ' + winner;
    } else {
        status = 'Next player: ' + (xIsNext ? 'X' : 'O');
    }
    return (
        <div className="game-container">
            <div className='game-grid'>
                <div className="game-board">
                    <Board
                        squares={squares}
                        onClick={(i: number) => handleClick(i)}
                    />
                </div>
                <div className="game-info">
                    <div>{status}</div>
                </div>
                <div className='game-controls'>
                    <button onClick={createNewGame}> Create New Game </button>
                </div>
            </div>
        </div>
    );
}

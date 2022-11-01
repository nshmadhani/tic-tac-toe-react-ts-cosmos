import React from "react";
import {Square, ISquareProps} from './Square'

export interface IBoardProps extends ISquareProps{
    squares: string[],
  }
  

 
export  function Board({ squares, onClick }: IBoardProps) {

    const  renderSquare = function(i: any) {
        return <Square 
          value={squares[i]} 
          onClick={() => onClick(i)}/>;
    }
    

    return (
        <div>
        <div className="board-row">
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>
        <div className="board-row">
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>
        <div className="board-row">
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
      </div>
    )


}
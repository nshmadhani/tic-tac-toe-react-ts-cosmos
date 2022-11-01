import React from "react";

export interface ISquareProps{
    value?: string,
    onClick(i:any): void,
}

export function Square(props:ISquareProps) {
    return (
      <button className="square" onClick={props.onClick}>
        {props.value}
      </button>
    );
  }
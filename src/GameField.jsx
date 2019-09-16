import React, { Component } from 'react';
import './GameField.css';
import Cell from './Cell'

export default class GameField extends Component {
  constructor(props) {
    super(props)
    this.cells = 6;
    this.state = {
      cellWidth: 80,
      gameField: Array(this.cells * this.cells).fill(''),
      isX: true,
    }
  }


  render() {
    const { cellWidth, gameField } = this.state;
    const gameFieldStyles = {
      width: `${this.cells * cellWidth}px`,
      height: `${this.cells * cellWidth}px`,
    }
    return (
      <React.Fragment>
        <div className="Gamefield" style={gameFieldStyles}>
          {gameField.map((e, cell) => (
            <Cell key={cell}
              value={e}
              i={cell}
              clickHandler={this.onCellClickHandler.bind(this, cell)} />
          ))}
        </div>
      </React.Fragment>
    )
  }

  onCellClickHandler = (i) => {
    const player = this.state.isX ? 'X' : 'O'
    if (this.state.gameField[i]) return;
    this.setState(state => ({
      gameField: [...state.gameField.slice(0, i), player, ...state.gameField.slice(i + 1)],
      isX: !state.isX,
    }))
  }
}


import React from "react";
import ReactDOM from "react-dom";
import Square from "./components/Square.js";
import Winner from "./components/Winner.js";

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(16).fill(null),
      xIsNext: true,
      count: 0,
    };
  }

  handleClick(i) {
    const squares = this.state.squares.slice();
    if (Winner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? "X" : "O";
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext,
      count: this.state.count + 1,
    });
  }

  renderSquare(i) {
    return (
      <Square
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}
      />
    );
  }

  render() {
    const winner = Winner(this.state.squares);
    let status;
    if (winner) {
      status = "Winner: " + winner;
    } 
    else if (this.state.count == 25) {
      status = "It's a Tie ";
    else {
      status = "Next player: " + (this.state.xIsNext ? "X" : "O");
    }

    return (
      <div>
        <div className='status'>{status}</div>
        <div className='board'>
          <div className='board-row'>
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
            {this.renderSquare(3)}
            {this.renderSquare(4)}
          </div>
          <div className='board-row'>
            {this.renderSquare(5)}
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
            {this.renderSquare(9)}
          </div>
          <div className='board-row'>
            {this.renderSquare(10)}
            {this.renderSquare(11)}
            {this.renderSquare(12)}
            {this.renderSquare(13)}
            {this.renderSquare(14)}
          </div>
          <div className='board-row'>
            {this.renderSquare(15)}
            {this.renderSquare(16)}
            {this.renderSquare(17)}
            {this.renderSquare(18)}
            {this.renderSquare(19)}
          </div>
          <div className='board-row'>
            {this.renderSquare(20)}
            {this.renderSquare(21)}
            {this.renderSquare(22)}
            {this.renderSquare(23)}
            {this.renderSquare(24)}
          </div>
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className='game'>
        <div className='game-info'>
          <div className='game-title'>
            <b>{`Tic Tac Toe Game`}</b>
          </div>
          <div className='game-instruct'>
            Attain a win, by placing four letters side-by-side.{" "}
          </div>
          <div className='game-board'>
            <Board />
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Game />, document.getElementById("root"));

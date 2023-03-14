const Ship = class {
  constructor(length) {
    this.length = length;
    this.hits = 0;
    this.sunk = false;
  }
  hit() {
    this.hits++;
  }
  isSunk() {
    if (this.hits === this.length) {
      this.isSunk = true;
    }
  }
};

const Gameboard = class {
  constructor() {
    this.boardSize = [10, 10];
    this.misses = [];
    this.ships = this.#generateShips(this.boardSize);
  }

  #generateShips(boardSize) {
    let maxShips = 5;
    for (let i = 1; i <= maxShips; i++) {
      this.ships.i = {
        details: new Ship(i),
        coords: [],
      };
    }
    for (const prop in this.ships) {
      prop.coords = this.#setRandomCoordinates(prop.details.length, boardSize);
    }
  }

  #setRandomCoordinates(length, boardSize) {
    let maxRows = boardSize[0];
    let maxCols = boardSize[1];
    let rowStart = this.#getRandomNum(1, maxRows);
    let colStart = this.#getRandomNum(1, maxCols);
    let coords = [[rowStart, colStart]];
    let horizontal = this.#getRandomNum(1, 2) == 1 ? true : false;

    for (let i = 2; i <= length; i++) {
      if (horizontal) {
        if (length > maxRows - rowStart) {
          colStart--;
          coords.shift([rowStart, colStart]);
        } else {
          colStart++;
          coords.push([rowStart, colStart]);
        }
      } else {
        if (length > maxCols - colStart) {
          rowStart--;
          coords.shift([rowStart, colStart]);
        }
        rowStart++;
        coords.push([rowStart, colStart]);
      }
    }
    return coords;
  }

  #getRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  //takes pair of coordinates, checks if hit ship, calls hit on ship or records coordinates of missed
  receiveAttack(x, y) {}
};

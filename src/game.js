class Ship {
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
}

export class Gameboard {
  constructor() {
    this.boardSize = [10, 10];
    this.misses = [];
    this.ships = this.generateShips(this.boardSize);
  }

  generateShips(boardSize) {
    let maxShips = 5;
    let ships = {};
    for (let i = 1; i <= maxShips; i++) {
      ships[i] = {
        details: new Ship(i),
      };
    }
    for (const ship in this.ships) {
      ship.coords = this.setRandomCoordinates(ship.details.length, boardSize);
    }
    return ships;
  }

  setCoordinates(length) {
    let coords = [[length, length]];
    let increment = length;
    for (let i = 1; i < length; i++) {
      increment++;
      coords.push([length, increment]);
    }

    return coords;
  }

  setRandomCoordinates(length, boardSize) {
    let maxRows = boardSize[0];
    let maxCols = boardSize[1];
    let rowStart = this.getRandomNum(1, maxRows);
    let colStart = this.getRandomNum(1, maxCols);
    let coords = [[rowStart, colStart]];
    let horizontal = this.getRandomNum(1, 2) == 1 ? true : false;
    //make sure coords aren't repeated!!
    for (let i = 1; i < length; i++) {
      if (horizontal) {
        if (length > maxRows - rowStart) {
          colStart--;
          coords.unshift([rowStart, colStart]);
        } else {
          colStart++;
          coords.push([rowStart, colStart]);
        }
      } else {
        if (length > maxCols - colStart) {
          rowStart--;
          coords.unshift([rowStart, colStart]);
        } else {
          rowStart++;
          coords.push([rowStart, colStart]);
        }
      }
    }
    return coords;
  }

  getRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  //takes pair of coordinates, checks if hit ship, calls hit on ship or records coordinates of missed
  receiveAttack(x, y) {}
}

// class Ship {
//   constructor(length) {
//     this.length = length;
//     this.hits = 0;
//     this.sunk = false;
//   }
//   hit() {
//     this.hits++;
//   }
//   isSunk() {
//     if (this.hits === this.length) {
//       this.isSunk = true;
//     }
//   }
// }

const ship = (length) => {
  let hits = 0;

  const hit = () => {
    hits++;
  };

  const isSunk = () => {
    return hits === length ? true : false;
  };
  return { hit, isSunk };
};

export const gameBoard = () => {
  const boardSize = [10, 10];

  const generateBoard = () => {
    //example
    let board = {
      1: {
        1: { status: "none" },
        2: { status: miss },
        3: { status: Battleship },
      },
    };
    for (let i = 1; i <= boardSize[0]; i++) {
      for (let j = 0; j <= boardSize[1]; j++) {
        if (j === 0) {
          // board[i].push("");
        } else {
          // board[i].push(j);
        }
      }
    }
  };

  const generateShips = () => {
    let ships = {
      Carrier: { details: ship(5), coords: setCoordinates(5) },

      Battleship: { details: ship(4), coords: setCoordinates(4) },

      // Cruiser: { details: ship(3), coords: setCoordinates(3) },

      Submarine: { details: ship(3), coords: setCoordinates(3) },

      Destroyer: { details: ship(2), coords: setCoordinates(2) },
    };
    return ships;
  };

  const placeShipRandomly = (length) => {
    const maxRows = boardSize[0];
    const maxCols = boardSize[1];
    let rowStart = getRandomNum(1, maxRows);
    let colStart = getRandomNum(1, maxCols);
    let coords = [[rowStart, colStart]];
    let horizontal = getRandomNum(1, 2) == 1 ? true : false;
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
  };

  const setCoordinates = (length) => {
    let coords = [[length, length]];
    let increment = length;
    for (let i = 1; i < length; i++) {
      increment++;
      coords.push([length, increment]);
    }
    return coords;
  };

  const getRandomNum = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };
  return { generateShips, generateBoard };
};

// export class Gameboard {
//   constructor() {
//     this.boardSize = [10, 10];
//     this.board = this.generateBoard(this.boardSize);
//     this.misses = [];
//     this.ships = this.generateShips();
//   }

//   generateBoard() {
//     let board = [[""]];
//     for (let i = 1; i <= this.boardSize[0]; i++) {
//       for (let j = 0; j <= this.boardSize[1]; j++) {
//         if (j === 0) {
//           board[i].push("");
//         } else {
//           board[i].push(j);
//         }
//       }
//     }
//   }

//   generateShips() {
//     let maxShips = 5;
//     let ships = {};
//     for (let i = 1; i <= maxShips; i++) {
//       ships[i] = {
//         details: new Ship(i),
//       };
//     }
//     for (const ship in this.ships) {
//       ship.coords = this.setRandomCoordinates(ship.details.length);
//     }
//     return ships;
//   }

//   setCoordinates(length) {
//     let coords = [[length, length]];
//     let increment = length;
//     for (let i = 1; i < length; i++) {
//       increment++;
//       coords.push([length, increment]);
//     }
//     return coords;
//   }

//   setRandomCoordinates(length) {
//     let maxRows = this.boardSize[0];
//     let maxCols = this.boardSize[1];
//     let rowStart = this.getRandomNum(1, maxRows);
//     let colStart = this.getRandomNum(1, maxCols);
//     let coords = [[rowStart, colStart]];
//     let horizontal = this.getRandomNum(1, 2) == 1 ? true : false;
//     //make sure coords aren't repeated!!
//     for (let i = 1; i < length; i++) {
//       if (horizontal) {
//         if (length > maxRows - rowStart) {
//           colStart--;
//           coords.unshift([rowStart, colStart]);
//         } else {
//           colStart++;
//           coords.push([rowStart, colStart]);
//         }
//       } else {
//         if (length > maxCols - colStart) {
//           rowStart--;
//           coords.unshift([rowStart, colStart]);
//         } else {
//           rowStart++;
//           coords.push([rowStart, colStart]);
//         }
//       }
//     }
//     return coords;
//   }

//   getRandomNum(min, max) {
//     return Math.floor(Math.random() * (max - min) + min);
//   }

//   //takes pair of coordinates, checks if hit ship, calls hit on ship or records coordinates of missed
//   receiveAttack(x, y) {}
// }

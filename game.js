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
    this.grid = makeGrid();
    this.ship1 = new Ship(1);
    this.ship2 = new Ship(2);
    this.ship3 = new Ship(3);
    this.ship4 = new Ship(4);
    this.ship5 = new Ship(5);
  }

  makeGrid() {
    const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
    let xLength = 10;
    let yLength = 10;
    return { A: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] };
  }

  #generateAlphabet() {}
  //takes pair of coordinates, checks if hit ship, calls hit on ship or records coordinates of missed
  receiveAttack(x, y) {}
};

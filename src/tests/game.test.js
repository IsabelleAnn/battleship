import { test, expect } from "@jest/globals";
import { Gameboard } from "../game.js";

let board = new Gameboard();
test("boardsize is [10, 10]", () => {
  expect(board.boardSize).toEqual([10, 10]);
});

test("length of ship 2 in ships object is 2", () => {
  expect(board.ships[2].details.length).toEqual(2);
});

test("setrandomcoordinates(1) returns array with length of 1", () => {
  expect(board.setRandomCoordinates(1, [10, 10]).length).toEqual(1);
});

test("setcoords(1) returns array with length of 1", () => {
  expect(board.setCoordinates(1).length).toEqual(1);
});
test("setcoords(2) returns array equal to [2,2][2,3]", () => {
  expect(board.setCoordinates(2)).toEqual([
    [2, 2],
    [2, 3],
  ]);
});

test("setrandomcoordinates(5) returns array with length of 5", () => {
  expect(board.setRandomCoordinates(5, [10, 10]).length).toEqual(5);
});
// test("setrandomcoordinates(2) returns array equal to [2,2][2,3]", () => {
//   expect(board.setrandomcoordinates(2)).toEqual([
//     [2, 2],
//     [2, 3],
//   ]);
// });
// test("", () => {
//    let ships = board.generateShips([10, 10]);
//   expect(board.generateShips([10, 10]).ship[1].coords.length).toEqual(1);
// });

// test("length of coords of ship 1 in ships object is 1", () => {
//   expect(board.ships[1].coords.length).toEqual(1);
// });

//test if coords are consecutive for col

//test if coords stay on grid

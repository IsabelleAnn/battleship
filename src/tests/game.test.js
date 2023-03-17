import { test, expect } from "@jest/globals";
import { gameBoard } from "../game.js";

let newGame = gameBoard();
let ships = newGame.generateShips();
test("coords of Destroyer should be [[2,2],[2,3]]", () => {
  expect(ships.Destroyer.coords).toEqual([
    [2, 2],
    [2, 3],
  ]);
});
test("coords of Submarine should be [[3,3],[3,4],[3,5]]", () => {
  expect(ships.Submarine.coords).toEqual([
    [3, 3],
    [3, 4],
    [3, 5],
  ]);
});
test("coords of Carrier should be [[5,5],[5,6],[5,7],[5,8],[5,9]]", () => {
  expect(ships.Carrier.coords).toEqual([
    [5, 5],
    [5, 6],
    [5, 7],
    [5, 8],
    [5, 9],
  ]);
});

test("board", () => {
  expect().toEqual();
});

// test("", () => {});

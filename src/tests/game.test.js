import { test, expect } from "@jest/globals";
import { gameBoard } from "../game.js";

let boardFactory = gameBoard();
let newBoard = boardFactory.generateBoard();
let ships = boardFactory.generateShips(newBoard);
boardFactory.placeShip(newBoard, ships);
// test("coords of Destroyer should be [[2,2],[2,3]]", () => {
//   expect(ships.Destroyer.coords).toEqual([
//     [2, 2],
//     [2, 3],
//   ]);
// });
// test("coords of Submarine should be [[3,3],[3,4],[3,5]]", () => {
//   expect(ships.Submarine.coords).toEqual([
//     [3, 3],
//     [3, 4],
//     [3, 5],
//   ]);
// });
// test("coords of Carrier should be [[5,5],[5,6],[5,7],[5,8],[5,9]]", () => {
//   expect(ships.Carrier.coords).toEqual([
//     [5, 5],
//     [5, 6],
//     [5, 7],
//     [5, 8],
//     [5, 9],
//   ]);
// });

test("board [1],[1] status is none", () => {
  expect(newBoard["1"]["1"].status).toEqual("none");
});

test("Destroyer coords should be [[7,8],[7,9]]", () => {
  expect(ships.Destroyer.coords).toEqual([
    [7, 8],
    [7, 9],
  ]);
});
let horizontal = false;
if (horizontal) {
  test("board status for coords [7,9] should be Destroyer", () => {
    expect(newBoard["7"]["9"].status).toEqual("Destroyer");
  });

  test("board status for coords [7,5] should be Carrier", () => {
    expect(newBoard["7"]["5"].status).toEqual("Carrier");
  });
} else {
  test("board status for coords [10,9] should be Destroyer", () => {
    expect(newBoard["10"]["9"].status).toEqual("Destroyer");
  });
  test("board status for coords [3,9] should be Carrier", () => {
    expect(newBoard["3"]["9"].status).toEqual("Carrier");
  });
}

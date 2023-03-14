import { test, expect } from "jest";
import * as game from "game.js";
let ship5 = new Ship(5);
ship5.hit();
test("increase number of hits in ship", () => {
  expect(ship5.hits).toBe(1);
});

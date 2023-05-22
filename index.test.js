const randomIndex = require("./index.js").randomIndex;
const randomWord = require("./index.js").randomWord;
const results = require("./index.js").results;

test("Random index is smaller than or equal to 7", () => {
  expect(randomIndex).toBeLessThanOrEqual(7);
});

test("Word is five letters long", () => {
  expect(randomWord).toHaveLength(5);
});

test("Returns an array", () => {
  expect(results).toEqual(
    expect.arrayContaining([expect.objectContaining({ letter: "p" })])
  );
});

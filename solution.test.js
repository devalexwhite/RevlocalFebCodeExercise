const computeTotalPrice = require("./solution").computeTotalPrice;

test("Empty array", () => {
  const testCase = [];
  expect(computeTotalPrice(testCase)).toEqual("$0.00");
});

test("Sets of unique [1]", () => {
  const testCase = ["A"];
  expect(computeTotalPrice(testCase)).toEqual("$299.00");
});

test("No unique", () => {
  const testCase = ["A", "A"];
  expect(computeTotalPrice(testCase)).toEqual("$598.00");
});

test("Sets of unique [1,2,3,4]", () => {
  const testCase = ["A", "B", "C", "D", "A", "B", "C", "A", "B", "A"];
  expect(computeTotalPrice(testCase)).toEqual("$2631.20");
});

test("Sets of unique [5,3]", () => {
  const testCase = ["A", "A", "B", "B", "C", "C", "D", "E"];
  expect(computeTotalPrice(testCase)).toEqual("$1928.55");
});

test("Sets of unique [5,5]", () => {
  const testCase = ["A", "B", "C", "D", "E", "A", "B", "C", "D", "E"];
  expect(computeTotalPrice(testCase)).toEqual("$2242.50");
});

const input1 = [1, 8, 6, 2, 5, 4, 8, 3, 7];
const input2 = [1, 2, 4, 3];
const input3 = [1, 2, 1];
const input4 = [2, 3, 10, 5, 7, 8, 9];
const input5 = [2, 3, 4, 5, 18, 17, 6];
const input6 = [1, 3, 2, 5, 25, 24, 5];

const output1 = 49;
const output2 = 4;
const output3 = 2;
const output4 = 36;
const output5 = 17;
const output6 = 120;

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(heights) {
  let max = 0;

  for (let i = 0; i < heights.length; i++) {
    for (let j = 0; j < heights.length; j++) {
      if (Math.min(heights[i], heights[j]) * (j - i) > max) {
        max = Math.min(heights[i], heights[j]) * (j - i);
      }
    }
  }

  return max;
};

/**
 * @param {number[]} height
 * @return {number} works for 17/50 test cases
 */
var maxArea2 = function(heights) {
  if (heights.length === 1) return heights[0];
  if (heights.length === 2) return Math.min(heights[0], heights[1]);
  let max = 0;

  const firstHalf = heights.slice(0, Math.floor(heights.length / 2));
  const secondHalf = heights.slice(Math.floor(heights.length / 2));

  firstHalf.sort((a, b) => b - a);
  secondHalf.sort((a, b) => b - a);

  const releventHeights = [
    firstHalf[0],
    firstHalf[1],
    secondHalf[0],
    secondHalf[1]
  ];

  const barPositions = new Map();

  for (const [index, currentHeight] of heights.entries()) {
    if (releventHeights.includes(currentHeight))
      barPositions.set(index, currentHeight);
  }

  console.log(barPositions);
  const minIndex = Math.min(...barPositions.keys());
  const maxIndex = Math.max(...barPositions.keys());
  const smallerHeightOfTheTwo = Math.min(
    barPositions.get(minIndex),
    barPositions.get(maxIndex)
  );

  console.log(maxIndex, minIndex, smallerHeightOfTheTwo);

  const guess = (maxIndex - minIndex) * smallerHeightOfTheTwo;

  return guess;
};

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea3 = function(heights) {
  if (heights.length === 1) return heights[0];
  if (heights.length === 2) return Math.min(heights[0], heights[1]);

  let start = 0;
  let end = heights.length - 1;
  let minimum = Math.min(heights[start], heights[end]);
  let maxAreaPossible = minimum * (end - start);
  let potentialNewMax = 0;
  let count = 0;

  console.log(heights);
  console.log(maxAreaPossible);

  do {
    count++;
    console.log(
      'Min: ' + minimum,
      'New max: ' + potentialNewMax,
      'Start: ' + start,
      'End: ' + end
    );

    if (Math.min(heights[start + 1], heights[end]) > minimum) {
      start++;
    } else if (Math.min(heights[start], heights[end - 1]) >= minimum) {
      end--;
    }

    minimum = Math.min(heights[start], heights[end]);
    potentialNewMax = minimum * (end - start);

    if (potentialNewMax > maxAreaPossible) {
      maxAreaPossible = potentialNewMax;
    } else if (potentialNewMax === maxAreaPossible) {
      break;
    }

    console.log(
      'Min: ' + minimum,
      'New max: ' + potentialNewMax,
      'Start: ' + start,
      'End: ' + end
    );
  } while (end > start && count < 6);

  console.log('Max area: ' + maxAreaPossible);
  return maxAreaPossible;
};

xit('should pass with the brute force approach', function() {
  expect(maxArea(input1)).toEqual(output1);
  expect(maxArea(input2)).toEqual(output2);
});

xit('should pass with the optimized approach', function() {
  expect(maxArea2(input1)).toEqual(output1);
  expect(maxArea2(input2)).toEqual(output2);
});

it('should pass with the optimized approach', function() {
  expect(maxArea3(input1)).toEqual(output1);
  expect(maxArea3(input2)).toEqual(output2);
  expect(maxArea3(input3)).toEqual(output3);
  expect(maxArea3(input4)).toEqual(output4);
  expect(maxArea3(input5)).toEqual(output5);
  expect(maxArea3(input6)).toEqual(output6);
});

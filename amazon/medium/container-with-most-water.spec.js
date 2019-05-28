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
const output6 = 24;

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
 * @return {number}
 */
var maxArea2 = function(height) {
  let max = 0;
  let start = 0;
  let end = height.length - 1;

  while (end > start) {
    const currentArea = Math.min(height[start], height[end]) * (end - start);

    if (currentArea > max) {
      max = currentArea;
    }

    if (height[start] > height[end]) {
      end--;
    } else {
      start++;
    }
  }

  return max;
};

it('should pass with the brute force approach', function() {
  expect(maxArea(input1)).toEqual(output1);
  expect(maxArea(input2)).toEqual(output2);
  expect(maxArea(input3)).toEqual(output3);
  expect(maxArea(input4)).toEqual(output4);
  expect(maxArea(input5)).toEqual(output5);
  expect(maxArea(input6)).toEqual(output6);
});

it('should pass with the O(n) approach', function() {
  expect(maxArea2(input1)).toEqual(output1);
  expect(maxArea2(input2)).toEqual(output2);
  expect(maxArea2(input3)).toEqual(output3);
  expect(maxArea2(input4)).toEqual(output4);
  expect(maxArea2(input5)).toEqual(output5);
  expect(maxArea2(input6)).toEqual(output6);
});

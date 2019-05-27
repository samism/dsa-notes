const input1 = 'abcabcbb';
const input2 = 'bbbbb';
const input3 = 'pwwkew'; // wke

const output1 = 3;
const output2 = 1;
const output3 = 3;

/**
 * Naive/Quadratic solution.
 *
 * If quicksort curSub + binary search it, can achieve O(n * nlog(n) * log(n)) = O(2n^2log(n))
 *
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  if (!s) return 0;
  if (s.length === 1) return 1;

  const substrings = new Set();
  let curSub = s.charAt(0);

  for (let i = 1; i < s.length; i++) {
    // es6 includes() is linear search
    if (curSub.includes(s.charAt(i))) {
      substrings.add(curSub);
      curSub = s.charAt(i);
      continue;
    }
    curSub += s.charAt(i);
  }

  return [...substrings].reduce((accumilator, currentValue) => {
    return currentValue.length > accumilator.length
      ? currentValue
      : accumilator;
  }).length;
};

var lengthOfLongestSubstring2 = function(s) {
  let startIndex = 0;
  let startingPosition = 0;
  let endingPosition = 1;

  const lastKnownLocation = new Map();

  s.split('').forEach((currentCharacter, i) => {
    //if encountered letter previously, possibly update start of new working substring to
    //one letter after the old letter's position, if that ends up being somewhere more to the right
    if (lastKnownLocation.has(currentCharacter)) {
      startIndex = Math.max(
        startIndex,
        lastKnownLocation.get(currentCharacter) + 1
      );
    }

    //if the startIndex changed above, check if the new length exceeds the old length
    //if it's greater, update the working length to the new positions
    if (endingPosition - startingPosition < i + 1 - startIndex) {
      startingPosition = startIndex;
      endingPosition = i + 1;
    }

    lastKnownLocation.set(currentCharacter, i);
  });

  return endingPosition - startingPosition;
};

it('should pass with the naive approach', function() {
  expect(lengthOfLongestSubstring(input1)).toEqual(output1);
  expect(lengthOfLongestSubstring(input2)).toEqual(output2);
  expect(lengthOfLongestSubstring(input3)).toEqual(output3);
});

it('should pass with the O(n) approach', function() {
  expect(lengthOfLongestSubstring2(input1)).toEqual(output1);
  expect(lengthOfLongestSubstring2(input2)).toEqual(output2);
  expect(lengthOfLongestSubstring2(input3)).toEqual(output3);
});

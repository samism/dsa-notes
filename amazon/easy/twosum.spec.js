const arr1 = [2, 3, 5, 9, 3];
const arr2 = [1, 4, 9, 12, 22];
const arr3 = [-3, -1, 0, 3, 4];

const target1 = 14;
const target2 = 16;
const target3 = -1;

function twoSumNaive(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return [i, j];
      }
    }
  }
  return -1;
}

function twoSumLogN(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    const complement = target - arr[i];
    const complementIndex = binarySearch(arr, complement);
    if (complementIndex !== -1) {
      return [i, complementIndex];
    }
  }
  return -1;
}

function binarySearch(arr, val) {
  return binarySearch2(arr, val, 0, arr.length - 1);
}

function binarySearch2(arr, val, left, right) {
  if (left > right) {
    return -1;
  }

  const mid = left + Math.floor((right - left) / 2);

  if (arr[mid] === val) {
    return mid;
  } else if (arr[mid] < val) {
    return binarySearch2(arr, val, mid + 1, right);
  } else {
    return binarySearch2(arr, val, left, mid - 1);
  }
}

// two-pass hash table approach
function twoSumLinear(arr, target) {
  const map = new Map();
  for (let i = 0; i < arr.length; i++) {
    const compliment = target - arr[i];
    if (arr[i] >= compliment) {
      map.set(arr[i], i);
    }
  }

  for (let i = 0; i < arr.length; i++) {
    const compliment = target - arr[i];
    if (map.has(compliment)) {
      return [i, map.get(compliment)];
    }
  }

  return -1;
}

// one-pass hash table approach
function twoSumLinear2(arr, target) {
  const map = new Map();

  for (let i = 0; i < arr.length; i++) {
    const compliment = target - arr[i];

    if (map.has(compliment)) {
      return [map.get(compliment), i];
    }

    map.set(arr[i], i);
  }
}

it('should pass with the naive approach', function() {
  expect(twoSumNaive(arr1, target1)).toEqual([2, 3]);
  expect(twoSumNaive(arr2, target2)).toEqual([1, 3]);
  expect(twoSumNaive(arr3, target3)).toEqual([1, 2]);
});

it('should pass with the O(nlog(n)) approach', function() {
  expect(twoSumLogN(arr1, target1)).toEqual([2, 3]);
  expect(twoSumLogN(arr2, target2)).toEqual([1, 3]);
  expect(twoSumLogN(arr3, target3)).toEqual([1, 2]);
});

it('should pass with the two-pass O(1) approach', function() {
  expect(twoSumLinear(arr1, target1)).toEqual([2, 3]);
  expect(twoSumLinear(arr2, target2)).toEqual([1, 3]);
  expect(twoSumLinear(arr3, target3)).toEqual([1, 2]);
});

it('should pass with the one-pass O(1) approach', function() {
  expect(twoSumLinear2(arr1, target1)).toEqual([2, 3]);
  expect(twoSumLinear2(arr2, target2)).toEqual([1, 3]);
  expect(twoSumLinear2(arr3, target3)).toEqual([1, 2]);
});

const arr1 = [2, 3, 5, 9, 3];
const arr2 = [1, 4, 9, 12, 22];

const target1 = 14;
const target2 = 16;

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
    const subArr = arr.slice(i + 1);
    console.log(
      'Looking for complement ',
      complement,
      ' in subarray: ',
      subArr
    );
    const complementIndex = binarySearch(subArr, complement);
    console.log('Found complementIndex to be ', complementIndex);
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

  const mid = Math.floor((left + right) / 2);

  if (arr[mid] === val) {
    return mid;
  } else if (arr[mid] > val) {
    return binarySearch2(arr, val, mid + 1, right);
  } else {
    return binarySearch2(arr, val, left, mid - 1);
  }
}

it('should pass with the naive approach', function() {
  expect(twoSumNaive(arr1, target1)).toEqual([2, 3]);
  expect(twoSumNaive(arr2, target2)).toEqual([1, 3]);
});

it('should pass with the O(nlog(n)) approach', function() {
  expect(twoSumLogN(arr1, target1)).toEqual([2, 3]);
  expect(twoSumLogN(arr2, target2)).toEqual([1, 3]);
});

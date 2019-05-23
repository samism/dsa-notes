---
title: Sorts
created: '2019-04-15T13:55:10.946Z'
modified: '2019-04-15T17:39:39.584Z'
---

# Sorts

## Naive

### Bubble Sort
- Worst
- `O(n`<sup>2</sup>`)`

### Insertion Sort
- Slightly better, still bad on average: `O(n`<sup>2</sup>`)`
- Is better than bubble sort when mostly / all sorted
- About half the function calls

## Effecient

### MergeSort
- Recursive: `O(n log(n)`
- Splits array into two lists recursively until base case is met (single element list)
- Uses helper function to stitch lists together at the end
- Is effecient because the helper function can assume its inputs are sorted
- Most ideal sort because is also a **stable** sort (retains original order of the list), most JS engines use this under the hood for `Array.sort`, exception is Firefox using quicksort for certain data types.
- Concept of "stitching" or the merge function is applicable to any problem were you already have two sorted lists.

### QuickSort

- Same as MergeSort (`O(n log(n)`), except the recursive calls work by breaking down the left & right lists based numbers less than & greater than a chosen pivot.
- The final "stich" function joins the left, pivot, and right.
- Pivot: Usually easiest to use the last element in the array. Can choose the first one, but would have to add 1 to each element's index.
- Every variation of QuickSort is about how to arrive at the Pivot.
- Can get `O(n`<sup>2</sup>`)` if given sorted lists (pretty rare) w/ a pivot at the end.

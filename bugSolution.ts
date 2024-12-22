function compare(a: number, b: number): number {
  if (a < b) {
    return -1;
  } else if (a > b) {
    return 1;
  } else {
    return 0;
  }
}

const arr = [1, 2, 3, 4, 5];
arr.sort(compare);
console.log(arr); // Output: [1, 2, 3, 4, 5]

const arr2 = [5, 4, 3, 2, 1];
arr2.sort(compare); // Output: [1, 2, 3, 4, 5]

const arr3 = [1, 5, 2, 4, 3];
arr3.sort(compare); // Output: [1, 2, 3, 4, 5]

//Solution
//The issue is not in the comparison logic, but rather in how the Array.sort() method handles the comparison.
//In some cases, the default comparison of Array.sort() may yield unexpected results, especially for numbers.
//To ensure consistent sorting behavior, you need to explicitly provide the comparison function.

//The original code is perfectly fine.  The unexpected behavior is likely due to how Javascript handles number comparison internally.
// The problem is not in the comparison function itself, but how `Array.sort` uses it, especially when numbers are already sorted.
// The solution is to ensure consistent behavior by using the provided comparison function.
// However, Javascript's `sort` is not fully stable. That is, the order of elements deemed to be equal may not be preserved.
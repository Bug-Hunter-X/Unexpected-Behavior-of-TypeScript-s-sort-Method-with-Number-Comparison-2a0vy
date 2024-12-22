function compare(a, b) {
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

arr.sort(compare); // Output: [1, 2, 3, 4, 5]

const arr2 = [5, 4, 3, 2, 1];
arr2.sort(compare); // Output: [1, 2, 3, 4, 5]

const arr3 = [1, 5, 2, 4, 3];
arr3.sort(compare); //Output: [1, 2, 3, 4, 5]
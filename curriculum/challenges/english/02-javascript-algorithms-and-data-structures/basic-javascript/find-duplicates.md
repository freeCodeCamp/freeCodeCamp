---
id: 66288ccd87056f15c01c3abc
title: Find Duplicates
challengeType: 1
dashedName: find-duplicates
---

# --description--

# --description--

The objective of this challenge is to write a program that efficiently identifies duplicate numbers in a given array.



# --instructions--

Identifying duplicate numbers in an array is a common task in programming. This challenge focuses on writing a program that efficiently finds and prints the duplicate numbers present in a given array.

Write a program that takes the size of the array and the array elements as input from the user. The program should then identify and print the duplicate numbers present in the array.

Use `add`, `join`, `from` function to solve it.

# --hints--

`findDuplicates(5, [2, 4, 2, 6, 3])` should return `"2"`.

```js
assert(findDuplicates(5, [2, 4, 2, 6, 3]) === "2");
```

`findDuplicates(6, [2, 4, 6, 3, 3, 2])` should return `"2 3"`.

```js
assert(findDuplicates(6, [2, 4, 6, 3, 3, 2]) === "2 3");

```

# --seed--
## --seed-contents--

```js
function findDuplicates(size, arr) {
  // Only change code below this line
  return "";
  // Only change code above this line
}
console.log(findDuplicates(5, [2, 4, 2, 6, 3])); 
console.log(findDuplicates(6, [2, 4, 6, 3, 3, 2])); 
```

# --solutions--

```js
function findDuplicates(size, arr) {
  const seen = new Set();
  const duplicates = new Set();
  
  for (let num of arr) {
    if (seen.has(num)) {
      duplicates.add(num);
    } else {
      seen.add(num);
    }
  }
  
  return Array.from(duplicates).join(" ");
}
```

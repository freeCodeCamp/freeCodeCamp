---
id: 661e27588602567c118451d4
title: Learn Arrays and Loops Question D
challengeType: 15
dashedName: learn-arrays-and-loops-question-d
---
# --description--

One of the more complex methods used with arrays are the `splice()` and `slice()` methods. The `splice()` method changes the contents of an array by removing or replacing an element in the array. The `slice()` method returns a shallow copy of a portion of an array into a new array object selected from `begin` to `end` (`end` not included). The original array will not be modified.

For example, to remove the second element from the `characters` array, you can use the following code:

```javascript
const characters = ['Harry', 'Ron', 'Hermione'];
characters.splice(1, 1);
console.log(characters); // Output: ['Harry', 'Hermione']
```

The above element removes the second element from the `characters` array. The `splice()` method takes two arguments: the index of the element to remove and the number of elements to remove.


To create a new array with the second element from the `character` array, you can use the following code:

```javascript
const characters = ['Harry', 'Ron', 'Hermione'];
const newCharacters = characters.slice(1, 2);
console.log(newCharacters); // Output: ['Ron']
```

The above code creates a new array `newCharacters` with the second element from the `characters` array. The `slice()` method takes two arguments: the index of the element to start the slice and the index of the element to end the slice (not included).

# --question--

## --text--

What will be the output of the following JavaScript code snippet?


```javascript
const numbers = [10, 20, 30, 40, 50];
numbers.splice(3, 1);
const slicedNumbers = numbers.slice(2, 4);

console.log(numbers);
console.log(slicedNumbers);
```

## --answers--

`numbers` output: `[10, 20, 30, 50]` and `slicedNumbers` output: `[30, 50]`

---

`numbers` output: `[10, 20, 30, 40]` and `slicedNumbers` output: `[30, 40]`

---

`numbers` output: `[10, 20, 50, 40]` and `slicedNumbers` output: `[20, 50]`

---

`numbers` output: `[10, 20, 30, 50, 40]` and `slicedNumbers` output: `[30, 50]`

## --video-solution--

1

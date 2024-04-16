---
id: 661e27578602567c118451d3
title: Learn Arrays and Loops Question C
challengeType: 15
dashedName: learn-arrays-and-loops-question-c
---
# --description--

One of the most common ways to add a new element to an array is by using the `push()` method. The `push()` method adds one or more elements to the end of an array and returns the new length of the array.

For example, to add a new element to the `pet` array, you can use the following code:

```javascript
const pet = ['cat', 'dog', 'bunny'];
pet.push('parrot');
console.log(pet); // Output: ['cat', 'dog', 'bunny', 'parrot']
```

To remove the last element of an array, you can use the `pop()` method. The `pop()` method removes the last element from an array and returns that element.

For example, to remove the last element from the `pet` array, you can use the following code:

```javascript
const pet = ['cat', 'dog', 'tiger'];
pet.pop();
console.log(pet); // Output: ['cat', 'dog']
```


# --question--

## --text--

Given the following JavaScript code, what will be the output after executing the code snippet?

```javascript
const animals = ['deer', 'whale', 'frog'];
animals.push('shark', 'bear');
const removed = animals.pop();

console.log(animals);
console.log(removed);
```

## --answers--

`['deer', 'whale', 'frog', 'shark', 'bear']` and `'bear'`

---

`['deer', 'whale', 'frog', 'shark']` and `'bear'`

---

`['deer', 'whale', 'frog', 'shark', 'bear']` and `null`

---

`['deer', 'whale', 'frog', 'shark', 'bear']` and `['deer', 'whale', 'frog', 'shark']`

## --video-solution--

2

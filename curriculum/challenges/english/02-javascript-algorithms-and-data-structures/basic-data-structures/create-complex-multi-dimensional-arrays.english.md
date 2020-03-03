---
id: 587d7b7b367417b2b2512b16
title: Create complex multi-dimensional arrays
challengeType: 1
forumTopicId: 301159
---

## Description
<section id='description'>
Awesome! You have just learned a ton about arrays! This has been a fairly high level overview, and there is plenty more to learn about working with arrays, much of which you will see in later sections. But before moving on to looking at <dfn>Objects</dfn>, lets take one more look, and see how arrays can become a bit more complex than what we have seen in previous challenges.
One of the most powerful features when thinking of arrays as data structures, is that arrays can contain, or even be completely made up of other arrays. We have seen arrays that contain arrays in previous challenges, but fairly simple ones. However, arrays can contain an infinite depth of arrays that can contain other arrays, each with their own arbitrary levels of depth, and so on. In this way, an array can very quickly become very complex data structure, known as a <dfn>multi-dimensional</dfn>, or nested array. Consider the following example:

```js
let nestedArray = [ // top, or first level - the outer most array
  ['deep'], // an array within an array, 2 levels of depth
  [
    ['deeper'], ['deeper'] // 2 arrays nested 3 levels deep
  ],
  [
    [
      ['deepest'], ['deepest'] // 2 arrays nested 4 levels deep
    ],
    [
      [
        ['deepest-est?'] // an array nested 5 levels deep
      ]
    ]
  ]
];
```

While this example may seem convoluted, this level of complexity is not unheard of, or even unusual, when dealing with large amounts of data.
However, we can still very easily access the deepest levels of an array this complex with bracket notation:

```js
console.log(nestedArray[2][1][0][0][0]);
// logs: deepest-est?
```

And now that we know where that piece of data is, we can reset it if we need to:

```js
nestedArray[2][1][0][0][0] = 'deeper still';

console.log(nestedArray[2][1][0][0][0]);
// now logs: deeper still
```

</section>

## Instructions
<section id='instructions'>
We have defined a variable, <code>myNestedArray</code>, set equal to an array. Modify <code>myNestedArray</code>, using any combination of <dfn>strings</dfn>, <dfn>numbers</dfn>, and <dfn>booleans</dfn> for data elements, so that it has exactly five levels of depth (remember, the outer-most array is level 1). Somewhere on the third level, include the string <code>'deep'</code>, on the fourth level, include the string <code>'deeper'</code>, and on the fifth level, include the string <code>'deepest'</code>.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>myNestedArray</code> should contain only numbers, booleans, and strings as data elements
    testString: 'assert.strictEqual((function(arr) { let flattened = (function flatten(arr) { const flat = [].concat(...arr); return flat.some (Array.isArray) ? flatten(flat) : flat; })(arr); for (let i = 0; i < flattened.length; i++) { if ( typeof flattened[i] !== ''number'' && typeof flattened[i] !== ''string'' && typeof flattened[i] !== ''boolean'') { return false } } return true })(myNestedArray), true);'
  - text: <code>myNestedArray</code> should have exactly 5 levels of depth
    testString: 'assert.strictEqual((function(arr) {let depth = 0;function arrayDepth(array, i, d) { if (Array.isArray(array[i])) {  arrayDepth(array[i], 0, d + 1);} else {  depth = (d > depth) ? d : depth;}if (i < array.length) {  arrayDepth(array, i + 1, d);}  }arrayDepth(arr, 0, 0);return depth;})(myNestedArray), 4);'
  - text: <code>myNestedArray</code> should contain exactly one occurrence of the string <code>"deep"</code> on an array nested 3 levels deep
    testString: assert((function howDeep(array, target, depth = 0) {return array.reduce((combined, current) => {if (Array.isArray(current)) {  return combined.concat(howDeep(current, target, depth + 1));} else if (current === target) {  return combined.concat(depth);} else {  return combined;}}, []);})(myNestedArray, 'deep').length === 1 && (function howDeep(array, target, depth = 0) {return array.reduce((combined, current) => {if (Array.isArray(current)) {  return combined.concat(howDeep(current, target, depth + 1));} else if (current === target) {  return combined.concat(depth);} else {  return combined;}}, []);})(myNestedArray, 'deep')[0] === 2);
  - text: <code>myNestedArray</code> should contain exactly one occurrence of the string <code>"deeper"</code> on an array nested 4 levels deep
    testString: assert((function howDeep(array, target, depth = 0) {return array.reduce((combined, current) => {if (Array.isArray(current)) {  return combined.concat(howDeep(current, target, depth + 1));} else if (current === target) {  return combined.concat(depth);} else {  return combined;}}, []);})(myNestedArray, 'deeper').length === 1 && (function howDeep(array, target, depth = 0) {return array.reduce((combined, current) => {if (Array.isArray(current)) {  return combined.concat(howDeep(current, target, depth + 1));} else if (current === target) {  return combined.concat(depth);} else {  return combined;}}, []);})(myNestedArray, 'deeper')[0] === 3);
  - text: <code>myNestedArray</code> should contain exactly one occurrence of the string <code>"deepest"</code> on an array nested 5 levels deep
    testString: assert((function howDeep(array, target, depth = 0) {return array.reduce((combined, current) => {if (Array.isArray(current)) {  return combined.concat(howDeep(current, target, depth + 1));} else if (current === target) {  return combined.concat(depth);} else {  return combined;}}, []);})(myNestedArray, 'deepest').length === 1 && (function howDeep(array, target, depth = 0) {return array.reduce((combined, current) => {if (Array.isArray(current)) {  return combined.concat(howDeep(current, target, depth + 1));} else if (current === target) {  return combined.concat(depth);} else {  return combined;}}, []);})(myNestedArray, 'deepest')[0] === 4);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let myNestedArray = [
  // Only change code below this line
  ['unshift', false, 1, 2, 3, 'complex', 'nested'],
  ['loop', 'shift', 6, 7, 1000, 'method'],
  ['concat', false, true, 'spread', 'array'],
  ['mutate', 1327.98, 'splice', 'slice', 'push'],
  ['iterate', 1.3849, 7, '8.4876', 'arbitrary', 'depth']
  // Only change code above this line
];
```

</div>



</section>

## Solution
<section id='solution'>

```js
let myNestedArray = [
  ['unshift', ['deep', ['deeper', ['deepest']]],false, 1, 2, 3, 'complex', 'nested'],
  ['loop', 'shift', 6, 7, 1000, 'method'],
  ['concat', false, true, 'spread', 'array'],
  ['mutate', 1327.98, 'splice', 'slice', 'push'],
  ['iterate', 1.3849, 7, '8.4876', 'arbitrary', 'depth']
];
```

</section>

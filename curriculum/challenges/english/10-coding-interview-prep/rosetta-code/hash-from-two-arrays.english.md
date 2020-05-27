---
title: Hash from two arrays
id: 595671d4d2cdc305f0d5b36f
challengeType: 5
isHidden: false
forumTopicId: 302283
---

## Description
<section id='description'>
Using two Arrays of equal length, create a Hash object where the elements from one array (the keys) are linked to the elements of the other (the values).
<strong>Related task:</strong>
<ul>
  <li><a href="https://rosettacode.org/wiki/Associative arrays/Creation" title="Associative arrays/Creation" target="_blank">Associative arrays/Creation</a></li>
</ul>
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>arrToObj</code> should be a function.
    testString: assert(typeof arrToObj === 'function');
  - text: '<code>arrToObj([1, 2, 3, 4, 5], ["a", "b", "c", "d", "e"])</code> should return <code>{ 1: "a", 2: "b", 3: "c", 4: "d", 5: "e" }</code>'
    testString: assert.deepEqual(arrToObj(...testCases[0]), res[0]);
  - text: '<code>arrToObj([1, 2, 3, 4, 5], ["a", "b", "c", "d"])</code> should return <code>{ 1: "a", 2: "b", 3: "c", 4: "d", 5: undefined }</code>'
    testString: assert.deepEqual(arrToObj(...testCases[1]), res[1]);
  - text: '<code>arrToObj([1, 2, 3], ["a", "b", "c", "d", "e"])</code> should return <code>{ 1: "a", 2: "b", 3: "c" }</code>'
    testString: assert.deepEqual(arrToObj(...testCases[2]), res[2]);
  - text: '<code>arrToObj(["a", "b", "c", "d", "e"], [1, 2, 3, 4, 5])</code> should return <code>{ "a": 1, "b": 2, "c": 3 , "d": 4, "e": 5 }</code>'
    testString: assert.deepEqual(arrToObj(...testCases[3]), res[3]);
  - text: '<code>arrToObj(["a", "b", "c", "d", "e"], [1, 2, 3, 4])</code> should return <code>{ "a": 1, "b": 2, "c": 3 , "d": 4, "e": undefined }</code>'
    testString: assert.deepEqual(arrToObj(...testCases[4]), res[4]);
  - text: '<code>arrToObj(["a", "b", "c"], [1, 2, 3, 4, 5])</code> should return <code>{ "a": 1, "b": 2, "c": 3  }</code>'
    testString: assert.deepEqual(arrToObj(...testCases[5]), res[5]);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function arrToObj (keys, vals) {
  // Good luck!
  return true;
}
```

</div>


### After Test
<div id='js-teardown'>

```js
const testCases = [
  [[1, 2, 3, 4, 5], ['a', 'b', 'c', 'd', 'e']],
  [[1, 2, 3, 4, 5], ['a', 'b', 'c', 'd']],
  [[1, 2, 3], ['a', 'b', 'c', 'd', 'e']],
  [['a', 'b', 'c', 'd', 'e'], [1, 2, 3, 4, 5]],
  [['a', 'b', 'c', 'd', 'e'], [1, 2, 3, 4]],
  [['a', 'b', 'c'], [1, 2, 3, 4, 5]]
];

const res = [
  { 1: 'a', 2: 'b', 3: 'c', 4: 'd', 5: 'e' },
  { 1: 'a', 2: 'b', 3: 'c', 4: 'd', 5: undefined },
  { 1: 'a', 2: 'b', 3: 'c' },
  { a: 1, b: 2, c: 3, d: 4, e: 5 },
  { a: 1, b: 2, c: 3, d: 4, e: undefined },
  { a: 1, b: 2, c: 3 }
];
```

</div>

</section>

## Solution
<section id='solution'>


```js
function arrToObj (keys, vals) {
  return keys.reduce((map, key, index) => {
    map[key] = vals[index];
    return map;
  }, {});
}
```

</section>

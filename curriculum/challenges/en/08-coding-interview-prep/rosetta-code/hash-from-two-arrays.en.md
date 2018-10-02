---
title: Hash from two arrays
id: 595671d4d2cdc305f0d5b36f
challengeType: 5
---

## Description
<section id='description'>
Task:
<p>Using two Arrays of equal length, create a Hash object where the elements from one array (the keys) are linked to the elements of the other (the values)</p>
Related task:
 <a href="http://rosettacode.org/wiki/Associative arrays/Creation" title="Associative arrays/Creation">Associative arrays/Creation</a>
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
- text: <code>arrToObj</code> is a function.
  testString: 'assert(typeof arrToObj === ''function'', ''<code>arrToObj</code> is a function.'');'
- text: '<code>arrToObj([1, 2, 3, 4, 5], ["a", "b", "c", "d", "e"])</code> should return <code>{ 1: "a", 2: "b", 3: "c", 4: "d", 5: "e" }</code>'
  testString: 'assert.deepEqual(arrToObj(...testCases[0]), res[0], ''<code>arrToObj([1, 2, 3, 4, 5], ["a", "b", "c", "d", "e"])</code> should return <code>{ 1: "a", 2: "b", 3: "c", 4: "d", 5: "e" }</code>'');'
- text: '<code>arrToObj([1, 2, 3, 4, 5], ["a", "b", "c", "d"])</code> should return <code>{ 1: "a", 2: "b", 3: "c", 4: "d", 5: undefined }</code>'
  testString: 'assert.deepEqual(arrToObj(...testCases[1]), res[1], ''<code>arrToObj([1, 2, 3, 4, 5], ["a", "b", "c", "d"])</code> should return <code>{ 1: "a", 2: "b", 3: "c", 4: "d", 5: undefined }</code>'');'
- text: '<code>arrToObj([1, 2, 3], ["a", "b", "c", "d", "e"])</code> should return <code>{ 1: "a", 2: "b", 3: "c" }</code>'
  testString: 'assert.deepEqual(arrToObj(...testCases[2]), res[2], ''<code>arrToObj([1, 2, 3], ["a", "b", "c", "d", "e"])</code> should return <code>{ 1: "a", 2: "b", 3: "c" }</code>'');'
- text: '<code>arrToObj(["a", "b", "c", "d", "e"], [1, 2, 3, 4, 5])</code> should return <code>{ "a": 1, "b": 2, "c": 3 , "d": 4, "e": 5 }</code>'
  testString: 'assert.deepEqual(arrToObj(...testCases[3]), res[3], ''<code>arrToObj(["a", "b", "c", "d", "e"], [1, 2, 3, 4, 5])</code> should return <code>{ "a": 1, "b": 2, "c": 3 , "d": 4, "e": 5 }</code>'');'
- text: '<code>arrToObj(["a", "b", "c", "d", "e"], [1, 2, 3, 4])</code> should return <code>{ "a": 1, "b": 2, "c": 3 , "d": 4, "e": undefined }</code>'
  testString: 'assert.deepEqual(arrToObj(...testCases[4]), res[4], ''<code>arrToObj(["a", "b", "c", "d", "e"], [1, 2, 3, 4])</code> should return <code>{ "a": 1, "b": 2, "c": 3 , "d": 4, "e": undefined }</code>'');'
- text: '<code>arrToObj(["a", "b", "c"], [1, 2, 3, 4, 5])</code> should return <code>{ "a": 1, "b": 2, "c": 3  }</code>'
  testString: 'assert.deepEqual(arrToObj(...testCases[5]), res[5], ''<code>arrToObj(["a", "b", "c"], [1, 2, 3, 4, 5])</code> should return <code>{ "a": 1, "b": 2, "c": 3  }</code>'');'

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
console.info('after the test');
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

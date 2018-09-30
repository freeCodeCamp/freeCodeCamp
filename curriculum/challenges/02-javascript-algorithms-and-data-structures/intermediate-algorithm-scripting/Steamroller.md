---
id: ab306dbdcc907c7ddfc30830
title: Steamroller
isRequired: true
challengeType: 5
---

## Description
<section id='description'>
Flatten a nested array. You must account for varying levels of nesting.
Remember to use <a href='http://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck/19514' target='_blank'>Read-Search-Ask</a> if you get stuck. Try to pair program. Write your own code.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
- text: '<code>steamrollArray([[["a"]], [["b"]]])</code> should return <code>["a", "b"]</code>.'
  testString: 'assert.deepEqual(steamrollArray([[["a"]], [["b"]]]), ["a", "b"], "<code>steamrollArray([[["a"]], [["b"]]])</code> should return <code>["a", "b"]</code>.");'
- text: '<code>steamrollArray([1, [2], [3, [[4]]]])</code> should return <code>[1, 2, 3, 4]</code>.'
  testString: 'assert.deepEqual(steamrollArray([1, [2], [3, [[4]]]]), [1, 2, 3, 4], "<code>steamrollArray([1, [2], [3, [[4]]]])</code> should return <code>[1, 2, 3, 4]</code>.");'
- text: '<code>steamrollArray([1, [], [3, [[4]]]])</code> should return <code>[1, 3, 4]</code>.'
  testString: 'assert.deepEqual(steamrollArray([1, [], [3, [[4]]]]), [1, 3, 4], "<code>steamrollArray([1, [], [3, [[4]]]])</code> should return <code>[1, 3, 4]</code>.");'
- text: '<code>steamrollArray([1, {}, [3, [[4]]]])</code> should return <code>[1, {}, 3, 4]</code>.'
  testString: 'assert.deepEqual(steamrollArray([1, {}, [3, [[4]]]]), [1, {}, 3, 4], "<code>steamrollArray([1, {}, [3, [[4]]]])</code> should return <code>[1, {}, 3, 4]</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function steamrollArray(arr) {
  // I'm a steamroller, baby
  return arr;
}

steamrollArray([1, [2], [3, [[4]]]]);
```

</div>



</section>

## Solution
<section id='solution'>


```js
function steamrollArray(arr) {
  if (!Array.isArray(arr)) {
    return [arr];
  }
  var out = [];
  arr.forEach(function(e) {
    steamrollArray(e).forEach(function(v) {
      out.push(v);
    });
  });
  return out;
}
```

</section>

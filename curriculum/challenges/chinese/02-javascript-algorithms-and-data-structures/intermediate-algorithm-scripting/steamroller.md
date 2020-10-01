---
id: ab306dbdcc907c7ddfc30830
challengeType: 5
forumTopicId: 16079
title: 扁平化
---

## Description
<section id='description'>
在这道题目中，我们需要写一个数组扁平化的函数。
如果你遇到了问题，请点击<a href='https://forum.freecodecamp.one/t/topic/157' target='_blank'>帮助</a>。
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: "<code>steamrollArray([[['a']], [['b']]])</code>应该返回<code>['a', 'b']</code>。"
    testString: assert.deepEqual(steamrollArray([[["a"]], [["b"]]]), ["a", "b"]);
  - text: <code>steamrollArray([1, [2], [3, [[4]]]])</code>应该返回<code>[1, 2, 3, 4]</code>。
    testString: assert.deepEqual(steamrollArray([1, [2], [3, [[4]]]]), [1, 2, 3, 4]);
  - text: <code>steamrollArray([1, [], [3, [[4]]]])</code>应该返回<code>[1, 3, 4]</code>。
    testString: assert.deepEqual(steamrollArray([1, [], [3, [[4]]]]), [1, 3, 4]);
  - text: <code>steamrollArray([1, {}, [3, [[4]]]])</code>应该返回<code>[1, {}, 3, 4]</code>。
    testString: assert.deepEqual(steamrollArray([1, {}, [3, [[4]]]]), [1, {}, 3, 4]);

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

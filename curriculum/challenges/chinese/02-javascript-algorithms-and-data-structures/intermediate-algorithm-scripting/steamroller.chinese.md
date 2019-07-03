---
id: ab306dbdcc907c7ddfc30830
title: Steamroller
challengeType: 5
isRequired: true
videoUrl: ''
localeTitle: Steamroller
---

## Description
<section id='description'>
给出一个含有两个数字的数组，我们需要写一个函数，让它返回这两个数字间所有数字（包含这两个数字）的总和。
注意，较小数不一定总是出现在数组的第一个元素。
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
    testString: assert.deepEqual(steamrollArray([[["a"]], [["b"]]]), ["a", "b"], '<code>steamrollArray([[["a"]], [["b"]]])</code>应该返回<code>["a", "b"]</code>。');
  - text: <code>steamrollArray([1, [2], [3, [[4]]]])</code>应该返回<code>[1, 2, 3, 4]</code>。
    testString: assert.deepEqual(steamrollArray([1, [2], [3, [[4]]]]), [1, 2, 3, 4], '<code>steamrollArray([1, [2], [3, [[4]]]])</code>应该返回<code>[1, 2, 3, 4]</code>。');
  - text: <code>steamrollArray([1, [], [3, [[4]]]])</code>应该返回<code>[1, 3, 4]</code>。
    testString: assert.deepEqual(steamrollArray([1, [], [3, [[4]]]]), [1, 3, 4], '<code>steamrollArray([1, [], [3, [[4]]]])</code>应该返回<code>[1, 3, 4]</code>。');
  - text: <code>steamrollArray([1, {}, [3, [[4]]]])</code>应该返回<code>[1, {}, 3, 4]</code>。
    testString: assert.deepEqual(steamrollArray([1, {}, [3, [[4]]]]), [1, {}, 3, 4], '<code>steamrollArray([1, {}, [3, [[4]]]])</code>应该返回<code>[1, {}, 3, 4]</code>。');

```

</section>

## Challenge Seed
<section id='challengeSeed'>















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
              
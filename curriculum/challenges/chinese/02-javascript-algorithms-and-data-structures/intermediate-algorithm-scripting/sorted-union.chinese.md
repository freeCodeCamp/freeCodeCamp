---
id: a105e963526e7de52b219be9
title: Sorted Union
challengeType: 5
isRequired: true
videoUrl: ''
localeTitle: Sorted Union
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
  - text: <code>uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1])</code>应该返回<code>[1, 3, 2, 5, 4]</code>。
    testString: assert.deepEqual(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]), [1, 3, 2, 5, 4], '<code>uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1])</code>应该返回<code>[1, 3, 2, 5, 4]</code>。');
  - text: <code>uniteUnique([1, 3, 2], [1, [5]], [2, [4]])</code>应该返回<code>[1, 3, 2, [5], [4]]</code>。
    testString: assert.deepEqual(uniteUnique([1, 3, 2], [1, [5]], [2, [4]]), [1, 3, 2, [5], [4]], '<code>uniteUnique([1, 3, 2], [1, [5]], [2, [4]])</code>应该返回<code>[1, 3, 2, [5], [4]]</code>。');
  - text: <code>uniteUnique([1, 2, 3], [5, 2, 1])</code>应该返回<code>[1, 2, 3, 5]</code>。
    testString: assert.deepEqual(uniteUnique([1, 2, 3], [5, 2, 1]), [1, 2, 3, 5], '<code>uniteUnique([1, 2, 3], [5, 2, 1])</code>应该返回<code>[1, 2, 3, 5]</code>。');
  - text: <code>uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8])</code>应该返回<code>[1, 2, 3, 5, 4, 6, 7, 8]</code>。
    testString: assert.deepEqual(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]), [1, 2, 3, 5, 4, 6, 7, 8], '<code>uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8])</code>应该返回<code>[1, 2, 3, 5, 4, 6, 7, 8]</code>。');

```

</section>

## Challenge Seed
<section id='challengeSeed'>















</section>

## Solution
<section id='solution'>

```js
function uniteUnique(arr) {
  return [].slice.call(arguments).reduce(function(a, b) {
    return [].concat(a, b.filter(function(e) {return a.indexOf(e) === -1;}));
  }, []);
}
```

</section>
              
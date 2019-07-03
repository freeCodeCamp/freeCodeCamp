---
id: a39963a4c10bc8b4d4f06d7e
title: Seek and Destroy
challengeType: 5
isRequired: true
videoUrl: ''
localeTitle: Seek and Destroy
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
  - text: <code>destroyer([1, 2, 3, 1, 2, 3], 2, 3)</code>应该返回<code>[1, 1]</code>。
    testString: assert.deepEqual(destroyer([1, 2, 3, 1, 2, 3], 2, 3), [1, 1], '<code>destroyer([1, 2, 3, 1, 2, 3], 2, 3)</code>应该返回<code>[1, 1]</code>。');
  - text: <code>destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3)</code>应该返回<code>[1, 5, 1]</code>。
    testString: assert.deepEqual(destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3), [1, 5, 1], '<code>destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3)</code>应该返回<code>[1, 5, 1]</code>。');
  - text: <code>destroyer([3, 5, 1, 2, 2], 2, 3, 5)</code>应该返回<code>[1]</code>。
    testString: assert.deepEqual(destroyer([3, 5, 1, 2, 2], 2, 3, 5), [1], '<code>destroyer([3, 5, 1, 2, 2], 2, 3, 5)</code>应该返回<code>[1]</code>。');
  - text: <code>destroyer([2, 3, 2, 3], 2, 3)</code>应该返回<code>[]</code>。
    testString: assert.deepEqual(destroyer([2, 3, 2, 3], 2, 3), [], '<code>destroyer([2, 3, 2, 3], 2, 3)</code>应该返回<code>[]</code>。');
  - text: "<code>destroyer(['tree', 'hamburger', 53], 'tree', 53)</code>应该返回<code>['hamburger']</code>。"
    testString: assert.deepEqual(destroyer(["tree", "hamburger", 53], "tree", 53), ["hamburger"], '<code>destroyer(["tree", "hamburger", 53], "tree", 53)</code>应该返回<code>["hamburger"]</code>。');
  - text: "<code>destroyer(['possum', 'trollo', 12, 'safari', 'hotdog', 92, 65, 'grandma', 'bugati', 'trojan', 'yacht'], 'yacht', 'possum', 'trollo', 'safari', 'hotdog', 'grandma', 'bugati', 'trojan')</code>应该返回<code>[12,92,65]</code>。"
    testString: assert.deepEqual(destroyer(["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"], "yacht", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan"), [12,92,65], '<code>destroyer(["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"], "yacht", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan")</code>应该返回<code>[12,92,65]</code>。');

```

</section>

## Challenge Seed
<section id='challengeSeed'>















</section>

## Solution
<section id='solution'>

```js
function destroyer(arr) {
  var hash = Object.create(null);
  [].slice.call(arguments, 1).forEach(function(e) {
    hash[e] = true;
  });
  // Remove all the values
  return arr.filter(function(e) { return !(e in hash);});
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);

```

</section>
              
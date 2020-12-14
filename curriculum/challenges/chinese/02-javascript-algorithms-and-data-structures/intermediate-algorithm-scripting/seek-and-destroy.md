---
id: a39963a4c10bc8b4d4f06d7e
challengeType: 5
forumTopicId: 16046
title: 瞄准和消灭
---

## Description
<section id='description'>
在这道题目中，我们要写一个叫<code>destroyer</code>的函数。传给它的第一个参数是数组，我们称他为初始数组。后续的参数数量是不确定的，可能有一个或多个。你需要做的是，从初始数组中移除所有与后续参数相等的元素，并返回移除元素后的数组。
<strong>注意：</strong><br> 你可以使用<code>arguments</code>对象，也可以使用<code>...</code>，即“剩余参数”（Rest Parameters）语法。
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
    testString: assert.deepEqual(destroyer([1, 2, 3, 1, 2, 3], 2, 3), [1, 1]);
  - text: <code>destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3)</code>应该返回<code>[1, 5, 1]</code>。
    testString: assert.deepEqual(destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3), [1, 5, 1]);
  - text: <code>destroyer([3, 5, 1, 2, 2], 2, 3, 5)</code>应该返回<code>[1]</code>。
    testString: assert.deepEqual(destroyer([3, 5, 1, 2, 2], 2, 3, 5), [1]);
  - text: <code>destroyer([2, 3, 2, 3], 2, 3)</code>应该返回<code>[]</code>。
    testString: assert.deepEqual(destroyer([2, 3, 2, 3], 2, 3), []);
  - text: "<code>destroyer(['tree', 'hamburger', 53], 'tree', 53)</code>应该返回<code>['hamburger']</code>。"
    testString: assert.deepEqual(destroyer(["tree", "hamburger", 53], "tree", 53), ["hamburger"]);
  - text: "<code>destroyer(['possum', 'trollo', 12, 'safari', 'hotdog', 92, 65, 'grandma', 'bugati', 'trojan', 'yacht'], 'yacht', 'possum', 'trollo', 'safari', 'hotdog', 'grandma', 'bugati', 'trojan')</code>应该返回<code>[12,92,65]</code>。"
    testString: assert.deepEqual(destroyer(["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"], "yacht", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan"), [12,92,65]);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function destroyer(arr) {
  // Remove all the values
  return arr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
```

</div>



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

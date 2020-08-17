---
id: a39963a4c10bc8b4d4f06d7e
title: Seek and Destroy
isRequired: true
challengeType: 5
videoUrl: ''
localeTitle: 寻找和摧毁
---

## Description
<section id="description">您将获得一个初始数组（驱逐舰函数中的第一个参数），后跟一个或多个参数。从初始数组中删除与这些参数具有相同值的所有元素。 <strong>注意</strong> <br>你必须使用<code>arguments</code>对象。如果卡住，请记得使用<a href="https://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck-coding/19514" target="_blank">Read-Search-Ask</a> 。编写自己的代码。 </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>destroyer([1, 2, 3, 1, 2, 3], 2, 3)</code>应该返回<code>[1, 1]</code> 。'
    testString: assert.deepEqual(destroyer([1, 2, 3, 1, 2, 3], 2, 3), [1, 1]);
  - text: '<code>destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3)</code>应该返回<code>[1, 5, 1]</code> 。'
    testString: assert.deepEqual(destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3), [1, 5, 1]);
  - text: '<code>destroyer([3, 5, 1, 2, 2], 2, 3, 5)</code>应该返回<code>[1]</code> 。'
    testString: assert.deepEqual(destroyer([3, 5, 1, 2, 2], 2, 3, 5), [1]);
  - text: '<code>destroyer([2, 3, 2, 3], 2, 3)</code>应该返回<code>[]</code> 。'
    testString: assert.deepEqual(destroyer([2, 3, 2, 3], 2, 3), []);
  - text: '<code>destroyer([&quot;tree&quot;, &quot;hamburger&quot;, 53], &quot;tree&quot;, 53)</code>应该返回<code>[&quot;hamburger&quot;]</code> 。'
    testString: assert.deepEqual(destroyer(["tree", "hamburger", 53], "tree", 53), ["hamburger"]);
  - text: '<code>destroyer([&quot;possum&quot;, &quot;trollo&quot;, 12, &quot;safari&quot;, &quot;hotdog&quot;, 92, 65, &quot;grandma&quot;, &quot;bugati&quot;, &quot;trojan&quot;, &quot;yacht&quot;], &quot;yacht&quot;, &quot;possum&quot;, &quot;trollo&quot;, &quot;safari&quot;, &quot;hotdog&quot;, &quot;grandma&quot;, &quot;bugati&quot;, &quot;trojan&quot;)</code>应该返回<code>[12,92,65]</code> 。'
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
// solution required
```

/section>

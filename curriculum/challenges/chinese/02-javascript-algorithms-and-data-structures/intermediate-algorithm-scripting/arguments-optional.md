---
id: a97fd23d9b809dac9921074f
challengeType: 5
forumTopicId: 14271
title: 可选参数
---

## Description
<section id='description'>
创建一个将两个参数相加的函数。如果只传入了一个参数，则返回一个函数，需要传入一个参数并返回总和。
比如，<code>addTogether(2, 3)</code>应该返回<code>5</code>。而<code>addTogether(2)</code>应该返回一个函数。
调用这个返回的函数，传入一个值，返回总和：
<code>var sumTwoAnd = addTogether(2);</code>
<code>sumTwoAnd(3)</code>此时应返回<code>5</code>。
只要其中任何一个参数不是数字，那就应返回<code>undefined</code>。
  </section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>addTogether(2, 3)</code>应该返回5。'
    testString: assert.deepEqual(addTogether(2, 3), 5);
  - text: <code>addTogether(2)(3)</code>应该返回5。
    testString: assert.deepEqual(addTogether(2)(3), 5);
  - text: '<code>addTogether(&quot;http://bit.ly/IqT6zt&quot;)</code>应返回undefined。'
    testString: assert.isUndefined(addTogether("http://bit.ly/IqT6zt"));
  - text: '<code>addTogether(2, &quot;3&quot;)</code>应返回undefined。'
    testString: assert.isUndefined(addTogether(2, "3"));
  - text: '<code>addTogether(2)([3])</code>应返回undefined。'
    testString: assert.isUndefined(addTogether(2)([3]));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function addTogether() {
  return false;
}

addTogether(2,3);
```

</div>



</section>

## Solution
<section id='solution'>


```js
function addTogether() {
  var a = arguments[0];
  if (toString.call(a) !== '[object Number]') return;
  if (arguments.length === 1) {
    return function(b) {
      if (toString.call(b) !== '[object Number]') return;
      return a + b;
    };
  }
  var b = arguments[1];
  if (toString.call(b) !== '[object Number]') return;
  return a + arguments[1];
}
```

</section>

---
id: a97fd23d9b809dac9921074f
title: Arguments Optional
isRequired: true
challengeType: 5
forumTopicId: 14271
localeTitle: 可选参数
---

## Description
<section id='description'>
在这道题目中，我们需要写一个求和的函数，但它接收的参数数量不定。如果传入了两个参数，那么直接返回两数之和即可。如果只传入一个参数，那我们应该返回另一个函数用来接收下一个参数，然后求出两数之和。
比如，<code>addTogether(2, 3)</code>应该返回<code>5</code>。而<code>addTogether(2)</code>应该返回一个函数。
然后我们调用这个返回的函数，并给它传入另一个用于求和的值：
<code>var sumTwoAnd = addTogether(2);</code>
<code>sumTwoAnd(3)</code>此时应返回<code>5</code>。
只要其中任何一个参数不是数字，那我们就应返回<code>undefined</code>。
如果你遇到了问题，请点击<a href='https://forum.freecodecamp.one/t/topic/157' target='_blank'>帮助</a>。
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
              
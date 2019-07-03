---
id: a97fd23d9b809dac9921074f
title: Arguments Optional
challengeType: 5
isRequired: true
videoUrl: ''
localeTitle: Arguments Optional
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
  - text: <code>addTogether(2, 3)</code>应该返回 5。
    testString: assert.deepEqual(addTogether(2, 3), 5, '<code>addTogether(2, 3)</code>应该返回 5。');
  - text: <code>addTogether(2)(3)</code>应该返回 5。
    testString: assert.deepEqual(addTogether(2)(3), 5, '<code>addTogether(2)(3)</code>应该返回 5。');
  - text: '<code>addTogether("http://bit.ly/IqT6zt")</code>应该返回<code>undefined</code>。'
    testString: 'assert.isUndefined(addTogether("http://bit.ly/IqT6zt"), "<code>addTogether("http://bit.ly/IqT6zt")</code>应该返回<code>undefined</code>。");'
  - text: "<code>addTogether(2, '3')</code>应该返回<code>undefined</code>。"
    testString: assert.isUndefined(addTogether(2, "3"), '<code>addTogether(2, "3")</code>应该返回<code>undefined</code>。');
  - text: <code>addTogether(2)([3])</code>应该返回<code>undefined</code>。
    testString: assert.isUndefined(addTogether(2)([3]), '<code>addTogether(2)([3])</code>应该返回<code>undefined</code>。');

```

</section>

## Challenge Seed
<section id='challengeSeed'>















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
              
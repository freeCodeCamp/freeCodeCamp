---
id: a8e512fbe388ac2f9198f0fa
title: Wherefore art thou
challengeType: 5
isRequired: true
videoUrl: ''
localeTitle: Wherefore art thou
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
  - text: '<code>whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" })</code>应该返回<code>[{ first: "Tybalt", last: "Capulet" }]</code>。'
    testString: 'assert.deepEqual(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }), [{ first: "Tybalt", last: "Capulet" }], "<code>whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" })</code>应该返回<code>[{ first: "Tybalt", last: "Capulet" }]</code>。");'
  - text: '<code>whatIsInAName([{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }], { "apple": 1 })</code>应该返回<code>[{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }]</code>。'
    testString: 'assert.deepEqual(whatIsInAName([{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }], { "apple": 1 }), [{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }], "<code>whatIsInAName([{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }], { "apple": 1 })</code>应该返回<code>[{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }]</code>。");'
  - text: '<code>whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 })</code>应该返回<code>[{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }]</code>。'
    testString: 'assert.deepEqual(whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 }), [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], "<code>whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 })</code>应该返回<code>[{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }]</code>。");'
  - text: '<code>whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 })</code>应该返回<code>[{ "apple": 1, "bat": 2, "cookie": 2 }]</code>。'
    testString: 'assert.deepEqual(whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 }), [{ "apple": 1, "bat": 2, "cookie": 2 }], "<code>whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 })</code>应该返回<code>[{ "apple": 1, "bat": 2, "cookie": 2 }]</code>。");'
  - text: '<code>whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }, { "bat":2 }], { "apple": 1, "bat": 2 })</code>应该返回<code>[{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie":2 }]</code>。'
    testString: 'assert.deepEqual(whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }, {"bat":2}], { "apple": 1, "bat": 2 }), [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie":2 }], "<code>whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }, { "bat":2 }], { "apple": 1, "bat": 2 })</code>应该返回<code>[{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie":2 }]</code>。");'
  - text: '<code>whatIsInAName([{"a": 1, "b": 2, "c": 3}], {"a": 1, "b": 9999, "c": 3})</code>应该返回<code>[]</code>。'
    testString: 'assert.deepEqual(whatIsInAName([{ "a": 1, "b": 2, "c": 3 }], { "a": 1, "b": 9999, "c": 3 }), [], "<code>whatIsInAName([{"a": 1, "b": 2, "c": 3}], {"a": 1, "b": 9999, "c": 3})</code>应该返回<code>[]</code>。");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>















</section>

## Solution
<section id='solution'>

```js
function whatIsInAName(collection, source) {
  var arr = [];
  var keys = Object.keys(source);
  collection.forEach(function(e) {
    if(keys.every(function(key) {return e[key] === source[key];})) {
      arr.push(e);  
    }
  });
  return arr;
}
```

</section>
              
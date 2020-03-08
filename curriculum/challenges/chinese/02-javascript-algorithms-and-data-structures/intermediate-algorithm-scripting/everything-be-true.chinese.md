---
id: a10d2431ad0c6a099a4b8b52
title: Everything Be True
isRequired: true
challengeType: 5
forumTopicId: 16011
localeTitle: 真假值判断
---

## Description
<section id='description'>
在这道题目中，我们需要写一个函数，它接收两个参数。第一个参数为对象数组<code>collection</code>，第二个参数为一个字符串<code>pre</code>，代表对象的一个键（key）。
我们需要检查对象数组中每个对象的<code>pre</code>属性对应的值是否都为 “真”（truthy）。如果是，则返回<code>true</code>，否则返回<code>false</code>。
JavaScript 中，如果一个值在 Boolean 的上下文中（比如<code>if</code>语句）可以被执行为<code>true</code>，那么这个值就被认为是<code>truthy</code>的。
注意，你可以选择使用<code>.</code>或<code>[]</code>来访问对象属性对应的值。
如果你遇到了问题，请点击<a href='https://forum.freecodecamp.one/t/topic/157' target='_blank'>帮助</a>。
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex")</code>应该返回<code>true</code>。'
    testString: 'assert.strictEqual(truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex"), true);'
  - text: '<code>truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex")</code>应该返回<code>false</code>。'
    testString: 'assert.strictEqual(truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex"), false);'
  - text: '<code>truthCheck([{"user": "Tinky-Winky", "sex": "male", "age": 0}, {"user": "Dipsy", "sex": "male", "age": 3}, {"user": "Laa-Laa", "sex": "female", "age": 5}, {"user": "Po", "sex": "female", "age": 4}], "age")</code>应该返回<code>false</code>。'
    testString: 'assert.strictEqual(truthCheck([{"user": "Tinky-Winky", "sex": "male", "age": 2}, {"user": "Dipsy", "sex": "male", "age": 0}, {"user": "Laa-Laa", "sex": "female", "age": 5}, {"user": "Po", "sex": "female", "age": 4}], "age"), false);'
  - text: '<code>truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true}, {"name": "FastFoward", "onBoat": null}], "onBoat")</code>应该返回<code>false</code>。'
    testString: 'assert.strictEqual(truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true}, {"name": "FastFoward", "onBoat": null}], "onBoat"), false);'
  - text: '<code>truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true, "alias": "Repete"}, {"name": "FastFoward", "onBoat": true}], "onBoat")</code>应该返回<code>true</code>。'
    testString: 'assert.strictEqual(truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true, "alias": "Repete"}, {"name": "FastFoward", "onBoat": true}], "onBoat"), true);'
  - text: '<code>truthCheck([{"single": "yes"}], "single")</code>应该返回<code>true</code>。'
    testString: 'assert.strictEqual(truthCheck([{"single": "yes"}], "single"), true);'
  - text: '<code>truthCheck([{"single": ""}, {"single": "double"}], "single")</code>应该返回<code>false</code>。'
    testString: 'assert.strictEqual(truthCheck([{"single": ""}, {"single": "double"}], "single"), false);'
  - text: '<code>truthCheck([{"single": "double"}, {"single": undefined}], "single")</code>应该返回<code>false</code>。'
    testString: 'assert.strictEqual(truthCheck([{"single": "double"}, {"single": undefined}], "single"), false);'
  - text: '<code>truthCheck([{"single": "double"}, {"single": NaN}], "single")</code>应该返回<code>false</code>。'
    testString: 'assert.strictEqual(truthCheck([{"single": "double"}, {"single": NaN}], "single"), false);'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function truthCheck(collection, pre) {
  // Is everyone being true?
  return pre;
}

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");
```

</div>



</section>

## Solution
<section id='solution'>


```js
function truthCheck(collection, pre) {
  // Does everyone have one of these?
  return collection.every(function(e) { return e[pre]; });
}
```

</section>
              
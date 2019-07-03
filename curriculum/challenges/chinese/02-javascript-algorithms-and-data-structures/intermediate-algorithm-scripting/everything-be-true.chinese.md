---
id: a10d2431ad0c6a099a4b8b52
title: Everything Be True
challengeType: 5
isRequired: true
videoUrl: ''
localeTitle: Everything Be True
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
  - text: '<code>truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex")</code>应该返回<code>true</code>。'
    testString: 'assert.strictEqual(truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex"), true, "<code>truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex")</code>应该返回<code>true</code>。");'
  - text: '<code>truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex")</code>应该返回<code>false</code>。'
    testString: 'assert.strictEqual(truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex"), false, "<code>truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex")</code>应该返回<code>false</code>。");'
  - text: '<code>truthCheck([{"user": "Tinky-Winky", "sex": "male", "age": 0}, {"user": "Dipsy", "sex": "male", "age": 3}, {"user": "Laa-Laa", "sex": "female", "age": 5}, {"user": "Po", "sex": "female", "age": 4}], "age")</code>应该返回<code>false</code>。'
    testString: 'assert.strictEqual(truthCheck([{"user": "Tinky-Winky", "sex": "male", "age": 2}, {"user": "Dipsy", "sex": "male", "age": 0}, {"user": "Laa-Laa", "sex": "female", "age": 5}, {"user": "Po", "sex": "female", "age": 4}], "age"), false, "<code>truthCheck([{"user": "Tinky-Winky", "sex": "male", "age": 0}, {"user": "Dipsy", "sex": "male", "age": 3}, {"user": "Laa-Laa", "sex": "female", "age": 5}, {"user": "Po", "sex": "female", "age": 4}], "age")</code>应该返回<code>false</code>。");'
  - text: '<code>truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true}, {"name": "FastFoward", "onBoat": null}], "onBoat")</code>应该返回<code>false</code>。'
    testString: 'assert.strictEqual(truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true}, {"name": "FastFoward", "onBoat": null}], "onBoat"), false, "<code>truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true}, {"name": "FastFoward", "onBoat": null}], "onBoat")</code>应该返回<code>false</code>。");'
  - text: '<code>truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true, "alias": "Repete"}, {"name": "FastFoward", "onBoat": true}], "onBoat")</code>应该返回<code>true</code>。'
    testString: 'assert.strictEqual(truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true, "alias": "Repete"}, {"name": "FastFoward", "onBoat": true}], "onBoat"), true, "<code>truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true, "alias": "Repete"}, {"name": "FastFoward", "onBoat": true}], "onBoat")</code>应该返回<code>true</code>。");'
  - text: '<code>truthCheck([{"single": "yes"}], "single")</code>应该返回<code>true</code>。'
    testString: 'assert.strictEqual(truthCheck([{"single": "yes"}], "single"), true, "<code>truthCheck([{"single": "yes"}], "single")</code>应该返回<code>true</code>。");'
  - text: '<code>truthCheck([{"single": ""}, {"single": "double"}], "single")</code>应该返回<code>false</code>。'
    testString: 'assert.strictEqual(truthCheck([{"single": ""}, {"single": "double"}], "single"), false, "<code>truthCheck([{"single": ""}, {"single": "double"}], "single")</code>应该返回<code>false</code>。");'
  - text: '<code>truthCheck([{"single": "double"}, {"single": undefined}], "single")</code>应该返回<code>false</code>。'
    testString: 'assert.strictEqual(truthCheck([{"single": "double"}, {"single": undefined}], "single"), false, "<code>truthCheck([{"single": "double"}, {"single": undefined}], "single")</code>应该返回<code>false</code>。");'
  - text: '<code>truthCheck([{"single": "double"}, {"single": NaN}], "single")</code>应该返回<code>false</code>。'
    testString: 'assert.strictEqual(truthCheck([{"single": "double"}, {"single": NaN}], "single"), false, "<code>truthCheck([{"single": "double"}, {"single": NaN}], "single")</code>应该返回<code>false</code>。");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>















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
              
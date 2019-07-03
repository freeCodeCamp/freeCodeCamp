---
id: 56bbb991ad1ed5201cd392d3
title: Delete Properties from a JavaScript Object
challengeType: 1

videoUrl: ''
localeTitle: Delete Properties from a JavaScript Object
---

## Description
<section id='description'>
我们同样可以删除对象的属性，例如：
<code>delete ourDog.bark;</code>
</section>

## Instructions
<section id='instructions'>
删除<code>myDog</code>对象的<code>"tails"</code>属性。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: "从<code>myDog</code>中删除<code>'tails'</code>属性"
    testString: assert(typeof myDog === "object" && myDog.tails === undefined, '从<code>myDog</code>中删除<code>"tails"</code>属性');
  - text: 不要修改<code>myDog</code>的初始化
    testString: 'assert(code.match(/"tails": 1/g).length > 1, "不要修改<code>myDog</code>的初始化");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>














### After Test

<div id='js-teardown'>

```js
(function(z){return z;})(myDog);
```

</div>

</section>

## Solution
<section id='solution'>

```js
var ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"],
  "bark": "bow-wow"
};
var myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"],
  "bark": "woof"
};
delete myDog.tails;
```

</section>
              
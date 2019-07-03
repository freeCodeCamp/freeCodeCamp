---
id: 56bbb991ad1ed5201cd392d1
title: Updating Object Properties
challengeType: 1

videoUrl: ''
localeTitle: Updating Object Properties
---

## Description
<section id='description'>
当你创建了一个对象后，你可以用点操作符或中括号操作符来更新对象的属性。
举个例子，让我们看看<code>ourDog</code>:
<blockquote>var ourDog = {<br>&nbsp;&nbsp;"name": "Camper",<br>&nbsp;&nbsp;"legs": 4,<br>&nbsp;&nbsp;"tails": 1,<br>&nbsp;&nbsp;"friends": ["everything!"]<br>};</blockquote>
让我们更改它的名称为 "Happy Camper"，这有两种方式来更新对象的<code>name</code>属性：
<code>ourDog.name = "Happy Camper";</code> 或
<code>ourDog["name"] = "Happy Camper";</code>
现在，<code>ourDog.name</code>的值就不再是 "Camper"，而是 "Happy Camper"。
</section>

## Instructions
<section id='instructions'>
更新<code>myDog</code>对象的<code>name</code>属性，让它的名字从 "Coder" 变成 "Happy Coder"。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: "更新<code>myDog</code>的<code>'name'</code>属性, 使其等于 'Happy Coder'"
    testString: assert(/happy coder/gi.test(myDog.name), '更新<code>myDog</code>的<code>"name"</code>属性, 使其等于 "Happy Coder"');
  - text: 不要修改<code>myDog</code>的定义
    testString: 'assert(/"name": "Coder"/.test(code), "不要修改<code>myDog</code>的定义");'

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
var myDog = {
  "name": "Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};
myDog.name = "Happy Coder";
```

</section>
              
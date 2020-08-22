---
id: 56bbb991ad1ed5201cd392d2
title: Add New Properties to a JavaScript Object
challengeType: 1
videoUrl: 'https://scrimba.com/c/cQe38UD'
forumTopicId: 301169
localeTitle: 给对象添加新属性
---

## Description
<section id='description'>
你也可以像更改属性一样给对象添加属性。
看看我们是如何给<code>ourDog</code>添加<code>"bark"</code>属性：
<code>ourDog.bark = "bow-wow";</code> 
或者
<code>ourDog["bark"] = "bow-wow";</code>
现在当我们访问<code>ourDog.bark</code>时会得到 ourDog 的 bark 值 "bow-wow".
</section>

## Instructions
<section id='instructions'>
给<code>myDog</code>添加一个<code>"bark"</code>属性，设置它的值为狗的声音，例如："woof"。你可以使用点或中括号操作符。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 给<code>myDog</code>添加<code>"bark"</code>属性。
    testString: assert(myDog.bark !== undefined);
  - text: 不能在初始化 myDog 的时候添加<code>"bark"</code>属性。
    testString: 'assert(!/bark[^\n]:/.test(code));'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Example
var ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
};

ourDog.bark = "bow-wow";

// Setup
var myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};

// Only change code below this line.

```

</div>


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
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};
myDog.bark = "Woof Woof";
```

</section>

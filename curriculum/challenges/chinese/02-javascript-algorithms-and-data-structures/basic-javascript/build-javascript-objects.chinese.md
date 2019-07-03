---
id: 56bbb991ad1ed5201cd392d0
title: Build JavaScript Objects
challengeType: 1

videoUrl: ''
localeTitle: Build JavaScript Objects
---

## Description
<section id='description'>
你之前可能听说过对象<code>object</code>。
对象和数组很相似，数组是通过索引来访问和修改数据，而对象是通过属性来访问和修改数据。
对象适合用来存储结构化数据，就和真实世界的对象一模一样，比如一只猫。
这是一个对象的示例：
<blockquote>var cat = {<br>&nbsp;&nbsp;"name": "Whiskers",<br>&nbsp;&nbsp;"legs": 4,<br>&nbsp;&nbsp;"tails": 1,<br>&nbsp;&nbsp;"enemies": ["Water", "Dogs"]<br>};</blockquote>
在这个示例中所有的属性以字符串的形式储存，例如 - <code>"name"</code>, <code>"legs"</code>，和<code>"tails"</code>。但是，你也可以使用数字作为属性，你甚至可以省略字符串属性的引号，如下所示：
<blockquote>var anotherObject = {<br>&nbsp;&nbsp;make: "Ford",<br>&nbsp;&nbsp;5: "five",<br>&nbsp;&nbsp;"model": "focus"<br>};</blockquote>
但是，如果你的对象具有任何非字符串属性，JavaScript 将自动将它们转换为字符串类型。
</section>

## Instructions
<section id='instructions'>
创建一个叫做<code>myDog</code>的对象，它里面有这些属性：<code>"name"</code>、<code>"legs"</code>,<code>"tails"</code>、<code>"friends"</code>。
你可以设置对象属性为任何值，只需要确保<code>"name"</code>是字符串、<code>"legs"</code>和<code>"tails"</code>是数字、<code>"friends"</code>是数组。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>myDog</code>应该包含<code>name</code>属性，并且是一个字符串<code>string</code>。
    testString: assert((function(z){if(z.hasOwnProperty("name") && z.name !== undefined && typeof z.name === "string"){return true;}else{return false;}})(myDog), '<code>myDog</code>应该包含<code>name</code>属性，并且是一个字符串<code>string</code>。');
  - text: <code>myDog</code>应该包含<code>legs</code>属性，并且是一个数字<code>number</code>。
    testString: assert((function(z){if(z.hasOwnProperty("legs") && z.legs !== undefined && typeof z.legs === "number"){return true;}else{return false;}})(myDog), '<code>myDog</code>应该包含<code>legs</code>属性，并且是一个数字<code>number</code>。');
  - text: <code>myDog</code>应该包含<code>tails</code>属性，并且是一个数字<code>number</code>。
    testString: assert((function(z){if(z.hasOwnProperty("tails") && z.tails !== undefined && typeof z.tails === "number"){return true;}else{return false;}})(myDog), '<code>myDog</code>应该包含<code>tails</code>属性，并且是一个数字<code>number</code>。');
  - text: <code>myDog</code>应该包含<code>friends</code>属性，并且是一个数组<code>array</code>。
    testString: assert((function(z){if(z.hasOwnProperty("friends") && z.friends !== undefined && Array.isArray(z.friends)){return true;}else{return false;}})(myDog), '<code>myDog</code>应该包含<code>friends</code>属性，并且是一个数组<code>array</code>。');
  - text: <code>myDog</code>应该只包含给出的属性。
    testString: assert((function(z){return Object.keys(z).length === 4;})(myDog), '<code>myDog</code>应该只包含给出的属性。');

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
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]  
};
```

</section>
              
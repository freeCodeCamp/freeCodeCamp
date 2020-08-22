---
id: 587d7b7d367417b2b2512b1c
title: Check if an Object has a Property
challengeType: 1
forumTopicId: 301155
localeTitle: 检查对象是否具有某个属性
---

## Description
<section id='description'>
现在我们可以新增、修改和移除对象中的属性。但如果我们想知道一个对象中是否含有某个属性呢？JavaScript 为我们提供了两种不同的方式来实现这个功能，一个是<code>hasOwnProperty()</code>方法，另一个是<code>in</code>关键字。如果我们有一个<code>users</code>对象，它有一个<code>Alan</code>属性，我们可以用以下两种方式之一来检查该属性在对象中是否存在：

```js
users.hasOwnProperty('Alan');
'Alan' in users;
// 都返回 true
```

</section>

## Instructions
<section id='instructions'>
我们已经创建了一个含有一些用户的<code>users</code>对象和一个<code>isEveryoneHere</code>函数，该函数接受<code>users</code>对象作为参数。请完成该函数使其在<code>users</code>对象中包含以下 4 个键<code>Alan</code>、<code>Jeff</code>、<code>Sarah</code>和<code>Ryan</code>时才返回<code>true</code>，否则返回<code>false</code>。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>users</code>对象应该只含有<code>Alan</code>、<code>Jeff</code>、<code>Sarah</code>和<code>Ryan</code>4 个键。
    testString: assert("Alan" in users && "Jeff" in users && "Sarah" in users && "Ryan" in users && Object.keys(users).length === 4);
  - text: <code>isEveryoneHere</code>函数在<code>users</code>对象包含<code>Alan</code>、<code>Jeff</code>、<code>Sarah</code>和<code>Ryan</code>4 个键时应该返回<code>true</code>。
    testString: assert(isEveryoneHere(users) === true);
  - text: <code>isEveryoneHere</code>函数在<code>users</code>对象不包含<code>Alan</code>、<code>Jeff</code>、<code>Sarah</code>或<code>Ryan</code>4 个键时应该返回<code>false</code>。
    testString: assert((function() { delete users.Alan; return isEveryoneHere(users) })() === false);
  - text: 如果 <code>Jeff</code> 不是 <code>users</code> 对象的属性，函数 <code>isEveryoneHere</code> 应该返回  <code>false</code>。
    testString: assert((function() { delete users.Jeff; return isEveryoneHere(users) })() === false);
  - text: 如果 <code>Sarah</code> 不是 <code>users</code> 对象的属性，函数 <code>isEveryoneHere</code> 应该返回  <code>false</code>。
    testString: assert((function() { delete users.Sarah; return isEveryoneHere(users) })() === false);
  - text: 如果 <code>Ryan</code> 不是 <code>users</code> 对象的属性，函数 <code>isEveryoneHere</code> 应该返回  <code>false</code>。
    testString: assert((function() { delete users.Ryan; return isEveryoneHere(users) })() === false);
```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let users = {
  Alan: {
    age: 27,
    online: true
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: true
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function isEveryoneHere(obj) {
  // change code below this line

  // change code above this line
}

console.log(isEveryoneHere(users));
```

</div>



</section>

## Solution
<section id='solution'>

```js
let users = {
  Alan: {
    age: 27,
    online: true
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: true
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function isEveryoneHere(obj) {
  return [
    'Alan',
    'Jeff',
    'Sarah',
    'Ryan'
  ].every(i => obj.hasOwnProperty(i));
}

console.log(isEveryoneHere(users));
```

</section>

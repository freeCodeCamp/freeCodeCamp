---
id: 587d7b7d367417b2b2512b1e
title: Generate an Array of All Object Keys with Object.keys()
challengeType: 1
forumTopicId: 301160
localeTitle: 使用 Object.Keys() 生成对象所有键组成的数组
---

## Description
<section id='description'>
我们还可以输入一个对象作为参数来调用<code>Object.keys()</code>方法，使其生成一个包含对象中所有键的数组。这会返回一个由对象中所有键的名称（字符串）组成的数组。再次说明，这个数组中的项的顺序是不确定的。
</section>

## Instructions
<section id='instructions'>
请你完成<code>getArrayOfUsers</code>函数，使其返回一个包含输入的对象的所有属性的数组。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>users</code>对象应该只包含<code>Alan</code>、<code>Jeff</code>、<code>Sarah</code>和<code>Ryan</code>这 4 个键
    testString: assert('Alan' in users && 'Jeff' in users && 'Sarah' in users && 'Ryan' in users && Object.keys(users).length === 4);
  - text: <code>getArrayOfUsers</code>函数应该返回一个包含<code>users</code>对象中所有键的数组
    testString: assert((function() { users.Sam = {}; users.Lewis = {}; let R = getArrayOfUsers(users); return (R.indexOf('Alan') !== -1 && R.indexOf('Jeff') !== -1 && R.indexOf('Sarah') !== -1 && R.indexOf('Ryan') !== -1 && R.indexOf('Sam') !== -1 && R.indexOf('Lewis') !== -1); })() === true);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let users = {
  Alan: {
    age: 27,
    online: false
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: false
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function getArrayOfUsers(obj) {
  // change code below this line

  // change code above this line
}

console.log(getArrayOfUsers(users));
```

</div>



</section>

## Solution
<section id='solution'>

```js
let users = {
  Alan: {
    age: 27,
    online: false
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: false
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function getArrayOfUsers(obj) {
  return Object.keys(obj);
}

console.log(getArrayOfUsers(users));
```

</section>

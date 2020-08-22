---
id: 587d7b7d367417b2b2512b1f
title: Modify an Array Stored in an Object
challengeType: 1
forumTopicId: 301163
localeTitle: 修改存储在对象中的数组
---

## Description
<section id='description'>
现在你已经接触到 JavaScript 对象的所有运算。你可以增加、修改和移除键值对，检查某个键是否存在，并且遍历一个对象中的所有键。在你继续学习 JavaScript 的过程中，你会看到对象的更多用法。另外，后续的《高级数据结构》课程还会介绍 ES6 的 <dfn>Map</dfn> 和 <dfn>Set</dfn> 对象。这两种对象都跟一般的对象相似，但它们提供了一些额外的特性。现在你已经学到了数组和对象的基础知识，你已经可以继续用 JavaScript 来解决更加复杂的问题了！
</section>

## Instructions
<section id='instructions'>
请你看一下代码编辑器中我们提供的对象。<code>user</code>对象包含 3 个键。<code>data</code>对象包含 5 个键，其中一个包含一个<code>friends</code>数组。从这个例子你可以看到对象作为数据结构是多么的灵活。我们已经写了<code>addFriend</code>函数的一部分，请你完成这个函数，使其接受一个<code>user</code>对象，将<code>friend</code>参数中的名字添加到<code>user.data.friends</code>数组中并返回该数组。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>user</code>对象应该包含<code>name</code>、<code>age</code>和<code>data</code>三个键。
    testString: assert('name' in user && 'age' in user && 'data' in user);
  - text: <code>addFriend</code>函数应该接受一个<code>user</code>对象和一个<code>friend</code>字符串作为输入参数，并将 friend 插入到<code>user</code>对象的<code>friends</code>数组中。
    testString: assert((function() { let L1 = user.data.friends.length; addFriend(user, 'Sean'); let L2 = user.data.friends.length; return (L2 === L1 + 1); })());
  - text: '<code>addFriend(user, &quot;Pete&quot;)</code>应该返回<code>[&quot;Sam&quot;, &quot;Kira&quot;, &quot;Tomo&quot;, &quot;Pete&quot;]</code>。'
    testString: assert.deepEqual((function() { delete user.data.friends; user.data.friends = ['Sam', 'Kira', 'Tomo']; return addFriend(user, 'Pete') })(), ['Sam', 'Kira', 'Tomo', 'Pete']);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let user = {
  name: 'Kenneth',
  age: 28,
  data: {
    username: 'kennethCodesAllDay',
    joinDate: 'March 26, 2016',
    organization: 'freeCodeCamp',
    friends: [
      'Sam',
      'Kira',
      'Tomo'
    ],
    location: {
      city: 'San Francisco',
      state: 'CA',
      country: 'USA'
    }
  }
};

function addFriend(userObj, friend) {
  // change code below this line

  // change code above this line
}

console.log(addFriend(user, 'Pete'));
```

</div>



</section>

## Solution
<section id='solution'>

```js
let user = {
  name: 'Kenneth',
  age: 28,
  data: {
    username: 'kennethCodesAllDay',
    joinDate: 'March 26, 2016',
    organization: 'freeCodeCamp',
    friends: [
      'Sam',
      'Kira',
      'Tomo'
    ],
    location: {
      city: 'San Francisco',
      state: 'CA',
      country: 'USA'
    }
  }
};

function addFriend(userObj, friend) {
  userObj.data.friends.push(friend);
  return userObj.data.friends;
}
```

</section>

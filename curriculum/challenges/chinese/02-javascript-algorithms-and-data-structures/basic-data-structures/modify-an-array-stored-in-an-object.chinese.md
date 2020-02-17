---
id: 587d7b7d367417b2b2512b1f
title: Modify an Array Stored in an Object
challengeType: 1
videoUrl: ''
localeTitle: 修改存储在对象中的数组
---

## Description
<section id="description">现在您已经看到了JavaScript对象的所有基本操作。您可以添加，修改和删除键值对，检查键是否存在，并迭代对象中的所有键。随着您继续学习JavaScript，您将看到更多功能的对象应用程序。此外，课程后面的可选高级数据结构课程还涵盖ES6 <dfn>Map</dfn>和<dfn>Set</dfn>对象，这两个对象与普通对象类似，但提供了一些附加功能。既然您已经学习了数组和对象的基础知识，那么您已经准备好开始使用JavaScript解决更复杂的问题了！ </section>

## Instructions
<section id="instructions">看看我们在代码编辑器中提供的对象。 <code>user</code>对象包含三个键。 <code>data</code>键包含五个键，其中一个键包含一组<code>friends</code> 。从这里，您可以看到灵活的对象如何作为数据结构。我们已经开始编写一个函数<code>addFriend</code> 。完成编写它以便它获取<code>user</code>对象并将<code>friend</code>参数的名称添加到存储在<code>user.data.friends</code>中的数组并返回该数组。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>user</code>对象具有<code>name</code> ， <code>age</code>和<code>data</code>键
    testString: assert('name' in user && 'age' in user && 'data' in user);
  - text: <code>addFriend</code>函数接受<code>user</code>对象和<code>friend</code>字符串作为参数，并将朋友添加到<code>user</code>对象中的<code>friends</code>数组
    testString: assert((function() { let L1 = user.data.friends.length; addFriend(user, 'Sean'); let L2 = user.data.friends.length; return (L2 === L1 + 1); })());
  - text: '<code>addFriend(user, &quot;Pete&quot;)</code>应该返回<code>[&quot;Sam&quot;, &quot;Kira&quot;, &quot;Tomo&quot;, &quot;Pete&quot;]</code>'
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
// solution required
```
</section>

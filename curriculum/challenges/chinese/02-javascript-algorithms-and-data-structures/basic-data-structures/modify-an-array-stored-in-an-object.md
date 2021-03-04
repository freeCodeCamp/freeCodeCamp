---
id: 587d7b7d367417b2b2512b1f
title: 修改存储在对象中的数组
challengeType: 1
forumTopicId: 301163
dashedName: modify-an-array-stored-in-an-object
---

# --description--

我们已经学习了 JavaScript 对象的这些基本操作： 添加、修改、移除键值对、检查某个属性是否存在、遍历对象的所有属性。 在继续学习 JavaScript 的过程中，我们会了解对象的更多用法。 另外，在之后的数据结构课程中，我们还会学习 ES6 的 <dfn>Map</dfn> 和 <dfn>Set</dfn>。 这两种数据结构与我们现在学到的对象十分类似，但它们在对象的基础上提供了一些额外的功能。 目前，我们已经学习了数组和对象的基础知识，让我们试着来用所学的知识解决一些更复杂的问题。

# --instructions--

请看一下代码编辑器中我们为你写好的对象。 `user` 对象包含 3 个属性； `data` 对象包含 5 个属性，其中包含一个叫做 `friends` 的数组。 这就是对象作为数据结构所展现出的灵活性。 我们已经写好了 `addFriend` 函数的一部分， 请你完成这个函数，使其接受一个 `user` 对象，将 `friend` 参数中的名字添加到 `user.data.friends` 数组中并返回该数组。

# --hints--

`user` 对象应该包含 `name`、`age` 和 `data` 三个属性。

```js
assert('name' in user && 'age' in user && 'data' in user);
```

`addFriend` 函数应该接受一个 `user` 对象和一个 `friend` 字符串作为输入参数，并将这个字符串插入到 `user` 对象的 `friends` 数组中。

```js
assert(
  (function () {
    let L1 = user.data.friends.length;
    addFriend(user, 'Sean');
    let L2 = user.data.friends.length;
    return L2 === L1 + 1;
  })()
);
```

`addFriend(user, "Pete")` 应该返回 `["Sam", "Kira", "Tomo", "Pete"]`。

```js
assert.deepEqual(
  (function () {
    delete user.data.friends;
    user.data.friends = ['Sam', 'Kira', 'Tomo'];
    return addFriend(user, 'Pete');
  })(),
  ['Sam', 'Kira', 'Tomo', 'Pete']
);
```

# --seed--

## --seed-contents--

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
  // Only change code below this line

  // Only change code above this line
}

console.log(addFriend(user, 'Pete'));
```

# --solutions--

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

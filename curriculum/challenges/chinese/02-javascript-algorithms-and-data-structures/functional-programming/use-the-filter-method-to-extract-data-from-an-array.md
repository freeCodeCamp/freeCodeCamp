---
id: 587d7b8f367417b2b2512b63
title: 使用 filter 方法从数组中提取数据
challengeType: 1
forumTopicId: 18179
---

# --description--

另一个有用的数组方法是`filter()`（即`Array.prototype.filter()`）。`filter`方法会返回一个长度不大于原始数组的新数组。

和`map`一样，`Filter`不会改变原始数组，它接收一个回调函数，将回调内的逻辑应用于数组的每个元素。新数组包含根据回调函数内条件返回 true 的元素。

回调函数接收三个参数。第一个参数是当前正在被处理的元素，第二个参数是元素的索引，第三个参数是在其上调用 `filter` 方法的数组。

看下在 `users` 上使用 `filter` 方法的例子，返回了一个新数组包含了 30 岁以下的用户。为了简化，例子里只使用了回调函数的第一个参数。

```js
const users = [
  { name: 'John', age: 34 },
  { name: 'Amy', age: 20 },
  { name: 'camperCat', age: 10 }
];

const usersUnder30 = users.filter(user => user.age < 30);
console.log(usersUnder30); // [ { name: 'Amy', age: 20 }, { name: 'camperCat', age: 10 } ]
```

# --instructions--

`watchList`是包含一些电影信息的对象。结合`filter`和`map`返回一个只包含`title`和`rating`属性的新数组，并且`imdbRating`值大于或等于 8.0。请注意，评级值在对象中保存为字符串，你可能需要将它转换成数字来执行运算。

# --hints--

`watchList`应保持不变。

```js
assert(
  watchList[0].Title === 'Inception' && watchList[4].Director == 'James Cameron'
);
```

应使用`filter`方法。

```js
assert(code.match(/\.filter/g));
```

不能使用`for`循环。

```js
assert(!code.match(/for\s*?\(.+?\)/g));
```

`filteredList`应等于`[{"title": "Inception","rating": "8.8"},{"title": "Interstellar","rating": "8.6"},{"title": "The Dark Knight","rating": "9.0"},{"title": "Batman Begins","rating": "8.3"}]`。

```js
assert.deepEqual(filteredList, [
  { title: 'Inception', rating: '8.8' },
  { title: 'Interstellar', rating: '8.6' },
  { title: 'The Dark Knight', rating: '9.0' },
  { title: 'Batman Begins', rating: '8.3' }
]);
```

# --solutions--


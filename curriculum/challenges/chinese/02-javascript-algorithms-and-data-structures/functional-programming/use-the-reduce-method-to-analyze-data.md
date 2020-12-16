---
id: 587d7da9367417b2b2512b68
title: 使用 reduce 方法分析数据
challengeType: 1
forumTopicId: 301313
---

# --description--

`reduce()`（即`Array.prototype.reduce()`），是 JavaScript 所有数组操作中最常用的方法。几乎可以用`reduce`方法解决所有数组处理问题。

`reduce`方法是处理数组更通用的方式，而且`filter`和`map`方法都可以当作是`reduce`的特殊实现。 `reduce`方法遍历数组中的每个项目并返回单个值（即字符串、数字、对象、数组）。 这是通过在每次迭代中调用一个回调函数来实现的。

回调函数接受四个参数。第一个参数称为叠加器，它是上一次迭代中回调函数的返回值，第二个参数是当前正在处理的数组元素，第三个参数是该参数的索引，第四个参数是在其上调用 `reduce` 方法的数组。

除了回调函数，`reduce` 还有一个额外的参数做为叠加器的初始值。如果没有第二个参数，会跳过第一次迭代，第二次迭代给叠加器传入数组的第一个元素。

见下面的例子，给 `users` 数组使用 `reduce` 方法，返回所有用户数组的和。为了简化，例子仅使用了回调函数的第一个参数和第二个参数。

```js
const users = [
  { name: 'John', age: 34 },
  { name: 'Amy', age: 20 },
  { name: 'camperCat', age: 10 }
];

const sumOfAges = users.reduce((sum, user) => sum + user.age, 0);
console.log(sumOfAges); // 64
```

在另一个例子里，查看如何返回一个包含用户名称做为属性，其年龄做为值的对象。

```js
const users = [
  { name: 'John', age: 34 },
  { name: 'Amy', age: 20 },
  { name: 'camperCat', age: 10 }
];

const usersObj = users.reduce((obj, user) => {
  obj[user.name] = user.age;
  return obj;
}, {});
console.log(usersObj); // { John: 34, Amy: 20, camperCat: 10 }
```

# --instructions--

`watchList`变量中包含一组存有多部电影信息对象。使用`reduce`查找由**Christopher Nolan 导演**的电影的 IMDB 评级平均值。回想一下之前的挑战，如何`filter`数据，以及使用`map`来获取你想要的数据。你可能需要创建一些变量，但是请将最后的平均值保存到`averageRating`变量中。请注意，评级在对象中是字符串，需要将其转换为数字再用于数学运算。

# --hints--

`watchList`应保持不变。

```js
assert(
  watchList[0].Title === 'Inception' && watchList[4].Director == 'James Cameron'
);
```

应该使用`reduce`方法。

```js
assert(code.match(/\.reduce/g));
```

The`averageRating`应等于 8.675。

```js
assert(getRating(watchList) === 8.675);
```

不能使用`for`循环。

```js
assert(!code.match(/for\s*?\(.*\)/g));
```

在修改 `watchList` 对象后应该返回正确的输出。

```js
assert(getRating(watchList.filter((_, i) => i < 1 || i > 2)) === 8.55);
```

# --solutions--


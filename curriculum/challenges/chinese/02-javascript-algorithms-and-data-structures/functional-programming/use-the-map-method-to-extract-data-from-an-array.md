---
id: 587d7b8f367417b2b2512b61
title: 使用 map 方法从数组中提取数据
challengeType: 1
forumTopicId: 18214
---

# --description--

目前为止，我们已经学会了使用纯函数来避免程序中的副作用。此外，我们已经看到函数的值仅取决于其输入参数。

这仅仅是个开始。顾名思义，函数式编程以函数理论为中心。

能够将它们作为参数传递给其他函数，和从另一个函数返回一个函数是有意义的。函数在 JavaScript 中被视为`First Class Objects`，它们可以像任何其他对象一样使用。它们可以保存在变量中，存储在对象中，也可以作为函数参数传递。

让我们从一些简单的数组函数开始，这些函数是数组对象原型上的方法。在本练习中，我们来了解下数组的`map`方法（即`Array.prototype.map()`）。

请记住，`map`方法是迭代数组中每一项的方式之一。在对每个元素应用回调函数后，它会创建一个新数组(不改变原来的数组)。

当调用回调函数时，传入了三个参数。第一个参数是当前正在处理的数组项，第二个参数是当前数组项的索引值，第三个参数是在其上调用 `map` 方法的数组。

看下在 `users` 上使用 `map` 方法的例子，返回了一个新数组只包含了用户的名字。为了简化，例子里只使用了回调函数的第一个参数。

```js
const users = [
  { name: 'John', age: 34 },
  { name: 'Amy', age: 20 },
  { name: 'camperCat', age: 10 }
];

const names = users.map(user => user.name);
console.log(names); // [ 'John', 'Amy', 'camperCat' ]
```

# --instructions--

`watchList`数组保存了包含一些电影信息的对象。使用`map`从`watchList`中提取标题（`title`）和评分（`rating`），并将新数组保存在`rating`变量里。目前编辑器中的代码是使用`for`循环实现，使用`map`表达式替换循环功能。

# --hints--

`watchList`不能被改变

```js
assert(
  watchList[0].Title === 'Inception' && watchList[4].Director == 'James Cameron'
);
```

你的代码不能使用`for`循环。

```js
assert(!removeJSComments(code).match(/for\s*?\(.*?\)/));
```

你的代码应使用`map`方法。

```js
assert(code.match(/\.map/g));
```

`rating`应等于`[{"title":"Inception","rating":"8.8"},{"title":"Interstellar","rating":"8.6"},{"title":"The Dark Knight","rating":"9.0"},{"title":"Batman Begins","rating":"8.3"},{"title":"Avatar","rating":"7.9"}]`.

```js
assert(
  JSON.stringify(ratings) ===
    JSON.stringify([
      { title: 'Inception', rating: '8.8' },
      { title: 'Interstellar', rating: '8.6' },
      { title: 'The Dark Knight', rating: '9.0' },
      { title: 'Batman Begins', rating: '8.3' },
      { title: 'Avatar', rating: '7.9' }
    ])
);
```

# --solutions--


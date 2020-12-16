---
id: 587d7b7d367417b2b2512b1d
title: 使用 for...in 语句迭代对象
challengeType: 1
forumTopicId: 301162
---

# --description--

有时候你需要遍历一个对象中的所有键。这需要 JavaScript 中的一个特殊语法：<dfn>for...in</dfn> 语句。以遍历 `users` 对象的键为例：

```js
for (let user in users) {
  console.log(user);
}

// logs:
Alan
Jeff
Sarah
Ryan
```

在这个语句中，我们定义了一个`user`变量，你可以看到，这个变量在 for...in 语句对对象的每一个键的遍历中都会被重置。 **注意：**  
跟数组不同，对象中的键是无序的，因此一个对象中某个键的位置，或者说它出现的相对顺序，在引用或访问该键时是不确定的。

# --instructions--

我们已经定义了一个`countOnline`函数，请在其中使用一个 <dfn>for...in</dfn> 语句来遍历`users`对象中的用户，并返回`online`属性为`true`的用户的数量。

```js
{
  Alan: {
    online: false
  },
  Jeff: {
    online: true
  },
  Sarah: {
    online: false
  }
}
```

# --hints--

函数 `countOnline` 应该使用 `for in` 语句遍历传入对象的key。

```js
assert(
  code.match(
    /for\s*\(\s*(var|let)\s+[a-zA-Z_$]\w*\s+in\s+[a-zA-Z_$]\w*\s*\)\s*{/
  )
);
```

当传入 `{ Alan: { online: false }, Jeff: { online: true }, Sarah: { online: false } }` 时，函数 `countOnline` 应该返回  `1`。

```js
assert(countOnline(usersObj1) === 1);
```

当传入 `{ Alan: { online: true }, Jeff: { online: false }, Sarah: { online: true } }` 时，函数 `countOnline` 应该返回  `2`。

```js
assert(countOnline(usersObj2) === 2);
```

当传入 `{ Alan: { online: false }, Jeff: { online: false }, Sarah: { online: false } }` 时，函数 `countOnline` 应该返回  `0`。

```js
assert(countOnline(usersObj3) === 0);
```

# --solutions--


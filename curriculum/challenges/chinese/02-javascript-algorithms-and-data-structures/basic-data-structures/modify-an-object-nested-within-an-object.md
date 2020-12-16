---
id: 587d7b7c367417b2b2512b19
title: 修改嵌套在对象中的对象
challengeType: 1
forumTopicId: 301164
---

# --description--

现在我们来看一个稍微复杂一点的对象。对象中也可以嵌套任意层的对象。对象的属性值可以是 JavaScript 支持的任意类型，包括数组和其他对象。请看以下例子：

```js
let nestedObject = {
  id: 28802695164,
  date: 'December 31, 2016',
  data: {
    totalUsers: 99,
    online: 80,
    onlineStatus: {
      active: 67,
      away: 13
    }
  }
};
```

`nestedObject`有 3 个唯一的键：值为一个数字的`id`、值为一个字符串的`date`和值为一个嵌套了其他对象的对象的`data`。虽然对象中的数据可能很复杂，我们仍能使用上一个挑战中讲的符号来访问我们需要的信息。

# --instructions--

我们已经定义了一个`userActivity`对象，它包含了另一个对象。你可以用上一个挑战中那样的方式来修改被嵌套的对象的属性。请将`online`属性设为`45`。

# --hints--

`userActivity`应该含有`id`、`date`和`data`属性。

```js
assert(
  'id' in userActivity && 'date' in userActivity && 'data' in userActivity
);
```

`userActivity`应该有一个`data`属性，该属性要是一个含有`totalUsers`和`online`属性的对象。

```js
assert('totalUsers' in userActivity.data && 'online' in userActivity.data);
```

`userActivity`的`data`属性值中的`online`属性应该被设为`45`。

```js
assert(userActivity.data.online === 45);
```

你应该用点符号或者方括号符号来设置`online`属性。

```js
assert.strictEqual(code.search(/online: 45/), -1);
```

# --solutions--


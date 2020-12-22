---
id: a2f1d72d9b908d0bd72bb9f6
title: 构造一个 Person 类
challengeType: 5
forumTopicId: 16020
---

# --description--

在这道题目中，我们需要写一个构造器（constructor）函数。它只接收一个字符串参数`firstAndLast`，这个参数代表一个英文名的全名（姓和名）。这个构造函数创建出的实例需要具有以下方法：

```js
getFirstName()
getLastName()
getFullName()
setFirstName(first)
setLastName(last)
setFullName(firstAndLast)
```

你可以点击 “运行测试”，然后就可以在底下的控制台中看到每个测试用例执行的情况。 方法接收一个字符串格式的参数。 这些方法必须是与对象进行交互的唯一可用方法。 如果你遇到了问题，请点击[帮助](https://forum.freecodecamp.one/t/topic/157)。

# --hints--

`Object.keys(bob).length`应该返回 6。

```js
assert.deepEqual(Object.keys(bob).length, 6);
```

`bob instanceof Person`应该返回`true`。

```js
assert.deepEqual(bob instanceof Person, true);
```

`bob.firstName`应该返回`undefined`。

```js
assert.deepEqual(bob.firstName, undefined);
```

`bob.lastName`应该返回`undefined`。

```js
assert.deepEqual(bob.lastName, undefined);
```

`bob.getFirstName()`应该返回 'Bob'。

```js
assert.deepEqual(bob.getFirstName(), 'Bob');
```

`bob.getLastName()`应该返回 'Ross'。

```js
assert.deepEqual(bob.getLastName(), 'Ross');
```

`bob.getFullName()`应该返回 'Bob Ross'。

```js
assert.deepEqual(bob.getFullName(), 'Bob Ross');
```

调用`bob.setFirstName('Haskell')`之后，`bob.getFullName()`应该返回 'Haskell Ross'。

```js
assert.strictEqual(
  (function () {
    bob.setFirstName('Haskell');
    return bob.getFullName();
  })(),
  'Haskell Ross'
);
```

调用`bob.setLastName('Curry')`之后，`bob.getFullName()`应该返回 'Haskell Curry'。

```js
assert.strictEqual(
  (function () {
    var _bob = new Person('Haskell Ross');
    _bob.setLastName('Curry');
    return _bob.getFullName();
  })(),
  'Haskell Curry'
);
```

调用`bob.setFullName('Haskell Curry')`之后，`bob.getFullName()`应该返回 'Haskell Curry'。

```js
assert.strictEqual(
  (function () {
    bob.setFullName('Haskell Curry');
    return bob.getFullName();
  })(),
  'Haskell Curry'
);
```

调用`bob.setFullName('Haskell Curry')`之后，`bob.getFirstName()`应该返回 'Haskell'。

```js
assert.strictEqual(
  (function () {
    bob.setFullName('Haskell Curry');
    return bob.getFirstName();
  })(),
  'Haskell'
);
```

调用`bob.setFullName('Haskell Curry')`之后，`bob.getLastName()`应该返回 'Curry'。

```js
assert.strictEqual(
  (function () {
    bob.setFullName('Haskell Curry');
    return bob.getLastName();
  })(),
  'Curry'
);
```

# --solutions--


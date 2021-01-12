---
id: a2f1d72d9b908d0bd72bb9f6
title: 构建 Person 类
challengeType: 5
forumTopicId: 16020
---

# --description--

在这道题目中，我们需要写一个构造器（constructor）函数。它只接收一个字符串参数 `firstAndLast`，这个参数代表一个英文名的全名（包含姓和名）。通过这个构造函数创建出的实例需要具有以下方法：

```js
getFirstName()
getLastName()
getFullName()
setFirstName(first)
setLastName(last)
setFullName(firstAndLast)
```

你可以点击“运行测试”，然后就可以在底下的控制台中看到每个测试用例执行的情况。以上方法中，接收一个参数的方法只会接收一个字符串作为参数。同时，我们只会通过以上定义的这些方法与实例进行交互。

# --hints--

`Object.keys(bob).length` 应返回 6。

```js
assert.deepEqual(Object.keys(bob).length, 6);
```

`bob instanceof Person` 应返回 true。

```js
assert.deepEqual(bob instanceof Person, true);
```

`bob.firstName` 应返回 undefined。

```js
assert.deepEqual(bob.firstName, undefined);
```

`bob.lastName` 应返回 undefined。

```js
assert.deepEqual(bob.lastName, undefined);
```

`bob.getFirstName()` 应返回 "Bob"。

```js
assert.deepEqual(bob.getFirstName(), 'Bob');
```

`bob.getLastName()` 应返回 "Ross"。

```js
assert.deepEqual(bob.getLastName(), 'Ross');
```

`bob.getFullName()` 应返回 "Bob Ross"。

```js
assert.deepEqual(bob.getFullName(), 'Bob Ross');
```

在执行 `bob.setFirstName("Haskell")` 后，`bob.getFullName()` 应返回 "Haskell Ross"。

```js
assert.strictEqual(
  (function () {
    bob.setFirstName('Haskell');
    return bob.getFullName();
  })(),
  'Haskell Ross'
);
```

在执行 `bob.setLastName("Curry")` 后，`bob.getFullName()` 应返回 "Haskell Curry"。

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

在执行 `bob.setFullName("Haskell Curry")` 后，`bob.getFullName()` 应返回 "Haskell Curry"。

```js
assert.strictEqual(
  (function () {
    bob.setFullName('Haskell Curry');
    return bob.getFullName();
  })(),
  'Haskell Curry'
);
```

在执行 `bob.setFullName("Haskell Curry")` 后，`bob.getFirstName()` 应返回 "Haskell"。

```js
assert.strictEqual(
  (function () {
    bob.setFullName('Haskell Curry');
    return bob.getFirstName();
  })(),
  'Haskell'
);
```

在执行 `bob.setFullName("Haskell Curry")` 后，`bob.getLastName()` 应返回 "Curry"。

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


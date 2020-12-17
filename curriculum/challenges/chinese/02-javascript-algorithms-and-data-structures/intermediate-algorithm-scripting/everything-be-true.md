---
id: a10d2431ad0c6a099a4b8b52
title: 真假值判断
challengeType: 5
forumTopicId: 16011
---

# --description--

检查谓词（第二个参数）是否对集合的所有元素（第一个参数）都是`truthy`（真实的）。

换句话说，你将获得一个对象的数组集合。谓词`pre`是一个对象的属性，如果它的值是`truthy`（真实的） ，则返回`true`，否则，返回`false` 。

JavaScript 中，如果一个值在 Boolean 的上下文中（比如`if`语句）可以被执行为`true`，那么这个值就被认为是`truthy`的。

注意，你可以选择使用`.`或`[]`来访问对象属性对应的值。

# --hints--

`truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex")`应该返回`true`。

```js
assert.strictEqual(
  truthCheck(
    [
      { user: 'Tinky-Winky', sex: 'male' },
      { user: 'Dipsy', sex: 'male' },
      { user: 'Laa-Laa', sex: 'female' },
      { user: 'Po', sex: 'female' }
    ],
    'sex'
  ),
  true
);
```

`truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex")`应该返回`false`。

```js
assert.strictEqual(
  truthCheck(
    [
      { user: 'Tinky-Winky', sex: 'male' },
      { user: 'Dipsy' },
      { user: 'Laa-Laa', sex: 'female' },
      { user: 'Po', sex: 'female' }
    ],
    'sex'
  ),
  false
);
```

`truthCheck([{"user": "Tinky-Winky", "sex": "male", "age": 0}, {"user": "Dipsy", "sex": "male", "age": 3}, {"user": "Laa-Laa", "sex": "female", "age": 5}, {"user": "Po", "sex": "female", "age": 4}], "age")`应该返回`false`。

```js
assert.strictEqual(
  truthCheck(
    [
      { user: 'Tinky-Winky', sex: 'male', age: 2 },
      { user: 'Dipsy', sex: 'male', age: 0 },
      { user: 'Laa-Laa', sex: 'female', age: 5 },
      { user: 'Po', sex: 'female', age: 4 }
    ],
    'age'
  ),
  false
);
```

`truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true}, {"name": "FastFoward", "onBoat": null}], "onBoat")`应该返回`false`。

```js
assert.strictEqual(
  truthCheck(
    [
      { name: 'Pete', onBoat: true },
      { name: 'Repeat', onBoat: true },
      { name: 'FastFoward', onBoat: null }
    ],
    'onBoat'
  ),
  false
);
```

`truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true, "alias": "Repete"}, {"name": "FastFoward", "onBoat": true}], "onBoat")`应该返回`true`。

```js
assert.strictEqual(
  truthCheck(
    [
      { name: 'Pete', onBoat: true },
      { name: 'Repeat', onBoat: true, alias: 'Repete' },
      { name: 'FastFoward', onBoat: true }
    ],
    'onBoat'
  ),
  true
);
```

`truthCheck([{"single": "yes"}], "single")`应该返回`true`。

```js
assert.strictEqual(truthCheck([{ single: 'yes' }], 'single'), true);
```

`truthCheck([{"single": ""}, {"single": "double"}], "single")`应该返回`false`。

```js
assert.strictEqual(
  truthCheck([{ single: '' }, { single: 'double' }], 'single'),
  false
);
```

`truthCheck([{"single": "double"}, {"single": undefined}], "single")`应该返回`false`。

```js
assert.strictEqual(
  truthCheck([{ single: 'double' }, { single: undefined }], 'single'),
  false
);
```

`truthCheck([{"single": "double"}, {"single": NaN}], "single")`应该返回`false`。

```js
assert.strictEqual(
  truthCheck([{ single: 'double' }, { single: NaN }], 'single'),
  false
);
```

# --solutions--


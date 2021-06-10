---
id: a10d2431ad0c6a099a4b8b52
title: 一切都是True
challengeType: 5
forumTopicId: 16011
dashedName: everything-be-true
---

# --description--

檢查謂詞（第二個參數）在集合（第一個參數）的所有元素是否爲 <dfn>truthy</dfn>。

換句話說，你將獲得一個對象的數組集合。 如果數組中的每個對象裏，`pre` 對應屬性值均爲 `truthy`，則返回 `true`。 否則，返回 `false` 。

JavaScript 中，如果一個值在 Boolean 的上下文中的執行結果爲 `true`，那麼我們稱這個值是 `truthy` 的。

別忘了，你可以使用點號表示法或方括號表示法（`[]`）來訪問對象的屬性。

# --hints--

`truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex")` 應返回 `true`。

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

`truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex")` 應返回 `false`。

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

`truthCheck([{"user": "Tinky-Winky", "sex": "male", "age": 0}, {"user": "Dipsy", "sex": "male", "age": 3}, {"user": "Laa-Laa", "sex": "female", "age": 5}, {"user": "Po", "sex": "female", "age": 4}], "age")` 應返回 `false`。

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

`truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true}, {"name": "FastForward", "onBoat": null}], "onBoat")` 應返回 `false`。

```js
assert.strictEqual(
  truthCheck(
    [
      { name: 'Pete', onBoat: true },
      { name: 'Repeat', onBoat: true },
      { name: 'FastForward', onBoat: null }
    ],
    'onBoat'
  ),
  false
);
```

`truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true, "alias": "Repete"}, {"name": "FastForward", "onBoat": true}], "onBoat")` 應返回 `true`。

```js
assert.strictEqual(
  truthCheck(
    [
      { name: 'Pete', onBoat: true },
      { name: 'Repeat', onBoat: true, alias: 'Repete' },
      { name: 'FastForward', onBoat: true }
    ],
    'onBoat'
  ),
  true
);
```

`truthCheck([{"single": "yes"}], "single")` 應返回 `true`。

```js
assert.strictEqual(truthCheck([{ single: 'yes' }], 'single'), true);
```

`truthCheck([{"single": ""}, {"single": "double"}], "single")` 應返回 `false`。

```js
assert.strictEqual(
  truthCheck([{ single: '' }, { single: 'double' }], 'single'),
  false
);
```

`truthCheck([{"single": "double"}, {"single": undefined}], "single")` 應返回 `false`。

```js
assert.strictEqual(
  truthCheck([{ single: 'double' }, { single: undefined }], 'single'),
  false
);
```

`truthCheck([{"single": "double"}, {"single": NaN}], "single")` 應返回 `false`。

```js
assert.strictEqual(
  truthCheck([{ single: 'double' }, { single: NaN }], 'single'),
  false
);
```

# --seed--

## --seed-contents--

```js
function truthCheck(collection, pre) {
  return pre;
}

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");
```

# --solutions--

```js
function truthCheck(collection, pre) {
  return collection.every(function(e) { return e[pre]; });
}
```

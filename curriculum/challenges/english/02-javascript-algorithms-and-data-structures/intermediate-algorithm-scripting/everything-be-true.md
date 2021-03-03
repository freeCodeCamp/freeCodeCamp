---
id: a10d2431ad0c6a099a4b8b52
title: Everything Be True
challengeType: 5
forumTopicId: 16011
dashedName: everything-be-true
---

# --description--

Check if the predicate (second argument) is <dfn>truthy</dfn> on all elements of a collection (first argument).

In other words, you are given an array collection of objects. The predicate `pre` will be an object property and you need to return `true` if its value is `truthy`. Otherwise, return `false`.

In JavaScript, `truthy` values are values that translate to `true` when evaluated in a Boolean context.

Remember, you can access object properties through either dot notation or `[]` notation.

# --hints--

`truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex")` should return `true`.

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

`truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex")` should return `false`.

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

`truthCheck([{"user": "Tinky-Winky", "sex": "male", "age": 0}, {"user": "Dipsy", "sex": "male", "age": 3}, {"user": "Laa-Laa", "sex": "female", "age": 5}, {"user": "Po", "sex": "female", "age": 4}], "age")` should return `false`.

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

`truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true}, {"name": "FastForward", "onBoat": null}], "onBoat")` should return `false`.

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

`truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true, "alias": "Repete"}, {"name": "FastForward", "onBoat": true}], "onBoat")` should return `true`.

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

`truthCheck([{"single": "yes"}], "single")` should return `true`.

```js
assert.strictEqual(truthCheck([{ single: 'yes' }], 'single'), true);
```

`truthCheck([{"single": ""}, {"single": "double"}], "single")` should return `false`.

```js
assert.strictEqual(
  truthCheck([{ single: '' }, { single: 'double' }], 'single'),
  false
);
```

`truthCheck([{"single": "double"}, {"single": undefined}], "single")` should return `false`.

```js
assert.strictEqual(
  truthCheck([{ single: 'double' }, { single: undefined }], 'single'),
  false
);
```

`truthCheck([{"single": "double"}, {"single": NaN}], "single")` should return `false`.

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

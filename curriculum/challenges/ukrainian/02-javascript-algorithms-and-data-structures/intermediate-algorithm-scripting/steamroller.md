---
id: ab306dbdcc907c7ddfc30830
title: Нездоланна сила
challengeType: 1
forumTopicId: 16079
dashedName: steamroller
---

# --description--

Вирівняйте вкладений масив. Ви повинні врахувати різні рівні вкладення.

# --hints--

`steamrollArray([[["a"]], [["b"]]])` має повертати `["a", "b"]`.

```js
assert.deepEqual(steamrollArray([[['a']], [['b']]]), ['a', 'b']);
```

`steamrollArray([1, [2], [3, [[4]]]])` має повертати `[1, 2, 3, 4]`.

```js
assert.deepEqual(steamrollArray([1, [2], [3, [[4]]]]), [1, 2, 3, 4]);
```

`steamrollArray([1, [], [3, [[4]]]])` має повертати `[1, 3, 4]`.

```js
assert.deepEqual(steamrollArray([1, [], [3, [[4]]]]), [1, 3, 4]);
```

`steamrollArray([1, {}, [3, [[4]]]])` має повертати `[1, {}, 3, 4]`.

```js
assert.deepEqual(steamrollArray([1, {}, [3, [[4]]]]), [1, {}, 3, 4]);
```

У вашому рішенні не повинні використовуватися методи `Array.prototype.flat()` або `Array.prototype.flatMap()`.

```js
assert(!code.match(/\.\s*flat\s*\(/) && !code.match(/\.\s*flatMap\s*\(/));
```

Не використовуйте глобальні змінні.

```js
steamrollArray([1, {}, [3, [[4]]]])
assert.deepEqual(steamrollArray([1, {}, [3, [[4]]]]), [1, {}, 3, 4])
```

# --seed--

## --seed-contents--

```js
function steamrollArray(arr) {
  return arr;
}

steamrollArray([1, [2], [3, [[4]]]]);
```

# --solutions--

```js
function steamrollArray(arr) {
  if (!Array.isArray(arr)) {
    return [arr];
  }
  var out = [];
  arr.forEach(function(e) {
    steamrollArray(e).forEach(function(v) {
      out.push(v);
    });
  });
  return out;
}
```

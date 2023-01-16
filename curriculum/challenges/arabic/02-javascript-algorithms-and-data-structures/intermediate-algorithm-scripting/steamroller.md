---
id: ab306dbdcc907c7ddfc30830
title: عربة البخار (Steamroller)
challengeType: 1
forumTopicId: 16079
dashedName: steamroller
---

# --description--

قم بتسطيح مصفوفة متداخلة (Flatten a nested array). يجب عليك أن تأخذ في الحسبان مستويات مختلفة من التداخل.

# --hints--

`steamrollArray([[["a"]], [["b"]]])` يجب أن يرجع `["a", "b"]`.

```js
assert.deepEqual(steamrollArray([[['a']], [['b']]]), ['a', 'b']);
```

`steamrollArray([1, [2], [3, [[4]]]])` يجب أن يرجع `[1, 2, 3, 4]`.

```js
assert.deepEqual(steamrollArray([1, [2], [3, [[4]]]]), [1, 2, 3, 4]);
```

`steamrollArray([1, [], [3, [[4]]]])` يجب أن يرجع `[1, 3, 4]`.

```js
assert.deepEqual(steamrollArray([1, [], [3, [[4]]]]), [1, 3, 4]);
```

`steamrollArray([1, {}, [3, [[4]]]])` يجب أن يرجع `[1, {}, 3, 4]`.

```js
assert.deepEqual(steamrollArray([1, {}, [3, [[4]]]]), [1, {}, 3, 4]);
```

يجب ألا يستخدم الحل الخاص بك الوظائف `Array.prototype.flat()` أو `Array.prototype.flatMap()`.

```js
assert(!code.match(/\.\s*flat\s*\(/) && !code.match(/\.\s*flatMap\s*\(/));
```

وينبغي عدم استخدام المتغيرات العالمية (Global variables).

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

---
id: 596a8888ab7c01048de257d5
title: 深度拷貝
challengeType: 1
forumTopicId: 302247
dashedName: deepcopy
---

# --description--

Write a function that returns a deep copy of a given object. The copy must not be the same object that was given.

此任務不會測試：

<ul>
  <li>Objects with properties that are functions</li>
  <li>Date 對象或具有 Date 對象屬性的對象</li>
  <li>RegEx 或具有作爲 RegEx 對象的屬性的對象</li>
  <li>原型複製</li>
</ul>

# --hints--

`deepcopy` 應該是一個函數。

```js
assert(typeof deepcopy === 'function');
```

`deepcopy({test: "test"})` 應該返回一個對象。

```js
assert(typeof deepcopy(obj1) === 'object');
```

`deepcopy` 不應返回與提供的相同對象。

```js
assert(deepcopy(obj2) != obj2);
```

當傳遞一個包含數組的對象時，`deepcopy` 應該返回該對象的深層副本。

```js
assert.deepEqual(deepcopy(obj2), obj2);
```

當傳遞包含另一個對象的對象時，`deepcopy` 應返回該對象的深層副本。

```js
assert.deepEqual(deepcopy(obj3), obj3);
```

# --seed--

## --after-user-code--

```js
const obj1 = { test: 'test' };
const obj2 = {
  t: 'test',
  a: ['an', 'array']
};
const obj3 = {
  t: 'try',
  o: obj2
};
```

## --seed-contents--

```js
function deepcopy(obj) {

  return true;
}
```

# --solutions--

```js
function deepcopy(obj) {
  return JSON.parse(JSON.stringify(obj));
}
```

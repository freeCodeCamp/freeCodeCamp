---
id: 596a8888ab7c01048de257d5
title: 深度拷贝
challengeType: 1
forumTopicId: 302247
dashedName: deepcopy
---

# --description--

Write a function that returns a deep copy of a given object. The copy must not be the same object that was given.

此任务不会测试：

<ul>
  <li>Objects with properties that are functions</li>
  <li>Date 对象或具有 Date 对象属性的对象</li>
  <li>RegEx 或具有作为 RegEx 对象的属性的对象</li>
  <li>原型复制</li>
</ul>

# --hints--

`deepcopy` 应该是一个函数。

```js
assert(typeof deepcopy === 'function');
```

`deepcopy({test: "test"})` 应该返回一个对象。

```js
assert(typeof deepcopy(obj1) === 'object');
```

`deepcopy` 不应返回与提供的相同对象。

```js
assert(deepcopy(obj2) != obj2);
```

当传递一个包含数组的对象时，`deepcopy` 应该返回该对象的深层副本。

```js
assert.deepEqual(deepcopy(obj2), obj2);
```

当传递包含另一个对象的对象时，`deepcopy` 应返回该对象的深层副本。

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

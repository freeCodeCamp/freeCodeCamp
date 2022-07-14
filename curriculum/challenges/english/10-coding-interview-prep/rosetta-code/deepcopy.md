---
id: 596a8888ab7c01048de257d5
title: Deepcopy
challengeType: 1
forumTopicId: 302247
dashedName: deepcopy
---

# --description--

Write a function that returns a deep copy of a given object. The copy must not be the same object that was given.

This task will not test for:

<ul>
  <li>Objects with properties that are functions</li>
  <li>Date objects or object with properties that are Date objects</li>
  <li>RegEx or object with properties that are RegEx objects</li>
  <li>Prototype copying</li>
</ul>

# --hints--

`deepcopy` should be a function.

```js
assert(typeof deepcopy === 'function');
```

`deepcopy({test: "test"})` should return an object.

```js
assert(typeof deepcopy(obj1) === 'object');
```

`deepcopy` should not return the same object that was provided.

```js
assert(deepcopy(obj2) != obj2);
```

When passed an object containing an array, `deepcopy` should return a deep copy of the object.

```js
assert.deepEqual(deepcopy(obj2), obj2);
```

When passed an object containing another object, `deepcopy`  should return a deep copy of the object.

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

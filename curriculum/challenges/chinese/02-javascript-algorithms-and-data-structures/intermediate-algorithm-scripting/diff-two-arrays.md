---
id: a5de63ebea8dbee56860f4f2
title: 区分两个数组
challengeType: 5
forumTopicId: 16008
---

# --description--

在这道题目中，我们需要写一个函数，比较两个数组，返回一个新的数组。这个新数组需要包含传入的两个数组所有元素中，仅在其中一个数组里出现的元素。如果某个元素同时出现在两个数组中，则不应包含在返回的数组里。换言之，我们需要返回这两个数组的对称差。

**注意：**  
返回数组中的元素可任意排序。

# --hints--

`diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5])`应该返回一个数组。

```js
assert(typeof diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]) === 'object');
```

`['diorite', 'andesite', 'grass', 'dirt', 'pink wool', 'dead shrub'], ['diorite', 'andesite', 'grass', 'dirt', 'dead shrub']`应该返回`['pink wool']`。

```js
assert.sameMembers(
  diffArray(
    ['diorite', 'andesite', 'grass', 'dirt', 'pink wool', 'dead shrub'],
    ['diorite', 'andesite', 'grass', 'dirt', 'dead shrub']
  ),
  ['pink wool']
);
```

`['diorite', 'andesite', 'grass', 'dirt', 'pink wool', 'dead shrub'], ['diorite', 'andesite', 'grass', 'dirt', 'dead shrub']`应该返回一个长度为 1 的数组。

```js
assert(
  diffArray(
    ['diorite', 'andesite', 'grass', 'dirt', 'pink wool', 'dead shrub'],
    ['diorite', 'andesite', 'grass', 'dirt', 'dead shrub']
  ).length === 1
);
```

`['andesite', 'grass', 'dirt', 'pink wool', 'dead shrub'], ['diorite', 'andesite', 'grass', 'dirt', 'dead shrub']`应该返回`['diorite', 'pink wool']`。

```js
assert.sameMembers(
  diffArray(
    ['andesite', 'grass', 'dirt', 'pink wool', 'dead shrub'],
    ['diorite', 'andesite', 'grass', 'dirt', 'dead shrub']
  ),
  ['diorite', 'pink wool']
);
```

`['andesite', 'grass', 'dirt', 'pink wool', 'dead shrub'], ['diorite', 'andesite', 'grass', 'dirt', 'dead shrub']`应该返回一个长度为 2 的数组。

```js
assert(
  diffArray(
    ['andesite', 'grass', 'dirt', 'pink wool', 'dead shrub'],
    ['diorite', 'andesite', 'grass', 'dirt', 'dead shrub']
  ).length === 2
);
```

`['andesite', 'grass', 'dirt', 'dead shrub'], ['andesite', 'grass', 'dirt', 'dead shrub']`应该返回`[]`。

```js
assert.sameMembers(
  diffArray(
    ['andesite', 'grass', 'dirt', 'dead shrub'],
    ['andesite', 'grass', 'dirt', 'dead shrub']
  ),
  []
);
```

`['andesite', 'grass', 'dirt', 'dead shrub'], ['andesite', 'grass', 'dirt', 'dead shrub']`应该返回一个空数组。

```js
assert(
  diffArray(
    ['andesite', 'grass', 'dirt', 'dead shrub'],
    ['andesite', 'grass', 'dirt', 'dead shrub']
  ).length === 0
);
```

`[1, 2, 3, 5], [1, 2, 3, 4, 5]`应该返回`[4]`。

```js
assert.sameMembers(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]), [4]);
```

`[1, 2, 3, 5], [1, 2, 3, 4, 5]`应该返回一个长度为 1 的数组。

```js
assert(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]).length === 1);
```

`[1, 'calf', 3, 'piglet'], [1, 'calf', 3, 4]`应该返回`['piglet', 4]`。

```js
assert.sameMembers(diffArray([1, 'calf', 3, 'piglet'], [1, 'calf', 3, 4]), [
  'piglet',
  4
]);
```

`[1, 'calf', 3, 'piglet'], [1, 'calf', 3, 4]`应该返回一个长度为 2 的数组。

```js
assert(diffArray([1, 'calf', 3, 'piglet'], [1, 'calf', 3, 4]).length === 2);
```

`[], ['snuffleupagus', 'cookie monster', 'elmo']`应该返回`['snuffleupagus', 'cookie monster', 'elmo']`。

```js
assert.sameMembers(diffArray([], ['snuffleupagus', 'cookie monster', 'elmo']), [
  'snuffleupagus',
  'cookie monster',
  'elmo'
]);
```

`[], ['snuffleupagus', 'cookie monster', 'elmo']`应该返回一个长度为 3 的数组。

```js
assert(diffArray([], ['snuffleupagus', 'cookie monster', 'elmo']).length === 3);
```

`[1, 'calf', 3, 'piglet'], [7, 'filly']`应该返回`[1, 'calf', 3, 'piglet', 7, 'filly']`。

```js
assert.sameMembers(diffArray([1, 'calf', 3, 'piglet'], [7, 'filly']), [
  1,
  'calf',
  3,
  'piglet',
  7,
  'filly'
]);
```

`[1, 'calf', 3, 'piglet'], [7, 'filly']`应该返回一个长度为 6 的数组。

```js
assert(diffArray([1, 'calf', 3, 'piglet'], [7, 'filly']).length === 6);
```

# --solutions--


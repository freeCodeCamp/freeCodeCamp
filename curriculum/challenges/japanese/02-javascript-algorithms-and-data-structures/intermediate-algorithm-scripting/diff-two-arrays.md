---
id: a5de63ebea8dbee56860f4f2
title: 2 つの配列の違い
challengeType: 1
forumTopicId: 16008
dashedName: diff-two-arrays
---

# --description--

2 つの配列を比較して、与えられた配列のいずれか一方にのみ存在するアイテムを含み、両方に存在するアイテムを含まない、新しい配列を返してください。 言い換えれば、2 つの配列の対称差を返してください。

**注:** 戻り値となる配列の要素の順序は任意でかまいません。

# --hints--

`diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5])` は配列を返す必要があります。

```js
assert(typeof diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]) === 'object');
```

`["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]` は `["pink wool"]` を返す必要があります。

```js
assert.sameMembers(
  diffArray(
    ['diorite', 'andesite', 'grass', 'dirt', 'pink wool', 'dead shrub'],
    ['diorite', 'andesite', 'grass', 'dirt', 'dead shrub']
  ),
  ['pink wool']
);
```

`["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]` は 1 つのアイテムを持つ配列を返す必要があります。

```js
assert(
  diffArray(
    ['diorite', 'andesite', 'grass', 'dirt', 'pink wool', 'dead shrub'],
    ['diorite', 'andesite', 'grass', 'dirt', 'dead shrub']
  ).length === 1
);
```

`["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]` は `["diorite", "pink wool"]` を返す必要があります。

```js
assert.sameMembers(
  diffArray(
    ['andesite', 'grass', 'dirt', 'pink wool', 'dead shrub'],
    ['diorite', 'andesite', 'grass', 'dirt', 'dead shrub']
  ),
  ['diorite', 'pink wool']
);
```

`["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]` は 2 つのアイテムを持つ配列を返す必要があります。

```js
assert(
  diffArray(
    ['andesite', 'grass', 'dirt', 'pink wool', 'dead shrub'],
    ['diorite', 'andesite', 'grass', 'dirt', 'dead shrub']
  ).length === 2
);
```

`["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"]` は `[]` を返す必要があります。

```js
assert.sameMembers(
  diffArray(
    ['andesite', 'grass', 'dirt', 'dead shrub'],
    ['andesite', 'grass', 'dirt', 'dead shrub']
  ),
  []
);
```

`["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"]` は空の配列を返す必要があります。

```js
assert(
  diffArray(
    ['andesite', 'grass', 'dirt', 'dead shrub'],
    ['andesite', 'grass', 'dirt', 'dead shrub']
  ).length === 0
);
```

`[1, 2, 3, 5], [1, 2, 3, 4, 5]` は `[4]` を返す必要があります。

```js
assert.sameMembers(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]), [4]);
```

`[1, 2, 3, 5], [1, 2, 3, 4, 5]` は 1 つのアイテムを持つ配列を返す必要があります。

```js
assert(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]).length === 1);
```

`[1, "calf", 3, "piglet"], [1, "calf", 3, 4]` は `["piglet", 4]` を返す必要があります。

```js
assert.sameMembers(diffArray([1, 'calf', 3, 'piglet'], [1, 'calf', 3, 4]), [
  'piglet',
  4
]);
```

`[1, "calf", 3, "piglet"], [1, "calf", 3, 4]` は 2 つのアイテムを持つ配列を返す必要があります。

```js
assert(diffArray([1, 'calf', 3, 'piglet'], [1, 'calf', 3, 4]).length === 2);
```

`[], ["snuffleupagus", "cookie monster", "elmo"]` は `["snuffleupagus", "cookie monster", "elmo"]` を返す必要があります。

```js
assert.sameMembers(diffArray([], ['snuffleupagus', 'cookie monster', 'elmo']), [
  'snuffleupagus',
  'cookie monster',
  'elmo'
]);
```

`[], ["snuffleupagus", "cookie monster", "elmo"]` は 3 つのアイテムを持つ配列を返す必要があります。

```js
assert(diffArray([], ['snuffleupagus', 'cookie monster', 'elmo']).length === 3);
```

`[1, "calf", 3, "piglet"], [7, "filly"]` は `[1, "calf", 3, "piglet", 7, "filly"]` を返す必要があります。

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

`[1, "calf", 3, "piglet"], [7, "filly"]` は 6 つのアイテムを持つ配列を返す必要があります。

```js
assert(diffArray([1, 'calf', 3, 'piglet'], [7, 'filly']).length === 6);
```

# --seed--

## --seed-contents--

```js
function diffArray(arr1, arr2) {
  const newArr = [];
  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
```

# --solutions--

```js
function diffArray(arr1, arr2) {
  if (arr1.length === 0) return arr2;
  if (arr2.length === 0) return arr1;

  const set1 = new Set(arr1);
  const set2 = new Set(arr2);

  const newArr = [];

  set1.forEach(element => {
    if (!set2.has(element)) newArr.push(element);

  });

  set2.forEach(element => {
    if (!set1.has(element)) newArr.push(element);

  });

  return newArr;

}

```

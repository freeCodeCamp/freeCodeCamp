---
id: 56533eb9ac21ba0edf2244cf
title: 记录集合
challengeType: 1
forumTopicId: 18261
dashedName: record-collection
---

# --description--

给定一个对象，用来表示部分音乐专辑收藏。 每张专辑都有几个属性和一个唯一的 id 号作为键值。 并非所有专辑都有完整的信息。

以 `updateRecords` 函数开始，这个函数需要一个对象 `records`，包含一个音乐专辑集合，一个 `id`，一个 `prop`（如 `artist` 或 `tracks`），和一个 `value`。 使用下面的规则完成函数来修改传递给函数的对象。

-   函数必须始终返回整个音乐专辑集合对象。
-   如果 `prop` 不是 `tracks` 并且 `value` 不是一个空字符串， 将专辑的 `prop` 更新或设置为 `value`。
-   如果 `prop` 是 `tracks` 但专辑没有 `tracks` 属性，则应创建空数组并为其添加 `value`。
-   如果 `prop` 是 `tracks` 并且 `value` 不是一个空字符串，将 `value` 添加到专辑现有 `tracks` 数组的末尾。
-   如果 `value` 是空字符串，从专辑里删除指定的 `prop`。

**注意：** 用 `recordCollection` 对象做为测试参数对象。

# --hints--

执行 `updateRecords(recordCollection, 5439, "artist", "ABBA")` 后，`artist` 的值应该是字符串 `ABBA`。

```js
assert(
  updateRecords(_recordCollection, 5439, 'artist', 'ABBA')[5439]['artist'] ===
    'ABBA'
);
```

在 `updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me")` 之后，`tracks` 应该有字符串 `Take a Chance on Me` 作为最后一个也是唯一的元素。

```js
assert(
  updateRecords(_recordCollection, 5439, 'tracks', 'Take a Chance on Me') &&
  _recordCollection[5439]['tracks'].length === 1 &&
  _recordCollection[5439]['tracks'].pop() === 'Take a Chance on Me'
);
```

执行 `updateRecords(recordCollection, 2548, "artist", "")` 后， `artist` 不应被设置为任何值。

```js
updateRecords(_recordCollection, 2548, 'artist', '');
assert(!_recordCollection[2548].hasOwnProperty('artist'));
```

执行 `updateRecords(recordCollection, 1245, "tracks", "Addicted to Love")` 后，`tracks` 的最后一个元素应该为字符串 `Addicted to Love`。

```js
assert(
  updateRecords(_recordCollection, 1245, 'tracks', 'Addicted to Love')[1245][
    'tracks'
  ].pop() === 'Addicted to Love'
);
```

执行 `updateRecords(recordCollection, 2468, "tracks", "Free")` 后，`tracks` 的第一个元素应该为字符串 `1999`。

```js
assert(
  updateRecords(_recordCollection, 2468, 'tracks', 'Free')[2468][
    'tracks'
  ][0] === '1999'
);
```

执行 `updateRecords(recordCollection, 2548, "tracks", "")` 后， `tracks` 不应被设置为任何值。

```js
updateRecords(_recordCollection, 2548, 'tracks', '');
assert(!_recordCollection[2548].hasOwnProperty('tracks'));
```

执行 `updateRecords(recordCollection, 1245, "albumTitle", "Riptide")` 后，`albumTitle` 的值应该是字符串 `Riptide`。

```js
assert(
  updateRecords(_recordCollection, 1245, 'albumTitle', 'Riptide')[1245][
    'albumTitle'
  ] === 'Riptide'
);
```

# --seed--

## --before-user-code--

```js
const _recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};
```

## --seed-contents--

```js
// Setup
const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

// Only change code below this line
function updateRecords(records, id, prop, value) {
  return records;
}

updateRecords(recordCollection, 5439, 'artist', 'ABBA');
```

# --solutions--

```js
const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

// Only change code below this line
function updateRecords(records, id, prop, value) {
  if (value === '') delete records[id][prop];
  else if (prop === 'tracks') {
    records[id][prop] = records[id][prop] || [];
    records[id][prop].push(value);
  } else {
    records[id][prop] = value;
  }

  return records;
}
```

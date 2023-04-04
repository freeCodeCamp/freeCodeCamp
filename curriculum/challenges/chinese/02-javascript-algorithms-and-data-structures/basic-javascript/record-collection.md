---
id: 56533eb9ac21ba0edf2244cf
title: 记录集合
challengeType: 1
forumTopicId: 18261
dashedName: record-collection
---

# --description--

你将创建一个帮助维护音乐专辑集的函数。 这个集合是一个包含多个相册的对象，这些相册也是对象。 每张专辑在集合中以唯一的 `id` 作为属性名来表示。 在每个专辑对象中，有各种描述专辑信息的属性。 并非所有专辑都有完整的信息。

`updateRecords` 函数有 4 个参数，即以下参数：

-   `records` - 一个包含多个专辑的对象
-   `id` - 一个数字，代表 `records` 对象中特定的专辑
-   `prop` - 一个字符串，代表相册属性名称
-   `value` - 一个字符串，包含用来更新相册属性的信息

使用下面的规则完成函数来修改传递给函数的对象。

-   你的函数必须始终返回整个 `records` 对象。
-   如果 `value` 是空字符串，从专辑里删除指定的 `prop`。
-   If `prop` isn't `tracks` and `value` isn't an empty string, assign the `value` to that album's `prop`.
-   If `prop` is `tracks` and value isn't an empty string, add the `value` to the end of the album's `tracks` array. You need to create this array first if the album does not have a `tracks` property.

**注意：** 将 `recordCollection` 对象的副本用于测试。 你不应该直接修改 `recordCollection` 对象。

# --hints--

执行 `updateRecords(recordCollection, 5439, "artist", "ABBA")` 后，`artist` 的值应该是字符串 `ABBA`。

```js
assert(
  updateRecords(_recordCollection, 5439, 'artist', 'ABBA')[5439]['artist'] ===
    'ABBA'
);
```

执行 `updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me")` 后，`tracks` 的最后一个和唯一一个元素应该为字符串 `Take a Chance on Me`。

```js
assert(
  updateRecords(_recordCollection, 5439, 'tracks', 'Take a Chance on Me') &&
  _recordCollection[5439]['tracks'].length === 1 &&
  _recordCollection[5439]['tracks'].pop() === 'Take a Chance on Me'
);
```

执行 `updateRecords(recordCollection, 2548, "artist", "")` 后，`artist` 不应被设置为任何值。

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

执行 `updateRecords(recordCollection, 2548, "tracks", "")` 后，`tracks` 不应被设置为任何值。

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

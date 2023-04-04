---
id: 56533eb9ac21ba0edf2244cf
title: 記錄集合
challengeType: 1
forumTopicId: 18261
dashedName: record-collection
---

# --description--

你將創建一個幫助維護音樂專輯集的函數。 這個集合是一個包含多個相冊的對象，這些相冊也是對象。 每張專輯在集合中以唯一的 `id` 作爲屬性名來表示。 在每個專輯對象中，有各種描述專輯信息的屬性。 並非所有專輯都有完整的信息。

`updateRecords` 函數有 4 個參數，即以下參數：

-   `records` - 一個包含多個專輯的對象
-   `id` - 一個數字，代表 `records` 對象中特定的專輯
-   `prop` - 一個字符串，代表相冊屬性名稱
-   `value` - 一個字符串，包含用來更新相冊屬性的信息

使用下面的規則完成函數來修改傳遞給函數的對象。

-   你的函數必須始終返回整個 `records` 對象。
-   如果 `value` 是空字符串，從專輯裏刪除指定的 `prop`。
-   If `prop` isn't `tracks` and `value` isn't an empty string, assign the `value` to that album's `prop`.
-   If `prop` is `tracks` and value isn't an empty string, add the `value` to the end of the album's `tracks` array. You need to create this array first if the album does not have a `tracks` property.

**注意：** 將 `recordCollection` 對象的副本用於測試。 你不應該直接修改 `recordCollection` 對象。

# --hints--

執行 `updateRecords(recordCollection, 5439, "artist", "ABBA")` 後，`artist` 的值應該是字符串 `ABBA`。

```js
assert(
  updateRecords(_recordCollection, 5439, 'artist', 'ABBA')[5439]['artist'] ===
    'ABBA'
);
```

執行 `updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me")` 後，`tracks` 的最後一個和唯一一個元素應該爲字符串 `Take a Chance on Me`。

```js
assert(
  updateRecords(_recordCollection, 5439, 'tracks', 'Take a Chance on Me') &&
  _recordCollection[5439]['tracks'].length === 1 &&
  _recordCollection[5439]['tracks'].pop() === 'Take a Chance on Me'
);
```

執行 `updateRecords(recordCollection, 2548, "artist", "")` 後，`artist` 不應被設置爲任何值。

```js
updateRecords(_recordCollection, 2548, 'artist', '');
assert(!_recordCollection[2548].hasOwnProperty('artist'));
```

執行 `updateRecords(recordCollection, 1245, "tracks", "Addicted to Love")` 後，`tracks` 的最後一個元素應該爲字符串 `Addicted to Love`。

```js
assert(
  updateRecords(_recordCollection, 1245, 'tracks', 'Addicted to Love')[1245][
    'tracks'
  ].pop() === 'Addicted to Love'
);
```

執行 `updateRecords(recordCollection, 2468, "tracks", "Free")` 後，`tracks` 的第一個元素應該爲字符串 `1999`。

```js
assert(
  updateRecords(_recordCollection, 2468, 'tracks', 'Free')[2468][
    'tracks'
  ][0] === '1999'
);
```

執行 `updateRecords(recordCollection, 2548, "tracks", "")` 後，`tracks` 不應被設置爲任何值。

```js
updateRecords(_recordCollection, 2548, 'tracks', '');
assert(!_recordCollection[2548].hasOwnProperty('tracks'));
```

執行 `updateRecords(recordCollection, 1245, "albumTitle", "Riptide")` 後，`albumTitle` 的值應該是字符串 `Riptide`。

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

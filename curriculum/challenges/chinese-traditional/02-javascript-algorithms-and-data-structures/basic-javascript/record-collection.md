---
id: 56533eb9ac21ba0edf2244cf
title: 記錄集合
challengeType: 1
forumTopicId: 18261
dashedName: record-collection
---

# --description--

給定一個對象，用來表示部分音樂專輯收藏。 每張專輯都有幾個屬性和一個唯一的 id 號作爲鍵值。 並非所有專輯都有完整的信息。

以 `updateRecords` 函數開始，這個函數需要一個對象 `records`，包含一個音樂專輯集合，一個 `id`，一個 `prop`（如 `artist` 或 `tracks`），和一個 `value`。 使用下面的規則完成函數來修改傳遞給函數的對象。

-   函數必須始終返回整個音樂專輯集合對象。
-   如果 `prop` 不是 `tracks` 並且 `value` 不是一個空字符串， 將專輯的 `prop` 更新或設置爲 `value`。
-   如果 `prop` 是 `tracks` 但專輯沒有 `tracks` 屬性，則應創建空數組併爲其添加 `value`。
-   如果 `prop` 是 `tracks` 並且 `value` 不是一個空字符串，將 `value` 添加到專輯現有 `tracks` 數組的末尾。
-   如果 `value` 是空字符串，從專輯裏刪除指定的 `prop`。

**注意：** 用 `recordCollection` 對象做爲測試參數對象。

# --hints--

執行 `updateRecords(recordCollection, 5439, "artist", "ABBA")` 後，`artist` 的值應該是字符串 `ABBA`。

```js
assert(
  updateRecords(_recordCollection, 5439, 'artist', 'ABBA')[5439]['artist'] ===
    'ABBA'
);
```

在 `updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me")` 之後，`tracks` 應該有字符串 `Take a Chance on Me` 作爲最後一個也是唯一的元素。

```js
assert(
  updateRecords(_recordCollection, 5439, 'tracks', 'Take a Chance on Me') &&
  _recordCollection[5439]['tracks'].length === 1 &&
  _recordCollection[5439]['tracks'].pop() === 'Take a Chance on Me'
);
```

執行 `updateRecords(recordCollection, 2548, "artist", "")` 後， `artist` 不應被設置爲任何值。

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

執行 `updateRecords(recordCollection, 2548, "tracks", "")` 後， `tracks` 不應被設置爲任何值。

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

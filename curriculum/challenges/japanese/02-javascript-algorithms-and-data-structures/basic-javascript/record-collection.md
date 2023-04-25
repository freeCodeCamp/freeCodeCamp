---
id: 56533eb9ac21ba0edf2244cf
title: レコードコレクション
challengeType: 1
forumTopicId: 18261
dashedName: record-collection
---

# --description--

あなたは音楽アルバムコレクションのメンテナンスに役立つ関数を作成しています。 コレクションは、オブジェクトである複数のアルバムを含むオブジェクトとして構成されています。 各アルバムはコレクション内で一意の `id` をプロパティ名として保有し表されます。 Within each album object, there are various properties describing information about the album. 情報が完全ではないアルバムもあります。

The `updateRecords` function takes 4 arguments represented by the following function parameters:

-   `records` - an object containing several individual albums
-   `id` - a number representing a specific album in the `records` object
-   `prop` - a string representing the name of the album’s property to update
-   `value` - a string containing the information used to update the album’s property

次に示すルールに従って、渡されたオブジェクトを変更する関数を完成させてください。

-   Your function must always return the entire `records` object.
-   `value` が空文字列の場合は、指定された `prop` プロパティをアルバムから削除します。
-   If `prop` isn't `tracks` and `value` isn't an empty string, assign the `value` to that album's `prop`.
-   If `prop` is `tracks` and value isn't an empty string, add the `value` to the end of the album's `tracks` array. You need to create this array first if the album does not have a `tracks` property.

**注:** テストには `recordCollection` オブジェクトのコピーが使用されます。 You should not directly modify the `recordCollection` object.

# --hints--

`updateRecords(recordCollection, 5439, "artist", "ABBA")` の実行後、`artist` は文字列 `ABBA` になる必要があります。

```js
assert(
  updateRecords(_recordCollection, 5439, 'artist', 'ABBA')[5439]['artist'] ===
    'ABBA'
);
```

`updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me")` の実行後、`tracks` 配列は、文字列 `Take a Chance on Me` が末尾かつ唯一の要素になる必要があります。

```js
assert(
  updateRecords(_recordCollection, 5439, 'tracks', 'Take a Chance on Me') &&
  _recordCollection[5439]['tracks'].length === 1 &&
  _recordCollection[5439]['tracks'].pop() === 'Take a Chance on Me'
);
```

`updateRecords(recordCollection, 2548, "artist", "")` の実行後、`artist` は未設定であるべきです。

```js
updateRecords(_recordCollection, 2548, 'artist', '');
assert(!_recordCollection[2548].hasOwnProperty('artist'));
```

`updateRecords(recordCollection, 1245, "tracks", "Addicted to Love")` の実行後、`tracks` の末尾の要素は文字列 `Addicted to Love` になる必要があります。

```js
assert(
  updateRecords(_recordCollection, 1245, 'tracks', 'Addicted to Love')[1245][
    'tracks'
  ].pop() === 'Addicted to Love'
);
```

`updateRecords(recordCollection, 2468, "tracks", "Free")` の実行後、`tracks` の先頭の要素は文字列 `1999` であるべきです。

```js
assert(
  updateRecords(_recordCollection, 2468, 'tracks', 'Free')[2468][
    'tracks'
  ][0] === '1999'
);
```

`updateRecords(recordCollection, 2548, "tracks", "")` の実行後、`tracks` は未設定であるべきです。

```js
updateRecords(_recordCollection, 2548, 'tracks', '');
assert(!_recordCollection[2548].hasOwnProperty('tracks'));
```

`updateRecords(recordCollection, 1245, "albumTitle", "Riptide")` の実行後、`albumTitle` は文字列 `Riptide` になる必要があります。

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

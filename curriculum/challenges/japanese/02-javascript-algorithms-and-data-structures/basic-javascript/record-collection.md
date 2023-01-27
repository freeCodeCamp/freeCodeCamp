---
id: 56533eb9ac21ba0edf2244cf
title: レコードコレクション
challengeType: 1
forumTopicId: 18261
dashedName: record-collection
---

# --description--

音楽アルバムのコレクションの一部を表すオブジェクトリテラルが用意されています。 各アルバムには、キーとして一意の ID 番号と、その他のいくつかのプロパティが含まれています。 情報が完全ではないアルバムもあります。

まず `updateRecords` 関数から記述を始めてください。この関数はオブジェクトリテラル `records` を受け取ります。これには、音楽アルバムのコレクション、`id`、`prop` (`artist` や `tracks` など)、および `value` が含まれています。 次に示すルールに従って関数を完成させ、関数に渡すオブジェクトを変更してください。

-   関数は常にレコードコレクションオブジェクト全体を返す必要があります。
-   `prop` が `tracks` ではなく、`value` が空文字列ではない場合は、アルバムの `prop` を `value` に更新または設定します。
-   `prop` が `tracks` であるものの、アルバムに `tracks` プロパティがない場合は、空の配列を作成してそこに `value` を追加します。
-   `prop` が `tracks` であり、`value` が空文字列ではない場合は、`value` をアルバムの既存の `tracks` 配列の末尾に追加します。
-   `value` が空文字列の場合は、指定された `prop` プロパティをアルバムから削除します。

**注:** テストには `recordCollection` オブジェクトのコピーが使用されます。

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

---
id: 56533eb9ac21ba0edf2244cb
title: 複雑なオブジェクトの操作
challengeType: 1
videoUrl: 'https://scrimba.com/c/c9yNMfR'
forumTopicId: 18208
dashedName: manipulating-complex-objects
---

# --description--

場合によっては、データを柔軟な<dfn>データ構造</dfn>に保存したいことがあります。 JavaScript オブジェクトは、柔軟性のあるデータを扱う方法の一つです。 オブジェクトでは、<dfn>文字列</dfn>、<dfn>数値</dfn>、<dfn>ブール値</dfn>、<dfn>配列</dfn>、<dfn>関数</dfn>、<dfn>オブジェクト</dfn>の任意の組み合わせを使用できます。

次は複雑なデータ構造の例です。

```js
const ourMusic = [
  {
    "artist": "Daft Punk",
    "title": "Homework",
    "release_year": 1997,
    "formats": [ 
      "CD", 
      "Cassette", 
      "LP"
    ],
    "gold": true
  }
];
```

これは内部にオブジェクトを 1 つ含む配列です。 このオブジェクトには、アルバムに関するさまざまな<dfn>メタデータ</dfn>があります。 また、ネストされた `formats` という配列もあります。 アルバムレコードを追加したい場合は、最上位の配列にレコードを追加することで実現できます。 オブジェクトではデータがプロパティに保持されます。プロパティはキーと値の組み合わせの形式を持ちます。 上記の例では、`"artist": "Daft Punk"` はプロパティで、`artist` というキーと `Daft Punk` という値を持っています。

**注:** 配列内では、最後のオブジェクトを除くすべてのオブジェクトの後にコンマを置く必要があります。

# --instructions--

`myMusic` 配列に新しいアルバムを追加してください。 文字列の `artist` と `title`、数値の `release_year`、文字列配列の `formats` を追加してください。

# --hints--

`myMusic` は配列である必要があります。

```js
assert(Array.isArray(myMusic));
```

`myMusic` には、少なくとも 2 つの要素が必要です。

```js
assert(myMusic.length > 1);
```

`myMusic` 配列の要素はオブジェクトである必要があります。

```js
myMusic.forEach(object => {assert.typeOf(object, 'object')})
```

`myMusic` 内のオブジェクトには、少なくとも 4 つのプロパティが必要です。

```js
myMusic.forEach(object => {assert(Object.keys(object).length > 3); });
```

`myMusic` 内のオブジェクトには、文字列であるプロパティ `artist` が含まれている必要があります。

```js
myMusic.forEach(object => {
  assert.containsAllKeys(object, ['artist']);
  assert.typeOf(object.artist, 'string')
})
```

`myMusic` 内のオブジェクトには、文字列であるプロパティ `title` が含まれている必要があります。

```js
myMusic.forEach(object => {
  assert.containsAllKeys(object, ['title']);
  assert.typeOf(object.title, 'string')
})
```

`myMusic` 内のオブジェクトには、数値であるプロパティ `release_year` が含まれている必要があります。

```js
myMusic.forEach(object => {
  assert.containsAllKeys(object, ['release_year']);
  assert.typeOf(object.release_year, 'number')
})
```

`myMusic` 内のオブジェクトには、配列であるプロパティ `formats` が含まれている必要があります。

```js
myMusic.forEach(object => {
  assert.containsAllKeys(object, ['formats']);
  assert.typeOf(object.formats, 'array')
})
```

`formats` は少なくとも 2 つの要素を持つ文字列配列である必要があります。

```js
myMusic.forEach(object => {
  object.formats.forEach(format => {
    assert.typeOf(format, 'string')
  });
  assert.isAtLeast(object.formats.length, 2)
})
```

# --seed--

## --after-user-code--

```js
(function(x){ if (Array.isArray(x)) { return JSON.stringify(x); } return "myMusic is not an array"})(myMusic);
```

## --seed-contents--

```js
const myMusic = [
  {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [
      "CD",
      "8T",
      "LP"
    ],
    "gold": true
  }
];
```

# --solutions--

```js
const myMusic = [
  {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [
      "CS",
      "8T",
      "LP" ],
    "gold": true
  },
  {
    "artist": "ABBA",
    "title": "Ring Ring",
    "release_year": 1973,
    "formats": [
      "CS",
      "8T",
      "LP",
    "CD",
  ]
  }
];
```

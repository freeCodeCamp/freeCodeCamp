---
id: 56533eb9ac21ba0edf2244cb
title: 操作複雜對象
challengeType: 1
videoUrl: 'https://scrimba.com/c/c9yNMfR'
forumTopicId: 18208
dashedName: manipulating-complex-objects
---

# --description--

有時你可能希望將數據存儲在一個靈活的數據結構（<dfn>Data Structure</dfn>）中。 JavaScript 對象是一種靈活的數據結構。 它可以儲存字符串（<dfn>strings</dfn>）、數字（<dfn>numbers</dfn>）、布爾值（<dfn>booleans</dfn>）、數組（<dfn>arrays</dfn>）、函數（<dfn>functions</dfn>）和對象（<dfn>objects</dfn>）以及這些值的任意組合。

這是一個複雜數據結構的示例：

```js
var ourMusic = [
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

這是一個包含一個對象的數組。 該對象有關於專輯的各種元數據（<dfn>metadata</dfn>）。 它也有一個嵌套的 `formats` 數組。 可以將專輯添加到頂級數組來增加更多的專輯記錄。 對象將數據以一種鍵 - 值對的形式保存。 在上面的示例中，`"artist": "Daft Punk"` 有一個鍵位 `artist` 值爲 `Daft Punk` 的屬性。 [JavaScript Object Notation](http://www.json.org/) 簡稱 `JSON` 是可以用於存儲數據的數據交換格式。

```json
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
```

**提示：**數組中有多個 JSON 對象的時候，對象與對象之間要用逗號隔開。

# --instructions--

添加一個新專輯到 `myMusic` 數組。 添加 `artist` 和 `title` 字符串，`release_year` 數字和 `formats` 字符串數組。

# --hints--

`myMusic` 應該是一個數組

```js
assert(Array.isArray(myMusic));
```

`myMusic` 應該至少包含兩個元素

```js
assert(myMusic.length > 1);
```

`myMusic[1]` 應該是一個對象

```js
assert(typeof myMusic[1] === 'object');
```

`myMusic[1]` 至少要包含四個屬性

```js
assert(Object.keys(myMusic[1]).length > 3);
```

`myMusic[1]` 應該包含一個類型爲字符串的 `artist` 的屬性

```js
assert(
  myMusic[1].hasOwnProperty('artist') && typeof myMusic[1].artist === 'string'
);
```

`myMusic[1]` 應該包含一個類型爲字符串的 `title` 屬性

```js
assert(
  myMusic[1].hasOwnProperty('title') && typeof myMusic[1].title === 'string'
);
```

`myMusic[1]` 應該包含一個類型爲數字的 `release_year` 屬性

```js
assert(
  myMusic[1].hasOwnProperty('release_year') &&
    typeof myMusic[1].release_year === 'number'
);
```

`myMusic[1]` 應該包含一個類型爲數組的 `formats` 屬性

```js
assert(
  myMusic[1].hasOwnProperty('formats') && Array.isArray(myMusic[1].formats)
);
```

`formats`應該是一個至少包含兩個字符串元素的數組

```js
assert(
  myMusic[1].formats.every(function (item) {
    return typeof item === 'string';
  }) && myMusic[1].formats.length > 1
);
```

# --seed--

## --after-user-code--

```js
(function(x){ if (Array.isArray(x)) { return JSON.stringify(x); } return "myMusic is not an array"})(myMusic);
```

## --seed-contents--

```js
var myMusic = [
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
  // Add a record here
];
```

# --solutions--

```js
var myMusic = [
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

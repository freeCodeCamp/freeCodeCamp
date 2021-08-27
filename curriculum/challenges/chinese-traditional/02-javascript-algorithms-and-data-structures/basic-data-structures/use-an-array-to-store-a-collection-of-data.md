---
id: 587d7b7e367417b2b2512b20
title: 使用數組存儲不同類型的數據
challengeType: 1
forumTopicId: 301167
dashedName: use-an-array-to-store-a-collection-of-data
---

# --description--

以下是最簡單的數組（Array）示例： 這是一個一維數組（<dfn>one-dimensional array</dfn>），它只有一層，或者說它裏面沒有包含其它數組。 可以觀察到，這個數組中只包含了布爾值（<dfn>booleans</dfn>）、字符串（<dfn>strings</dfn>）、數字（<dfn>numbers</dfn>）以及 JavaScript 中的其他數據類型：

```js
let simpleArray = ['one', 2, 'three', true, false, undefined, null];
console.log(simpleArray.length);
```

調用 `console.log` 顯示 `7`。

所有數組都有一個表示長度的屬性，我們可以通過 `Array.length` 來訪問它。 下面是一個關於數組的更復雜的例子。 這是一個多維數組 （<dfn>multi-dimensional Array</dfn>），或者說是一個包含了其他數組的數組。 可以注意到，在它的內部還包含了 JavaScript 中的對象（<dfn>objects</dfn>）結構。 我們會在後面的小節中討論該數據結構，但現在你只需要知道數組能夠存儲複雜的對象類型數據。

```js
let complexArray = [
  [
    {
      one: 1,
      two: 2
    },
    {
      three: 3,
      four: 4
    }
  ],
  [
    {
      a: "a",
      b: "b"
    },
    {
      c: "c",
      d: "d"
    }
  ]
];
```

# --instructions--

我們已經定義了一個名爲 `yourArray` 的變量。 請修改代碼，將一個含有至少 5 個元素的數組賦值給 `yourArray` 變量。 你的數組中應包含至少一個 <dfn>string</dfn> 類型的數據、一個 <dfn>number</dfn> 類型的數據和一個 <dfn>boolean</dfn> 類型的數據。

# --hints--

`yourArray` 應爲數組。

```js
assert.strictEqual(Array.isArray(yourArray), true);
```

`yourArray` 應包含至少 5 個元素。

```js
assert.isAtLeast(yourArray.length, 5);
```

`yourArray` 應包含至少一個 `boolean`。

```js
assert(yourArray.filter((el) => typeof el === 'boolean').length >= 1);
```

`yourArray` 應包含至少一個 `number`。

```js
assert(yourArray.filter((el) => typeof el === 'number').length >= 1);
```

`yourArray` 應包含至少一個 `string`。

```js
assert(yourArray.filter((el) => typeof el === 'string').length >= 1);
```

# --seed--

## --seed-contents--

```js
let yourArray; // Change this line
```

# --solutions--

```js
let yourArray = ['a string', 100, true, ['one', 2], 'another string'];
```

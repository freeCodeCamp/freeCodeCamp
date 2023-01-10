---
id: a8e512fbe388ac2f9198f0fa
title: どうしてあなたは◯◯◯なの？
challengeType: 1
forumTopicId: 16092
dashedName: wherefore-art-thou
---

# --description--

オブジェクトの配列 (最初の引数) を参照して、名前と値のペア (2 番目の引数) に一致するすべてのオブジェクトの配列を返す関数を作成してください。 返される配列に、元のオブジェクトの名前と値のペアを含める場合は、それぞれのペアがコレクションから得られるオブジェクトに存在する必要があります。

たとえば、最初の引数が `[{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }]` で、2 番目の引数が `{ last: "Capulet" }` の場合は、配列 (最初の引数) から得られる 3 番目のオブジェクトに 2 番目の引数で渡された名前とその値が含まれているので、3 番目のオブジェクトを返す必要があります。

# --hints--

`whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" })` は `[{ first: "Tybalt", last: "Capulet" }]` を返す必要があります。

```js
assert.deepEqual(
  whatIsInAName(
    [
      { first: 'Romeo', last: 'Montague' },
      { first: 'Mercutio', last: null },
      { first: 'Tybalt', last: 'Capulet' }
    ],
    { last: 'Capulet' }
  ),
  [{ first: 'Tybalt', last: 'Capulet' }]
);
```

`whatIsInAName([{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }], { "apple": 1 })` は `[{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }]` を返す必要があります。

```js
assert.deepEqual(
  whatIsInAName([{ apple: 1 }, { apple: 1 }, { apple: 1, bat: 2 }], {
    apple: 1
  }),
  [{ apple: 1 }, { apple: 1 }, { apple: 1, bat: 2 }]
);
```

`whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 })` は `[{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }]` を返す必要があります。

```js
assert.deepEqual(
  whatIsInAName(
    [{ apple: 1, bat: 2 }, { bat: 2 }, { apple: 1, bat: 2, cookie: 2 }],
    { apple: 1, bat: 2 }
  ),
  [
    { apple: 1, bat: 2 },
    { apple: 1, bat: 2, cookie: 2 }
  ]
);
```

`whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 })` は `[{ "apple": 1, "bat": 2, "cookie": 2 }]` を返す必要があります。

```js
assert.deepEqual(
  whatIsInAName(
    [{ apple: 1, bat: 2 }, { apple: 1 }, { apple: 1, bat: 2, cookie: 2 }],
    { apple: 1, cookie: 2 }
  ),
  [{ apple: 1, bat: 2, cookie: 2 }]
);
```

`whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }, { "bat":2 }], { "apple": 1, "bat": 2 })` は `[{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie":2 }]` を返す必要があります。

```js
assert.deepEqual(
  whatIsInAName(
    [
      { apple: 1, bat: 2 },
      { apple: 1 },
      { apple: 1, bat: 2, cookie: 2 },
      { bat: 2 }
    ],
    { apple: 1, bat: 2 }
  ),
  [
    { apple: 1, bat: 2 },
    { apple: 1, bat: 2, cookie: 2 }
  ]
);
```

`whatIsInAName([{"a": 1, "b": 2, "c": 3}], {"a": 1, "b": 9999, "c": 3})` は `[]` を返す必要があります。

```js
assert.deepEqual(
  whatIsInAName([{ a: 1, b: 2, c: 3 }], { a: 1, b: 9999, c: 3 }),
  []
);
```

`whatIsInAName([{"a": 1, "b": 2, "c": 3, "d": 9999}], {"a": 1, "b": 9999, "c": 3})` は `[]` を返す必要があります。

```js
assert.deepEqual(
  whatIsInAName([{ a: 1, b: 2, c: 3, d: 9999 }], { a: 1, b: 9999, c: 3 }),
  []
);
```

# --seed--

## --seed-contents--

```js
function whatIsInAName(collection, source) {

}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
```

# --solutions--

```js
function whatIsInAName(collection, source) {
  const arr = [];
  const keys = Object.keys(source);
  collection.forEach(function(e) {
    if(keys.every(function(key) {return e[key] === source[key];})) {
      arr.push(e);
    }
  });
  return arr;
}
```

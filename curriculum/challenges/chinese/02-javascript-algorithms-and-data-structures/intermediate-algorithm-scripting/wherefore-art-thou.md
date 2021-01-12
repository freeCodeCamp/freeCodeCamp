---
id: a8e512fbe388ac2f9198f0fa
title: 找出包含特定键值对的对象
challengeType: 5
forumTopicId: 16092
---

# --description--

在这道题目中，我们要写一个函数，它接收两个参数：第一个参数是对象数组，第二个参数是一个对象。我们需要从对象数组中找出与第二个参数的属性和属性值均相等或包含第二个参数的所有对象，并以对象数组的形式返回。其中，相等的意思是原数组中的对象与第二个参数中对象的所有键值对完全相等；包含的意思是只要第二个参数中对象的所有键存在于原数组对象中，且它们对应的值相同即可。

比如，如果第一个参数是 `[{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }]`，第二个参数是 `{ last: "Capulet" }`。那么你需要以对象数组的形式返回第一个参数中的第三个元素，因为它包含第二个参数中定义的键 `last`，且对应的值 `"Capulet"` 相同

# --hints--

`whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" })` 应返回 `[{ first: "Tybalt", last: "Capulet" }]`。

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

`whatIsInAName([{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }], { "apple": 1 })` 应返回 `[{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }]`。

```js
assert.deepEqual(
  whatIsInAName([{ apple: 1 }, { apple: 1 }, { apple: 1, bat: 2 }], {
    apple: 1
  }),
  [{ apple: 1 }, { apple: 1 }, { apple: 1, bat: 2 }]
);
```

`whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 })` 应返回 `[{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }]`。

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

`whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 })` 应返回 `[{ "apple": 1, "bat": 2, "cookie": 2 }]`。

```js
assert.deepEqual(
  whatIsInAName(
    [{ apple: 1, bat: 2 }, { apple: 1 }, { apple: 1, bat: 2, cookie: 2 }],
    { apple: 1, cookie: 2 }
  ),
  [{ apple: 1, bat: 2, cookie: 2 }]
);
```

`whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }, { "bat":2 }], { "apple": 1, "bat": 2 })` 应返回 `[{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie":2 }]`。

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

`whatIsInAName([{"a": 1, "b": 2, "c": 3}], {"a": 1, "b": 9999, "c": 3})` 应返回 `[]`。

```js
assert.deepEqual(
  whatIsInAName([{ a: 1, b: 2, c: 3 }], { a: 1, b: 9999, c: 3 }),
  []
);
```

# --solutions--


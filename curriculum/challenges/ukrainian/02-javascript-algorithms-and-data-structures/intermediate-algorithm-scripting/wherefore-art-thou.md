---
id: a8e512fbe388ac2f9198f0fa
title: Де ж ти, Ромео?
challengeType: 1
forumTopicId: 16092
dashedName: wherefore-art-thou
---

# --description--

Напишіть функцію, яка проглядає масив об'єктів (перший аргумент) і повертає масив усіх об'єктів, які мають однакові пари імен та значень (другий аргумент). Кожна пара імен та значень вихідного об'єкта повинна бути в об'єкті з колекції, якщо він необхідний у повернутому масиві.

Наприклад, якщо першим аргументом є `[{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }]` та другим аргументом є `{ last: "Capulet" }`, тоді потрібно повернути третій об'єкт з масиву (перший аргумент), оскільки він містить ім'я та його значення, яке було передане до другого аргументу.

# --hints--

`whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" })` має повертати `[{ first: "Tybalt", last: "Capulet" }]`.

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

`whatIsInAName([{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }], { "apple": 1 })` має повертати `[{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }]`.

```js
assert.deepEqual(
  whatIsInAName([{ apple: 1 }, { apple: 1 }, { apple: 1, bat: 2 }], {
    apple: 1
  }),
  [{ apple: 1 }, { apple: 1 }, { apple: 1, bat: 2 }]
);
```

`whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 })` має повертати `[{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }]`.

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

`whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 })` має повертати `[{ "apple": 1, "bat": 2, "cookie": 2 }]`.

```js
assert.deepEqual(
  whatIsInAName(
    [{ apple: 1, bat: 2 }, { apple: 1 }, { apple: 1, bat: 2, cookie: 2 }],
    { apple: 1, cookie: 2 }
  ),
  [{ apple: 1, bat: 2, cookie: 2 }]
);
```

`whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }, { "bat":2 }], { "apple": 1, "bat": 2 })` має повертати `[{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie":2 }]`.

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

`whatIsInAName([{"a": 1, "b": 2, "c": 3}], {"a": 1, "b": 9999, "c": 3})` має повертати `[]`

```js
assert.deepEqual(
  whatIsInAName([{ a: 1, b: 2, c: 3 }], { a: 1, b: 9999, c: 3 }),
  []
);
```

`whatIsInAName([{"a": 1, "b": 2, "c": 3, "d": 9999}], {"a": 1, "b": 9999, "c": 3})` має повертати `[]`

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

---
id: a8e512fbe388ac2f9198f0fa
title: Donde estás
challengeType: 1
forumTopicId: 16092
dashedName: wherefore-art-thou
---

# --description--

Crea una función que busque a través de un arreglo de objetos (primer argumento) y devuelva un arreglo de todos los objetos que tengan pares de nombre y valor coincidentes (segundo argumento). Cada par de nombre y valor del objeto fuente tiene que estar presente en el objeto de la colección si se va a incluir en el arreglo devuelto.

Por ejemplo, si el primer argumento es `[{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }]`, y el segundo argumento es `{ last: "Capulet" }`, entonces debes devolver el tercer objeto del arreglo (el primer argumento), porque contiene el nombre y su valor, el cual fue pasado como segundo argumento.

# --hints--

`whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" })` debe devolver `[{ first: "Tybalt", last: "Capulet" }]`.

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

`whatIsInAName([{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }], { "apple": 1 })` debe devolver `[{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }]`.

```js
assert.deepEqual(
  whatIsInAName([{ apple: 1 }, { apple: 1 }, { apple: 1, bat: 2 }], {
    apple: 1
  }),
  [{ apple: 1 }, { apple: 1 }, { apple: 1, bat: 2 }]
);
```

`whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 })` debe devolver `[{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }]`.

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

`whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 })` debe devolver `[{ "apple": 1, "bat": 2, "cookie": 2 }]`.

```js
assert.deepEqual(
  whatIsInAName(
    [{ apple: 1, bat: 2 }, { apple: 1 }, { apple: 1, bat: 2, cookie: 2 }],
    { apple: 1, cookie: 2 }
  ),
  [{ apple: 1, bat: 2, cookie: 2 }]
);
```

`whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }, { "bat":2 }], { "apple": 1, "bat": 2 })` debe devolver `[{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie":2 }]`.

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

`whatIsInAName([{"a": 1, "b": 2, "c": 3}], {"a": 1, "b": 9999, "c": 3})` debe devolver `[]`

```js
assert.deepEqual(
  whatIsInAName([{ a: 1, b: 2, c: 3 }], { a: 1, b: 9999, c: 3 }),
  []
);
```

`whatIsInAName([{"a": 1, "b": 2, "c": 3, "d": 9999}], {"a": 1, "b": 9999, "c": 3})` debe devolver `[]`

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
  const arr = [];
  // Only change code below this line


  // Only change code above this line
  return arr;
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

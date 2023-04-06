---
id: 56533eb9ac21ba0edf2244d8
title: Comparar com o operador lógico AND
challengeType: 1
videoUrl: 'https://scrimba.com/c/cvbRVtr'
forumTopicId: 16799
dashedName: comparisons-with-the-logical-and-operator
---

# --description--

Às vezes, você precisará testar mais de uma coisa de cada vez. O <dfn>operador lógico AND</dfn> (`&&`) retornará `true` apenas se os <dfn>operadores</dfn> à esquerda e à direita forem verdadeiros.

The same effect could be achieved by nesting an `if` statement inside another `if`.

```js
if (num > 5) {
  if (num < 10) {
    return "Yes";
  }
}
return "No";
```

This code will return `Yes` if `num` is greater than `5` and less than `10`. The same logic can be written with the <dfn>logical and</dfn> operator.

```js
if (num > 5 && num < 10) {
  return "Yes";
}
return "No";
```

# --instructions--

Substitua as duas instruções if por uma declaração, usando o operador `&&`, que vai retornar a string `Yes` se `val` for menor ou igual a `50` e maior ou igual a `25`. Caso contrário, retornará a string `No`.

# --hints--

Você deve usar o operador `&&` uma vez

```js
assert(code.match(/&&/g).length === 1);
```

Você deve ter apenas um comando `if`

```js
assert(code.match(/if/g).length === 1);
```

`testLogicalAnd(0)` deve retornar a string `No`

```js
assert(testLogicalAnd(0) === 'No');
```

`testLogicalAnd(24)` deve retornar a string `No`

```js
assert(testLogicalAnd(24) === 'No');
```

`testLogicalAnd(25)` deve retornar a string `Yes`

```js
assert(testLogicalAnd(25) === 'Yes');
```

`testLogicalAnd(30)` deve retornar a string `Yes`

```js
assert(testLogicalAnd(30) === 'Yes');
```

`testLogicalAnd(50)` deve retornar a string `Yes`

```js
assert(testLogicalAnd(50) === 'Yes');
```

`testLogicalAnd(51)` deve retornar a string `No`

```js
assert(testLogicalAnd(51) === 'No');
```

`testLogicalAnd(75)` deve retornar a string `No`

```js
assert(testLogicalAnd(75) === 'No');
```

`testLogicalAnd(80)` deve retornar a string `No`

```js
assert(testLogicalAnd(80) === 'No');
```

# --seed--

## --seed-contents--

```js
function testLogicalAnd(val) {
  // Only change code below this line

  if (val) {
    if (val) {
      return "Yes";
    }
  }

  // Only change code above this line
  return "No";
}

testLogicalAnd(10);
```

# --solutions--

```js
function testLogicalAnd(val) {
  if (val >= 25 && val <= 50) {
    return "Yes";
  }
  return "No";
}
```

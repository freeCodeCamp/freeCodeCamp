---
id: 594810f028c0303b75339ad1
title: Numeros felices
challengeType: 1
forumTopicId: 302280
dashedName: happy-numbers
---

# --description--

A happy number is defined by the following process:

Comenzando con cualquier número entero positivo, reemplace el número por la suma de los cuadrados de sus dígitos y repita el proceso hasta que el número sea igual a `1` (donde permanecerá), o se repite sin cesar en un ciclo que no incluye `1`. Aquellos números para los cuales este proceso termina en `1` son números felices, mientras que aquellos que no terminan en `1` son números infelices.

# --instructions--

Implemente una función que devuelva verdadero si el número es feliz, o falso si no.

# --hints--

`happy` debería ser una función.

```js
assert(typeof happy === 'function');
```

`happy(1)` debería devolver un valor booleano.

```js
assert(typeof happy(1) === 'boolean');
```

`happy(1)` debería devolver`true`.

```js
assert(happy(1));
```

`happy(2)` deveria devolver `false`.

```js
assert(!happy(2));
```

`happy(7)` deberia devolver `true`.

```js
assert(happy(7));
```

`happy(10)` debería devolver `true`.

```js
assert(happy(10));
```

`happy(13)` debería devolver `true`.

```js
assert(happy(13));
```

`happy(19)` debría devolver `true`.

```js
assert(happy(19));
```

`happy(23)` debería devolver `true`.

```js
assert(happy(23));
```

`happy(28)` debería devolver `true`.

```js
assert(happy(28));
```

`happy(31)` debería devolver `true`.

```js
assert(happy(31));
```

`happy(32)`debería devolvera `true`.

```js
assert(happy(32));
```

`happy(33)` debería devolver`false`.

```js
assert(!happy(33));
```

# --seed--

## --seed-contents--

```js
function happy(number) {

}
```

# --solutions--

```js
function happy (number) {
  let m;
  let digit;
  const cycle = [];

  while (number !== 1 && cycle[number] !== true) {
    cycle[number] = true;
    m = 0;
    while (number > 0) {
      digit = number % 10;
      m += Math.pow(digit, 2);
      number = (number - digit) / 10;
    }
    number = m;
  }
  return (number === 1);
}
```

---
id: 594810f028c0303b75339ad1
title: Numeri felici
challengeType: 1
forumTopicId: 302280
dashedName: happy-numbers
---

# --description--

Un numero felice è definito con il seguente processo:

A partire da un numero intero positivo, sostituisci il numero con la somma dei quadrati delle sue cifre, e ripeti il processo fino a quando il numero è uguale a `1` (dove resterà), o si ripete senza fine in un ciclo che non include `1`. Quei numeri per i quali questo processo termina in `1` sono numeri felici, mentre quelli che non terminano in `1` sono numeri infelici.

# --instructions--

Implementa una funzione che restituisce true se il numero è felice, o false se no.

# --hints--

`happy` dovrebbe essere una funzione.

```js
assert(typeof happy === 'function');
```

`happy(1)` dovrebbe restituire un booleano.

```js
assert(typeof happy(1) === 'boolean');
```

`happy(1)` dovrebbe restituire `true`.

```js
assert(happy(1));
```

`happy(2)` dovrebbe restituire `false`.

```js
assert(!happy(2));
```

`happy(7)` dovrebbe restituire `true`.

```js
assert(happy(7));
```

`happy(10)` dovrebbe restituire `true`.

```js
assert(happy(10));
```

`happy(13)` dovrebbe restituire `true`.

```js
assert(happy(13));
```

`happy(19)` dovrebbe restituire `true`.

```js
assert(happy(19));
```

`happy(23)` dovrebbe restituire `true`.

```js
assert(happy(23));
```

`happy(28)` dovrebbe restituire `true`.

```js
assert(happy(28));
```

`happy(31)` dovrebbe restituire `true`.

```js
assert(happy(31));
```

`happy(32)` dovrebbe restituire `true`.

```js
assert(happy(32));
```

`happy(33)` dovrebbe restituire `false`.

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

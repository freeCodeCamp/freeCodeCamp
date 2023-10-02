---
id: 594810f028c0303b75339ad1
title: Números felizes
challengeType: 1
forumTopicId: 302280
dashedName: happy-numbers
---

# --description--

Um número feliz é definido pelo seguinte processo:

Começando por qualquer número inteiro positivo, substitua o número pela soma dos quadrados de seus dígitos. Repita o processo até que o número seja igual a `1` (onde ele permanecerá), ou faça laços infinitamente em um ciclo que não inclui o `1`. Os números para os quais este processo termina em `1` são números felizes, enquanto aqueles que não terminam em `1` são números infelizes.

# --instructions--

Implementa uma função que retorna true se o número for feliz ou false se não for.

# --hints--

`happy` deve ser uma função.

```js
assert(typeof happy === 'function');
```

`happy(1)` deve retornar um booleano.

```js
assert(typeof happy(1) === 'boolean');
```

`happy(1)` deve retornar `true`.

```js
assert(happy(1));
```

`happy(2)` deve retornar `false`.

```js
assert(!happy(2));
```

`happy(7)` deve retornar `true`.

```js
assert(happy(7));
```

`happy(10)` deve retornar `true`.

```js
assert(happy(10));
```

`happy(13)` deve retornar `true`.

```js
assert(happy(13));
```

`happy(19)` deve retornar `true`.

```js
assert(happy(19));
```

`happy(23)` deve retornar `true`.

```js
assert(happy(23));
```

`happy(28)` deve retornar `true`.

```js
assert(happy(28));
```

`happy(31)` deve retornar `true`.

```js
assert(happy(31));
```

`happy(32)` deve retornar `true`.

```js
assert(happy(32));
```

`happy(33)` deve retornar `false`.

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

---
id: a302f7aae1aa3152a5b413bc
title: Factoriza un número
challengeType: 1
forumTopicId: 16013
dashedName: factorialize-a-number
---

# --description--

Devuelve el factorial del entero proporcionado.

Si el número entero es representado con la letra `n`, un factorial es el producto de todos los enteros positivos menores o iguales a `n`.

Los factoriales suelen representarse con la abreviatura `n!`

Por ejemplo: `5! = 1 * 2 * 3 * 4 * 5 = 120`

Sólo se proporcionarán a la función los enteros mayores o iguales a cero.

# --hints--

`factorialize(5)` debe devolver un número.

```js
assert(typeof factorialize(5) === 'number');
```

`factorialize(5)` debe devolver `120`.

```js
assert(factorialize(5) === 120);
```

`factorialize(10)` debe devolver `3628800`.

```js
assert(factorialize(10) === 3628800);
```

`factorialize(20)` debe devolver `2432902008176640000`.

```js
assert(factorialize(20) === 2432902008176640000);
```

`factorialize(0)` debe devolver `1`.

```js
assert(factorialize(0) === 1);
```

# --seed--

## --seed-contents--

```js
function factorialize(num) {
  return num;
}

factorialize(5);
```

# --solutions--

```js
function factorialize(num) {
  return num < 1 ? 1 : num * factorialize(num - 1);
}

factorialize(5);
```

---
id: 594810f028c0303b75339ace
title: Fábrica de acumuladores
challengeType: 1
forumTopicId: 302222
dashedName: accumulator-factory
---

# --description--

A problem posed by Paul Graham is that of creating a function that takes a single (numeric) argument and which returns another function that is an accumulator. The returned accumulator function in turn also takes a single numeric argument, and returns the sum of all the numeric values passed in so far to that accumulator (including the initial value passed when the accumulator was created).

# --instructions--

Crie uma função que receba um número $n$ e gere funções acumuladoras que retornam a soma de cada número já passado para elas.

**Regras:**

Não use variáveis globais.

**Dica:**

Closures salvam o estado externo.

# --hints--

`accumulator` deve ser uma função.

```js
assert(typeof accumulator === 'function');
```

`accumulator(0)` deve retornar uma função.

```js
assert(typeof accumulator(0) === 'function');
```

`accumulator(0)(2)` deve retornar um número.

```js
assert(typeof accumulator(0)(2) === 'number');
```

Ao passar os valores 3, -4, 1.5 e 5, o valor retornado deve ser 5.5.

```js
assert(testFn(5) === 5.5);
```

# --seed--

## --after-user-code--

```js
const testFn = typeof accumulator(3) === 'function' && accumulator(3);
if (testFn) {
  testFn(-4);
  testFn(1.5);
}
```

## --seed-contents--

```js
function accumulator(sum) {

}
```

# --solutions--

```js
function accumulator(sum) {
  return function(n) {
    return sum += n;
  };
}
```

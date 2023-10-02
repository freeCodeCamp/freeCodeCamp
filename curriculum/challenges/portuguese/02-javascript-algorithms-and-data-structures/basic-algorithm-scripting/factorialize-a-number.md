---
id: a302f7aae1aa3152a5b413bc
title: Encontrar o fatorial de um número
challengeType: 1
forumTopicId: 16013
dashedName: factorialize-a-number
---

# --description--

Retorne o fatorial do inteiro fornecido.

Se o inteiro é representado com a letra `n`, o fatorial é o produto de todos os inteiros positivos menores ou iguais a `n`.

Fatoriais são frequentemente representados com a notação abreviada `n!`

Por exemplo: `5! = 1 * 2 * 3 * 4 * 5 = 120`

Apenas números inteiros maiores ou iguais a zero serão fornecidos para a função.

# --hints--

`factorialize(5)` deve retornar um número.

```js
assert(typeof factorialize(5) === 'number');
```

`factorialize(5)` deve retornar `120`.

```js
assert(factorialize(5) === 120);
```

`factorialize(10)` deve retornar `3628800`.

```js
assert(factorialize(10) === 3628800);
```

`factorialize(20)` deve retornar `2432902008176640000`.

```js
assert(factorialize(20) === 2432902008176640000);
```

`factorialize(0)` deve retornar `1`.

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

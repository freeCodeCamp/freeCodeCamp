---
id: 594810f028c0303b75339ace
title: Fábrica de acumuladores
challengeType: 1
forumTopicId: 302222
dashedName: accumulator-factory
---

# --description--

Um problema proposto por Paul Graham é o de criar uma função que recebe um único argumento (numérico) e que retorna outra função que é um acumulador. A função de acumulador retornada, por sua vez, também recebe um único argumento numérico e retorna a soma de todos os valores numéricos passados até aquele momento para esse acumulador (incluindo o valor inicial passado quando o acumulador foi criado).

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

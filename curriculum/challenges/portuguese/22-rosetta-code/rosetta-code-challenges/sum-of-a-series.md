---
id: 5a23c84252665b21eecc8041
title: Soma de uma série
challengeType: 1
forumTopicId: 302333
dashedName: sum-of-a-series
---

# --description--

Calcule o **n**<sup></sup>-ésimo termo de uma <em>série</em>, ou seja, a soma dos **n** primeiros termos da <em>sequência</em> correspondente. Informalmente, esse valor, ou seu limite quando **n** tende ao infinito, é também chamado de *soma da série*, razão do título desta tarefa. Para esta tarefa, use: $S_n = \displaystyle\sum_{k=1}^n \frac{1}{k^2}$.

# --instructions--

Escreva uma função que receba $a$ e $b$ como parâmetros e retorne a soma do $a$-ésimo ao $b$-ésimo termos da sequência.

# --hints--

`sum` deve ser uma função.

```js
assert(typeof sum == 'function');
```

`sum(1, 100)` deve retornar um número.

```js
assert(typeof sum(1, 100) == 'number');
```

`sum(1, 100)` deve retornar `1.6349839001848923`.

```js
assert.equal(sum(1, 100), 1.6349839001848923);
```

`sum(33, 46)` deve retornar `0.009262256361481223`.

```js
assert.equal(sum(33, 46), 0.009262256361481223);
```

`sum(21, 213)` deve retornar `0.044086990748706555`.

```js
assert.equal(sum(21, 213), 0.044086990748706555);
```

`sum(11, 111)` deve retornar `0.08619778593108679`.

```js
assert.equal(sum(11, 111), 0.08619778593108679);
```

`sum(1, 10)` deve retornar `1.5497677311665408`.

```js
assert.equal(sum(1, 10), 1.5497677311665408);
```

# --seed--

## --seed-contents--

```js
function sum(a, b) {

}
```

# --solutions--

```js
function sum(a, b) {
  function fn(x) {
    return 1 / (x * x);
  }
  var s = 0;
  for (; a <= b; a++) s += fn(a);
  return s;
}
```

---
id: 594810f028c0303b75339acf
title: Função de Ackermann
challengeType: 1
forumTopicId: 302223
dashedName: ackermann-function
---

# --description--

A função de Ackermann é um exemplo clássico de uma função recursiva, especialmente porque não é uma função recursiva primitiva. Ela cresce muito rapidamente em valor, assim como no tamanho da sua árvore de chamadas.

A função de Ackermann é geralmente definida da seguinte forma:

$A(m, n) = \\begin{cases} n+1 & \\mbox{if } m = 0 \\\\ A(m-1, 1) & \\mbox{if } m > 0 \\mbox{ and } n = 0 \\\\ A(m-1, A(m, n-1)) & \\mbox{if } m > 0 \\mbox{ and } n > 0. \\end{cases}$

Os argumentos nunca são negativos e sempre terminam.

# --instructions--

Escreva uma função que retorne o valor de $A(m, n)$. A precisão arbitrária é a preferida aqui (já que a função cresce tão rapidamente), mas não é necessária.

# --hints--

`ack` deve ser uma função.

```js
assert(typeof ack === 'function');
```

`ack(0, 0)` deve retornar 1.

```js
assert(ack(0, 0) === 1);
```

`ack(1, 1)` deve retornar 3.

```js
assert(ack(1, 1) === 3);
```

`ack(2, 5)` deve retornar 13.

```js
assert(ack(2, 5) === 13);
```

`ack(3, 3)` deve retornar 61.

```js
assert(ack(3, 3) === 61);
```

# --seed--

## --seed-contents--

```js
function ack(m, n) {

}
```

# --solutions--

```js
function ack(m, n) {
  return m === 0 ? n + 1 : ack(m - 1, n === 0 ? 1 : ack(m, n - 1));
}
```

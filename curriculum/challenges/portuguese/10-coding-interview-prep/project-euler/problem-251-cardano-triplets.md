---
id: 5900f4671000cf542c50ff7a
title: 'Problema 251: Trios de Cardano'
challengeType: 1
forumTopicId: 301899
dashedName: problem-251-cardano-triplets
---

# --description--

Um triplo de números inteiros positivos ($a$,$b$,$c$) é chamado de trio de Cardano se satisfizer a condição:

$$\sqrt[3]{a + b \sqrt{c}} + \sqrt[3]{a - b \sqrt{c}} = 1$$

Por exemplo, (2,1,5) é um trio de Cardano.

Há 149 trios de Cardano para os quais $a + b + c ≤ 1000$.

Encontre quantos trios de Cardano existem tal que $a + b + c ≤ 110.000.000$.

# --hints--

`cardanoTriplets()` deve retornar `18946051`.

```js
assert.strictEqual(cardanoTriplets(), 18946051);
```

# --seed--

## --seed-contents--

```js
function cardanoTriplets() {

  return true;
}

cardanoTriplets();
```

# --solutions--

```js
// solution required
```

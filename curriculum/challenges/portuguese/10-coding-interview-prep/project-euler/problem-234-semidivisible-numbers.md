---
id: 5900f4571000cf542c50ff69
title: 'Problema 234: Números semidivisíveis'
challengeType: 1
forumTopicId: 301878
dashedName: problem-234-semidivisible-numbers
---

# --description--

Para um número inteiro $n ≥ 4$, definiremos a menor raiz quadrada de número primo de $n$, denotada por $lps(n)$, como $\text{maior primo} ≤ \sqrt{n}$ e a maior raiz quadrada de número primo de $n$, $ups(n)$, como $\text{menor primo} ≥ \sqrt{n}$.

Por exemplo, $lps(4) = 2 = ups(4)$, $lps(1000) = 31$, $ups(1000) = 37$.

Chamaremos um número inteiro $n ≥ 4$ de semidivisível se $lps(n)$ ou $ups(n)$ dividir $n$, mas não os dois.

A soma dos números semidivisíveis não excedendo 15 é 30, e os números são 8, 10 e 12. 15 não é semidivisível, pois ele é um múltiplo de $lps(15) = 3$ e de $ups(15) = 5$. Como outro exemplo, a soma dos 92 números semidivisíveis até 1000 é 34825.

Qual é a soma de todos os números semidivisíveis que não excedem 999966663333?

# --hints--

`semidivisibleNumbers()` deve retornar `1259187438574927000`.

```js
assert.strictEqual(semidivisibleNumbers(), 1259187438574927000);
```

# --seed--

## --seed-contents--

```js
function semidivisibleNumbers() {

  return true;
}

semidivisibleNumbers();
```

# --solutions--

```js
// solution required
```

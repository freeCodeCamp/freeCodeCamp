---
id: 5900f4741000cf542c50ff86
title: 'Problema 263: O sonho de um engenheiro se torna realidade'
challengeType: 1
forumTopicId: 301912
dashedName: problem-263-an-engineers-dream-come-true
---

# --description--

Considere o número 6. Os divisores de 6 são: 1, 2, 3 e 6.

Cada número de 1 até 6 pode ser escrito como uma soma de divisores distintos de 6:

$1 = 1$, $2 = 2$, $3 = 1 + 2$, $4 = 1 + 3$, $5 = 2 + 3$, $6 = 6$.

Um número $n$ é chamado de número prático se cada número de 1 até $n$ puder ser expresso como uma soma dos divisores distintos de $n$.

Um par de números primos consecutivos com uma diferença de seis é chamado de par sexy (já que "sex" é a palavra latina para "seis"). O primeiro par sexy é (23, 29).

Podemos ocasionalmente encontrar um trio de pares, o que significa três pares sexy de números primos consecutivos, de modo que o segundo membro de cada par seja o primeiro membro do próximo par.

Chamaremos um número $n$ com as seguintes configurações:

- ($n - 9$, $n - 3$), ($n - 3$, $n + 3$), ($n + 3$, $n + 9$) formam um trio de pares, e
- os números $n - 8$, $n - 4$, $n$, $n + 4$ e $n + 8$ sejam todos práticos,

de paraíso do engenheiro.

Encontre a soma dos primeiros quatro paraísos do engenheiro.

# --hints--

`engineersDreamComeTrue()` deve retornar `2039506520`.

```js
assert.strictEqual(engineersDreamComeTrue(), 2039506520);
```

# --seed--

## --seed-contents--

```js
function engineersDreamComeTrue() {

  return true;
}

engineersDreamComeTrue();
```

# --solutions--

```js
// solution required
```

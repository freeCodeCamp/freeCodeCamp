---
id: 5900f4db1000cf542c50ffee
title: 'Problema 367: Ordenação do Bozo'
challengeType: 1
forumTopicId: 302028
dashedName: problem-367-bozo-sort
---

# --description--

A ordenação do Bozo – não confunda com a ordenação Bogo, ligeiramente menos eficiente – consiste em verificar se a sequência de entrada está ordenada e, se não estiver, trocar aleatoriamente dois elementos. Isso é repetido até que a sequência esteja ordenada.

Se considerarmos todas as permutações dos primeiros 4 números naturais como entrada, o valor da expectativa do número de trocas, na média sobre todas as sequências de entrada $4!$, é $24,75$.

A sequência já classificada leva 0 etapas.

Neste problema, consideramos a seguinte variante na ordenação do Bozo.

Se a sequência não estiver em ordem, selecionamos três elementos aleatoriamente e embaralhamos esses três elementos aleatoriamente.

Todas as permutações $3! = 6$ desses três elementos são igualmente prováveis.

A sequência já classificada levará 0 etapas.

Se considerarmos todas as permutações dos primeiros 4 números naturais como entrada, o valor da expectativa do número de embaralhamentos, na média sobre todas as sequências de entrada $4!$, é $27,5$.

Considere como sequências de entrada as permutações dos primeiros 11 números naturais.

Com a média sobre todas as sequências de entrada $11!$, qual é o número esperado de embaralhamentos que este algoritmo de ordenação executará? Dê a sua resposta arredondada para o número inteiro mais próximo.

# --hints--

`bozoSort()` deve retornar `48271207`.

```js
assert.strictEqual(bozoSort(), 48271207);
```

# --seed--

## --seed-contents--

```js
function bozoSort() {

  return true;
}

bozoSort();
```

# --solutions--

```js
// solution required
```

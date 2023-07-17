---
id: 5900f48a1000cf542c50ff9c
title: 'Problema 285: Probabilidades pitagóricas'
challengeType: 1
forumTopicId: 301936
dashedName: problem-285-pythagorean-odds
---

# --description--

Albert escolhe um número inteiro positivo $k$, depois dois números reais $a$, $b$ são escolhidos aleatoriamente no intervalo [0,1] com distribuição uniforme.

A raiz quadrada da soma ${(ka + 1)}^2 + {(kb + 1)}^2$ é então computada e arredondada para o número inteiro mais próximo. Se o resultado for igual a $k$, ele pontua $k$ pontos. Caso contrário, ele não pontua.

Por exemplo, if $k = 6$, $a = 0.2$ e $b = 0.85$, então ${(ka + 1)}^2 + {(kb + 1)}^2 = 42.05$. A raiz quadrada de 42,05 é 6,484... e, quando arredondada para o inteiro mais próximo, ela se torna 6. Isso é igual a $k$, então ele marca 6 pontos.

Pode-se mostra que, se ele jogar 10 vezes, com $k = 1, k = 2, \ldots, k = 10$, o valor esperado de sua pontuação total, arredondado para cinco casas decimais, é 10,20914.

Se ele jogar ${10}^5$ vezes com $k = 1, k = 2, k = 3, \ldots, k = {10}^5$, qual é o valor esperado de sua pontuação total, arredondada para cinco casas decimais?

# --hints--

`pythagoreanOdds()` deve retornar `157055.80999`.

```js
assert.strictEqual(pythagoreanOdds(), 157055.80999);
```

# --seed--

## --seed-contents--

```js
function pythagoreanOdds() {

  return true;
}

pythagoreanOdds();
```

# --solutions--

```js
// solution required
```

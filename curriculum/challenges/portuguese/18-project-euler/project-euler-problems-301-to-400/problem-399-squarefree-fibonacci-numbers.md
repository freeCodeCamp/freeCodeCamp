---
id: 5900f4fc1000cf542c51000e
title: 'Problema 399: Números de Fibonacci livres de quadrados'
challengeType: 1
forumTopicId: 302064
dashedName: problem-399-squarefree-fibonacci-numbers
---

# --description--

Os primeiros 15 números de Fibonacci são:

$$1,1,2,3,5,8,13,21,34,55,89,144,233,377,610.$$

É possível ver que 8 e 144 não são livres de quadrados: 8 é divisível por 4 e 144 é divisível por 4 e por 9.

Assim, os 13 primeiros números de Fibonacci livres de quadrados são:

$$1,1,2,3,5,13,21,34,55,89,233,377 \text{ e } 610.$$

O $200$º número de Fibonacci livre de quadrados é: 971183874599339129547649988289594072811608739584170445. Os últimos dezesseis algarismos deste número são: 1608739584170445 e, em notação científica, este número pode ser escrito como `9.7e53`.

Encontre o $100.000.000$º número de Fibonacci livre de quadrados. Dê sua resposta como uma string com os últimos dezesseis algarismos seguidos de uma vírgula e de um número em notação científica (arredondado para uma casa depois da vírgula). Para o $200$º número livre de quadrados, a resposta seria: `1608739584170445,9.7e53`

**Observação:** para este problema, assumiremos que, para cada número primo $p$, o primeiro número de Fibonacci divisível por $p$ não é divisível por $p^2$ (isso é parte da conjectura de Wall). Isso já foi verificado para números primos $≤ 3 \times {10}^{15}$, mas ainda não foi comprovado em geral.

Se acontecer de a conjetura ser falsa, então a resposta aceita para este problema não é garantida para o $100.000.000$º número de Fibonacci livre de quadrados. Ao invés disso, representa apenas um limite menor para esse número.

# --hints--

`squarefreeFibonacciNumbers()` deve retornar uma string.

```js
assert(typeof squarefreeFibonacciNumbers() === 'string');
```

`squarefreeFibonacciNumbers()` deve retornar a string `1508395636674243,6.5e27330467`.

```js
assert.strictEqual(squarefreeFibonacciNumbers(), '1508395636674243,6.5e27330467');
```

# --seed--

## --seed-contents--

```js
function squarefreeFibonacciNumbers() {

  return true;
}

squarefreeFibonacciNumbers();
```

# --solutions--

```js
// solution required
```

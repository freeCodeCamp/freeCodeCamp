---
id: 5900f3ef1000cf542c50ff01
title: 'Problema 129: Divisibilidade de repunits'
challengeType: 1
forumTopicId: 301756
dashedName: problem-129-repunit-divisibility
---

# --description--

Em inglês, um número que consiste apenas de 1s é chamado de repunit. Definiremos $R(k)$ como sendo um repunit de comprimento $k$. Por exemplo, $R(6) = 111111$.

Dado que $n$ é um número inteiro positivo e que o máximo divisor comum $GCD(n, 10) = 1$, pode-se mostrar que sempre existe um valor, $k$, para o qual $R(k)$ é divisível por $n$. Além disso, consideremos $A(n)$ o menor dos valores de $k$ (por exemplo, $A(7) = 6$ e $A(41) = 5$).

O menor valor de $n$ para o qual o $A(n)$ excede dez é 17.

Encontre o menor valor de $n$ para o qual $A(n)$ excede um milhão.

# --hints--

`repunitDivisibility()` deve retornar `1000023`.

```js
assert.strictEqual(repunitDivisibility(), 1000023);
```

# --seed--

## --seed-contents--

```js
function repunitDivisibility() {

  return true;
}

repunitDivisibility();
```

# --solutions--

```js
// solution required
```

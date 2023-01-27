---
id: 5900f3ee1000cf542c50ff00
title: 'Problema 130: Compostos com propriedade de primo repunit'
challengeType: 1
forumTopicId: 301758
dashedName: problem-130-composites-with-prime-repunit-property
---

# --description--

Em inglês, um número que consiste apenas de 1s é chamado de repunit. Definiremos $R(k)$ como sendo um repunit de comprimento $k$. Por exemplo, $R(6) = 111111$.

Dado que $n$ é um número inteiro positivo e que o máximo divisor comum $GCD(n, 10) = 1$, pode-se mostrar que sempre existe um valor, $k$, para o qual $R(k)$ é divisível por $n$. Além disso, consideremos $A(n)$ o menor dos valores de $k$ (por exemplo, $A(7) = 6$ e $A(41) = 5$).

Você é informado, para todos os números primos, $p > 5$, que $p − 1$ é divisível por $A(p)$. Por exemplo, quando $p = 41, A(41) = 5$ e 40 é divisível por 5.

No entanto, há valores compostos raros para os quais isto também é verdadeiro. Os cinco primeiros exemplos são 91, 259, 451, 481 e 703.

Encontre a soma dos primeiros vinte e cinco valores compostos de $n$ para os quais o máximo divisor comum, $GCD(n, 10) = 1$, e $n - 1$ é divisível por $A(n)$.

# --hints--

`compositeRepunit()` deve retornar `149253`.

```js
assert.strictEqual(compositeRepunit(), 149253);
```

# --seed--

## --seed-contents--

```js
function compositeRepunit() {

  return true;
}

compositeRepunit();
```

# --solutions--

```js
// solution required
```

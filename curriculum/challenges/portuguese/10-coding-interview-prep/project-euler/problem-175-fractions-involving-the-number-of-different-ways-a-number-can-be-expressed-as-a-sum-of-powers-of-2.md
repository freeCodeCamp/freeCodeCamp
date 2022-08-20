---
id: 5900f41c1000cf542c50ff2e
title: >-
  Problema 175: Frações envolvendo o número de maneiras diferentes pelas quais um número pode ser expresso como uma soma de potências de 2
challengeType: 1
forumTopicId: 301810
dashedName: >-
  problem-175-fractions-involving-the-number-of-different-ways-a-number-can-be-expressed-as-a-sum-of-powers-of-2
---

# --description--

Defina $f(0) = 1$ e $f(n)$ como o número de formas de escrever $n$ como uma soma de potências de 2 onde nenhuma potência ocorra mais de duas vezes.

Por exemplo, $f(10) = 5$ já que há cinco maneiras diferentes de expressar 10:

$$10 = 8 + 2 = 8 + 1 + 1 = 4 + 4 + 2 = 4 + 2 + 2 + 1 + 1 = 4 + 4 + 1 + 1$$

Pode-se mostrar que, para cada fração $\frac{p}{q}\\; (p>0, q>0)$ existe pelo menos um número inteiro $n$ de modo que $\frac{f(n)}{f(n - 1)} = \frac{p}{q}$.

Por exemplo, o menor $n$ para o qual $\frac{f(n)}{f(n - 1)} = \frac{13}{17}$ é 241. A expansão binária de 241 é 11110001.

Ao ler este número binário, a partir do bit mais significativo até o bit menos significativo, que há 4 números um, 3 zeros e um 1. Chamaremos a string 4,3,1 de expansão binária reduzida de 241.

Encontre a expansão binária reduzida do menor $n$ para o qual

$$\frac{f(n)}{f(n - 1)} = \frac{123456789}{987654321}$$

Dê sua resposta como uma string com inteiros separados por vírgula, sem nenhum espaço em branco.

# --hints--

`shortenedBinaryExpansionOfNumber()` deve retornar uma string.

```js
assert(typeof shortenedBinaryExpansionOfNumber() === 'string');
```

`shortenedBinaryExpansionOfNumber()` deve retornar a string `1,13717420,8`.

```js
assert.strictEqual(shortenedBinaryExpansionOfNumber(), '1,13717420,8');
```

# --seed--

## --seed-contents--

```js
function shortenedBinaryExpansionOfNumber() {

  return true;
}

shortenedBinaryExpansionOfNumber();
```

# --solutions--

```js
// solution required
```

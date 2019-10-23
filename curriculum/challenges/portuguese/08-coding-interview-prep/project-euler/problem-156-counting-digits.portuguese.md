---
id: 5900f4091000cf542c50ff1b
challengeType: 5
title: 'Problem 156: Counting Digits'
videoUrl: ''
localeTitle: 'Problema 156: Contando os Dígitos'
---

## Description
<section id="description"> Começando do zero, os números naturais são escritos na base 10 assim: <p> 0 1 2 3 4 5 6 7 8 9 10 11 12 .... </p><p> Considere o dígito d = 1. Depois de anotarmos cada número n, atualizaremos o número dos que ocorreram e chamaremos esse número f (n, 1). Os primeiros valores para f (n, 1), então, são os seguintes: </p><p> nf (n, 1) 00 11 21 31 41 51 61 71 81 91 102 114 125 </p><p> Note que f (n, 1) nunca é igual a 3. </p><p> Portanto, as duas primeiras soluções da equação f (n, 1) = n são n = 0 en = 1. A próxima solução é n = 199981. Da mesma maneira, a função f (n, d) fornece o número total de dígitos d que foram escritos após o número n ter sido escrito. </p><p> De fato, para cada dígito d ≠ 0, 0 é a primeira solução da equação f (n, d) = n. Seja s (d) a soma de todas as soluções para as quais f (n, d) = n. </p><p> Você recebe o s (1) = 22786974071. Encontre ∑ s (d) para 1 ≤ d ≤ 9. Nota: se, para algum n, f (n, d) = n para mais de um valor de d, esse valor de n é contado novamente para cada valor de d para o qual f (n, d) = n. </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler156()</code> deve retornar 21295121502550.
    testString: 'assert.strictEqual(euler156(), 21295121502550, "<code>euler156()</code> should return 21295121502550.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler156() {
  // Good luck!
  return true;
}

euler156();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

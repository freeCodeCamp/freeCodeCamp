---
id: 5900f50b1000cf542c51001d
challengeType: 5
title: 'Problem 414: Kaprekar constant'
videoUrl: ''
localeTitle: 'Problema 414: constante de legenda'
---

## Description
<section id="description"> 6174 é um número notável; se classificarmos seus dígitos em ordem crescente e subtrair esse número do número obtido quando você classificar os dígitos em ordem decrescente, obteremos 7641-1467 = 6174. Ainda mais notável é que se começarmos com qualquer número de 4 dígitos e repetirmos este processo de classificação e subtração, acabaremos com 6174 ou imediatamente com 0 se todos os dígitos forem iguais. Isso também funciona com números que têm menos de 4 dígitos, se preenchermos o número com zeros à esquerda até que tenhamos 4 dígitos. Por exemplo, vamos começar com o número 0837: 8730-0378 = 8352 8532-2358 = 6174 <p> 6174 é chamado a constante de Kaprekar. O processo de classificação, subtração e repetição até que 0 ou a constante da Kaprekar seja alcançada é chamado de rotina Kaprekar. </p><p> Podemos considerar a rotina da Kaprekar para outras bases e número de dígitos. Infelizmente, não é garantido que uma constante Kaprekar exista em todos os casos; ou a rotina pode terminar em um ciclo para alguns números de entrada ou a constante à qual a rotina chega pode ser diferente para diferentes números de entrada. No entanto, pode-se mostrar que, para 5 dígitos e uma base b = 6t + 3 ≠ 9, existe uma constante de Kaprekar. Por exemplo, base 15: (10,4,14,9,5) 15 base 21: (14,6,20,13,7) 21 </p><p> Defina Cb para ser a constante de Kaprekar na base b para 5 dígitos. Defina a função sb (i) como 0 se i = Cb ou se eu escrevi na base b consiste em 5 dígitos idênticos o número de iterações que a rotina de Kaprekar leva na base b para chegar a Cb, caso contrário </p><p> Note que podemos definir sb (i) para todos os inteiros i &lt;b5. Se eu escrevi na base b leva menos de 5 dígitos, o número é preenchido com zero dígitos até que tenhamos 5 dígitos antes de aplicar a rotina Kaprekar. </p><p> Defina S (b) como a soma de sb (i) para 0 &lt;i &lt;b5. Por exemplo, S (15) = 5274369 S (111) = 400668930299 </p><p> Encontre a soma de S (6k + 3) para 2 ≤ k ≤ 300. Dê os últimos 18 dígitos como sua resposta. </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler414()</code> deve retornar 552506775824935500.
    testString: 'assert.strictEqual(euler414(), 552506775824935500, "<code>euler414()</code> should return 552506775824935500.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler414() {
  // Good luck!
  return true;
}

euler414();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

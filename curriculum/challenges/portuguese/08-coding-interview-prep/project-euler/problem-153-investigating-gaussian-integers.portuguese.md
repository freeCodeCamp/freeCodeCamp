---
id: 5900f4051000cf542c50ff18
challengeType: 5
title: 'Problem 153: Investigating Gaussian Integers'
videoUrl: ''
localeTitle: 'Problema 153: Investigando Inteiros Gaussianos'
---

## Description
<section id="description"> Como todos sabemos, a equação x2 = -1 não tem soluções para o x real. <p> Se introduzirmos o número imaginário i, esta equação tem duas soluções: x = ie x = -i. </p><p> Se dermos mais um passo, a equação (x-3) 2 = -4 tem duas soluções complexas: x = 3 + 2i e x = 3-2i. x = 3 + 2i e x = 3-2i são chamados conjugados complexos dos outros. </p><p> Números da forma a + bi são chamados números complexos. </p><p> Em geral a + bi e a-bi são o conjugado complexo de cada um. Um Integral Gaussiano é um número complexo a + bi tal que tanto a como b são inteiros. </p><p> Os inteiros regulares também são inteiros de Gauss (com b = 0). </p><p> Para distingui-los dos inteiros de Gauss com b ≠ 0, chamamos esses inteiros de &quot;inteiros racionais&quot;. </p><p> Um inteiro Gaussiano é chamado de divisor de um inteiro racional n se o resultado também for um inteiro Gaussiano. </p><p> Se, por exemplo, dividirmos 5 por 1 + 2i, podemos simplificar da seguinte maneira: </p><p> Multiplique o numerador e o denominador pelo conjugado complexo de 1 + 2i: 1−2i. </p><p> O resultado é . </p><p> Então 1 + 2i é um divisor de 5. </p><p> Note que 1 + i não é um divisor de 5 porque. </p><p> Note também que se o Integral Gaussiano (a + bi) é um divisor de um inteiro racional n, então seu conjugado complexo (a-bi) é também um divisor de n. De fato, 5 tem seis divisores de tal forma que a parte real é positiva: {1, 1 + 2i, 1 - 2i, 2 + i, 2 - i, 5}. </p><p> Segue-se uma tabela de todos os divisores para os primeiros cinco números inteiros positivos: </p><p> n Divisores inteiros de Gauss com partsum reais positivos s (n) destes </p><p> divisors111 21, 1 + i, 1-i, 25 31, 34 41, 1 + i, 1-i, 2, 2 + 2i, 2-2i, 413 51, 1 + 2i, 1-2i, 2 + i, 2-i, 512 Para divisores com partes reais positivas, então, temos:. Para 1 ≤ n ≤ 105, ∑ s (n) = 17924657155. O que é ∑ s (n) para 1 ≤ n ≤ 108? </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler153()</code> deve retornar 17971254122360636.
    testString: 'assert.strictEqual(euler153(), 17971254122360636, "<code>euler153()</code> should return 17971254122360636.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler153() {
  // Good luck!
  return true;
}

euler153();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

---
id: 5900f3c61000cf542c50fed9
challengeType: 5
title: 'Problem 90: Cube digit pairs'
videoUrl: ''
localeTitle: 'Problema 90: Pares de dígitos do cubo'
---

## Description
<section id="description"> Cada uma das seis faces em um cubo tem um dígito diferente (0 a 9) escrito nele; o mesmo é feito para um segundo cubo. Colocando os dois cubos lado a lado em diferentes posições, podemos formar uma variedade de números de 2 dígitos. <p> Por exemplo, o número do quadrado 64 poderia ser formado: </p><p> De fato, escolhendo cuidadosamente os dígitos em ambos os cubos, é possível exibir todos os números quadrados abaixo de cem: 01, 04, 09, 16, 25, 36, 49, 64 e 81. </p><p> Por exemplo, uma forma de conseguir isso é colocando {0, 5, 6, 7, 8, 9} em um cubo e {1, 2, 3, 4, 8, 9} no outro cubo. </p><p> No entanto, para este problema, vamos permitir que o 6 ou 9 seja virado de cabeça para baixo, de modo que um arranjo como {0, 5, 6, 7, 8, 9} e {1, 2, 3, 4, 6, 7} permite que todos os nove números quadrados sejam exibidos; caso contrário, seria impossível obter 09. </p><p> Ao determinar um arranjo distinto, estamos interessados ​​nos dígitos de cada cubo, não na ordem. </p><p> {1, 2, 3, 4, 5, 6} é equivalente a {3, 6, 4, 1, 2, 5} {1, 2, 3, 4, 5, 6} é distinto de {1, 2, 3, 4, 5, 9} </p><p> Mas como estamos permitindo que 6 e 9 sejam invertidos, os dois conjuntos distintos no último exemplo representam o conjunto estendido {1, 2, 3, 4, 5, 6, 9} para o propósito de formar números de 2 dígitos. </p><p> Quantas disposições distintas dos dois cubos permitem que todos os números quadrados sejam exibidos? </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler90()</code> deve retornar 1217.
    testString: 'assert.strictEqual(euler90(), 1217, "<code>euler90()</code> should return 1217.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler90() {
  // Good luck!
  return true;
}

euler90();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

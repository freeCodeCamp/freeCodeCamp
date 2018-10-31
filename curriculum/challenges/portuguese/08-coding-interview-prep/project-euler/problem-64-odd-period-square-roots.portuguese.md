---
id: 5900f3ac1000cf542c50febf
challengeType: 5
title: 'Problem 64: Odd period square roots'
videoUrl: ''
localeTitle: 'Problema 64: Raízes quadradas de período ímpar'
---

## Description
<section id="description"> Todas as raízes quadradas são periódicas quando escritas como frações contínuas e podem ser escritas na forma: <p> √N = a0 + 1 </p><p> a1 + 1 </p><p> a2 + 1 </p><p> a3 + ... </p><p> Por exemplo, vamos considerar √23: </p><p> √23 = 4 + √23 - 4 = 4 + 1 = 4 + 1 </p><p> 1√23—4 </p><p> 1 + √ 23 - 37 </p><p> Se continuarmos, obteremos a seguinte expansão: </p><p> √23 = 4 + 1 </p><p> 1 + 1 </p><p> 3 + 1 </p><p> 1 + 1 </p><p> 8 + ... </p><p> O processo pode ser resumido da seguinte forma: </p><p> a0 = 4, </p><p> 1√23—4 = √23 + 47 = 1 + √23—37 a1 = 1, </p><p> 7√23—3 = 7 (√23 + 3) 14 = 3 + √23—32 a2 = 3, </p><p> 2√23—3 = 2 (√23 + 3) 14 = 1 + —23—47 a3 = 1, </p><p> 7√23—4 = 7 (√23 + 4) 7 = 8 + √23—4 a4 = 8, </p><p> 1√23—4 = √23 + 47 = 1 + √23—37 a5 = 1, </p><p> 7√23—3 = 7 (√23 + 3) 14 = 3 + √23—32 a6 = 3, </p><p> 2√23—3 = 2 (√23 + 3) 14 = 1 + —23—47 a7 = 1, </p><p> 7√23—4 = 7 (√23 + 4) 7 = 8 + √23—4 </p><p> Pode ser visto que a sequência está se repetindo. Para concisão, usamos a notação √23 = [4; (1,3,1,8)], para indicar que o bloco (1,3,1,8) se repete indefinidamente. </p><p> As dez primeiras representações de frações continuadas de raízes quadradas (irracionais) são: =2 = [1; (2)], período = 1 √3 = [1; (1,2)], período = 2 √5 = [2; (4)], período = 1 √6 = [2; (2,4)], período = 2 √7 = [2; (1,1,1,4)], período = 4 √8 = [2; (1,4)], período = 2 √10 = [3; (6)], período = 1 √11 = [3; (3,6)], período = 2 √12 = [3; )], período = 2 √13 = [3; (1,1,1,1,6)], período = 5 Exatamente quatro frações continuadas, para N ≤ 13, têm um período ímpar. Quantas frações continuadas para N ≤ 10000 possuem um período ímpar? </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler64()</code> deve retornar 1322.
    testString: 'assert.strictEqual(euler64(), 1322, "<code>euler64()</code> should return 1322.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler64() {
  // Good luck!
  return true;
}

euler64();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

---
id: 56592a60ddddeae28f7aa8e1
title: Access Multi-Dimensional Arrays With Indexes
challengeType: 1
videoUrl: ''
localeTitle: Acessar matrizes multi-dimensionais com índices
---

## Description
<section id="description"> Uma maneira de pensar em uma matriz <dfn>multidimensional</dfn> é como uma <em>matriz de matrizes</em> . Quando você usa colchetes para acessar sua matriz, o primeiro conjunto de colchetes refere-se às entradas na matriz mais externa (o primeiro nível) e cada par adicional de colchetes refere-se ao próximo nível de entradas internas. <strong>Exemplo</strong> <blockquote> var arr = [ <br> [1,2,3], <br> [4,5,6], <br> [7,8,9], <br> [[10,11,12], 13, 14] <br> ]; <br> arr [3]; // é igual a [[10,11,12], 13, 14] <br> arr [3] [0]; // é igual a [10,11,12] <br> arr [3] [0] [1]; // é igual a 11 </blockquote> <strong>Nota</strong> <br> Não deve haver espaços entre o nome da matriz e os colchetes, como <code>array [0][0]</code> e até mesmo esta <code>array [0] [0]</code> não é permitida. Embora JavaScript seja capaz de processar isso corretamente, isso pode confundir outros programadores lendo seu código. </section>

## Instructions
<section id="instructions"> Usando a notação de colchetes, selecione um elemento em <code>myArray</code> , de forma que <code>myData</code> seja igual a <code>8</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>myData</code> deve ser igual a <code>8</code> .
    testString: 'assert(myData === 8, "<code>myData</code> should be equal to <code>8</code>.");'
  - text: Você deve estar usando a notação de colchetes para ler o valor correto de <code>myArray</code> .
    testString: 'assert(/myArray\[2\]\[1\]/g.test(code) && !/myData\s*=\s*(?:.*[-+*/%]|\d)/g.test(code), "You should be using bracket notation to read the correct value from <code>myArray</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Setup
var myArray = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13, 14]];

// Only change code below this line.
var myData = myArray[0][0];

```

</div>


### After Test
<div id='js-teardown'>

```js
console.info('after the test');
```

</div>

</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

---
id: 56bbb991ad1ed5201cd392ca
title: Access Array Data with Indexes
challengeType: 1
videoUrl: ''
localeTitle: Dados de Matriz de Acesso com Índices
---

## Description
<section id="description"> Podemos acessar os dados dentro de matrizes usando <code>indexes</code> . Os índices de matriz são escritos na mesma notação de colchetes usada pelas cadeias, exceto que, em vez de especificar um caractere, eles estão especificando uma entrada na matriz. Como as strings, as matrizes usam indexação <dfn>baseada em zero</dfn> , portanto, o primeiro elemento em uma matriz é o elemento <code>0</code> . <strong>Exemplo</strong> <blockquote> var array = [50,60,70]; <br> array [0]; // é igual a 50 <br> var data = array [1]; // é igual a 60 </blockquote> <strong>Nota</strong> <br> Não deve haver espaços entre o nome da matriz e os colchetes, como <code>array [0]</code> . Embora JavaScript seja capaz de processar isso corretamente, isso pode confundir outros programadores lendo seu código. </section>

## Instructions
<section id="instructions"> Crie uma variável chamada <code>myData</code> e configure-a para igualar o primeiro valor de <code>myArray</code> usando a notação de colchetes. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: A variável <code>myData</code> deve ser igual ao primeiro valor de <code>myArray</code> .
    testString: 'assert((function(){if(typeof myArray !== "undefined" && typeof myData !== "undefined" && myArray[0] === myData){return true;}else{return false;}})(), "The variable <code>myData</code> should equal the first value of <code>myArray</code>.");'
  - text: Os dados na variável <code>myArray</code> devem ser acessados ​​usando a notação de colchetes.
    testString: 'assert((function(){if(code.match(/\s*=\s*myArray\[0\]/g)){return true;}else{return false;}})(), "The data in variable <code>myArray</code> should be accessed using bracket notation.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Example
var ourArray = [50,60,70];
var ourData = ourArray[0]; // equals 50

// Setup
var myArray = [50,60,70];

// Only change code below this line.

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

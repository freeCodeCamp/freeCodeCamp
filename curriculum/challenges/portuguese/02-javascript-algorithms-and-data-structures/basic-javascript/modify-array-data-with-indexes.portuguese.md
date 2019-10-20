---
id: cf1111c1c11feddfaeb8bdef
title: Modify Array Data With Indexes
challengeType: 1
videoUrl: ''
localeTitle: Modificar dados de matriz com índices
---

## Description
<section id="description"> Ao contrário das strings, as entradas das matrizes são <dfn>mutáveis</dfn> e podem ser alteradas livremente. <strong>Exemplo</strong> <blockquote> var ourArray = [50,40,30]; <br> ourArray [0] = 15; // é igual a [15,40,30] </blockquote> <strong>Nota</strong> <br> Não deve haver espaços entre o nome da matriz e os colchetes, como <code>array [0]</code> . Embora JavaScript seja capaz de processar isso corretamente, isso pode confundir outros programadores lendo seu código. </section>

## Instructions
<section id="instructions"> Modifique os dados armazenados no índice <code>0</code> de <code>myArray</code> para um valor de <code>45</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>myArray</code> agora deve ser [45,64,99].'
    testString: 'assert((function(){if(typeof myArray != "undefined" && myArray[0] == 45 && myArray[1] == 64 && myArray[2] == 99){return true;}else{return false;}})(), "<code>myArray</code> should now be [45,64,99].");'
  - text: Você deve estar usando o índice correto para modificar o valor em <code>myArray</code> .
    testString: 'assert((function(){if(code.match(/myArray\[0\]\s*=\s*/g)){return true;}else{return false;}})(), "You should be using correct index to modify the value in <code>myArray</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Example
var ourArray = [18,64,99];
ourArray[1] = 45; // ourArray now equals [18,45,99].

// Setup
var myArray = [18,64,99];

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

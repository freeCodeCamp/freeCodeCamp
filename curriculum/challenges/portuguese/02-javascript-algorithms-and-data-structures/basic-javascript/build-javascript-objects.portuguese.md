---
id: 56bbb991ad1ed5201cd392d0
title: Build JavaScript Objects
challengeType: 1
videoUrl: ''
localeTitle: Construa objetos JavaScript
---

## Description
<section id="description"> Você pode ter ouvido o termo <code>object</code> antes. Os objetos são semelhantes aos <code>arrays</code> , exceto que, em vez de usar índices para acessar e modificar seus dados, você acessa os dados em objetos por meio do que são chamados de <code>properties</code> . Os objetos são úteis para armazenar dados de maneira estruturada e podem representar objetos do mundo real, como um gato. Aqui está um objeto cat de amostra: <blockquote> var cat = { <br> &quot;nome&quot;: &quot;Bigodes&quot;, <br> &quot;pernas&quot;: 4, <br> &quot;coroa&quot;: 1, <br> &quot;inimigos&quot;: [&quot;Água&quot;, &quot;Cães&quot;] <br> }; </blockquote> Neste exemplo, todas as propriedades são armazenadas como strings, como - <code>&quot;name&quot;</code> , <code>&quot;legs&quot;</code> e <code>&quot;tails&quot;</code> . No entanto, você também pode usar números como propriedades. Você pode até mesmo omitir as aspas para propriedades de string de palavra única, da seguinte maneira: <blockquote> var anotherObject = { <br> make: &quot;Ford&quot;, <br> 5: &quot;cinco&quot;, <br> &quot;modelo&quot;: &quot;foco&quot; <br> }; </blockquote> No entanto, se o seu objeto tiver alguma propriedade que não seja de string, o JavaScript será automaticamente convertido em typecast como string. </section>

## Instructions
<section id="instructions"> Crie um objeto que represente um cão chamado <code>myDog</code> que contenha as propriedades <code>&quot;name&quot;</code> (uma string), <code>&quot;legs&quot;</code> , <code>&quot;tails&quot;</code> e <code>&quot;friends&quot;</code> . Você pode definir essas propriedades de objeto para quaisquer valores desejados, desde que <code>&quot;name&quot;</code> seja uma cadeia, <code>&quot;legs&quot;</code> e <code>&quot;tails&quot;</code> sejam números e <code>&quot;friends&quot;</code> seja uma matriz. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>myDog</code> deve conter o <code>name</code> da propriedade e deve ser uma <code>string</code> .
    testString: 'assert((function(z){if(z.hasOwnProperty("name") && z.name !== undefined && typeof z.name === "string"){return true;}else{return false;}})(myDog), "<code>myDog</code> should contain the property <code>name</code> and it should be a <code>string</code>.");'
  - text: <code>myDog</code> deve conter as <code>legs</code> da propriedade e deve ser um <code>number</code> .
    testString: 'assert((function(z){if(z.hasOwnProperty("legs") && z.legs !== undefined && typeof z.legs === "number"){return true;}else{return false;}})(myDog), "<code>myDog</code> should contain the property <code>legs</code> and it should be a <code>number</code>.");'
  - text: <code>myDog</code> deve conter as <code>tails</code> da propriedade e deve ser um <code>number</code> .
    testString: 'assert((function(z){if(z.hasOwnProperty("tails") && z.tails !== undefined && typeof z.tails === "number"){return true;}else{return false;}})(myDog), "<code>myDog</code> should contain the property <code>tails</code> and it should be a <code>number</code>.");'
  - text: <code>myDog</code> deve conter os <code>friends</code> da propriedade e deve ser um <code>array</code> .
    testString: 'assert((function(z){if(z.hasOwnProperty("friends") && z.friends !== undefined && Array.isArray(z.friends)){return true;}else{return false;}})(myDog), "<code>myDog</code> should contain the property <code>friends</code> and it should be an <code>array</code>.");'
  - text: <code>myDog</code> deve conter apenas todas as propriedades dadas.
    testString: 'assert((function(z){return Object.keys(z).length === 4;})(myDog), "<code>myDog</code> should only contain all the given properties.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Example
var ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
};

// Only change code below this line.

var myDog = {




};

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

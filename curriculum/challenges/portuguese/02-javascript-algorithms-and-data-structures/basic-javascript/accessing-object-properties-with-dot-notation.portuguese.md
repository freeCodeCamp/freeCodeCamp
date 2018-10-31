---
id: 56533eb9ac21ba0edf2244c7
title: Accessing Object Properties with Dot Notation
challengeType: 1
videoUrl: ''
localeTitle: Acessando propriedades de objeto com notação de ponto
---

## Description
<section id="description"> Há duas maneiras de acessar as propriedades de um objeto: notação de ponto ( <code>.</code> ) E notação de colchetes ( <code>[]</code> ), semelhante a uma matriz. A notação de pontos é o que você usa quando sabe o nome da propriedade que está tentando acessar antecipadamente. Aqui está uma amostra de uso de notação de ponto ( <code>.</code> ) Para ler a propriedade de um objeto: <blockquote> var myObj = { <br> prop1: &quot;val1&quot;, <br> prop2: &quot;val2&quot; <br> }; <br> var prop1val = myObj.prop1; // val1 <br> var prop2val = myObj.prop2; // val2 </blockquote></section>

## Instructions
<section id="instructions"> Leia os valores de propriedade de <code>testObj</code> usando a notação de ponto. Defina a variável <code>hatValue</code> igual ao <code>hat</code> propriedade do objeto e defina a variável <code>shirtValue</code> igual à <code>shirt</code> propriedade do objeto. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>hatValue</code> deve ser uma string
    testString: 'assert(typeof hatValue === "string" , "<code>hatValue</code> should be a string");'
  - text: O valor de <code>hatValue</code> deve ser <code>&quot;ballcap&quot;</code>
    testString: 'assert(hatValue === "ballcap" , "The value of <code>hatValue</code> should be <code>"ballcap"</code>");'
  - text: <code>shirtValue</code> deve ser uma string
    testString: 'assert(typeof shirtValue === "string" , "<code>shirtValue</code> should be a string");'
  - text: O valor de <code>shirtValue</code> deve ser <code>&quot;jersey&quot;</code>
    testString: 'assert(shirtValue === "jersey" , "The value of <code>shirtValue</code> should be <code>"jersey"</code>");'
  - text: Você deve usar a notação de ponto duas vezes
    testString: 'assert(code.match(/testObj\.\w+/g).length > 1, "You should use dot notation twice");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Setup
var testObj = {
  "hat": "ballcap",
  "shirt": "jersey",
  "shoes": "cleats"
};

// Only change code below this line

var hatValue = testObj;      // Change this line
var shirtValue = testObj;    // Change this line

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

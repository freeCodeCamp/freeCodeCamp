---
id: 56533eb9ac21ba0edf2244c8
title: Accessing Object Properties with Bracket Notation
challengeType: 1
videoUrl: ''
localeTitle: Acessando propriedades de objeto com notação de suporte
---

## Description
<section id="description"> A segunda maneira de acessar as propriedades de um objeto é a notação de colchetes ( <code>[]</code> ). Se a propriedade do objeto que você está tentando acessar tiver um espaço em seu nome, você precisará usar a notação de colchetes. No entanto, você ainda pode usar a notação de colchetes nas propriedades do objeto sem espaços. Aqui está uma amostra de uso da notação de colchetes para ler a propriedade de um objeto: <blockquote> var myObj = { <br> &quot;Space Name&quot;: &quot;Kirk&quot;, <br> &quot;Mais espaço&quot;: &quot;Spock&quot;, <br> &quot;NoSpace&quot;: &quot;USS Enterprise&quot; <br> }; <br> myObj [&quot;nome do espaço&quot;]; // Kirk <br> myObj [&#39;More Space&#39;]; // Spock <br> myObj [&quot;NoSpace&quot;]; // USS Enterprise </blockquote> Observe que os nomes de propriedade com espaços neles devem estar entre aspas (simples ou dupla). </section>

## Instructions
<section id="instructions"> Leia os valores das propriedades <code>&quot;an entree&quot;</code> e <code>&quot;the drink&quot;</code> de <code>testObj</code> usando a notação de colchetes e atribua-os a <code>entreeValue</code> e <code>drinkValue</code> respectivamente. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>entreeValue</code> deve ser uma string
    testString: 'assert(typeof entreeValue === "string" , "<code>entreeValue</code> should be a string");'
  - text: O valor de <code>entreeValue</code> deve ser <code>&quot;hamburger&quot;</code>
    testString: 'assert(entreeValue === "hamburger" , "The value of <code>entreeValue</code> should be <code>"hamburger"</code>");'
  - text: <code>drinkValue</code> deve ser uma string
    testString: 'assert(typeof drinkValue === "string" , "<code>drinkValue</code> should be a string");'
  - text: O valor de <code>drinkValue</code> deve ser <code>&quot;water&quot;</code>
    testString: 'assert(drinkValue === "water" , "The value of <code>drinkValue</code> should be <code>"water"</code>");'
  - text: Você deve usar a notação de colchete duas vezes
    testString: 'assert(code.match(/testObj\s*?\[("|")[^""]+\1\]/g).length > 1, "You should use bracket notation twice");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Setup
var testObj = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water"
};

// Only change code below this line

var entreeValue = testObj;   // Change this line
var drinkValue = testObj;    // Change this line

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

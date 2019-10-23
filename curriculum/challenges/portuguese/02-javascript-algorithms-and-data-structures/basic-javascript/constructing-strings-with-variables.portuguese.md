---
id: 56533eb9ac21ba0edf2244b9
title: Constructing Strings with Variables
challengeType: 1
videoUrl: ''
localeTitle: Construindo Strings com Variáveis
---

## Description
<section id="description"> Às vezes você precisará construir uma string, estilo <a href="https://en.wikipedia.org/wiki/Mad_Libs" target="_blank">Mad Libs</a> . Usando o operador de concatenação ( <code>+</code> ), você pode inserir uma ou mais variáveis ​​em uma string que está construindo. </section>

## Instructions
<section id="instructions"> Definir <code>myName</code> para uma string igual ao seu nome e construir <code>myStr</code> com <code>myName</code> entre as seqüências de caracteres <code>&quot;My name is &quot;</code> e <code>&quot; and I am well!&quot;</code> </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>myName</code> deve ser definido para uma string com pelo menos 3 caracteres
    testString: 'assert(typeof myName !== "undefined" && myName.length > 2, "<code>myName</code> should be set to a string at least 3 characters long");'
  - text: Use dois <code>+</code> operadores para construir <code>myStr</code> com <code>myName</code> dentro dele
    testString: 'assert(code.match(/[""]\s*\+\s*myName\s*\+\s*[""]/g).length > 0, "Use two <code>+</code> operators to build <code>myStr</code> with <code>myName</code> inside it");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Example
var ourName = "freeCodeCamp";
var ourStr = "Hello, our name is " + ourName + ", how are you?";

// Only change code below this line
var myName;
var myStr;

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

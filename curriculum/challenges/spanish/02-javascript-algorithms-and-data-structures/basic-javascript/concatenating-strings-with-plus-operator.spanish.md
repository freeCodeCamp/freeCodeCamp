---
id: 56533eb9ac21ba0edf2244b7
title: Concatenating Strings with Plus Operator
challengeType: 1
videoUrl: ''
localeTitle: Concatenando cuerdas con el operador Plus
---

## Description
<section id="description"> En JavaScript, cuando el operador <code>+</code> se usa con un valor de <code>String</code> , se llama operador de <dfn>concatenación</dfn> . Puede construir una nueva cadena a partir de otras cadenas <dfn>concatenándolas</dfn> juntas. <strong>Ejemplo</strong> <blockquote> &#39;Mi nombre es Alan,&#39; + &#39;Concatené&#39;. </blockquote> <strong>Nota</strong> <br> Cuidado con los espacios. La concatenación no agrega espacios entre las cadenas concatenadas, por lo que deberá agregarlas usted mismo. </section>

## Instructions
<section id="instructions"> Construye <code>myStr</code> partir de las cadenas <code>&quot;This is the start. &quot;</code> y <code>&quot;This is the end.&quot;</code> utilizando el operador <code>+</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>myStr</code> debe tener un valor de <code>This is the start. This is the end.</code>
    testString: 'assert(myStr === "This is the start. This is the end.", "<code>myStr</code> should have a value of <code>This is the start. This is the end.</code>");'
  - text: Usa el operador <code>+</code> para construir <code>myStr</code>
    testString: 'assert(code.match(/([""]).*([""])\s*\+\s*([""]).*([""])/g).length > 1, "Use the <code>+</code> operator to build <code>myStr</code>");'
  - text: <code>myStr</code> debe crearse usando la palabra clave <code>var</code> .
    testString: 'assert(/var\s+myStr/.test(code), "<code>myStr</code> should be created using the <code>var</code> keyword.");'
  - text: Asegúrese de asignar el resultado a la variable <code>myStr</code> .
    testString: 'assert(/myStr\s*=/.test(code), "Make sure to assign the result to the <code>myStr</code> variable.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Example
var ourStr = "I come first. " + "I come second.";

// Only change code below this line

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

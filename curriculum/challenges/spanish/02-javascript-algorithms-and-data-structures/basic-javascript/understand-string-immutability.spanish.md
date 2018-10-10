---
id: 56533eb9ac21ba0edf2244ba
title: Understand String Immutability
challengeType: 1
videoUrl: ''
localeTitle: Entender la inmutabilidad de la cuerda
---

## Description
<section id="description"> En JavaScript, los valores de <code>String</code> son <dfn>inmutables</dfn> , lo que significa que no se pueden modificar una vez creados. Por ejemplo, el siguiente código: <blockquote> var myStr = &quot;Bob&quot;; <br> myStr [0] = &quot;J&quot;; </blockquote> no se puede cambiar el valor de <code>myStr</code> a &quot;Trabajo&quot;, porque el contenido de <code>myStr</code> no se puede modificar. Tenga en cuenta que esto <em>no</em> significa que <code>myStr</code> no se pueda cambiar, solo que los caracteres individuales de un <dfn>literal de cadena</dfn> no se pueden cambiar. La única forma de cambiar <code>myStr</code> sería asignarlo con una nueva cadena, como esta: <blockquote> var myStr = &quot;Bob&quot;; <br> myStr = &quot;Trabajo&quot;; </blockquote></section>

## Instructions
<section id="instructions"> Corrija la asignación a <code>myStr</code> para que contenga el valor de cadena de <code>Hello World</code> utilizando el enfoque que se muestra en el ejemplo anterior. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>myStr</code> debería tener un valor de <code>Hello World</code>
    testString: 'assert(myStr === "Hello World", "<code>myStr</code> should have a value of <code>Hello World</code>");'
  - text: No cambie el código por encima de la línea
    testString: 'assert(/myStr = "Jello World"/.test(code), "Do not change the code above the line");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Setup
var myStr = "Jello World";

// Only change code below this line

myStr[0] = "H"; // Fix Me

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

---
id: 587d7db5367417b2b2512b97
title: Match Numbers and Letters of the Alphabet
challengeType: 1
videoUrl: ''
localeTitle: Coincidir números y letras del alfabeto
---

## Description
<section id="description"> El uso del guión ( <code>-</code> ) para hacer coincidir un rango de caracteres no se limita a las letras. También funciona para hacer coincidir un rango de números. Por ejemplo, <code>/[0-5]/</code> coincide con cualquier número entre <code>0</code> y <code>5</code> , incluidos <code>0</code> y <code>5</code> . Además, es posible combinar un rango de letras y números en un solo conjunto de caracteres. <blockquote> vamos a jennyStr = &quot;Jenny8675309&quot;; <br> deja myRegex = / [a-z0-9] / ig; <br> // coincide con todas las letras y números en jennyStr <br> jennyStr.match (myRegex); </blockquote></section>

## Instructions
<section id="instructions"> Crear una sola expresión regular que coincide con una gama de cartas entre <code>h</code> y <code>s</code> , y una gama de números de entre <code>2</code> y <code>6</code> . Recuerde incluir las banderas apropiadas en la expresión regular. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Tu regex <code>myRegex</code> debe coincidir con 17 elementos.
    testString: 'assert(result.length == 17, "Your regex <code>myRegex</code> should match 17 items.");'
  - text: Su regex <code>myRegex</code> debe usar la bandera global.
    testString: 'assert(myRegex.flags.match(/g/).length == 1, "Your regex <code>myRegex</code> should use the global flag.");'
  - text: Su expresión regular <code>myRegex</code> debe usar la <code>myRegex</code> no distingue entre mayúsculas y minúsculas.
    testString: 'assert(myRegex.flags.match(/i/).length == 1, "Your regex <code>myRegex</code> should use the case insensitive flag.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let quoteSample = "Blueberry 3.141592653s are delicious.";
let myRegex = /change/; // Change this line
let result = myRegex; // Change this line

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

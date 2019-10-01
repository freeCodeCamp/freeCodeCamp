---
id: 56533eb9ac21ba0edf2244ad
title: Decrement a Number with JavaScript
challengeType: 1
videoUrl: ''
localeTitle: Disminuir un número con JavaScript
---

## Description
<section id="description"> Usted puede <dfn>disminuir</dfn> o reducir fácilmente una variable por uno (1) con el operador <code>--</code> . <code>i--;</code> es el equivalente de <code>i = i - 1;</code><strong>Nota</strong> <br> La línea entera se convierte en <code>i--;</code> , eliminando la necesidad del signo igual. </section>

## Instructions
<section id="instructions"> Cambie el código para usar el operador <code>--</code> en <code>myVar</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>myVar</code> debe ser igual a <code>10</code>
    testString: 'assert(myVar === 10, "<code>myVar</code> should equal <code>10</code>");'
  - text: <code>myVar = myVar - 1;</code> debería ser cambiado
    testString: 'assert(/var\s*myVar\s*=\s*11;\s*\/*.*\s*([-]{2}\s*myVar|myVar\s*[-]{2});/.test(code), "<code>myVar = myVar - 1;</code> should be changed");'
  - text: Utilice el <code>--</code> operador en <code>myVar</code>
    testString: 'assert(/[-]{2}\s*myVar|myVar\s*[-]{2}/.test(code), "Use the <code>--</code> operator on <code>myVar</code>");'
  - text: No cambie el código por encima de la línea
    testString: 'assert(/var myVar = 11;/.test(code), "Do not change code above the line");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
var myVar = 11;

// Only change code below this line
myVar = myVar - 1;

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

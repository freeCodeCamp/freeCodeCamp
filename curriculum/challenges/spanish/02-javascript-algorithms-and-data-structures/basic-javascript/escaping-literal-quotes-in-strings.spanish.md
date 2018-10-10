---
id: 56533eb9ac21ba0edf2244b5
title: Escaping Literal Quotes in Strings
challengeType: 1
videoUrl: ''
localeTitle: Escapar de citas literales en cuerdas
---

## Description
<section id="description"> Cuando está definiendo una cadena, debe comenzar y terminar con una comilla simple o doble. ¿Qué sucede cuando necesita una cita literal: <code>&quot;</code> o <code>&#39;</code> dentro de su cadena? En JavaScript, puede <dfn>evitar que</dfn> una cita la considere como un final de la cadena de la cadena colocando una <dfn>barra invertida</dfn> ( <code>\</code> ) delante de la cita. <code>var sampleStr = &quot;Alan said, \&quot;Peter is learning JavaScript\&quot;.&quot;;</code> Esto indica a JavaScript que la siguiente cita no es el final de la cadena, sino que debería aparecer dentro de la cadena. Así que si imprimiera esto en la consola, obtendría: <code>Alan said, &quot;Peter is learning JavaScript&quot;.</code> </section>

## Instructions
<section id="instructions"> Utilice las <dfn>barras invertidas</dfn> para asignar una cadena a la variable <code>myStr</code> modo que si tuviera que imprimirla en la consola, verá: <code>I am a &quot;double quoted&quot; string inside &quot;double quotes&quot;.</code> </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Debe usar dos comillas dobles ( <code>&quot;</code> ) y cuatro comillas dobles escapadas ( <code>\&quot;</code> ).
    testString: 'assert(code.match(/\\"/g).length === 4 && code.match(/[^\\]"/g).length === 2, "You should use two double quotes (<code>&quot;</code>) and four escaped double quotes (<code>&#92;&quot;</code>).");'
  - text: 'La variable myStr debe contener la cadena: <code>I am a &quot;double quoted&quot; string inside &quot;double quotes&quot;.</code>'
    testString: 'assert(myStr === "I am a \"double quoted\" string inside \"double quotes\".", "Variable myStr should contain the string: <code>I am a "double quoted" string inside "double quotes".</code>");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
var myStr = ""; // Change this line

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

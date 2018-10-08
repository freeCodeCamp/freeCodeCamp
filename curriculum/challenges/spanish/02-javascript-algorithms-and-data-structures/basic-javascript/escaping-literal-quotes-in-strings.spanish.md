---
id: 56533eb9ac21ba0edf2244b5
title: Escaping Literal Quotes in Strings
localeTitle: Escapar de citas literales en cuerdas
challengeType: 1
---

## Description
<section id='description'> 
Cuando está definiendo una cadena, debe comenzar y terminar con una comilla simple o doble. ¿Qué sucede cuando necesita una cita literal: <code>&quot;</code> o <code>&#39;</code> dentro de su cadena? 
En JavaScript, puede <dfn>evitar que</dfn> una cita la considere como un final de cadena de la cadena colocando una <dfn>barra invertida</dfn> ( <code>\</code> ) delante de la cita. 
<code>var sampleStr = &quot;Alan said, \&quot;Peter is learning JavaScript\&quot;.&quot;;</code> 
Esto indica a JavaScript que la siguiente cita no es el final de la cadena, sino que debería aparecer dentro de la cadena. Por lo tanto, si imprimiera esto en En la consola, obtendrías: 
<code>Alan said, &quot;Peter is learning JavaScript&quot;.</code> 
</section>

## Instructions
<section id='instructions'> 
Use <dfn>barras diagonales inversas</dfn> para asignar una cadena a la variable <code>myStr</code> modo que si tuviera que imprimirla en la consola, verá: 
<code>I am a &quot;double quoted&quot; string inside &quot;double quotes&quot;.</code> 
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: &#39;Debería usar dos comillas dobles ( <code>&quot;</code> ) y cuatro comillas dobles escapadas ( <code>\&quot;</code> ).&#39;
    testString: 'assert(code.match(/\\"/g).length === 4 && code.match(/[^\\]"/g).length === 2, "You should use two double quotes (<code>&quot;</code>) and four escaped double quotes (<code>&#92;&quot;</code>).");'
  - text: &#39;Variable myStr debe contener la cadena: <code>I am a &quot;double quoted&quot; string inside &quot;double quotes&quot;.</code> comilla <code>I am a &quot;double quoted&quot; string inside &quot;double quotes&quot;.</code> &#39;
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
var myStr = "I am a \"double quoted\" string inside \"double quotes\".";
```

</section>

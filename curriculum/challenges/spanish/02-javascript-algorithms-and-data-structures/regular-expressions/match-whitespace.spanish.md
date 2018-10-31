---
id: 587d7db8367417b2b2512ba3
title: Match Whitespace
challengeType: 1
videoUrl: ''
localeTitle: Emparejar espacios en blanco
---

## Description
<section id="description"> Los desafíos hasta ahora han cubierto las letras correspondientes del alfabeto y los números. También puede hacer coincidir los espacios en blanco o espacios entre letras. Puede buscar espacios en blanco usando <code>\s</code> , que es un <code>s</code> minúscula. Este patrón no solo coincide con el espacio en blanco, sino también con el retorno de carro, la pestaña, el avance de página y los nuevos caracteres de línea. Puede pensar que es similar a la clase de caracteres <code>[ \r\t\f\n\v]</code> . <blockquote> Deje que whiteSpace = &quot;Espacio en blanco. ¡Espacio en blanco en todas partes!&quot; <br> vamos a spaceRegex = / \ s / g; <br> whiteSpace.match (spaceRegex); <br> // Devoluciones [&quot; &quot;, &quot; &quot;] <br></blockquote></section>

## Instructions
<section id="instructions"> Cambie el regex <code>countWhiteSpace</code> para buscar múltiples caracteres de espacio en blanco en una cadena. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Su expresión regular debe utilizar la bandera global.
    testString: 'assert(countWhiteSpace.global, "Your regex should use the global flag.");'
  - text: Tu expresión regular debe usar el carácter abreviado
    testString: 'assert(/\\s/.test(countWhiteSpace.source), "Your regex should use the shorthand character <code>\s</code> to match all whitespace characters.");'
  - text: Su expresión regular debe encontrar ocho espacios en <code>&quot;Men are from Mars and women are from Venus.&quot;</code>
    testString: 'assert("Men are from Mars and women are from Venus.".match(countWhiteSpace).length == 8, "Your regex should find eight spaces in <code>"Men are from Mars and women are from Venus."</code>");'
  - text: 'Tu expresión regular debe encontrar tres espacios en <code>&quot;Space: the final frontier.&quot;</code>'
    testString: 'assert("Space: the final frontier.".match(countWhiteSpace).length == 3, "Your regex should find three spaces in <code>"Space: the final frontier."</code>");'
  - text: Tu expresión regular no debería encontrar espacios en <code>&quot;MindYourPersonalSpace&quot;</code>
    testString: 'assert("MindYourPersonalSpace".match(countWhiteSpace) == null, "Your regex should find no spaces in <code>"MindYourPersonalSpace"</code>");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let sample = "Whitespace is important in separating words";
let countWhiteSpace = /change/; // Change this line
let result = sample.match(countWhiteSpace);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

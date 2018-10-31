---
id: 587d7db9367417b2b2512ba4
title: Match Non-Whitespace Characters
challengeType: 1
videoUrl: ''
localeTitle: Combina caracteres que no sean espacios en blanco
---

## Description
<section id="description"> Aprendiste sobre la búsqueda de espacios en blanco usando <code>\s</code> , con una <code>s</code> minúscula. También puede buscar todo excepto espacios en blanco. Busque espacios que no sean espacios en blanco usando <code>\S</code> , que es una <code>s</code> mayúscula. Este patrón no coincidirá con los espacios en blanco, el retorno de carro, la pestaña, el avance de página y los nuevos caracteres de línea. Puede pensar que es similar a la clase de caracteres <code>[^ \r\t\f\n\v]</code> . <blockquote> Deje que whiteSpace = &quot;Espacio en blanco. ¡Espacio en blanco en todas partes!&quot; <br> vamos a nonSpaceRegex = / \ S / g; <br> whiteSpace.match (nonSpaceRegex) .length; // Devoluciones 32 </blockquote></section>

## Instructions
<section id="instructions"> Cambie el regex <code>countNonWhiteSpace</code> para buscar múltiples caracteres que no sean espacios en blanco en una cadena. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Su expresión regular debe utilizar la bandera global.
    testString: 'assert(countNonWhiteSpace.global, "Your regex should use the global flag.");'
  - text: Tu expresión regular debe usar el carácter abreviado
    testString: 'assert(/\\S/.test(countNonWhiteSpace.source), "Your regex should use the shorthand character <code>\S/code> to match all non-whitespace characters.");'
  - text: Su expresión regular debe encontrar 35 espacios libres en <code>&quot;Men are from Mars and women are from Venus.&quot;</code>
    testString: 'assert("Men are from Mars and women are from Venus.".match(countNonWhiteSpace).length == 35, "Your regex should find 35 non-spaces in <code>"Men are from Mars and women are from Venus."</code>");'
  - text: 'Su expresión regular debe encontrar 23 espacios sin espacios en <code>&quot;Space: the final frontier.&quot;</code>'
    testString: 'assert("Space: the final frontier.".match(countNonWhiteSpace).length == 23, "Your regex should find 23 non-spaces in <code>"Space: the final frontier."</code>");'
  - text: Su expresión regular debe encontrar 21 espacios en <code>&quot;MindYourPersonalSpace&quot;</code>
    testString: 'assert("MindYourPersonalSpace".match(countNonWhiteSpace).length == 21, "Your regex should find 21 non-spaces in <code>"MindYourPersonalSpace"</code>");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let sample = "Whitespace is important in separating words";
let countNonWhiteSpace = /change/; // Change this line
let result = sample.match(countNonWhiteSpace);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

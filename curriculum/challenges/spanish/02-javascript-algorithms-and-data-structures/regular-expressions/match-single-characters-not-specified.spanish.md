---
id: 587d7db6367417b2b2512b98
title: Match Single Characters Not Specified
localeTitle: Coincidir con caracteres individuales no especificados
challengeType: 1
---

## Description
<section id='description'> 
Hasta ahora, ha creado un conjunto de caracteres que desea hacer coincidir, pero también puede crear un conjunto de caracteres que no desea que coincida. Estos tipos de conjuntos de caracteres se denominan <code>negated character sets</code> . 
Para crear un <code>negated character set</code> , coloque un carácter de <code>caret</code> ( <code>^</code> ) después del corchete de apertura y antes de los caracteres que no desea que coincidan. 
Por ejemplo, <code>/[^aeiou]/gi</code> coincide con todos los caracteres que no son una vocal. Tenga en cuenta que a los personajes les gusta <code>.</code> , <code>!</code> , <code>[</code> , <code>@</code> , <code>/</code> y el espacio en blanco coinciden: el conjunto de caracteres de la vocal negada solo excluye los caracteres de la vocal. 
</section>

## Instructions
<section id='instructions'> 
Cree una expresión regular única que coincida con todos los caracteres que no sean un número o una vocal. Recuerde incluir las banderas apropiadas en la expresión regular. 
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Tu regex <code>myRegex</code> debe coincidir con 9 elementos.
    testString: 'assert(result.length == 9, "Your regex <code>myRegex</code> should match 9 items.");'
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
let quoteSample = "3 blind mice.";
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

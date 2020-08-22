---
id: af2170cad53daa0770fabdea
title: Mutations
isRequired: true
challengeType: 5
videoUrl: ''
localeTitle: Mutações
---

## Description
<section id="description"> Retorna true se a string no primeiro elemento da matriz contiver todas as letras da string no segundo elemento da matriz. Por exemplo, <code>[&quot;hello&quot;, &quot;Hello&quot;]</code> , deve retornar true porque todas as letras na segunda string estão presentes na primeira, ignorando a diferença entre maiúsculas e minúsculas. Os argumentos <code>[&quot;hello&quot;, &quot;hey&quot;]</code> devem retornar false porque a string &quot;hello&quot; não contém um &quot;y&quot;. Por último, <code>[&quot;Alien&quot;, &quot;line&quot;]</code> , deve retornar true porque todas as letras em &quot;line&quot; estão presentes em &quot;Alien&quot;. Lembre-se de usar <a href="https://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck-coding/19514" target="_blank">Read-Search-Ask</a> se você ficar preso. Escreva seu próprio código. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>mutation([&quot;hello&quot;, &quot;hey&quot;])</code> deve retornar false.'
    testString: 'assert(mutation(["hello", "hey"]) === false, "<code>mutation(["hello", "hey"])</code> should return false.");'
  - text: '<code>mutation([&quot;hello&quot;, &quot;Hello&quot;])</code> deve retornar true.'
    testString: 'assert(mutation(["hello", "Hello"]) === true, "<code>mutation(["hello", "Hello"])</code> should return true.");'
  - text: '<code>mutation([&quot;zyxwvutsrqponmlkjihgfedcba&quot;, &quot;qrstu&quot;])</code> deve retornar true.'
    testString: 'assert(mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]) === true, "<code>mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"])</code> should return true.");'
  - text: '<code>mutation([&quot;Mary&quot;, &quot;Army&quot;])</code> deve retornar true.'
    testString: 'assert(mutation(["Mary", "Army"]) === true, "<code>mutation(["Mary", "Army"])</code> should return true.");'
  - text: '<code>mutation([&quot;Mary&quot;, &quot;Aarmy&quot;])</code> deve retornar true.'
    testString: 'assert(mutation(["Mary", "Aarmy"]) === true, "<code>mutation(["Mary", "Aarmy"])</code> should return true.");'
  - text: '<code>mutation([&quot;Alien&quot;, &quot;line&quot;])</code> deve retornar true.'
    testString: 'assert(mutation(["Alien", "line"]) === true, "<code>mutation(["Alien", "line"])</code> should return true.");'
  - text: '<code>mutation([&quot;floor&quot;, &quot;for&quot;])</code> deve retornar true.'
    testString: 'assert(mutation(["floor", "for"]) === true, "<code>mutation(["floor", "for"])</code> should return true.");'
  - text: '<code>mutation([&quot;hello&quot;, &quot;neo&quot;])</code> deve retornar false.'
    testString: 'assert(mutation(["hello", "neo"]) === false, "<code>mutation(["hello", "neo"])</code> should return false.");'
  - text: '<code>mutation([&quot;voodoo&quot;, &quot;no&quot;])</code> deve retornar false.'
    testString: 'assert(mutation(["voodoo", "no"]) === false, "<code>mutation(["voodoo", "no"])</code> should return false.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function mutation(arr) {
  return arr;
}

mutation(["hello", "hey"]);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

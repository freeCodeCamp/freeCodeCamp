---
id: ab6137d4e35944e21037b769
title: Title Case a Sentence
isRequired: true
challengeType: 5
videoUrl: ''
localeTitle: Título Caso una oración
---

## Description
<section id="description"> Devuelva la cadena provista con la primera letra de cada palabra en mayúscula. Asegúrese de que el resto de la palabra esté en minúscula. Para el propósito de este ejercicio, también debe usar mayúsculas para conectar palabras como &quot;el&quot; y &quot;de&quot;. Recuerda usar <a href="https://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck-coding/19514" target="_blank">Read-Search-Ask</a> si te atascas. Escribe tu propio código. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>titleCase(&quot;I&#39;m a little tea pot&quot;)</code> debería devolver una cadena.'
    testString: 'assert(typeof titleCase("I"m a little tea pot") === "string", "<code>titleCase("I&#39;m a little tea pot")</code> should return a string.");'
  - text: '<code>titleCase(&quot;I&#39;m a little tea pot&quot;)</code> debería devolver <code>I&#39;m A Little Tea Pot</code> .'
    testString: 'assert(titleCase("I"m a little tea pot") === "I"m A Little Tea Pot", "<code>titleCase("I&#39;m a little tea pot")</code> should return <code>I&#39;m A Little Tea Pot</code>.");'
  - text: <code>titleCase(&quot;sHoRt AnD sToUt&quot;)</code> debe devolver <code>Short And Stout</code> .
    testString: 'assert(titleCase("sHoRt AnD sToUt") === "Short And Stout", "<code>titleCase("sHoRt AnD sToUt")</code> should return <code>Short And Stout</code>.");'
  - text: <code>titleCase(&quot;HERE IS MY HANDLE HERE IS MY SPOUT&quot;)</code> debería regresar. <code>Here Is My Handle Here Is My Spout</code> .
    testString: 'assert(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT") === "Here Is My Handle Here Is My Spout", "<code>titleCase("HERE IS MY HANDLE HERE IS MY SPOUT")</code> should return <code>Here Is My Handle Here Is My Spout</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function titleCase(str) {
  return str;
}

titleCase("I'm a little tea pot");

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

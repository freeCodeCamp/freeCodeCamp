---
id: 567af2437cbaa8c51670a16c
title: Testing Objects for Properties
challengeType: 1
videoUrl: ''
localeTitle: Prueba de objetos para propiedades
---

## Description
<section id="description"> A veces es útil verificar si la propiedad de un objeto dado existe o no. Podemos usar el método de objetos <code>.hasOwnProperty(propname)</code> para determinar si ese objeto tiene el nombre de propiedad dado. <code>.hasOwnProperty()</code> devuelve <code>true</code> o <code>false</code> si se encuentra la propiedad o no. <strong>Ejemplo</strong> <blockquote> var myObj = { <br> arriba: &quot;sombrero&quot;, <br> abajo: &quot;pantalones&quot; <br> }; <br> myObj.hasOwnProperty (&quot;top&quot;); // cierto <br> myObj.hasOwnProperty (&quot;middle&quot;); // falso </blockquote></section>

## Instructions
<section id="instructions"> Modifique la función <code>checkObj</code> para probar <code>myObj</code> para <code>checkProp</code> . Si se encuentra la propiedad, devuelva el valor de esa propiedad. Si no, devuelve <code>&quot;Not Found&quot;</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>checkObj(&quot;gift&quot;)</code> debe devolver <code>&quot;pony&quot;</code> .
    testString: 'assert(checkObj("gift") === "pony", "<code>checkObj("gift")</code> should return  <code>"pony"</code>.");'
  - text: <code>checkObj(&quot;pet&quot;)</code> debe devolver <code>&quot;kitten&quot;</code> .
    testString: 'assert(checkObj("pet") === "kitten", "<code>checkObj("pet")</code> should return  <code>"kitten"</code>.");'
  - text: <code>checkObj(&quot;house&quot;)</code> debe devolver <code>&quot;Not Found&quot;</code> .
    testString: 'assert(checkObj("house") === "Not Found", "<code>checkObj("house")</code> should return  <code>"Not Found"</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Setup
var myObj = {
  gift: "pony",
  pet: "kitten",
  bed: "sleigh"
};

function checkObj(checkProp) {
  // Your Code Here

  return "Change Me!";
}

// Test your code by modifying these values
checkObj("gift");

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

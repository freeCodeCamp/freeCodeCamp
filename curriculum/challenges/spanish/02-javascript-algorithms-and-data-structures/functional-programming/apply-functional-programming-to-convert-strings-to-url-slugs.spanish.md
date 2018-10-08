---
id: 587d7dab367417b2b2512b6d
title: Apply Functional Programming to Convert Strings to URL Slugs
localeTitle: Aplique programación funcional para convertir cadenas en slugs de URL
challengeType: 1
---

## Description
<section id='description'> 
Los últimos varios desafíos cubrieron una serie de métodos de matriz y cadena útiles que siguen los principios de programación funcional. También hemos aprendido sobre <code>reduce</code> , que es un método poderoso que se utiliza para reducir problemas a formas más simples. Desde los promedios de computación hasta la clasificación, cualquier operación de matriz se puede lograr aplicándolo. Recordemos que el <code>map</code> y el <code>filter</code> son casos especiales de <code>reduce</code> . 
Combinemos lo que hemos aprendido para resolver un problema práctico. 
Muchos sitios de administración de contenido (CMS) tienen los títulos de una publicación agregada a parte de la URL con fines de marcadores simples. Por ejemplo, si escribe una publicación mediana titulada &quot;Dejar de usar reducir&quot;, es probable que la URL tenga alguna forma de la cadena de título (&quot;... / stop-using-reduce-)&quot;. Es posible que ya hayas notado esto en el sitio freeCodeCamp. 
</section>

## Instructions
<section id='instructions'> 
Rellene la función <code>urlSlug</code> para que convierta un <code>title</code> cadena y devuelva la versión con guión para la URL. Puede usar cualquiera de los métodos cubiertos en esta sección, y no usar <code>replace</code> . Estos son los requisitos: 
La entrada es una cadena con espacios y palabras en mayúsculas 
La salida es una cadena con espacios entre palabras reemplazadas por un guión ( <code>-</code> ) 
La salida debe ser todas letras minúsculas 
La salida debe no tiene espacios 
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: La variable <code>globalTitle</code> no debe cambiar.
    testString: 'assert(globalTitle === "Winter Is Coming", "The <code>globalTitle</code> variable should not change.");'
  - text: Su código no debe usar el método de <code>replace</code> para este desafío.
    testString: 'assert(!code.match(/\.replace/g), "Your code should not use the <code>replace</code> method for this challenge.");'
  - text: <code>urlSlug(&quot;Winter Is Coming&quot;)</code> debería devolver <code>&quot;winter-is-coming&quot;</code> .
    testString: 'assert(urlSlug("Winter Is Coming") === "winter-is-coming", "<code>urlSlug("Winter Is Coming")</code> should return <code>"winter-is-coming"</code>.");'
  - text: <code>urlSlug(&quot; Winter Is  Coming&quot;)</code> debería devolver <code>&quot;winter-is-coming&quot;</code> .
    testString: 'assert(urlSlug(" Winter Is  Coming") === "winter-is-coming", "<code>urlSlug(" Winter Is  &nbsp;Coming")</code> should return <code>"winter-is-coming"</code>.");'
  - text: <code>urlSlug(&quot;A Mind Needs Books Like A Sword Needs A Whetstone&quot;)</code> <code>&quot;a-mind-needs-books-like-a-sword-needs-a-whetstone&quot;</code> <code>urlSlug(&quot;A Mind Needs Books Like A Sword Needs A Whetstone&quot;)</code> debería devolver <code>&quot;a-mind-needs-books-like-a-sword-needs-a-whetstone&quot;</code> .
    testString: 'assert(urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone") === "a-mind-needs-books-like-a-sword-needs-a-whetstone", "<code>urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone")</code> should return <code>"a-mind-needs-books-like-a-sword-needs-a-whetstone"</code>.");'
  - text: <code>urlSlug(&quot;Hold The Door&quot;)</code> debe devolver <code>&quot;hold-the-door&quot;</code> .
    testString: 'assert(urlSlug("Hold The Door") === "hold-the-door", "<code>urlSlug("Hold The Door")</code> should return <code>"hold-the-door"</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// the global variable
var globalTitle = "Winter Is Coming";

// Add your code below this line
function urlSlug(title) {


}
// Add your code above this line

var winterComing = urlSlug(globalTitle); // Should be "winter-is-coming"
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

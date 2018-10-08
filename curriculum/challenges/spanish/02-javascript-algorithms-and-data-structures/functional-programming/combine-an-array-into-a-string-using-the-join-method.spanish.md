---
id: 587d7daa367417b2b2512b6c
title: Combine an Array into a String Using the join Method
localeTitle: Combina una matriz en una cadena usando el método de unión
challengeType: 1
---

## Description
<section id='description'> 
El método de <code>join</code> se utiliza para unir los elementos de una matriz para crear una cadena. Toma un argumento para el delimitador que se usa para separar los elementos de la matriz en la cadena. 
Aquí hay un ejemplo: 
<blockquote>var arr = ["Hello", "World"];<br>var str = arr.join(" ");<br>// Sets str to "Hello World"</blockquote> 
</section>

## Instructions
<section id='instructions'> 
Use el método de <code>join</code> (entre otros) dentro de la función de <code>sentensify</code> para hacer una oración de las palabras en la cadena <code>str</code> . La función debe devolver una cadena. Por ejemplo, &quot;I-like-Star-Wars&quot; se convertiría a &quot;Me gusta Star Wars&quot;. Para este desafío, no utilice el método de <code>replace</code> . 
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Su código debe utilizar el método de <code>join</code> .
    testString: 'assert(code.match(/\.join/g), "Your code should use the <code>join</code> method.");'
  - text: Su código no debe utilizar el método de <code>replace</code> .
    testString: 'assert(!code.match(/\.replace/g), "Your code should not use the <code>replace</code> method.");'
  - text: <code>sentensify(&quot;May-the-force-be-with-you&quot;)</code> debe devolver una cadena.
    testString: 'assert(typeof sentensify("May-the-force-be-with-you") === "string", "<code>sentensify("May-the-force-be-with-you")</code> should return a string.");'
  - text: <code>sentensify(&quot;May-the-force-be-with-you&quot;)</code> debe devolver <code>&quot;May the force be with you&quot;</code> .
    testString: 'assert(sentensify("May-the-force-be-with-you") === "May the force be with you", "<code>sentensify("May-the-force-be-with-you")</code> should return <code>"May the force be with you"</code>.");'
  - text: <code>sentensify(&quot;The.force.is.strong.with.this.one&quot;)</code> debe devolver <code>&quot;The force is strong with this one&quot;</code> .
    testString: 'assert(sentensify("The.force.is.strong.with.this.one") === "The force is strong with this one", "<code>sentensify("The.force.is.strong.with.this.one")</code> should return <code>"The force is strong with this one"</code>.");'
  - text: &#39; <code>sentensify(&quot;There,has,been,an,awakening&quot;)</code> debería regresar <code>&quot;There has been an awakening&quot;</code> .
    testString: 'assert(sentensify("There,has,been,an,awakening") === "There has been an awakening", "<code>sentensify("There,has,been,an,awakening")</code> should return <code>"There has been an awakening"</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function sentensify(str) {
  // Add your code below this line


  // Add your code above this line
}
sentensify("May-the-force-be-with-you");
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

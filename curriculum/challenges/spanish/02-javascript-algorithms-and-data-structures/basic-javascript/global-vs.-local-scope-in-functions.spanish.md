---
id: 56533eb9ac21ba0edf2244c0
title: Global vs. Local Scope in Functions
challengeType: 1
videoUrl: ''
localeTitle: Ámbito global vs. local en funciones
---

## Description
<section id="description"> Es posible tener variables <dfn>locales</dfn> y <dfn>globales</dfn> con el mismo nombre. Cuando haces esto, la variable <code>local</code> tiene prioridad sobre la variable <code>global</code> . En este ejemplo: <blockquote> var someVar = &quot;Hat&quot;; <br> función myFun () { <br> var someVar = &quot;Head&quot;; <br> devuelve someVar; <br> } </blockquote> La función <code>myFun</code> devolverá <code>&quot;Head&quot;</code> porque la versión <code>local</code> de la variable está presente. </section>

## Instructions
<section id="instructions"> Agregue una variable local a la función <code>myOutfit</code> para anular el valor de <code>outerWear</code> con <code>&quot;sweater&quot;</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: No cambie el valor de la <code>outerWear</code> global
    testString: 'assert(outerWear === "T-Shirt", "Do not change the value of the global <code>outerWear</code>");'
  - text: <code>myOutfit</code> debe devolver <code>&quot;sweater&quot;</code>
    testString: 'assert(myOutfit() === "sweater", "<code>myOutfit</code> should return <code>"sweater"</code>");'
  - text: No cambie la declaración de devolución
    testString: 'assert(/return outerWear/.test(code), "Do not change the return statement");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Setup
var outerWear = "T-Shirt";

function myOutfit() {
  // Only change code below this line



  // Only change code above this line
  return outerWear;
}

myOutfit();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

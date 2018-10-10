---
id: 56bbb991ad1ed5201cd392d1
title: Updating Object Properties
challengeType: 1
videoUrl: ''
localeTitle: Actualización de las propiedades del objeto
---

## Description
<section id="description"> Después de haber creado un objeto de JavaScript, puede actualizar sus propiedades en cualquier momento, como si fuera a actualizar cualquier otra variable. Puede utilizar la notación de puntos o corchetes para actualizar. Por ejemplo, echemos un vistazo a <code>ourDog</code> : <blockquote> var ourDog = { <br> &quot;nombre&quot;: &quot;campista&quot;, <br> &quot;piernas&quot;: 4, <br> &quot;colas&quot;: 1, <br> &quot;amigos&quot;: [&quot;¡todo!&quot;] <br> }; </blockquote> Como es un perro particularmente feliz, cambiemos su nombre por &quot;Happy Camper&quot;. Así es como actualizamos la propiedad del nombre de su objeto: <code>ourDog.name = &quot;Happy Camper&quot;;</code> o <code>ourDog[&quot;name&quot;] = &quot;Happy Camper&quot;;</code> Ahora, cuando evaluamos <code>ourDog.name</code> , en lugar de obtener &quot;Camper&quot;, obtendremos su nuevo nombre, &quot;Happy Camper&quot;. </section>

## Instructions
<section id="instructions"> Actualizar la <code>myDog</code> del nombre del objeto <code>myDog</code> . Cambiemos su nombre de &quot;Codificador&quot; a &quot;Codificador feliz&quot;. Puede utilizar la notación de puntos o corchetes. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Actualice la <code>myDog</code> <code>&quot;name&quot;</code> <code>myDog</code> para que sea igual a &quot;Happy Coder&quot;.
    testString: 'assert(/happy coder/gi.test(myDog.name), "Update <code>myDog</code>&apos;s <code>"name"</code> property to equal "Happy Coder".");'
  - text: No edite la definición de <code>myDog</code>
    testString: 'assert(/"name": "Coder"/.test(code), "Do not edit the <code>myDog</code> definition");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Example
var ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
};

ourDog.name = "Happy Camper";

// Setup
var myDog = {
  "name": "Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};

// Only change code below this line.

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
// solution required
```
</section>

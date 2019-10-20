---
id: 56bbb991ad1ed5201cd392d2
title: Add New Properties to a JavaScript Object
challengeType: 1
videoUrl: ''
localeTitle: Agregar nuevas propiedades a un objeto de JavaScript
---

## Description
<section id="description"> Puede agregar nuevas propiedades a los objetos JavaScript existentes de la misma manera que los modificaría. Así es como agregaríamos una propiedad de <code>&quot;bark&quot;</code> a <code>ourDog</code> : <code>ourDog.bark = &quot;bow-wow&quot;;</code> o <code>ourDog[&quot;bark&quot;] = &quot;bow-wow&quot;;</code> Ahora, cuando evaluamos <code>ourDog.bark</code> , obtendremos su ladrido, &quot;bow-wow&quot;. </section>

## Instructions
<section id="instructions"> Agrega una propiedad de <code>&quot;bark&quot;</code> a <code>myDog</code> y <code>myDog</code> con un sonido de perro, como &quot;woof&quot;. Puede usar la notación de punto o corchete. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Agregue la propiedad <code>&quot;bark&quot;</code> a <code>myDog</code> .
    testString: 'assert(myDog.bark !== undefined, "Add the property <code>"bark"</code> to <code>myDog</code>.");'
  - text: No agregue <code>&quot;bark&quot;</code> a la sección de configuración
    testString: 'assert(!/bark[^\n]:/.test(code), "Do not add <code>"bark"</code> to the setup section");'

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

ourDog.bark = "bow-wow";

// Setup
var myDog = {
  "name": "Happy Coder",
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

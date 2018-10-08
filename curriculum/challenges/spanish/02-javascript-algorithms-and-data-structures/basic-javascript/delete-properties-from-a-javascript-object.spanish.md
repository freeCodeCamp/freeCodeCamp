---
id: 56bbb991ad1ed5201cd392d3
title: Delete Properties from a JavaScript Object
localeTitle: Eliminar propiedades de un objeto de JavaScript
challengeType: 1
---

## Description
<section id='description'> 
También podemos eliminar propiedades de objetos como este: 
<code>delete ourDog.bark;</code> 
</section>

## Instructions
<section id='instructions'> 
Eliminar la propiedad <code>&quot;tails&quot;</code> de <code>myDog</code> . Puede usar la notación de punto o corchete. 
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Eliminar la propiedad <code>&quot;tails&quot;</code> de <code>myDog</code> .
    testString: 'assert(typeof myDog === "object" && myDog.tails === undefined, "Delete the property <code>"tails"</code> from <code>myDog</code>.");'
  - text: No modifique la configuración de <code>myDog</code>
    testString: 'assert(code.match(/"tails": 1/g).length > 1, "Do not modify the <code>myDog</code> setup");'

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
  "friends": ["everything!"],
  "bark": "bow-wow"
};

delete ourDog.bark;

// Setup
var myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"],
  "bark": "woof"
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
var ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"],
  "bark": "bow-wow"
};
var myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"],
  "bark": "woof"
};
delete myDog.tails;
```

</section>

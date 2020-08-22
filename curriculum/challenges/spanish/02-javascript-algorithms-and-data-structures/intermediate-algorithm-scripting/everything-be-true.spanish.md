---
id: a10d2431ad0c6a099a4b8b52
title: Everything Be True
isRequired: true
challengeType: 5
videoUrl: ''
localeTitle: Todo sea verdad
---

## Description
<section id="description"> Compruebe si el predicado (segundo argumento) es <dfn>verdadero</dfn> en todos los elementos de una colección (primer argumento). En otras palabras, se le da una colección de objetos de matriz. El predicado <code>pre</code> será una propiedad de objeto y debe devolver <code>true</code> si su valor es <code>truthy</code> . De lo contrario, devuelve <code>false</code> . En JavaScript, los valores de <code>truthy</code> son valores que se convierten en <code>true</code> cuando se evalúan en un contexto booleano. Recuerde, puede acceder a las propiedades del objeto a través de la notación de puntos o la notación <code>[]</code> . Recuerda usar <a href="https://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck-coding/19514" target="_blank">Read-Search-Ask</a> si te atascas. Trate de emparejar el programa. Escribe tu propio código. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>truthCheck([{&quot;user&quot;: &quot;Tinky-Winky&quot;, &quot;sex&quot;: &quot;male&quot;}, {&quot;user&quot;: &quot;Dipsy&quot;, &quot;sex&quot;: &quot;male&quot;}, {&quot;user&quot;: &quot;Laa-Laa&quot;, &quot;sex&quot;: &quot;female&quot;}, {&quot;user&quot;: &quot;Po&quot;, &quot;sex&quot;: &quot;female&quot;}], &quot;sex&quot;)</code> debe devolver el valor verdadero.'
    testString: 'assert.strictEqual(truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex"), true, "<code>truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex")</code> should return true.");'
  - text: '<code>truthCheck([{&quot;user&quot;: &quot;Tinky-Winky&quot;, &quot;sex&quot;: &quot;male&quot;}, {&quot;user&quot;: &quot;Dipsy&quot;}, {&quot;user&quot;: &quot;Laa-Laa&quot;, &quot;sex&quot;: &quot;female&quot;}, {&quot;user&quot;: &quot;Po&quot;, &quot;sex&quot;: &quot;female&quot;}], &quot;sex&quot;)</code> debe devolver falso.'
    testString: 'assert.strictEqual(truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex"), false, "<code>truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex")</code> should return false.");'
  - text: '<code>truthCheck([{&quot;user&quot;: &quot;Tinky-Winky&quot;, &quot;sex&quot;: &quot;male&quot;, &quot;age&quot;: 0}, {&quot;user&quot;: &quot;Dipsy&quot;, &quot;sex&quot;: &quot;male&quot;, &quot;age&quot;: 3}, {&quot;user&quot;: &quot;Laa-Laa&quot;, &quot;sex&quot;: &quot;female&quot;, &quot;age&quot;: 5}, {&quot;user&quot;: &quot;Po&quot;, &quot;sex&quot;: &quot;female&quot;, &quot;age&quot;: 4}], &quot;age&quot;)</code> debe devolver falso.'
    testString: 'assert.strictEqual(truthCheck([{"user": "Tinky-Winky", "sex": "male", "age": 2}, {"user": "Dipsy", "sex": "male", "age": 0}, {"user": "Laa-Laa", "sex": "female", "age": 5}, {"user": "Po", "sex": "female", "age": 4}], "age"), false, "<code>truthCheck([{"user": "Tinky-Winky", "sex": "male", "age": 0}, {"user": "Dipsy", "sex": "male", "age": 3}, {"user": "Laa-Laa", "sex": "female", "age": 5}, {"user": "Po", "sex": "female", "age": 4}], "age")</code> should return false.");'
  - text: '<code>truthCheck([{&quot;name&quot;: &quot;Pete&quot;, &quot;onBoat&quot;: true}, {&quot;name&quot;: &quot;Repeat&quot;, &quot;onBoat&quot;: true}, {&quot;name&quot;: &quot;FastFoward&quot;, &quot;onBoat&quot;: null}], &quot;onBoat&quot;)</code> debe devolver falso'
    testString: 'assert.strictEqual(truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true}, {"name": "FastFoward", "onBoat": null}], "onBoat"), false, "<code>truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true}, {"name": "FastFoward", "onBoat": null}], "onBoat")</code> should return false");'
  - text: '<code>truthCheck([{&quot;name&quot;: &quot;Pete&quot;, &quot;onBoat&quot;: true}, {&quot;name&quot;: &quot;Repeat&quot;, &quot;onBoat&quot;: true, &quot;alias&quot;: &quot;Repete&quot;}, {&quot;name&quot;: &quot;FastFoward&quot;, &quot;onBoat&quot;: true}], &quot;onBoat&quot;)</code> debe devolver true'
    testString: 'assert.strictEqual(truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true, "alias": "Repete"}, {"name": "FastFoward", "onBoat": true}], "onBoat"), true, "<code>truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true, "alias": "Repete"}, {"name": "FastFoward", "onBoat": true}], "onBoat")</code> should return true");'
  - text: '<code>truthCheck([{&quot;single&quot;: &quot;yes&quot;}], &quot;single&quot;)</code> debe devolver verdadero'
    testString: 'assert.strictEqual(truthCheck([{"single": "yes"}], "single"), true, "<code>truthCheck([{"single": "yes"}], "single")</code> should return true");'
  - text: '<code>truthCheck([{&quot;single&quot;: &quot;&quot;}, {&quot;single&quot;: &quot;double&quot;}], &quot;single&quot;)</code> debe devolver falso'
    testString: 'assert.strictEqual(truthCheck([{"single": ""}, {"single": "double"}], "single"), false, "<code>truthCheck([{"single": ""}, {"single": "double"}], "single")</code> should return false");'
  - text: '<code>truthCheck([{&quot;single&quot;: &quot;double&quot;}, {&quot;single&quot;: undefined}], &quot;single&quot;)</code> debe devolver falso'
    testString: 'assert.strictEqual(truthCheck([{"single": "double"}, {"single": undefined}], "single"), false, "<code>truthCheck([{"single": "double"}, {"single": undefined}], "single")</code> should return false");'
  - text: '<code>truthCheck([{&quot;single&quot;: &quot;double&quot;}, {&quot;single&quot;: NaN}], &quot;single&quot;)</code> debe devolver falso'
    testString: 'assert.strictEqual(truthCheck([{"single": "double"}, {"single": NaN}], "single"), false, "<code>truthCheck([{"single": "double"}, {"single": NaN}], "single")</code> should return false");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function truthCheck(collection, pre) {
  // Is everyone being true?
  return pre;
}

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

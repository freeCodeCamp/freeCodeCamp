---
id: a8e512fbe388ac2f9198f0fa
title: Wherefore art thou
isRequired: true
challengeType: 5
videoUrl: ''
localeTitle: Donde estás
---

## Description
<section id="description"> Cree una función que examine una matriz de objetos (primer argumento) y devuelva una matriz de todos los objetos que tengan pares de nombre y valor coincidentes (segundo argumento). Cada par de nombre y valor del objeto de origen debe estar presente en el objeto de la colección si se va a incluir en la matriz devuelta. Por ejemplo, si el primer argumento es <code>[{ first: &quot;Romeo&quot;, last: &quot;Montague&quot; }, { first: &quot;Mercutio&quot;, last: null }, { first: &quot;Tybalt&quot;, last: &quot;Capulet&quot; }]</code> , y el segundo argumento es <code>{ last: &quot;Capulet&quot; }</code> , luego debe devolver el tercer objeto de la matriz (el primer argumento), porque contiene el nombre y su valor, que se pasó como el segundo argumento. Recuerda usar <a href="https://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck-coding/19514" target="_blank">Read-Search-Ask</a> si te atascas. Escribe tu propio código. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>whatIsInAName([{ first: &quot;Romeo&quot;, last: &quot;Montague&quot; }, { first: &quot;Mercutio&quot;, last: null }, { first: &quot;Tybalt&quot;, last: &quot;Capulet&quot; }], { last: &quot;Capulet&quot; })</code> debe devolver <code>[{ first: &quot;Tybalt&quot;, last: &quot;Capulet&quot; }]</code> .'
    testString: 'assert.deepEqual(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }), [{ first: "Tybalt", last: "Capulet" }], "<code>whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" })</code> should return <code>[{ first: "Tybalt", last: "Capulet" }]</code>.");'
  - text: '<code>whatIsInAName([{ &quot;apple&quot;: 1 }, { &quot;apple&quot;: 1 }, { &quot;apple&quot;: 1, &quot;bat&quot;: 2 }], { &quot;apple&quot;: 1 })</code> debe devolver <code>[{ &quot;apple&quot;: 1 }, { &quot;apple&quot;: 1 }, { &quot;apple&quot;: 1, &quot;bat&quot;: 2 }]</code> .'
    testString: 'assert.deepEqual(whatIsInAName([{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }], { "apple": 1 }), [{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }], "<code>whatIsInAName([{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }], { "apple": 1 })</code> should return <code>[{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }]</code>.");'
  - text: '<code>whatIsInAName([{ &quot;apple&quot;: 1, &quot;bat&quot;: 2 }, { &quot;bat&quot;: 2 }, { &quot;apple&quot;: 1, &quot;bat&quot;: 2, &quot;cookie&quot;: 2 }], { &quot;apple&quot;: 1, &quot;bat&quot;: 2 })</code> debe devolver <code>[{ &quot;apple&quot;: 1, &quot;bat&quot;: 2 }, { &quot;apple&quot;: 1, &quot;bat&quot;: 2, &quot;cookie&quot;: 2 }]</code> .'
    testString: 'assert.deepEqual(whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 }), [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], "<code>whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 })</code> should return <code>[{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }]</code>.");'
  - text: '<code>whatIsInAName([{ &quot;apple&quot;: 1, &quot;bat&quot;: 2 }, { &quot;apple&quot;: 1 }, { &quot;apple&quot;: 1, &quot;bat&quot;: 2, &quot;cookie&quot;: 2 }], { &quot;apple&quot;: 1, &quot;cookie&quot;: 2 })</code> debe devolver <code>[{ &quot;apple&quot;: 1, &quot;bat&quot;: 2, &quot;cookie&quot;: 2 }]</code> .'
    testString: 'assert.deepEqual(whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 }), [{ "apple": 1, "bat": 2, "cookie": 2 }], "<code>whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 })</code> should return <code>[{ "apple": 1, "bat": 2, "cookie": 2 }]</code>.");'
  - text: '<code>whatIsInAName([{ &quot;apple&quot;: 1, &quot;bat&quot;: 2 }, { &quot;apple&quot;: 1 }, { &quot;apple&quot;: 1, &quot;bat&quot;: 2, &quot;cookie&quot;: 2 }, { &quot;bat&quot;:2 }], { &quot;apple&quot;: 1, &quot;bat&quot;: 2 })</code> debe devolver <code>[{ &quot;apple&quot;: 1, &quot;bat&quot;: 2 }, { &quot;apple&quot;: 1, &quot;bat&quot;: 2, &quot;cookie&quot;:2 }]</code> .'
    testString: 'assert.deepEqual(whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }, {"bat":2}], { "apple": 1, "bat": 2 }), [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie":2 }], "<code>whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }, { "bat":2 }], { "apple": 1, "bat": 2 })</code> should return <code>[{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie":2 }]</code>.");'
  - text: '<code>whatIsInAName([{&quot;a&quot;: 1, &quot;b&quot;: 2, &quot;c&quot;: 3}], {&quot;a&quot;: 1, &quot;b&quot;: 9999, &quot;c&quot;: 3})</code> debe devolver <code>[]</code>'
    testString: 'assert.deepEqual(whatIsInAName([{ "a": 1, "b": 2, "c": 3 }], { "a": 1, "b": 9999, "c": 3 }), [], "<code>whatIsInAName([{"a": 1, "b": 2, "c": 3}], {"a": 1, "b": 9999, "c": 3})</code> should return <code>[]</code>");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line


  // Only change code above this line
  return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

---
id: a2f1d72d9b908d0bd72bb9f6
title: Make a Person
challengeType: 5
videoUrl: ''
localeTitle: Hacer una persona
---

## Description
<section id="description"> Rellene el constructor de objetos con los siguientes métodos a continuación: <blockquote> getFirstName () getLastName () getFullName () setFirstName (primero) setLastName (último) setFullName (firstAndLast) </blockquote> Ejecute las pruebas para ver el resultado esperado para cada método. Los métodos que toman un argumento deben aceptar solo un argumento y tiene que ser una cadena. Estos métodos deben ser los únicos medios disponibles para interactuar con el objeto. Recuerda usar <a href="https://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck-coding/19514" target="_blank">Read-Search-Ask</a> si te atascas. Trate de emparejar el programa. Escribe tu propio código. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>Object.keys(bob).length</code> debe devolver 6.
    testString: 'assert.deepEqual(Object.keys(bob).length, 6, "<code>Object.keys(bob).length</code> should return 6.");'
  - text: <code>bob instanceof Person</code> debe devolver verdadero.
    testString: 'assert.deepEqual(bob instanceof Person, true, "<code>bob instanceof Person</code> should return true.");'
  - text: <code>bob.firstName</code> debe devolver undefined.
    testString: 'assert.deepEqual(bob.firstName, undefined, "<code>bob.firstName</code> should return undefined.");'
  - text: <code>bob.lastName</code> debe devolver undefined.
    testString: 'assert.deepEqual(bob.lastName, undefined, "<code>bob.lastName</code> should return undefined.");'
  - text: <code>bob.getFirstName()</code> debería devolver &quot;Bob&quot;.
    testString: 'assert.deepEqual(bob.getFirstName(), "Bob", "<code>bob.getFirstName()</code> should return "Bob".");'
  - text: <code>bob.getLastName()</code> debería devolver &quot;Ross&quot;.
    testString: 'assert.deepEqual(bob.getLastName(), "Ross", "<code>bob.getLastName()</code> should return "Ross".");'
  - text: <code>bob.getFullName()</code> debería devolver &quot;Bob Ross&quot;.
    testString: 'assert.deepEqual(bob.getFullName(), "Bob Ross", "<code>bob.getFullName()</code> should return "Bob Ross".");'
  - text: <code>bob.getFullName()</code> debería devolver &quot;Haskell Ross&quot; después de <code>bob.setFirstName(&quot;Haskell&quot;)</code> .
    testString: 'assert.strictEqual((function () { bob.setFirstName("Haskell"); return bob.getFullName(); })(), "Haskell Ross", "<code>bob.getFullName()</code> should return "Haskell Ross" after <code>bob.setFirstName("Haskell")</code>.");'
  - text: <code>bob.getFullName()</code> debe devolver &quot;Haskell Curry&quot; después de <code>bob.setLastName(&quot;Curry&quot;)</code> .
    testString: 'assert.strictEqual((function () { var _bob=new Person("Haskell Ross"); _bob.setLastName("Curry"); return _bob.getFullName(); })(), "Haskell Curry", "<code>bob.getFullName()</code> should return "Haskell Curry" after <code>bob.setLastName("Curry")</code>.");'
  - text: <code>bob.getFullName()</code> debe devolver &quot;Haskell Curry&quot; después de <code>bob.setFullName(&quot;Haskell Curry&quot;)</code> .
    testString: 'assert.strictEqual((function () { bob.setFullName("Haskell Curry"); return bob.getFullName(); })(), "Haskell Curry", "<code>bob.getFullName()</code> should return "Haskell Curry" after <code>bob.setFullName("Haskell Curry")</code>.");'
  - text: <code>bob.getFirstName()</code> debe devolver &quot;Haskell&quot; después de <code>bob.setFullName(&quot;Haskell Curry&quot;)</code> .
    testString: 'assert.strictEqual((function () { bob.setFullName("Haskell Curry"); return bob.getFirstName(); })(), "Haskell", "<code>bob.getFirstName()</code> should return "Haskell" after <code>bob.setFullName("Haskell Curry")</code>.");'
  - text: <code>bob.getLastName()</code> debe devolver &quot;Curry&quot; después de <code>bob.setFullName(&quot;Haskell Curry&quot;)</code> .
    testString: 'assert.strictEqual((function () { bob.setFullName("Haskell Curry"); return bob.getLastName(); })(), "Curry", "<code>bob.getLastName()</code> should return "Curry" after <code>bob.setFullName("Haskell Curry")</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
var Person = function(firstAndLast) {
  // Complete the method below and implement the others similarly
  this.getFullName = function() {
    return "";
  };
  return firstAndLast;
};

var bob = new Person('Bob Ross');
bob.getFullName();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

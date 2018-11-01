---
id: a77dbc43c33f39daa4429b4f
title: Boo who
isRequired: true
challengeType: 5
videoUrl: ''
localeTitle: Boo quien
---

## Description
<section id="description"> Comprueba si un valor es clasificado como un primitivo booleano. Devuelve verdadero o falso. Los primitivos booleanos son verdaderos y falsos. Recuerda usar <a href="http://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck/19514" target="_blank">Read-Search-Ask</a> si te atascas. Trata de emparejar el programa. Escribe tu propio código. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>booWho(true)</code> debe devolver verdadero.
    testString: 'assert.strictEqual(booWho(true), true, "<code>booWho(true)</code> debe devolver verdadero.");'
  - text: <code>booWho(false)</code> debe devolver verdadero.
    testString: 'assert.strictEqual(booWho(false), true, "<code>booWho(false)</code> debe devolver verdadero.");'
  - text: '<code>booWho([1, 2, 3])</code> debe devolver falso.'
    testString: 'assert.strictEqual(booWho([1, 2, 3]), false, "<code>booWho([1, 2, 3])</code> debe devolver falso.");'
  - text: '<code>booWho([].slice)</code> debe devolver falso.'
    testString: 'assert.strictEqual(booWho([].slice), false, "<code>booWho([].slice)</code> debe devolver falso.");'
  - text: '<code>booWho({ &quot;a&quot;: 1 })</code> debe devolver falso.'
    testString: 'assert.strictEqual(booWho({ "a": 1 }), false, "<code>booWho({ "a": 1 })</code> debe devolver falso.");'
  - text: <code>booWho(1)</code> debe devolver falso.
    testString: 'assert.strictEqual(booWho(1), false, "<code>booWho(1)</code> debe devolver falso.");'
  - text: <code>booWho(NaN)</code> debe devolver falso.
    testString: 'assert.strictEqual(booWho(NaN), false, "<code>booWho(NaN)</code> debe devolver falso.");'
  - text: <code>booWho(&quot;a&quot;)</code> debe devolver falso.
    testString: 'assert.strictEqual(booWho("a"), false, "<code>booWho("a")</code> debe devolver falso.");'
  - text: <code>booWho(&quot;true&quot;)</code> debe devolver falso.
    testString: 'assert.strictEqual(booWho("true"), false, "<code>booWho("true")</code> debe devolver falso.");'
  - text: <code>booWho(&quot;false&quot;)</code> debe devolver falso.
    testString: 'assert.strictEqual(booWho("false"), false, "<code>booWho("false")</code> debe devolver falso.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function booWho(bool) {
  // What is the new fad diet for ghost developers? The Boolean.
  return bool;
}

booWho(null);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

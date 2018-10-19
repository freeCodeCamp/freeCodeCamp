---
id: a77dbc43c33f39daa4429b4f
title: Boo who
isRequired: true
challengeType: 5
videoUrl: ''
localeTitle: Boo quien
---

## Descripción
<section id="description"> Comprueba si un valor está clasificado como un primitivo booleano. Devuelve verdadero o falso. Los primitivos booleanos son verdaderos y falsos. Recuerda usar <a href="http://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck/19514" target="_blank">Leer-Buscar-Preguntar</a> si te atascas. Trata de emparejar el programa. Escribe tu propio código. </section>

## Instrucciones
<section id="instructions">
</section>

## Pruebas
<section id='tests'>

```yml
tests:
  - text: <code>booWho(true)</code> debe devolver verdadero.
    testString: 'assert.strictEqual(booWho(true), true, "<code>booWho(true)</code> debería devolver true.");'
  - text: <code>booWho(false)</code> debe devolver verdadero.
    testString: 'assert.strictEqual(booWho(false), true, "<code>booWho(false)</code> debería devolver true.");'
  - text: '<code>booWho([1, 2, 3])</code> debe devolver falso.'
    testString: 'assert.strictEqual(booWho([1, 2, 3]), false, "<code>booWho([1, 2, 3])</code> debería devolver false.");'
  - text: '<code>booWho([].slice)</code> debe devolver falso.'
    testString: 'assert.strictEqual(booWho([].slice), false, "<code>booWho([].slice)</code> debería devolver false.");'
  - text: '<code>booWho({ &quot;a&quot;: 1 })</code> debe devolver falso.'
    testString: 'assert.strictEqual(booWho({ "a": 1 }), false, "<code>booWho({ "a": 1 })</code> debería devolver false.");'
  - text: <code>booWho(1)</code> debe devolver falso.
    testString: 'assert.strictEqual(booWho(1), false, "<code>booWho(1)</code> debería devolver false.");'
  - text: <code>booWho(NaN)</code> debe devolver falso.
    testString: 'assert.strictEqual(booWho(NaN), false, "<code>booWho(NaN)</code> debería devolver false.");'
  - text: <code>booWho(&quot;a&quot;)</code> debe devolver falso.
    testString: 'assert.strictEqual(booWho("a"), false, "<code>booWho("a")</code> debería devolver false.");'
  - text: <code>booWho(&quot;true&quot;)</code> debe devolver falso.
    testString: 'assert.strictEqual(booWho("true"), false, "<code>booWho("true")</code> debería devolver false.");'
  - text: <code>booWho(&quot;false&quot;)</code> debe devolver falso.
    testString: 'assert.strictEqual(booWho("false"), false, "<code>booWho("false")</code> debería devolver false.");'

```

</section>

## Semilla del Desafío
<section id='challengeSeed'>

<div id='js-seed'>

```js
function booWho(bool) {
  // ¿Cuál es la nueva dieta de moda para desarrolladores fantasma? El booleano.
  return bool;
}

booWho(null);

```

</div>



</section>

## Solución
<section id='solution'>

```js
// solución requerida
```
</section>

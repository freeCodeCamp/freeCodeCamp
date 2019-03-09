---
id: 56105e7b514f539506016a5e
title: Count Backwards With a For Loop
challengeType: 1
videoUrl: ''
localeTitle: Contar hacia atrás con un bucle for
---

## Description
<section id="description"> Un bucle for también puede contar hacia atrás, siempre que podamos definir las condiciones correctas. Para contar hacia atrás de dos en dos, necesitaremos cambiar nuestra <code>initialization</code> , <code>condition</code> y <code>final-expression</code> . Comenzaremos en <code>i = 10</code> y haremos un bucle mientras <code>i &gt; 0</code> . Disminuiremos <code>i</code> en 2 cada bucle con <code>i -= 2</code> . <blockquote> var ourArray = []; <br> for (var i = 10; i&gt; 0; i- = 2) { <br> ourArray.push (i); <br> } </blockquote> <code>ourArray</code> ahora contendrá <code>[10,8,6,4,2]</code> . Cambiemos nuestra <code>initialization</code> y <code>final-expression</code> para que podamos contar hacia atrás de dos en dos por números impares. </section>

## Instructions
<section id="instructions"> Empuje los números impares del 9 al 1 a <code>myArray</code> usando un bucle <code>for</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Usted debe estar usando un bucle <code>for</code> para esto.
    testString: 'assert(code.match(/for\s*\(/g).length > 1, "Usted debe estar usando un bucle <code>for</code> para esto.");'
  - text: Deberías estar usando el método de matriz <code>push</code>.
    testString: 'assert(code.match(/myArray.push/), "Deberías estar usando el método de matriz <code>push</code>.");'
  - text: '<code>myArray</code> debe ser igual a <code>[9,7,5,3,1]</code>.'
    testString: 'assert.deepEqual(myArray, [9,7,5,3,1], "<code>myArray</code> debe ser igual a <code>[9,7,5,3,1]</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Example
var ourArray = [];

for (var i = 10; i > 0; i -= 2) {
  ourArray.push(i);
}

// Setup
var myArray = [];

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

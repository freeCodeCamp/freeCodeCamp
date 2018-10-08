---
id: 56105e7b514f539506016a5e
title: Count Backwards With a For Loop
localeTitle: Contar hacia atrás con un bucle for
challengeType: 1
---

## Description
<section id='description'> 
A for loop también puede contar hacia atrás, siempre que podamos definir las condiciones correctas. 
Para contar hacia atrás de dos en dos, necesitaremos cambiar nuestra <code>initialization</code> , <code>condition</code> y <code>final-expression</code> . 
Comenzaremos en <code>i = 10</code> y haremos un bucle mientras <code>i &gt; 0</code> . Disminuiremos <code>i</code> en 2 cada bucle con <code>i -= 2</code> . 
<blockquote>var ourArray = [];<br>for (var i=10; i &#62; 0; i-=2) {<br>&nbsp;&nbsp;ourArray.push(i);<br>}</blockquote> 
<code>ourArray</code> ahora contendrá <code>[10,8,6,4,2]</code> . 
Cambiemos nuestra <code>initialization</code> y <code>final-expression</code> para que podamos contar hacia atrás de dos en dos con números impares. 
</section>

## Instructions
<section id='instructions'> 
Empuje los números impares del 9 al 1 a <code>myArray</code> usando un bucle <code>for</code> . 
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Usted debe estar usando una <code>for</code> bucle para esto.
    testString: 'assert(code.match(/for\s*\(/g).length > 1, "You should be using a <code>for</code> loop for this.");'
  - text: Deberías estar usando el método de matriz <code>push</code> .
    testString: 'assert(code.match(/myArray.push/), "You should be using the array method <code>push</code>.");'
  - text: &#39; <code>myArray</code> debe ser igual a <code>[9,7,5,3,1]</code> .&#39;
    testString: 'assert.deepEqual(myArray, [9,7,5,3,1], "<code>myArray</code> should equal <code>[9,7,5,3,1]</code>.");'

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
var ourArray = [];
for (var i = 10; i > 0; i -= 2) {
  ourArray.push(i);
}
var myArray = [];
for (var i = 9; i > 0; i -= 2) {
  myArray.push(i);
}
```

</section>

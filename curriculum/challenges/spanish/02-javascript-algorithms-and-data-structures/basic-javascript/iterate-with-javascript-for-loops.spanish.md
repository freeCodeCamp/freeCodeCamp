---
id: cf1111c1c11feddfaeb5bdef
title: Iterate with JavaScript For Loops
challengeType: 1
videoUrl: ''
localeTitle: Iterar con JavaScript para bucles
---

## Description
<section id="description"> Puede ejecutar el mismo código varias veces utilizando un bucle. El tipo más común de bucle de JavaScript se llama <code>for loop</code>  porque se ejecuta &quot;por&quot; un número específico de veces. Para los bucles se declaran con tres expresiones opcionales separadas por punto y coma: <code>for ([initialization]; [condition]; [final-expression])</code> La instrucción de <code>initialization</code> se ejecuta una sola vez antes de que comience el bucle. Normalmente se utiliza para definir y configurar su variable de bucle. La declaración de <code>condition</code> se evalúa al comienzo de cada iteración de bucle y continuará mientras se evalúe como <code>true</code> . Cuando la <code>condition</code> es <code>false</code> al inicio de la iteración, el bucle dejará de ejecutarse. Esto significa que si la <code>condition</code> comienza como <code>false</code> , su bucle nunca se ejecutará. La <code>final-expression</code> se ejecuta al final de cada iteración de bucle, antes de la siguiente verificación de <code>condition</code> y generalmente se usa para incrementar o disminuir su contador de bucle. En el siguiente ejemplo, iniciamos con <code>i = 0</code> e iteramos mientras nuestra condición <code>i &lt; 5</code> es verdadera. Incrementaremos <code>i</code> en <code>1</code> en cada iteración de bucle con <code>i++</code> como nuestra <code>final-expression</code> . <blockquote> var ourArray = []; <br> para (var i = 0; i &lt;5; i ++) { <br> nuestroArray.push (i); <br> } </blockquote> <code>ourArray</code> ahora contendrá <code>[0,1,2,3,4]</code> . </section>

## Instructions
<section id="instructions"> Use un bucle <code>for</code> para trabajar y empujar los valores del 1 al 5 en <code>myArray</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Usted debe estar usando una <code>for</code> bucle para esto.
    testString: 'assert(code.match(/for\s*\(/g).length > 1, "You should be using a <code>for</code> loop for this.");'
  - text: '<code>myArray</code> debe ser igual a <code>[1,2,3,4,5]</code> .'
    testString: 'assert.deepEqual(myArray, [1,2,3,4,5], "<code>myArray</code> should equal <code>[1,2,3,4,5]</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Example
var ourArray = [];

for (var i = 0; i < 5; i++) {
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

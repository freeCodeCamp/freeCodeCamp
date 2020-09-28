---
id: 5a2efd662fb457916e1fe604
title: Iterate with JavaScript Do...While Loops
challengeType: 1
videoUrl: ''
localeTitle: Iterar con JavaScript Do ... While Loops
---

## Description
<section id="description"> Puede ejecutar el mismo código varias veces utilizando un bucle. El siguiente tipo de bucle que aprenderá se denomina bucle <code>do...while</code> porque primero <code>do</code> una pasada del código dentro del bucle sin importar qué, y luego se ejecuta <code>while</code> se cumple una condición específica y se detiene una vez que esa condición ya no es verdadera. Veamos un ejemplo. <blockquote> var ourArray = []; <br> var i = 0; <br> hacer { <br> nuestroArray.push (i); <br> i ++; <br> } while (i &lt;5); </blockquote> Esto se comporta como se esperaría con cualquier otro tipo de bucle, y la matriz resultante se verá como <code>[0, 1, 2, 3, 4]</code> . Sin embargo, lo que hace <code>do...while</code> diferente de otros bucles es cómo se comporta cuando la condición falla en la primera comprobación. Veamos esto en acción. Aquí hay un bucle while común que ejecutará el código en el bucle siempre y cuando <code>i &lt; 5</code> . <blockquote> var ourArray = []; <br> var i = 5; <br> mientras (i &lt;5) { <br> nuestroArray.push (i); <br> i ++; <br> } </blockquote> Observe que inicializamos el valor de <code>i</code> en 5. Cuando ejecutamos la siguiente línea, notamos que <code>i</code> no es menor que 5. Por lo tanto, no ejecutamos el código dentro del bucle. El resultado es que <code>ourArray</code> no agregará nada, por lo que aún se verá así <code>[]</code> cuando todo el código del ejemplo anterior termine de ejecutarse. Ahora, eche un vistazo a un <code>do...while</code> loop. <blockquote> var ourArray = []; <br> var i = 5; <br> hacer { <br> nuestroArray.push (i); <br> i ++; <br> } while (i &lt;5); </blockquote> En este caso, inicializamos el valor de <code>i</code> como 5, tal como hicimos con el bucle while. Cuando llegamos a la siguiente línea, no hay comprobación del valor de <code>i</code> , por lo que vamos al código dentro de las llaves y lo ejecutamos. Agregaremos un elemento a la matriz e incrementaremos <code>i</code> antes de llegar a la verificación de condición. Entonces, cuando se llega a comprobar si <code>i &lt; 5</code> ver que <code>i</code> es ahora de 6 años, que no pasa la comprobación condicional. Así que salimos del bucle y estamos listos. Al final del ejemplo anterior, el valor de <code>ourArray</code> es <code>[5]</code> . Esencialmente, un bucle <code>do...while</code> while garantiza que el código dentro del bucle se ejecute al menos una vez. Intentemos obtener un bucle <code>do...while</code> while para que funcione presionando valores en una matriz. </section>

## Instructions
<section id="instructions"> Cambiar el <code>while</code> de bucle en el código a un <code>do...while</code> bucle de modo que el bucle empujará el número 10 a <code>myArray</code> , y <code>i</code> será igual a <code>11</code> cuando el código termina de ejecutarse. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Deberías usar un bucle <code>do...while</code> while para esto.
    testString: 'assert(code.match(/do/g), "You should be using a <code>do...while</code> loop for this.");'
  - text: '<code>myArray</code> debe ser igual a <code>[10]</code> .'
    testString: 'assert.deepEqual(myArray, [10], "<code>myArray</code> should equal <code>[10]</code>.");'
  - text: <code>i</code> debe ser igual a <code>11</code>
    testString: 'assert.deepEqual(i, 11, "<code>i</code> should equal <code>11</code>");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Setup
var myArray = [];
var i = 10;

// Only change code below this line.

while (i < 5) {
  myArray.push(i);
  i++;
}

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

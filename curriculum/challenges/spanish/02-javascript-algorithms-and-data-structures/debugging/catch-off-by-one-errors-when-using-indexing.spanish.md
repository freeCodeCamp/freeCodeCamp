---
id: 587d7b86367417b2b2512b3b
title: Catch Off By One Errors When Using Indexing
localeTitle: Descubrir por uno errores al utilizar la indexación
challengeType: 1
---

## Description
<section id='description'> 
<code>Off by one errors</code> (a veces llamado OBOE) se recortan cuando intentas apuntar a un índice específico de una cadena o matriz (para dividir o acceder a un segmento), o cuando se recorren los índices de ellos. La indexación de JavaScript comienza en cero, no en uno, lo que significa que el último índice siempre es uno menos que la longitud del elemento. Si intenta acceder a un índice igual a la longitud, el programa puede arrojar un error de referencia de &quot;índice fuera de rango&quot; o imprimir <code>undefined</code> . 
Cuando usa métodos de cadena o matriz que toman rangos de índice como argumentos, es útil leer la documentación y comprender si son inclusivos (el elemento en el índice dado es parte de lo que se devuelve) o no. Aquí hay algunos ejemplos de errores off por uno: 
<blockquote>let alphabet = "abcdefghijklmnopqrstuvwxyz";<br>let len = alphabet.length;<br>for (let i = 0; i <= len; i++) {<br>&nbsp;&nbsp;// loops one too many times at the end<br>&nbsp;&nbsp;console.log(alphabet[i]);<br>}<br>for (let j = 1; j < len; j++) {<br>&nbsp;&nbsp;// loops one too few times and misses the first character at index 0<br>&nbsp;&nbsp;console.log(alphabet[j]);<br>}<br>for (let k = 0; k < len; k++) {<br>&nbsp;&nbsp;// Goldilocks approves - this is just right<br>&nbsp;&nbsp;console.log(alphabet[k]);<br>}</blockquote> 
</section>

## Instructions
<section id='instructions'> 
Corrija los dos errores de indexación en la siguiente función para que todos los números del 1 al 5 se impriman en la consola. 
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Su código debe establecer la condición inicial del bucle para que comience en el primer índice.
    testString: 'assert(code.match(/i\s*?=\s*?0\s*?;/g).length == 1, "Your code should set the initial condition of the loop so it starts at the first index.");'
  - text: Su código debe arreglar la condición inicial del bucle para que el índice comience en 0.
    testString: 'assert(!code.match(/i\s?=\s*?1\s*?;/g), "Your code should fix the initial condition of the loop so that the index starts at 0.");'
  - text: Su código debe establecer la condición de terminal del bucle para que se detenga en el último índice.
    testString: 'assert(code.match(/i\s*?<\s*?len\s*?;/g).length == 1, "Your code should set the terminal condition of the loop so it stops at the last index.");'
  - text: Su código debe fijar la condición de terminal del bucle para que se detenga en 1 antes de la longitud.
    testString: 'assert(!code.match(/i\s*?<=\s*?len;/g), "Your code should fix the terminal condition of the loop so that it stops at 1 before the length.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function countToFive() {
  let firstFive = "12345";
  let len = firstFive.length;
  // Fix the line below
  for (let i = 1; i <= len; i++) {
  // Do not alter code below this line
    console.log(firstFive[i]);
  }
}

countToFive();
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

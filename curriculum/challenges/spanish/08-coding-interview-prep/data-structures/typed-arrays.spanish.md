---
id: 587d8253367417b2b2512c6a
title: Typed Arrays
challengeType: 1
videoUrl: ''
localeTitle: Matrices mecanografiadas
---

## Description
<section id="description"> Las matrices son objetos de JavaScript que pueden contener muchos elementos diferentes. <code>var complexArr = [1, 5, &quot;2&quot;, &quot;Word&quot;, {&quot;name&quot;: &quot;James&quot;}];</code> Básicamente, lo que sucede en segundo plano es que su navegador le dará automáticamente la cantidad correcta de espacio de memoria para esa matriz. También cambiará según sea necesario si agrega o elimina datos. Sin embargo, en el mundo del alto rendimiento y los diferentes tipos de elementos, a veces debe ser más específico sobre la cantidad de memoria que se asigna a una matriz. <dfn>Arrays tipados</dfn> son la respuesta a este problema. Ahora puede decir cuánta memoria desea asignar a una matriz. A continuación se muestra una descripción básica de los diferentes tipos de arreglos disponibles y el tamaño en bytes para cada elemento de ese arreglo. <table class="table table-striped"><tbody><tr><th> Tipo </th><th> Cada tamaño de elemento en bytes. </th></tr><tr><td> <code>Int8Array</code> </td> <td> 1 </td></tr><tr><td> <code>Uint8Array</code> </td> <td> 1 </td></tr><tr><td> <code>Uint8ClampedArray</code> </td> <td> 1 </td></tr><tr><td> <code>Int16Array</code> </td> <td> 2 </td></tr><tr><td> <code>Uint16Array</code> </td> <td> 2 </td></tr><tr><td> <code>Int32Array</code> </td> <td> 4 </td></tr><tr><td> <code>Uint32Array</code> </td> <td> 4 </td></tr><tr><td> <code>Float32Array</code> </td> <td> 4 </td></tr><tr><td> <code>Float64Array</code> </td> <td> 8 </td></tr></tbody></table> Hay dos formas de crear este tipo de arreglos. Una forma es crearlo directamente. A continuación se muestra cómo crear un <code>Int16Array</code> 3 longitudes. <blockquote> var i8 = nuevo Int16Array (3); <br> console.log (i8); <br> // Devoluciones [0, 0, 0] </blockquote> También puede crear un <dfn>búfer</dfn> para asignar la cantidad de datos (en bytes) que desea que ocupe la matriz. <strong>Nota</strong> <br> Para crear matrices escritas utilizando buffers, debe asignar el número de bytes para que sea un múltiplo de los bytes enumerados anteriormente. <blockquote> // Crear la misma matriz Int16Array de manera diferente <br> var byteSize = 6; // Necesita ser múltiplo de 2 <br> var buffer = new ArrayBuffer (byteSize); <br> var i8View = new Int16Array (buffer); <br> buffer.byteLength; // Devoluciones 6 <br> i8View.byteLength; // Devoluciones 6 <br> console.log (i8View); // Devoluciones [0, 0, 0] </blockquote> <dfn>Los amortiguadores</dfn> son objetos de propósito general que solo llevan datos. No puedes acceder a ellos normalmente. Para acceder a ellos, primero debe crear una <dfn>vista</dfn> . <blockquote> i8View [0] = 42; <br> console.log (i8View); // Devoluciones [42, 0, 0] </blockquote> <strong>Nota</strong> <br> Los arreglos escritos no tienen algunos de los métodos que tienen los arreglos tradicionales, como <code>.pop()</code> o <code>.push()</code> . Los arreglos <code>Array.isArray()</code> también fallan en <code>Array.isArray()</code> que verifica si algo es un arreglo. Aunque es más simple, esto puede ser una ventaja para que los motores de JavaScript menos sofisticados los implementen. </section>

## Instructions
<section id="instructions"> Primero crea un <code>buffer</code> 64 bytes. Luego, cree una <code>Int32Array</code> tipo <code>Int32Array</code> con una vista llamada <code>i32View</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Su <code>buffer</code> debe tener 64 bytes de tamaño.
    testString: 'assert(buffer.byteLength === 64, "Your <code>buffer</code> should be 64 bytes large.");'
  - text: Su vista <code>i32View</code> de su búfer debe tener 64 bytes de tamaño.
    testString: 'assert(i32View.byteLength === 64, "Your <code>i32View</code> view of your buffer should be 64 bytes large.");'
  - text: Tu vista <code>i32View</code> de tu búfer debe tener 16 elementos de longitud.
    testString: 'assert(i32View.length === 16, "Your <code>i32View</code> view of your buffer should be 16 elements long.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
var buffer;
var i32View;

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

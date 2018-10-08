---
id: 587d7b7e367417b2b2512b20
title: Use an Array to Store a Collection of Data
localeTitle: Utilice una matriz para almacenar una colección de datos
challengeType: 1
---

## Description
<section id='description'> 
A continuación se muestra un ejemplo de la implementación más simple de una estructura de datos de matriz. Esto se conoce como una <dfn>matriz unidimensional</dfn> , lo que significa que solo tiene un nivel, o que no tiene ninguna otra matriz anidada dentro de ella. Observe que contiene <dfn>valores booleanos</dfn> , <dfn>cadenas</dfn> y <dfn>números</dfn> , entre otros tipos de datos de JavaScript válidos: 
<blockquote>let simpleArray = ['one', 2, 'three’, true, false, undefined, null];<br>console.log(simpleArray.length);<br>// logs 7</blockquote> 
Todas las matrices tienen una propiedad de longitud que, como se muestra arriba, se puede acceder muy fácilmente con la sintaxis <code>Array.length</code> . 
Una implementación más compleja de una matriz se puede ver a continuación. Esto se conoce como una <dfn>matriz multidimensional</dfn> o una matriz que contiene otras matrices. Tenga en cuenta que esta matriz también contiene <dfn>objetos</dfn> JavaScript, que examinaremos detenidamente en nuestra próxima sección, pero por ahora, todo lo que necesita saber es que las matrices también son capaces de almacenar objetos complejos. 
<blockquote>let complexArray = [<br>&nbsp;&nbsp;[<br>&nbsp;&nbsp;&nbsp;&nbsp;{<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;one: 1,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;two: 2<br>&nbsp;&nbsp;&nbsp;&nbsp;},<br>&nbsp;&nbsp;&nbsp;&nbsp;{<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;three: 3,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;four: 4<br>&nbsp;&nbsp;&nbsp;&nbsp;}<br>&nbsp;&nbsp;],<br>&nbsp;&nbsp;[<br>&nbsp;&nbsp;&nbsp;&nbsp;{<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;a: "a",<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;b: "b"<br>&nbsp;&nbsp;&nbsp;&nbsp;},<br>&nbsp;&nbsp;&nbsp;&nbsp;{<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;c: "c",<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;d: “d”<br>&nbsp;&nbsp;&nbsp;&nbsp;}<br>&nbsp;&nbsp;]<br>];</blockquote> 
</section>

## Instructions
<section id='instructions'> 
Hemos definido una variable llamada <code>yourArray</code> . Complete la declaración asignando una matriz de al menos 5 elementos de longitud a la variable <code>yourArray</code> . Su matriz debe contener al menos una <dfn>cadena</dfn> , un <dfn>número</dfn> y un <dfn>booleano</dfn> . 
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: yourArray es una matriz
    testString: 'assert.strictEqual(Array.isArray(yourArray), true, "yourArray is an array");'
  - text: <code class = "notranslate"> yourArray </code> tiene al menos 5 elementos
    testString: 'assert.isAtLeast(yourArray.length, 5, "<code>yourArray</code> is at least 5 elements long");'
  - text: <code class = "notranslate"> yourArray </code> contiene al menos un <code class = "notranslate"> boolean </code>
    testString: 'assert(yourArray.filter( el => typeof el === "boolean").length >= 1, "<code>yourArray</code> contains at least one <code>boolean</code>");'
  - text: <code class = "notranslate"> yourArray </code> contiene al menos un <code class = "notranslate"> number </code>
    testString: 'assert(yourArray.filter( el => typeof el === "number").length >= 1, "<code>yourArray</code> contains at least one <code>number</code>");'
  - text: <code class = "notranslate"> yourArray </code> contiene al menos una <code class = "notranslate"> string </code>
    testString: 'assert(yourArray.filter( el => typeof el === "string").length >= 1, "<code>yourArray</code> contains at least one <code>string</code>");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let yourArray; // change this line
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

---
id: 587d7b7c367417b2b2512b18
title: Add Key-Value Pairs to JavaScript Objects
localeTitle: Agregue pares de valor-clave a los objetos de JavaScript
challengeType: 1
---

## Description
<section id='description'> 
En su forma más básica, los objetos son solo colecciones de <dfn>pares clave-valor</dfn> , o, en otras palabras, fragmentos de datos asignados a identificadores únicos que llamamos <dfn>propiedades</dfn> o <dfn>claves</dfn> . Veamos un ejemplo muy simple: 
<blockquote>let FCC_User = {<br>&nbsp;&nbsp;username: 'awesome_coder',<br>&nbsp;&nbsp;followers: 572,<br>&nbsp;&nbsp;points: 1741,<br>&nbsp;&nbsp;completedProjects: 15<br>};</blockquote> 
El código anterior define un objeto llamado <code>FCC_User</code> que tiene cuatro <dfn>propiedades</dfn> , cada una de las cuales se <code>FCC_User</code> a un valor específico. Si quisiéramos saber el número de <code>followers</code> tiene <code>FCC_User</code> , podemos acceder a esa propiedad escribiendo: 
<blockquote>let userData = FCC_User.followers;<br>// userData equals 572</blockquote> 
Esto se llama <dfn>notación de puntos</dfn> . Alternativamente, también podemos acceder a la propiedad entre paréntesis, así: 
<blockquote>let userData = FCC_User['followers']<br>// userData equals 572</blockquote> 
Observe que con la <dfn>notación de corchetes</dfn> , incluimos a los <code>followers</code> entre comillas. Esto se debe a que los corchetes realmente nos permiten pasar una variable para que sea evaluada como un nombre de propiedad (sugerencia: ten esto en cuenta para más adelante). Si hubiéramos pasado a los <code>followers</code> sin las comillas, el motor de JavaScript habría intentado evaluarla como una variable, y un <code>ReferenceError: followers is not defined</code> . 
</section>

## Instructions
<section id='instructions'> 
Usando la misma sintaxis, también podemos <em><strong>agregar nuevos</strong></em> pares clave-valor a los objetos. Hemos creado un objeto de <code>foods</code> con tres entradas. Agregue tres entradas más: <code>bananas</code> con un valor de <code>13</code> , <code>grapes</code> con un valor de <code>35</code> y <code>strawberries</code> con un valor de <code>27</code> . 
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>foods</code> son un objeto
    testString: 'assert(typeof foods === "object", "<code>foods</code> is an object");'
  - text: El objeto <code>foods</code> tiene una clave <code>&quot;bananas&quot;</code> con un valor de <code>13</code>
    testString: 'assert(foods.bananas === 13, "The <code>foods</code> object has a key <code>"bananas"</code> with a value of <code>13</code>");'
  - text: El objeto <code>foods</code> tiene una clave <code>&quot;grapes&quot;</code> con un valor de <code>35</code>
    testString: 'assert(foods.grapes === 35, "The <code>foods</code> object has a key <code>"grapes"</code> with a value of <code>35</code>");'
  - text: El objeto de <code>foods</code> tiene una clave <code>&quot;strawberries&quot;</code> con un valor de <code>27</code>
    testString: 'assert(foods.strawberries === 27, "The <code>foods</code> object has a key <code>"strawberries"</code> with a value of <code>27</code>");'
  - text: Los pares clave-valor deben configurarse usando notación de punto o corchete
    testString: 'assert(code.search(/bananas:/) === -1 && code.search(/grapes:/) === -1 && code.search(/strawberries:/) === -1, "The key-value pairs should be set using dot or bracket notation");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let foods = {
  apples: 25,
  oranges: 32,
  plums: 28
};

// change code below this line

// change code above this line

console.log(foods);
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

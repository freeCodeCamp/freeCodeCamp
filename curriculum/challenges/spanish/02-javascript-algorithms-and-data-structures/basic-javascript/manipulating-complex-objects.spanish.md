---
id: 56533eb9ac21ba0edf2244cb
title: Manipulating Complex Objects
localeTitle: Manipulando objetos complejos
challengeType: 1
---

## Description
<section id='description'>
A veces es posible que desee almacenar datos en una <dfn>estructura de datos</dfn> flexible. Un objeto JavaScript es una forma de manejar datos flexibles. Permiten combinaciones arbitrarias de <dfn>cadenas</dfn> , <dfn>números</dfn> , <dfn>booleanos</dfn> , <dfn>matrices</dfn> , <dfn>funciones</dfn> y <dfn>objetos</dfn> .
Aquí hay un ejemplo de una estructura de datos compleja:
<blockquote>var ourMusic = [<br>&nbsp;&nbsp;{<br>&nbsp;&nbsp;&nbsp;&nbsp;"artist": "Daft Punk",<br>&nbsp;&nbsp;&nbsp;&nbsp;"title": "Homework",<br>&nbsp;&nbsp;&nbsp;&nbsp;"release_year": 1997,<br>&nbsp;&nbsp;&nbsp;&nbsp;"formats": [ <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"CD", <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Cassette", <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"LP"<br>&nbsp;&nbsp;&nbsp;&nbsp;],<br>&nbsp;&nbsp;&nbsp;&nbsp;"gold": true<br>&nbsp;&nbsp;}<br>];</blockquote>
Esta es una matriz que contiene un objeto dentro. El objeto tiene varias piezas de <dfn>metadatos</dfn> sobre un álbum. También tiene una matriz de <code>&quot;formats&quot;</code> anidados. Si desea agregar más registros de álbum, puede hacerlo agregando registros a la matriz de nivel superior.
objetos contienen datos en una propiedad, que tiene un formato de clave-valor. En el ejemplo anterior, <code>&quot;artist&quot;: &quot;Daft Punk&quot;</code> es una propiedad que tiene una clave de <code>&quot;artist&quot;</code> y un valor de <code>&quot;Daft Punk&quot;</code> .
<a href='http://www.json.org/' target=_blank>JavaScript Object Notation</a> o <code>JSON</code> es un formato de intercambio de datos relacionado que se utiliza para almacenar datos.
<blockquote>{<br>&nbsp;&nbsp;"artist": "Daft Punk",<br>&nbsp;&nbsp;"title": "Homework",<br>&nbsp;&nbsp;"release_year": 1997,<br>&nbsp;&nbsp;"formats": [ <br>&nbsp;&nbsp;&nbsp;&nbsp;"CD",<br>&nbsp;&nbsp;&nbsp;&nbsp;"Cassette",<br>&nbsp;&nbsp;&nbsp;&nbsp;"LP"<br>&nbsp;&nbsp;],<br>&nbsp;&nbsp;"gold": true<br>}</blockquote>
<strong>Nota</strong> <br> Deberá colocar una coma después de cada objeto de la matriz, a menos que sea el último objeto de la matriz.
</section>

## Instructions
<section id='instructions'>
Agrega un nuevo álbum a la matriz <code>myMusic</code> . Agregue cadenas de <code>artist</code> y <code>title</code> , número de año de <code>release_year</code> y una matriz de <code>formats</code> de cadenas.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>myMusic</code> debería ser una matriz
    testString: 'assert(Array.isArray(myMusic), "<code>myMusic</code> should be an array");'
  - text: <code>myMusic</code> debería tener al menos dos elementos
    testString: 'assert(myMusic.length > 1, "<code>myMusic</code> should have at least two elements");'
  - text: ' <code>myMusic[1]</code> debería ser un objeto'
    testString: 'assert(typeof myMusic[1] === "object", "<code>myMusic[1]</code> should be an object");'
  - text: ' <code>myMusic[1]</code> debería tener al menos 4 propiedades'
    testString: 'assert(Object.keys(myMusic[1]).length > 3, "<code>myMusic[1]</code> should have at least 4 properties");'
  - text: ' <code>myMusic[1]</code> debe contener una propiedad de <code>artist</code> que es una cadena'
    testString: 'assert(myMusic[1].hasOwnProperty("artist") && typeof myMusic[1].artist === "string", "<code>myMusic[1]</code> should contain an <code>artist</code> property which is a string");'
  - text: ' <code>myMusic[1]</code> debe contener una propiedad de <code>title</code> que es una cadena'
    testString: 'assert(myMusic[1].hasOwnProperty("title") && typeof myMusic[1].title === "string", "<code>myMusic[1]</code> should  contain a <code>title</code> property which is a string");'
  - text: ' <code>myMusic[1]</code> debe contener una propiedad <code>release_year</code> que es un número'
    testString: 'assert(myMusic[1].hasOwnProperty("release_year") && typeof myMusic[1].release_year === "number", "<code>myMusic[1]</code> should contain a <code>release_year</code> property which is a number");'
  - text: ' <code>myMusic[1]</code> debe contener una propiedad de <code>formats</code> que es una matriz'
    testString: 'assert(myMusic[1].hasOwnProperty("formats") && Array.isArray(myMusic[1].formats), "<code>myMusic[1]</code> should contain a <code>formats</code> property which is an array");'
  - text: <code>formats</code> deben ser una matriz de cadenas con al menos dos elementos.
    testString: 'assert(myMusic[1].formats.every(function(item) { return (typeof item === "string")}) && myMusic[1].formats.length > 1, "<code>formats</code> should be an array of strings with at least two elements");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
var myMusic = [
  {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [
      "CD",
      "8T",
      "LP"
    ],
    "gold": true
  }
  // Add record here
];

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
var myMusic = [
  {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [
      "CS",
      "8T",
      "LP" ],
    "gold": true
  },
  {
    "artist": "ABBA",
    "title": "Ring Ring",
    "release_year": 1973,
    "formats": [
      "CS",
      "8T",
      "LP",
    "CD",
  ]
  }
];
```

</section>

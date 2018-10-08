---
id: 587d78a3367417b2b2512ace
title: Push Elements Left or Right with the float Property
localeTitle: Empuje los elementos hacia la izquierda o hacia la derecha con la propiedad float
challengeType: 0
videoUrl: ''
---

## Description
<section id='description'> 
La siguiente herramienta de posicionamiento no usa realmente la <code>position</code> , pero establece la propiedad de <code>float</code> de un elemento. Los elementos flotantes se eliminan del flujo normal de un documento y se empujan hacia la <code>left</code> o hacia la <code>right</code> de su elemento principal que contiene. Se usa comúnmente con la propiedad de <code>width</code> para especificar cuánto espacio horizontal requiere el elemento flotante. 
</section>

## Instructions
<section id='instructions'> 
El marcado dado funcionaría bien como un diseño de dos columnas, con la <code>section</code> y los elementos a <code>aside</code> lado uno del otro. Dé al elemento <code>#left</code> un <code>float</code> de la <code>left</code> y el elemento <code>#right</code> un <code>float</code> de la <code>right</code> . 
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: El elemento con id <code>left</code> debe tener un valor <code>float</code> de <code>left</code> .
    testString: 'assert($("#left").css("float") == "left", "The element with id <code>left</code> should have a <code>float</code> value of <code>left</code>.");'
  - text: El elemento con id <code>right</code> debería tener un valor <code>float</code> de <code>right</code> .
    testString: 'assert($("#right").css("float") == "right", "The element with id <code>right</code> should have a <code>float</code> value of <code>right</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<head>
  <style>
  #left {

    width: 50%;
  }
  #right {

    width: 40%;
  }
  aside, section {
    padding: 2px;
    background-color: #ccc;
  }
  </style>
</head>
<body>
  <header>
    <h1>Welcome!</h1>
  </header>
  <section id="left">
    <h2>Content</h2>
    <p>Good stuff</p>
  </section>
  <aside id="right">
    <h2>Sidebar</h2>
    <p>Links</p>
  </aside>
</body>
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

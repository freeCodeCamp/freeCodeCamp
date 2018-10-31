---
id: 587d781e367417b2b2512acb
title: Lock an Element to its Parent with Absolute Positioning
challengeType: 0
videoUrl: ''
localeTitle: Bloquear un elemento a su padre con posicionamiento absoluto
---

## Description
<section id="description"> La siguiente opción para la propiedad de <code>position</code> CSS es <code>absolute</code> , que bloquea el elemento en su lugar en relación con su contenedor principal. A diferencia de la posición <code>relative</code> , esto elimina el elemento del flujo normal del documento, por lo que los elementos circundantes lo ignoran. Las propiedades de desplazamiento de CSS (superior o inferior e izquierda o derecha) se utilizan para ajustar la posición. Un matiz con posicionamiento absoluto es que se bloqueará en relación con su antepasado <em>posicionado</em> más cercano. Si olvida agregar una regla de posición al elemento principal, (esto generalmente se hace usando <code>position: relative;</code> ), el navegador seguirá buscando la cadena y, por último, usará la etiqueta del cuerpo de forma predeterminada. </section>

## Instructions
<section id="instructions"> Bloquee el elemento <code>#searchbar</code> en la parte superior derecha de su <code>section</code> principal declarando su <code>position</code> como <code>absolute</code> . Dale las compensaciones <code>top</code> y <code>right</code> de 50 píxeles cada una. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 'El elemento <code>#searchbar</code> debe tener una <code>position</code> establecida en <code>absolute</code> .'
    testString: 'assert($("#searchbar").css("position") == "absolute", "The <code>#searchbar</code> element should have a <code>position</code> set to <code>absolute</code>.");'
  - text: 'Su código debe usar la compensación de CSS <code>top</code> de 50 píxeles en el elemento <code>#searchbar</code> .'
    testString: 'assert($("#searchbar").css("top") == "50px", "Your code should use the <code>top</code> CSS offset of 50 pixels on the <code>#searchbar</code> element.");'
  - text: 'Su código debe usar el desplazamiento de CSS <code>right</code> de 50 píxeles en el elemento <code>#searchbar</code> .'
    testString: 'assert($("#searchbar").css("right") == "50px", "Your code should use the <code>right</code> CSS offset of 50 pixels on the <code>#searchbar</code> element.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  #searchbar {



  }
  section {
    position: relative;
  }
</style>
<body>
  <h1>Welcome!</h1>
  <section>
    <form id="searchbar">
      <label for="search">Search:</label>
      <input type="search" id="search" name="search">
      <input type="submit" name="submit" value="Go!">
    </form>
  </section>
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

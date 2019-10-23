---
id: 587d781e367417b2b2512acc
title: Lock an Element to the Browser Window with Fixed Positioning
challengeType: 0
videoUrl: ''
localeTitle: Bloquee un elemento en la ventana del navegador con posicionamiento fijo
---

## Description
<section id="description"> El siguiente esquema de diseño que ofrece CSS es la posición <code>fixed</code> , que es un tipo de posicionamiento absoluto que bloquea un elemento en relación con la ventana del navegador. Similar al posicionamiento absoluto, se usa con las propiedades de desplazamiento de CSS y también elimina el elemento del flujo normal del documento. Otros elementos ya no se &quot;dan cuenta&quot; de dónde se coloca, lo que puede requerir algunos ajustes de diseño en otros lugares. Una diferencia clave entre las posiciones <code>fixed</code> y <code>absolute</code> es que un elemento con una posición fija no se moverá cuando el usuario se desplace. </section>

## Instructions
<section id="instructions"> La barra de navegación en el código está etiquetada con una identificación de la <code>navbar</code> de <code>navbar</code> . Cambie su <code>position</code> a <code>fixed</code> , y desplace 0 píxeles desde la <code>top</code> y 0 píxeles desde la <code>left</code> . Observe el (falta de) impacto en la posición <code>h1</code> , no se ha empujado hacia abajo para acomodar la barra de navegación y debería ajustarse por separado. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 'El elemento <code>#navbar</code> debe tener una <code>position</code> establecida como <code>fixed</code> .'
    testString: 'assert($("#navbar").css("position") == "fixed", "The <code>#navbar</code> element should have a <code>position</code> set to <code>fixed</code>.");'
  - text: 'Su código debe usar la compensación de CSS <code>top</code> de 0 píxeles en el elemento <code>#navbar</code> .'
    testString: 'assert($("#navbar").css("top") == "0px", "Your code should use the <code>top</code> CSS offset of 0 pixels on the <code>#navbar</code> element.");'
  - text: 'Su código debe usar el desplazamiento de CSS <code>left</code> de 0 píxeles en el elemento <code>#navbar</code> .'
    testString: 'assert($("#navbar").css("left") == "0px", "Your code should use the <code>left</code> CSS offset of 0 pixels on the <code>#navbar</code> element.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  #navbar {



    width: 100%;
    background-color: #767676;
  }
  nav ul {
    margin: 0px;
    padding: 5px 0px 5px 30px;
  }
  nav li {
    display: inline;
    margin-right: 20px;
  }
  a {
    text-decoration: none;
  }
</style>
<body>
  <header>
    <h1>Welcome!</h1>
    <nav id="navbar">
      <ul>
        <li><a href="">Home</a></li>
        <li><a href="">Contact</a></li>
      </ul>
    </nav>
  </header>
  <p>I shift up when the #navbar is fixed to the browser window.</p>
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

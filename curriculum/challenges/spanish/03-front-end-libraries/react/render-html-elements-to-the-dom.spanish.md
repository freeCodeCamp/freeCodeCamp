---
id: 5a24bbe0dba28a8d3cbd4c5f
title: Render HTML Elements to the DOM
challengeType: 6
videoUrl: ''
localeTitle: Renderizar elementos HTML al DOM
---

## Description
<section id="description"> Hasta ahora, ha aprendido que JSX es una herramienta conveniente para escribir HTML legible dentro de JavaScript. Con React, podemos procesar este JSX directamente al HTML DOM usando la API de renderizado de React conocida como ReactDOM. ReactDOM ofrece un método simple para representar elementos React al DOM, que se parece a esto: <code>ReactDOM.render(componentToRender, targetNode)</code> , donde el primer argumento es el elemento o componente React que desea procesar y el segundo argumento es el nodo DOM que desea hacer que el componente. Como es de esperar, se debe llamar a <code>ReactDOM.render()</code> después de las declaraciones del elemento JSX, tal como se deben declarar las variables antes de usarlas. </section>

## Instructions
<section id="instructions"> El editor de código tiene un componente JSX simple. Utilice el método <code>ReactDOM.render()</code> para procesar este componente en la página. Puede pasar los elementos JSX definidos directamente como primer argumento y usar <code>document.getElementById()</code> para seleccionar el nodo DOM para representarlos. Hay un <code>div</code> con <code>id=&#39;challenge-node&#39;</code> disponible para que lo uses. Asegúrate de no cambiar la constante <code>JSX</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: La constante <code>JSX</code> debe devolver un elemento <code>div</code> .
    testString: 'assert(JSX.type === "div", "The constant <code>JSX</code> should return a <code>div</code> element.");'
  - text: El <code>div</code> debe contener una etiqueta <code>h1</code> como el primer elemento.
    testString: 'assert(JSX.props.children[0].type === "h1", "The <code>div</code> should contain an <code>h1</code> tag as the first element.");'
  - text: El <code>div</code> debe contener una etiqueta <code>p</code> como el segundo elemento.
    testString: 'assert(JSX.props.children[1].type === "p", "The <code>div</code> should contain a <code>p</code> tag as the second element.");'
  - text: El elemento JSX proporcionado se debe representar en el nodo DOM con id <code>challenge-node</code> .
    testString: 'assert(document.getElementById("challenge-node").childNodes[0].innerHTML === "<h1>Hello World</h1><p>Lets render this to the DOM</p>", "The provided JSX element should render to the DOM node with id <code>challenge-node</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
const JSX = (
  <div>
    <h1>Hello World</h1>
    <p>Lets render this to the DOM</p>
  </div>
);
// change code below this line

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

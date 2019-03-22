---
id: 587d7dbc367417b2b2512bb1
title: Create a Simple JSX Element
challengeType: 6
isRequired: false
videoUrl: ''
localeTitle: Crear un elemento JSX simple
---

## Description
<section id="description"> <strong>Introducción:</strong> React es una biblioteca de vista de código abierto creada y mantenida por Facebook. Es una gran herramienta para representar la interfaz de usuario (UI) de las aplicaciones web modernas. React utiliza una extensión de sintaxis de JavaScript llamada JSX que le permite escribir HTML directamente dentro de JavaScript. Esto tiene varios beneficios. Le permite usar todo el poder programático de JavaScript dentro de HTML y ayuda a mantener su código legible. En su mayor parte, JSX es similar al HTML que ya ha aprendido, sin embargo, hay algunas diferencias clave que se cubrirán a lo largo de estos desafíos. Por ejemplo, como JSX es una extensión sintáctica de JavaScript, en realidad puede escribir JavaScript directamente dentro de JSX. Para hacer esto, simplemente incluya el código que desea que sea tratado como JavaScript entre llaves: <code>{ &#39;Esto es tratado como código JavaScript&#39; }</code> . Tenga esto en cuenta, ya que se utiliza en varios desafíos futuros. Sin embargo, como JSX no es JavaScript válido, el código JSX debe compilarse en JavaScript. El transpilador Babel es una herramienta popular para este proceso. Para su comodidad, ya se ha agregado entre bastidores para estos desafíos. Si escribes JSX sintácticamente no válido, verás que la primera prueba en estos desafíos falla. Vale la pena señalar que, bajo el capó, los desafíos llaman a <code>ReactDOM.render(JSX, document.getElementById(&#39;root&#39;))</code> . Esta llamada a la función es lo que coloca a su JSX en la representación liviana del DOM de React. React luego utiliza las instantáneas de su propio DOM para optimizar la actualización de solo partes específicas del DOM real. </section>

## Instructions
<section id="instructions"> <strong>Instrucciones:</strong> El código actual utiliza JSX para asignar un elemento <code>div</code> a la constante <code>JSX</code> . Reemplace el <code>div</code> con un elemento <code>h1</code> y agregue el texto <code>Hello JSX!</code> dentro de eso. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: La constante <code>JSX</code> debería devolver un elemento <code>h1</code> .
    testString: 'assert(JSX.type === "h1", "The constant <code>JSX</code> should return an <code>h1</code> element.");'
  - text: La etiqueta <code>h1</code> debe incluir el texto <code>Hello JSX!</code>
    testString: 'assert(Enzyme.shallow(JSX).contains("Hello JSX!"), "The <code>h1</code> tag should include the text <code>Hello JSX!</code>");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
const JSX = <div></div>;

```

</div>


### After Test
<div id='jsx-teardown'>

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

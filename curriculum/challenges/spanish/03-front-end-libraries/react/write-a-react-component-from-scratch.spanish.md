---
id: 5a24c314108439a4d4036168
title: Write a React Component from Scratch
challengeType: 6
isRequired: false
videoUrl: ''
localeTitle: Escribir un componente React desde cero
---

## Descripción
<section id="description"> Ahora que ha aprendido los conceptos básicos de los componentes JSX y React, es hora de escribir un componente por su cuenta. Los componentes de React son los componentes básicos de las aplicaciones de React, por lo que es importante familiarizarse con su escritura. Recuerde, un componente típico de React es una <code>class</code> ES6 que extiende <code>React.Component</code> . Tiene un método de render que devuelve HTML (de JSX) o <code>null</code> . Esta es la forma básica de un componente React. Una vez que entienda esto bien, estará preparado para comenzar a construir proyectos React más complejos. </section>

## Instrucciones
<section id="instructions"> Defina una clase <code>MyComponent</code> que amplíe <code>React.Component</code> . Su método de renderización debe devolver un <code>div</code> que contenga una etiqueta <code>h1</code> con el texto: <code>My First React Component!</code> en eso. Use este texto exactamente, el caso y la puntuación son importantes. Asegúrese de llamar al constructor para su componente, también. Renderice este componente al DOM usando <code>ReactDOM.render()</code> . Hay un <code>div</code> con <code>id=&#39;challenge-node&#39;</code> disponible para que lo use. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Debe haber un componente React llamado <code>MyComponent</code> .
    testString: 'getUserInput => assert(getUserInput("index").replace(/\s/g, "").includes("classMyComponentextendsReact.Component{"), "There should be a React component called <code>MyComponent</code>.");'
  - text: <code>MyComponent</code> debe contener una etiqueta <code>h1</code> con el texto <code>My First React Component!</code> Caso y puntuacion.
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(MyComponent)); return mockedComponent.find("h1").text() === "My First React Component!"; })(), "<code>MyComponent</code> should contain an <code>h1</code> tag with text <code>My First React Component!</code> Case and punctuation matter.");'
  - text: <code>MyComponent</code> debe renderizar al DOM.
    testString: 'assert(document.getElementById("challenge-node").childNodes.length === 1, "<code>MyComponent</code> should render to the DOM.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
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

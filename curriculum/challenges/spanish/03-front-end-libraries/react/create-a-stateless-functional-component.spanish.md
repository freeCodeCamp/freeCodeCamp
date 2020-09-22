---
id: 5a24c314108439a4d4036162
title: Create a Stateless Functional Component
challengeType: 6
videoUrl: ''
localeTitle: Crear un componente funcional sin estado
---

## Description
<section id="description"> Los componentes son el núcleo de React. Todo en React es un componente y aquí aprenderás cómo crear uno. Hay dos formas de crear un componente React. La primera forma es usar una función de JavaScript. La definición de un componente de esta manera crea un <em>componente funcional sin estado</em> . El concepto de estado en una aplicación será cubierto en desafíos posteriores. Por ahora, piense en un componente sin estado como uno que puede recibir datos y procesarlos, pero no administra ni rastrea los cambios en esos datos. (Cubriremos la segunda forma de crear un componente React en el próximo desafío). Para crear un componente con una función, simplemente escriba una función de JavaScript que devuelva JSX o <code>null</code> . Una cosa importante a tener en cuenta es que React requiere que el nombre de su función comience con una letra mayúscula. Aquí hay un ejemplo de un componente funcional sin estado que asigna una clase HTML en JSX: <blockquote> // Después de ser transpilado, el &lt;div&gt; tendrá una clase CSS de &#39;customClass&#39; <br> const DemoComponent = function () { <br> regreso ( <br> &lt;div className = &#39;customClass&#39; /&gt; <br> ); <br> }; </blockquote> Debido a que un componente JSX representa HTML, puede juntar varios componentes para crear una página HTML más compleja. Esta es una de las ventajas clave de la arquitectura de componentes que proporciona React. Le permite componer su IU a partir de muchos componentes separados y aislados. Esto facilita la creación y el mantenimiento de interfaces de usuario complejas. </section>

## Instructions
<section id="instructions"> El editor de código tiene una función llamada <code>MyComponent</code> . Complete esta función para que devuelva un único elemento <code>div</code> que contenga alguna cadena de texto. <strong>Nota:</strong> el texto se considera un elemento secundario del elemento <code>div</code> , por lo que no podrá utilizar una etiqueta de cierre automático. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>MyComponent</code> debe devolver JSX.
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(MyComponent)); return mockedComponent.length === 1; })(), "<code>MyComponent</code> should return JSX.");'
  - text: <code>MyComponent</code> debería devolver un elemento <code>div</code> .
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(MyComponent)); return mockedComponent.children().type() === "div" })(), "<code>MyComponent</code> should return a <code>div</code> element.");'
  - text: El elemento <code>div</code> debe contener una cadena de texto.
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(MyComponent)); return mockedComponent.find("div").text() !== ""; })(), "The <code>div</code> element should contain a string of text.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
const MyComponent = function() {
  // change code below this line



  // change code above this line
}

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

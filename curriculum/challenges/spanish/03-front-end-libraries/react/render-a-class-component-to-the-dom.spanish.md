---
id: 5a24c314108439a4d4036167
title: Render a Class Component to the DOM
challengeType: 6
isRequired: false
videoUrl: ''
localeTitle: Renderizar un componente de clase al DOM
---

## Description
<section id="description"> Puede recordar haber usado la API ReactDOM en un desafío anterior para representar elementos JSX al DOM. El proceso para renderizar componentes React se verá muy similar. Los últimos desafíos se enfocaron en los componentes y la composición, por lo que el renderizado se realizó para usted entre bastidores. Sin embargo, ninguno de los códigos React que escriba se procesarán en el DOM sin hacer una llamada a la API ReactDOM. Aquí hay una actualización de la sintaxis: <code>ReactDOM.render(componentToRender, targetNode)</code> . El primer argumento es el componente React que desea procesar. El segundo argumento es el nodo DOM en el que desea procesar ese componente. Los componentes de React se pasan a <code>ReactDOM.render()</code> un poco diferente a los elementos JSX. Para los elementos JSX, pasa el nombre del elemento que desea representar. Sin embargo, para los componentes React, debe usar la misma sintaxis como si estuviera representando un componente anidado, por ejemplo, <code>ReactDOM.render(&lt;ComponentToRender /&gt;, targetNode)</code> . Utilice esta sintaxis para los componentes de clase ES6 y los componentes funcionales. </section>

## Instructions
<section id="instructions"> Ambos componentes de <code>Fruits</code> y <code>Vegetables</code> se definen para usted detrás de escena. Procese ambos componentes como elementos <code>TypesOfFood</code> componente <code>TypesOfFood</code> , a continuación, procese <code>TypesOfFood</code> al DOM. Hay un <code>div</code> con <code>id=&#39;challenge-node&#39;</code> disponible para que lo uses. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: El componente <code>TypesOfFood</code> debe devolver un único elemento <code>div</code> .
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(TypesOfFood)); return mockedComponent.children().type() === "div"; })(), "The <code>TypesOfFood</code> component should return a single <code>div</code> element.");'
  - text: El componente <code>TypesOfFood</code> debe representar el componente <code>Fruits</code> después del elemento <code>h1</code> .
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(TypesOfFood)); return mockedComponent.children().childAt(1).name() === "Fruits"; })(), "The <code>TypesOfFood</code> component should render the <code>Fruits</code> component after the <code>h1</code> element.");'
  - text: El componente <code>TypesOfFood</code> debe representar el componente <code>Vegetables</code> después de <code>Fruits</code> .
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(TypesOfFood)); return mockedComponent.children().childAt(2).name() === "Vegetables"; })(), "The <code>TypesOfFood</code> component should render the <code>Vegetables</code> component after <code>Fruits</code>.");'
  - text: El componente <code>TypesOfFood</code> debe representar en el DOM dentro del <code>div</code> con el id <code>challenge-node</code> .
    testString: 'assert((function() { const html = document.getElementById("challenge-node").childNodes[0].innerHTML; return (html === "<h1>Types of Food:</h1><div><h2>Fruits:</h2><h4>Non-Citrus:</h4><ul><li>Apples</li><li>Blueberries</li><li>Strawberries</li><li>Bananas</li></ul><h4>Citrus:</h4><ul><li>Lemon</li><li>Lime</li><li>Orange</li><li>Grapefruit</li></ul></div><div><h2>Vegetables:</h2><ul><li>Brussel Sprouts</li><li>Broccoli</li><li>Squash</li></ul></div>"); })(), "The <code>TypesOfFood</code> component should render to the DOM within the <code>div</code> with the id <code>challenge-node</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
class TypesOfFood extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
        {/* change code below this line */}

        {/* change code above this line */}
      </div>
    );
  }
};

// change code below this line

```

</div>

### Before Test
<div id='jsx-setup'>

```jsx
const Fruits = () => {
  return (
    <div>
      <h2>Fruits:</h2>
      <h4>Non-Citrus:</h4>
        <ul>
          <li>Apples</li>
          <li>Blueberries</li>
          <li>Strawberries</li>
          <li>Bananas</li>
        </ul>
      <h4>Citrus:</h4>
        <ul>
          <li>Lemon</li>
          <li>Lime</li>
          <li>Orange</li>
          <li>Grapefruit</li>
        </ul>
    </div>
  );
};
const Vegetables = () => {
  return (
    <div>
      <h2>Vegetables:</h2>
      <ul>
        <li>Brussel Sprouts</li>
        <li>Broccoli</li>
        <li>Squash</li>
      </ul>
    </div>
  );
};

```

</div>


</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

---
id: 5a24c314108439a4d4036166
title: Compose React Components
challengeType: 6
isRequired: false
videoUrl: ''
localeTitle: Componer React Componentes
---

## Description
<section id="description"> A medida que los desafíos continúan utilizando composiciones más complejas con componentes React y JSX, hay un punto importante a tener en cuenta. La representación de los componentes de la clase de estilo ES6 dentro de otros componentes no es diferente de la representación de los componentes simples que usó en los últimos desafíos. Puede representar elementos JSX, componentes funcionales sin estado y componentes de clase ES6 dentro de otros componentes. </section>

## Instructions
<section id="instructions"> En el editor de código, el componente <code>TypesOfFood</code> ya está representando un componente llamado <code>Vegetables</code> . Además, está el componente <code>Fruits</code> del último desafío. Anide dos componentes dentro de <code>Fruits</code> : primero <code>NonCitrus</code> y luego <code>Citrus</code> . Ambos componentes se proporcionan para usted en el fondo. A continuación, anide el componente de la clase <code>Fruits</code> en el componente <code>TypesOfFood</code> , debajo del encabezado <code>h1</code> y encima de <code>Vegetables</code> . El resultado debe ser una serie de componentes anidados, que utiliza dos tipos de componentes diferentes. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: El componente <code>TypesOfFood</code> debe devolver un único elemento <code>div</code> .
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(TypesOfFood)); return mockedComponent.children().type() === "div"; })(), "The <code>TypesOfFood</code> component should return a single <code>div</code> element.");'
  - text: El componente <code>TypesOfFood</code> debe devolver el componente <code>Fruits</code> .
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(TypesOfFood)); return mockedComponent.children().childAt(1).name() === "Fruits"; })(), "The <code>TypesOfFood</code> component should return the <code>Fruits</code> component.");'
  - text: El componente <code>Fruits</code> debe devolver el componente <code>NonCitrus</code> y el componente <code>Citrus</code> .
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(TypesOfFood)); return (mockedComponent.find("Fruits").children().find("NonCitrus").length === 1 && mockedComponent.find("Fruits").children().find("Citrus").length === 1); })(), "The <code>Fruits</code> component should return the <code>NonCitrus</code> component and the <code>Citrus</code> component.");'
  - text: El componente <code>TypesOfFood</code> debe devolver el componente <code>Vegetables</code> debajo del componente <code>Fruits</code> .
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(TypesOfFood)); return mockedComponent.children().childAt(2).name() === "Vegetables"; })(), "The <code>TypesOfFood</code> component should return the <code>Vegetables</code> component below the <code>Fruits</code> component.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
class Fruits extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h2>Fruits:</h2>
        { /* change code below this line */ }

         { /* change code above this line */ }
      </div>
    );
  }
};

class TypesOfFood extends React.Component {
  constructor(props) {
     super(props);
  }
  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
        { /* change code below this line */ }

        { /* change code above this line */ }
        <Vegetables />
      </div>
    );
  }
};

```

</div>

### Before Test
<div id='jsx-setup'>

```jsx
class NonCitrus extends React.Component {
  render() {
    return (
      <div>
        <h4>Non-Citrus:</h4>
        <ul>
          <li>Apples</li>
          <li>Blueberries</li>
          <li>Strawberries</li>
          <li>Bananas</li>
        </ul>
      </div>
    );
  }
};
class Citrus extends React.Component {
  render() {
    return (
      <div>
        <h4>Citrus:</h4>
        <ul>
          <li>Lemon</li>
          <li>Lime</li>
          <li>Orange</li>
          <li>Grapefruit</li>
        </ul>
      </div>
    );
  }
};
class Vegetables extends React.Component {
  render() {
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
     }
};

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

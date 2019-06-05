---
id: 5a24c314108439a4d4036166
title: Compose React Components
challengeType: 6
isRequired: false
videoUrl: ''
localeTitle: Componer React Componentes
---

## Description

<section id="description"> A medida que los desafíos continúan utilizando composiciones más complejas con componentes React y JSX, hay un punto importante a tener en cuenta. El renderizado de los componentes con la clase en ES6 dentro de otros componentes no es diferente del renderizado de los componentes simples que usó en los últimos desafíos. Puede representar elementos JSX, componentes funcionales sin estado y componentes de clase ES6 dentro de otros componentes. </section>

## Instructions

<section id="instructions"> En el editor de código, el componente <code>TypesOfFood</code> ya está representando un componente llamado <code>Vegetables</code> . Además, está el componente <code>Fruits</code> del último desafío. Anide dos componentes dentro de <code>Fruits</code> : primero <code>NonCitrus</code> y luego <code>Citrus</code> . Ambos componentes se proporcionan para usted en segundo plano. A continuación, anide el componente de la clase <code>Fruits</code> en el componente <code>TypesOfFood</code> , debajo del encabezado <code>h1</code> y encima de <code>Vegetables</code>. El resultado debe ser una serie de componentes anidados, que utiliza dos tipos de componentes diferentes. </section>

## Tests

<section id='tests'>

```yml
tests:
  - text: El componente <code>TypesOfFood</code> debe devolver un único elemento <code>div</code>.
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(TypesOfFood)); return mockedComponent.children().type() === "div"; })(), "El componente <code>TypesOfFood</code> debe devolver un único elemento <code>div</code>.");'
  - text: El componente <code>TypesOfFood</code> debe devolver el componente <code>Fruits</code> .
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(TypesOfFood)); return mockedComponent.children().childAt(1).name() === "Fruits"; })(), "El componente <code>TypesOfFood</code> debe devolver el componente.");'
  - text: El componente <code>Fruits</code> debe devolver el componente <code>NonCitrus</code> y el componente <code>Citrus</code>.
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(TypesOfFood)); return (mockedComponent.find("Fruits").children().find("NonCitrus").length === 1 && mockedComponent.find("Fruits").children().find("Citrus").length === 1); })(), "El componente <code>Fruits</code> debe devolver el componente <code>NonCitrus</code> y el componente <code>Citrus</code>.");'
  - text: El componente <code>TypesOfFood</code> debe devolver el componente <code>Vegetables</code> debajo del componente <code>Fruits</code>.
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(TypesOfFood)); return mockedComponent.children().childAt(2).name() === "Vegetables"; })(), "El componente <code>TypesOfFood</code> debe devolver el componente <code>Vegetables</code> debajo del componente <code>Fruits</code>.");'
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
        {/* change code below this line */}

        {/* change code above this line */}
      </div>
    );
  }
}

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
        <Vegetables />
      </div>
    );
  }
}
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
}
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
}
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
}
```

</div>

### After Test

<div id='jsx-teardown'>

```js
ReactDOM.render(<TypesOfFood />, document.getElementById('root'));
```

</div>

</section>

## Solution

<section id='solution'>

```js
class Fruits extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h2>Fruits:</h2>
        {/* change code below this line */}
        <NonCitrus />
        <Citrus />
        {/* change code above this line */}
      </div>
    );
  }
}

class TypesOfFood extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
        {/* change code below this line */}
        <Fruits />
        {/* change code above this line */}
        <Vegetables />
      </div>
    );
  }
}
```

</section>

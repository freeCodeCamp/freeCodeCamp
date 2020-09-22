---
id: 5a24c314108439a4d4036166
title: Compose React Components
challengeType: 6
videoUrl: ''
localeTitle: Compor Reagir Componentes
---

## Description
<section id="description"> Como os desafios continuam a usar composições mais complexas com componentes React e JSX, há um ponto importante a ser observado. A renderização de componentes de classe de estilo ES6 dentro de outros componentes não é diferente de renderizar os componentes simples que você usou nos últimos desafios. Você pode renderizar elementos JSX, componentes funcionais stateless e componentes de classe ES6 em outros componentes. </section>

## Instructions
<section id="instructions"> No editor de código, o componente <code>TypesOfFood</code> já está renderizando um componente chamado <code>Vegetables</code> . Além disso, há o componente <code>Fruits</code> do último desafio. Nest dois componentes dentro de <code>Fruits</code> - primeiro <code>NonCitrus</code> e, em seguida, <code>Citrus</code> . Ambos os componentes são fornecidos para você em segundo plano. Em seguida, aninhe o componente de classe <code>Fruits</code> no componente <code>TypesOfFood</code> , abaixo do cabeçalho <code>h1</code> e acima de <code>Vegetables</code> . O resultado deve ser uma série de componentes aninhados, que usa dois tipos de componentes diferentes. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: O componente <code>TypesOfFood</code> deve retornar um único elemento <code>div</code> .
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(TypesOfFood)); return mockedComponent.children().type() === "div"; })(), "The <code>TypesOfFood</code> component should return a single <code>div</code> element.");'
  - text: O componente <code>TypesOfFood</code> deve retornar o componente <code>Fruits</code> .
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(TypesOfFood)); return mockedComponent.children().childAt(1).name() === "Fruits"; })(), "The <code>TypesOfFood</code> component should return the <code>Fruits</code> component.");'
  - text: O componente <code>Fruits</code> deve retornar o componente <code>NonCitrus</code> e o componente <code>Citrus</code> .
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(TypesOfFood)); return (mockedComponent.find("Fruits").children().find("NonCitrus").length === 1 && mockedComponent.find("Fruits").children().find("Citrus").length === 1); })(), "The <code>Fruits</code> component should return the <code>NonCitrus</code> component and the <code>Citrus</code> component.");'
  - text: O componente <code>TypesOfFood</code> deve retornar o componente <code>Vegetables</code> abaixo do componente <code>Fruits</code> .
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

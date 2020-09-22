---
id: 5a24c314108439a4d4036165
title: Use React to Render Nested Components
challengeType: 6
videoUrl: ''
localeTitle: Use Reagir para Renderizar Componentes Aninhados
---

## Description
<section id="description"> O último desafio mostrou uma maneira simples de compor dois componentes, mas há muitas maneiras diferentes de compor componentes com o React. A composição de componentes é um dos poderosos recursos do React. Quando você trabalha com o React, é importante começar a pensar na interface do usuário em termos de componentes, como o exemplo de aplicativo no último desafio. Você divide sua interface do usuário em seus blocos de construção básicos e essas peças se tornam os componentes. Isso ajuda a separar o código responsável pela interface do usuário do código responsável por manipular a lógica do seu aplicativo. Isso pode simplificar bastante o desenvolvimento e a manutenção de projetos complexos. </section>

## Instructions
<section id="instructions"> Existem dois componentes funcionais definidos no editor de código, chamados <code>TypesOfFruit</code> e <code>Fruits</code> . Pegue o componente <code>TypesOfFruit</code> e componha-o, ou <em>aninhe</em> -o, dentro do componente <code>Fruits</code> . Em seguida, pegue o componente <code>Fruits</code> e aninhe-o no componente <code>TypesOfFood</code> . O resultado deve ser um componente filho, aninhado dentro de um componente pai, que está aninhado dentro de um componente pai próprio! </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: O componente <code>TypesOfFood</code> deve retornar um único elemento <code>div</code> .
    testString: 'assert(Enzyme.shallow(React.createElement(TypesOfFood)).type() === "div", "The <code>TypesOfFood</code> component should return a single <code>div</code> element.");'
  - text: O componente <code>TypesOfFood</code> deve retornar o componente <code>Fruits</code> .
    testString: 'assert(Enzyme.shallow(React.createElement(TypesOfFood)).props().children[1].type.name === "Fruits", "The <code>TypesOfFood</code> component should return the <code>Fruits</code> component.");'
  - text: O componente de <code>Fruits</code> deve retornar o componente <code>TypesOfFruit</code> .
    testString: 'assert(Enzyme.mount(React.createElement(TypesOfFood)).find("h2").html() === "<h2>Fruits:</h2>", "The <code>Fruits</code> component should return the <code>TypesOfFruit</code> component.");'
  - text: O componente <code>TypesOfFruit</code> deve retornar os elementos <code>h2</code> e <code>ul</code> .
    testString: 'assert(Enzyme.mount(React.createElement(TypesOfFood)).find("ul").text() === "ApplesBlueberriesStrawberriesBananas", "The <code>TypesOfFruit</code> component should return the <code>h2</code> and <code>ul</code> elements.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
const TypesOfFruit = () => {
  return (
    <div>
      <h2>Fruits:</h2>
      <ul>
        <li>Apples</li>
        <li>Blueberries</li>
        <li>Strawberries</li>
        <li>Bananas</li>
      </ul>
    </div>
  );
};

const Fruits = () => {
  return (
    <div>
      { /* change code below this line */ }

      { /* change code above this line */ }
    </div>
  );
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

---
id: 5a24c314108439a4d4036167
title: Render a Class Component to the DOM
challengeType: 6
videoUrl: ''
localeTitle: Renderizar um componente de classe para o DOM
---

## Description
<section id="description"> Você pode se lembrar de usar a API ReactDOM em um desafio anterior para renderizar elementos JSX no DOM. O processo de renderização dos componentes do React será muito semelhante. Os últimos desafios se concentraram em componentes e composição, então a renderização foi feita para você nos bastidores. No entanto, nenhum código do React que você escrever será renderizado no DOM sem fazer uma chamada para a API do ReactDOM. Aqui está uma atualização da sintaxe: <code>ReactDOM.render(componentToRender, targetNode)</code> . O primeiro argumento é o componente Reagir que você deseja renderizar. O segundo argumento é o nó DOM em que você deseja renderizar esse componente. Os componentes React são passados ​​para <code>ReactDOM.render()</code> um pouco diferente dos elementos JSX. Para elementos JSX, você passa o nome do elemento que deseja renderizar. No entanto, para os componentes do React, você precisa usar a mesma sintaxe como se estivesse renderizando um componente aninhado, por exemplo, <code>ReactDOM.render(&lt;ComponentToRender /&gt;, targetNode)</code> . Você usa essa sintaxe para componentes de classe ES6 e componentes funcionais. </section>

## Instructions
<section id="instructions"> Ambos os componentes <code>Fruits</code> e <code>Vegetables</code> são definidos para você nos bastidores. Renderize os dois componentes como filhos do componente <code>TypesOfFood</code> , em seguida, <code>TypesOfFood</code> para o DOM. Existe um <code>div</code> com <code>id=&#39;challenge-node&#39;</code> disponível para você usar. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: O componente <code>TypesOfFood</code> deve retornar um único elemento <code>div</code> .
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(TypesOfFood)); return mockedComponent.children().type() === "div"; })(), "The <code>TypesOfFood</code> component should return a single <code>div</code> element.");'
  - text: O componente <code>TypesOfFood</code> deve renderizar o componente <code>Fruits</code> após o elemento <code>h1</code> .
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(TypesOfFood)); return mockedComponent.children().childAt(1).name() === "Fruits"; })(), "The <code>TypesOfFood</code> component should render the <code>Fruits</code> component after the <code>h1</code> element.");'
  - text: O componente <code>TypesOfFood</code> deve processar o componente <code>Vegetables</code> após <code>Fruits</code> .
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(TypesOfFood)); return mockedComponent.children().childAt(2).name() === "Vegetables"; })(), "The <code>TypesOfFood</code> component should render the <code>Vegetables</code> component after <code>Fruits</code>.");'
  - text: O componente <code>TypesOfFood</code> deve renderizar para o DOM dentro do <code>div</code> com o <code>challenge-node</code> do ID.
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

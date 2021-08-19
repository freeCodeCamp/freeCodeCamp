---
id: 5a24c314108439a4d4036167
title: Renderizar um componente de classe para o DOM
challengeType: 6
forumTopicId: 301404
dashedName: render-a-class-component-to-the-dom
---

# --description--

Você talvez se lembre de usar a API do ReactDOM em um desafio anterior para renderizar elementos JSX para o DOM. O processo para renderizar componentes React ficará muito parecido. Os últimos desafios focaram em componentes e composição, então a renderização foi feita pra você nos bastidores. No entanto, nenhum código React que você escreva vai renderizar no DOM sem fazer uma chamada para a API do ReactDOM.

Aqui está uma atualização na sintaxe: `ReactDOM.render(componentToRender, targetNode)`. O primeiro argumento é o componente React que você deseja renderizar. O segundo argumento é o nó do DOM onde você quer renderizar esse componente dentro.

Componentes do React são passados a `ReactDOM.render()` um pouco diferente dos elementos JSX. Para elementos JSX, você passa o nome do elemento que deseja renderizar. No entanto, para componentes do React, você precisa usar a mesma sintaxe como se estivesse renderizando um componente aninhado, por exemplo `ReactDOM.render(<ComponentToRender />, targetNode)`. Você usa esta sintaxe para componentes de classe ES6 e componentes funcionais.

# --instructions--

Os componentes `Fruits` e `Vegetables` são definidos para você nos bastidores. Renderize ambos os componentes como filhos do componente `TypesOfFood` e, em seguida, renderize `TypesOfFood` para o DOM. Há um `div` com `id='challenge-node'` disponível para você usar.

# --hints--

O componente `TypesOfFood` deve retornar um único elemento `div`.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(TypesOfFood));
    return mockedComponent.children().type() === 'div';
  })()
);
```

O componente `TypesOfFood` deve renderizar o componente `Fruits` após o elemento `h1`.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(TypesOfFood));
    return mockedComponent.children().childAt(1).name() === 'Fruits';
  })()
);
```

O componente `TypesOfFood` deve renderizar o componente `Vegetables` depois de `Fruits`.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(TypesOfFood));
    return mockedComponent.children().childAt(2).name() === 'Vegetables';
  })()
);
```

O componente `TypesOfFood` deve ser renderizado no DOM dentro do `div` com o id `challenge-node`.

```js
assert(
  (function () {
    const html = document.getElementById('challenge-node').childNodes[0]
      .innerHTML;
    return (
      html.includes(
        '<div><h2>Fruits:</h2><h4>Non-Citrus:</h4><ul><li>Apples</li><li>Blueberries</li><li>Strawberries</li><li>Bananas</li></ul><h4>Citrus:</h4><ul><li>Lemon</li><li>Lime</li><li>Orange</li><li>Grapefruit</li></ul></div>'
      ) &&
      html.includes(
        '<div><h2>Vegetables:</h2><ul><li>Brussel Sprouts</li><li>Broccoli</li><li>Squash</li></ul></div>'
      )
    );
  })()
);
```

# --seed--

## --before-user-code--

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

## --seed-contents--

```jsx
class TypesOfFood extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
        {/* Change code below this line */}

        {/* Change code above this line */}
      </div>
    );
  }
};

// Change code below this line
```

# --solutions--

```jsx
class TypesOfFood extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
        {/* Change code below this line */}
          <Fruits />
           <Vegetables />
         {/* Change code above this line */}
      </div>
    );
  }
};

// Change code below this line
ReactDOM.render(<TypesOfFood />, document.getElementById('challenge-node'));
```

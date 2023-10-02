---
id: 5a24c314108439a4d4036165
title: Usar React para renderizar componentes aninhados
challengeType: 6
forumTopicId: 301420
dashedName: use-react-to-render-nested-components
---

# --description--

O último desafio mostrou uma maneira simples de compor dois componentes, mas há muitas maneiras diferentes que você pode compor componentes com React.

Composição de componente é uma das funcionalidades poderosas do React. Ao trabalhar com React, é importante começar a pensar na sua interface de usuário em termos de componentes como o App exemplo no último desafio. Você divide sua interface de usuário em seus blocos de construção básicos, e essas peças se tornam os componentes. Isso ajuda a separar o código responsável pela interface do usuário do código responsável por lidar com a lógica da sua aplicação. Pode simplificar grandemente o desenvolvimento e a manutenção de projetos complexos.

# --instructions--

Existem dois componentes funcionais definidos no editor de código, chamados `TypesOfFruit` e `Fruits`. Pegue o componente `TypesOfFruit` e componha, ou *nest* ele dentro do componente `Fruits`. Em seguida, pegue o componente `Fruits` e aninhe-o dentro do componente `TypesOfFood`. O resultado deve ser um componente filho, aninhado em um componente pai, que está aninhado dentro do seu próprio componente pai!

# --hints--

O componente `TypesOfFood` deve retornar um único elemento `div`.

```js
assert(Enzyme.shallow(React.createElement(TypesOfFood)).type() === 'div');
```

O componente `TypesOfFood` deve retornar o componente `Fruits`.

```js
assert(
  Enzyme.shallow(React.createElement(TypesOfFood)).props().children[1].type
    .name === 'Fruits'
);
```

O componente `Fruits` deve retornar o componente `TypesOfFruit`.

```js
assert(
  Enzyme.mount(React.createElement(TypesOfFood)).find('h2').html() ===
    '<h2>Fruits:</h2>'
);
```

O componente `TypesOfFruit` deve retornar os elementos `h2` e `ul`.

```js
assert(
  Enzyme.mount(React.createElement(TypesOfFood)).find('ul').text() ===
    'ApplesBlueberriesStrawberriesBananas'
);
```

# --seed--

## --after-user-code--

```jsx
ReactDOM.render(<TypesOfFood />, document.getElementById('root'))
```

## --seed-contents--

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
      { /* Change code below this line */ }

      { /* Change code above this line */ }
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
        { /* Change code below this line */ }

        { /* Change code above this line */ }
      </div>
    );
  }
};
```

# --solutions--

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
      { /* Change code below this line */ }
        <TypesOfFruit />
      { /* Change code above this line */ }
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
        { /* Change code below this line */ }
        <Fruits />
        { /* Change code above this line */ }
      </div>
    );
  }
};
```

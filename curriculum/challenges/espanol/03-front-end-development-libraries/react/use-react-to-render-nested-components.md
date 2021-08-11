---
id: 5a24c314108439a4d4036165
title: Utiliza React para procesar componentes anidados
challengeType: 6
forumTopicId: 301420
dashedName: use-react-to-render-nested-components
---

# --description--

El último desafío mostró una manera simple de organizar dos componentes, pero hay muchas maneras diferentes de organizar componentes con React.

La composición de componentes es una de las características más poderosas de React. Cuando trabajas con React, es importante comenzar a pensar en tu interfaz de usuario en términos de componentes, como el ejemplo App del último desafío. Debes dividir tu UI en sus bloques básicos de construcción, y esas piezas se convierten en los componentes. Esto ayuda a separar el código responsable de la interfaz de usuario del código responsable de manejar la lógica de tu aplicación. Esto puede simplificar enormemente el desarrollo y el mantenimiento de proyectos complejos.

# --instructions--

Hay dos componentes funcionales definidos en el editor de código, llamados `TypesOfFruit` y `Fruits`. Toma el componente `TypesOfFruit` y organízalo, o *anídalo*, dentro del componente `Fruits`. Luego toma el componente `Fruits` y anídalo dentro del componente `TypesOfFood`. El resultado debe ser un componente hijo, anidado dentro de un componente padre, ¡que a su vez está anidado dentro de un componente padre!

# --hints--

El componente `TypesOfFood` debe devolver un solo elemento `div`.

```js
assert(Enzyme.shallow(React.createElement(TypesOfFood)).type() === 'div');
```

El componente `TypesOfFood` debe devolver el componente `Fruits`.

```js
assert(
  Enzyme.shallow(React.createElement(TypesOfFood)).props().children[1].type
    .name === 'Fruits'
);
```

El componente `Fruits` debe devolver el componente `TypesOfFruit`.

```js
assert(
  Enzyme.mount(React.createElement(TypesOfFood)).find('h2').html() ===
    '<h2>Fruits:</h2>'
);
```

El componente `TypesOfFruit` debe devolver los elementos `h2` y `ul`.

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

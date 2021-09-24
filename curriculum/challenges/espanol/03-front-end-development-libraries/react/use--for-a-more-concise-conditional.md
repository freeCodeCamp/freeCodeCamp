---
id: 5a24c314108439a4d4036185
title: Usa && para una condicional más concisa
challengeType: 6
forumTopicId: 301413
dashedName: use--for-a-more-concise-conditional
---

# --description--

Las sentencias `if/else` funcionaron en el último desafío, pero hay una manera más concisa de lograr el mismo resultado. Imagina que estás rastreando varias condiciones en un componente y deseas que diferentes elementos se rendericen dependiendo de cada una de estas condiciones. Si escribes un montón de sentencias `else if` para devolver UIs ligeramente diferentes, puedes repetir código que deja espacio para el error. En su lugar, puedes usar el operador lógico `&&` para realizar lógica condicional de una manera más concisa. Esto es posible porque quieres comprobar si una condición es `true`, y si es así, devuelve algún código. A continuación un ejemplo:

```jsx
{condition && <p>markup</p>}
```

Si la `condition` es `true`, el código será devuelto. Si la condición es `false`, la operación devolverá inmediatamente `false` después de evaluar la `condition` y no devolverá nada. Puedes incluir estas sentencias directamente en tu JSX y encadenar varias condiciones juntas escribiendo `&&` después de cada uno. Esto te permite manejar una lógica condicional más compleja en tu método `render()` sin repetir un montón de código.

# --instructions--

Resuelve el ejemplo anterior de nuevo, de este modo el `h1` solo renderiza si `display` es `true`, pero usa el operador lógico `&&` en lugar de una sentencia `if/else`.

# --hints--

`MyComponent` debe existir y renderizar.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(MyComponent));
    return mockedComponent.find('MyComponent').length;
  })()
);
```

Cuando `display` se establece en `true`, un `div`, `button`, y `h1` debe renderizarse.

```js
async () => {
  const waitForIt = (fn) =>
    new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250));
  const mockedComponent = Enzyme.mount(React.createElement(MyComponent));
  const state_1 = () => {
    mockedComponent.setState({ display: true });
    return waitForIt(() => mockedComponent);
  };
  const updated = await state_1();
  assert(
    updated.find('div').length === 1 &&
      updated.find('div').children().length === 2 &&
      updated.find('button').length === 1 &&
      updated.find('h1').length === 1
  );
};
```

Cuando `display` se establece en `false`, solo un `div` y un `button` debe renderizarse.

```js
async () => {
  const waitForIt = (fn) =>
    new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250));
  const mockedComponent = Enzyme.mount(React.createElement(MyComponent));
  const state_1 = () => {
    mockedComponent.setState({ display: false });
    return waitForIt(() => mockedComponent);
  };
  const updated = await state_1();
  assert(
    updated.find('div').length === 1 &&
      updated.find('div').children().length === 1 &&
      updated.find('button').length === 1 &&
      updated.find('h1').length === 0
  );
};
```

El método renderizador debe usar el operador lógico `&&` para comprobar la condición de `this.state.display`.

```js
(getUserInput) => assert(getUserInput('index').includes('&&'));
```

# --seed--

## --after-user-code--

```jsx
ReactDOM.render(<MyComponent />, document.getElementById('root'))
```

## --seed-contents--

```jsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: true
    }
    this.toggleDisplay = this.toggleDisplay.bind(this);
  }
  toggleDisplay() {
    this.setState(state => ({
      display: !state.display
    }));
  }
  render() {
    // Change code below this line
    return (
       <div>
         <button onClick={this.toggleDisplay}>Toggle Display</button>
         <h1>Displayed!</h1>
       </div>
    );
  }
};
```

# --solutions--

```jsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: true
    }
 this.toggleDisplay = this.toggleDisplay.bind(this);
  }
  toggleDisplay() {
    this.setState(state => ({
      display: !state.display
    }));
  }
  render() {
    // Change code below this line
    return (
       <div>
         <button onClick={this.toggleDisplay}>Toggle Display</button>
         {this.state.display && <h1>Displayed!</h1>}
       </div>
    );
  }
};
```

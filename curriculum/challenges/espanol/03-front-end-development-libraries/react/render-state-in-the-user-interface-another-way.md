---
id: 5a24c314108439a4d4036172
title: Otra manera de renderizar el estado en la interfaz de usuario
challengeType: 6
forumTopicId: 301408
dashedName: render-state-in-the-user-interface-another-way
---

# --description--

Hay otra manera de acceder al `state` de un componente. En el método `render()`, antes de la sentencia `return`, se puede escribir JavaScript directamente. Por ejemplo, puedes declarar funciones, acceder a datos de `state` o `props`, realizar cálculos sobre estos datos, etc. Luego, puedes asignar cualquier dato a las variables, a las que tienes acceso en la sentencia `return`.

# --instructions--

En el método de renderización de `MyComponent`, define una `const` llamada `name` y asígnalo igual al valor del nombre en el `state` del componente. Debido a que puedes escribir JavaScript directamente en esta parte del código, no tienes que incluir esta referencia entre llaves.

A continuación, en la sentencia return, renderiza este valor en una etiqueta `h1` usando la variable `name`. Recuerda, necesitas usar la sintaxis JSX (llaves para JavaScript) en la sentencia return.

# --hints--

`MyComponent` debe tener una clave `name` con valor `freeCodeCamp` almacenado en su estado.

```js
assert(
  Enzyme.mount(React.createElement(MyComponent)).state('name') ===
    'freeCodeCamp'
);
```

`MyComponent` debe renderizar un encabezado `h1` incluido en un solo `div`.

```js
assert(
  /<div><h1>.*<\/h1><\/div>/.test(
    Enzyme.mount(React.createElement(MyComponent)).html()
  )
);
```

La etiqueta `h1` renderizada debe incluir una referencia a `{name}`.

```js
(getUserInput) =>
  assert(/<h1>\n*\s*\{\s*name\s*\}\s*\n*<\/h1>/.test(getUserInput('index')));
```

El encabezado renderizado `h1` sólo debe contener texto renderizado del estado del componente.

```js
async () => {
  const waitForIt = (fn) =>
    new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250));
  const mockedComponent = Enzyme.mount(React.createElement(MyComponent));
  const first = () => {
    mockedComponent.setState({ name: 'TestName' });
    return waitForIt(() => mockedComponent.html());
  };
  const firstValue = await first();
  assert(firstValue === '<div><h1>TestName</h1></div>');
};
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
      name: 'freeCodeCamp'
    }
  }
  render() {
    // Change code below this line

    // Change code above this line
    return (
      <div>
        { /* Change code below this line */ }

        { /* Change code above this line */ }
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
      name: 'freeCodeCamp'
    }
  }
  render() {
    // Change code below this line
    const name = this.state.name;
    // Change code above this line
    return (
      <div>
        { /* Change code below this line */ }
        <h1>{name}</h1>
        { /* Change code above this line */ }
      </div>
    );
  }
};
```

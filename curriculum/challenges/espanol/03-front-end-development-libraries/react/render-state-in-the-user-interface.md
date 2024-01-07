---
id: 5a24c314108439a4d4036171
title: Renderiza el estado en la interfaz de usuario
challengeType: 6
forumTopicId: 301409
dashedName: render-state-in-the-user-interface
---

# --description--

Una vez que se define el estado inicial de un componente, se puede mostrar cualquier parte del mismo en la interfaz de usuario que se renderiza. Si un componente tiene estado, siempre tendrá acceso a los datos en `state` en su método `render()`. Puedes acceder a los datos con `this.state`.

Si quieres acceder a un valor de estado dentro del `return` del método de renderización, tienes que encerrar el valor entre llaves.

`state` es una de las características más poderosas de los componentes de React. Esto te permite realizar un seguimiento de los datos importantes en tu aplicación y generar una interfaz de usuario en respuesta a los cambios en estos datos. Si tus datos cambian, tu interfaz de usuario cambiará. React usa lo que se llama un DOM virtual, para realizar un seguimiento de los cambios detrás de escena. Cuando se actualizan los datos de estado, activa un re-renderizado de los componentes usando esos datos: incluyendo componentes hijos que recibieron los datos como un prop. React actualiza el DOM actual, pero solo cuando sea necesario. Esto significa que no tienes que preocuparte por cambiar el DOM. Tú simplemente declara cómo debe verse la interfaz de usuario.

Ten en cuenta que si creas un componente con estado, ningún otro componente es consciente de su `state`. Su `state` está completamente encapsulado, o local a ese componente, a menos que pases datos de estado a un componente hijo como `props`. Esta noción de `state` encapsulado, es muy importante porque te permite escribir cierta lógica, luego tener esa lógica contenida y aislada en un lugar de tu código.

# --instructions--

En el editor de código, `MyComponent` ya tiene estado. Define una etiqueta `h1` en el método de renderizado del componente que renderiza el valor del `name` desde el estado del componente.

**Note:** El `h1` solo debe renderizar el valor de `state` y nada más. En JSX, cualquier código que escribas con llaves `{ }` será tratado como JavaScript. Así que para acceder al valor desde el `state` solo hay que encerrar la referencia entre llaves.

# --hints--

`MyComponent` debe tener un `name` clave con valor `freeCodeCamp` almacenado en su estado.

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
  const getValue = firstValue.replace(/\s/g, '');
  assert(getValue === '<div><h1>TestName</h1></div>');
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
    return (
      <div>
        { /* Change code below this line */ }
        <h1>{this.state.name}</h1>
        { /* Change code above this line */ }
      </div>
    );
  }
};
```

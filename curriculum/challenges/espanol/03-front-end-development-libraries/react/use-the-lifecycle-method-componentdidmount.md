---
id: 5a24c314108439a4d403617d
title: Usa el método de ciclo de vida componentDidMount
challengeType: 6
forumTopicId: 301422
dashedName: use-the-lifecycle-method-componentdidmount
---

# --description--

La mayoría de los desarrolladores web, en algún momento, necesitan llamar al endpoint de un API para obtener datos. Si estás trabajando con React, es importante saber dónde realizar esta acción.

La mejor práctica con React es ubicar las llamadas API o cualquier llamada a tu servidor en el método de ciclo de vida `componentDidMount()`. Este método se llama después de que un componente es montado (mounted) en el DOM. Cualquier llamada a `setState()` aquí desencadenará un re-renderizado de tu componente. Cuando se llame a una API en este método, y se modifique el estado con los datos que la API devuelve, automáticamente se ejecutará una actualización una vez que los datos sean recibidos.

# --instructions--

Hay una llamada simulada al API en `componentDidMount()`. Esta llamada modifica el estado después de 2.5 segundos para simular una llamada a un servidor para obtener datos. Este ejemplo consulta el total de usuarios activos actual para un sitio. En el método render, se renderiza el valor de `activeUsers` en el `h1` después del texto `Active Users:`. Mira lo que sucede en la vista previa, y siéntete libre de cambiar el tiempo de espera para ver los diferentes efectos.

# --hints--

`MyComponent` debe mostrar un elemento `div` el cual contiene una etiqueta `h1`.

```js
assert(
  (() => {
    const mockedComponent = Enzyme.mount(React.createElement(MyComponent));
    return (
      mockedComponent.find('div').length === 1 &&
      mockedComponent.find('h1').length === 1
    );
  })()
);
```

El estado del componente debe actualizarse con una función timeout en `componentDidMount`.

```js
assert(
  (() => {
    const mockedComponent = Enzyme.mount(React.createElement(MyComponent));
    return new RegExp('setTimeout(.|\n)+setState(.|\n)+activeUsers').test(
      String(mockedComponent.instance().componentDidMount)
    );
  })()
);
```

La etiqueta `h1` debe renderizar el valor `activeUsers` del estado de `MyComponent`.

```js
(() => {
  const mockedComponent = Enzyme.mount(React.createElement(MyComponent));
  const first = () => {
    mockedComponent.setState({ activeUsers: 1237 });
    return mockedComponent.find('h1').text();
  };
  const second = () => {
    mockedComponent.setState({ activeUsers: 1000 });
    return mockedComponent.find('h1').text();
  };
  assert(new RegExp('1237').test(first()) && new RegExp('1000').test(second()));
})();
```

# --seed--

## --after-user-code--

```jsx
ReactDOM.render(<MyComponent />, document.getElementById('root'));
```

## --seed-contents--

```jsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeUsers: null
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        activeUsers: 1273
      });
    }, 2500);
  }
  render() {
    return (
      <div>
        {/* Change code below this line */}
        <h1>Active Users: </h1>
        {/* Change code above this line */}
      </div>
    );
  }
}
```

# --solutions--

```jsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeUsers: null
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        activeUsers: 1273
      });
    }, 2500);
  }
  render() {
    return (
      <div>
        <h1>Active Users: {this.state.activeUsers}</h1>
      </div>
    );
  }
}
```

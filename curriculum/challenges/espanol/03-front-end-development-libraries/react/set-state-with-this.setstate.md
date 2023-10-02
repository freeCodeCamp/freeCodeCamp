---
id: 5a24c314108439a4d4036173
title: Define el estado con this.setState
challengeType: 6
forumTopicId: 301412
dashedName: set-state-with-this-setstate
---

# --description--

Los desafíos anteriores cubrieron el componente `state` y cómo inicializar el state en el `constructor`. También hay una forma de cambiar el `state` del componente. React proporciona un método para actualizar el componente `state` llamado `setState`. El método `setState` dentro de tu clase de componente se llama así: `this.setState()`, pasando un objeto con pares clave-valor. Las claves son tus propiedades de estado y los valores son datos de estado actualizados. Por ejemplo, si estuviéramos almacenando un `username` en estado y quisiéramos actualizarlo, se vería así:

```jsx
this.setState({
  username: 'Lewis'
});
```

React espera que nunca modifiques `state` directamente. En su lugar, siempre usa `this.setState()` cuando ocurran cambios de estado. Además, ten en cuenta que React puede agrupar múltiples actualizaciones de estado con el fin de mejorar el rendimiento. Esto significa que las actualizaciones de estado a través del método `setState` pueden ser asíncronas. Existe una sintaxis alternativa para el método `setState` que proporciona una forma de evitar ese problema. Esto es raramente necesario, ¡pero es bueno tenerlo en cuenta! Por favor, consulte la <a href="https://www.freecodecamp.org/news/what-is-state-in-react-explained-with-examples/" target="_blank" rel="noopener noreferrer nofollow">documentación de React</a> para más información.

# --instructions--

Hay un elemento `button` en el editor de código que tiene un controlador `onClick()`. Este controlador es activado cuando el `button` recibe un evento clic en el navegador, y ejecuta el método `handleClick` definido en `MyComponent`. Dentro del método `handleClick`, actualiza el componente `state` usando `this.setState()`. Establece la propiedad `name` en el `state` para igualar la cadena `React Rocks!`.

Haz clic en el botón y observa la actualización de estado renderizada. No te preocupes si no entiendes completamente cómo funciona el código del controlador de clics hasta ahora. Será cubierto en los siguientes desafíos.

# --hints--

El estado de `MyComponent` debe inicializarse con el par de valores clave `{ name: Initial State }`.

```js
assert(
  Enzyme.mount(React.createElement(MyComponent)).state('name') ===
    'Initial State'
);
```

`MyComponent` debe renderizar un encabezado `h1`.

```js
assert(Enzyme.mount(React.createElement(MyComponent)).find('h1').length === 1);
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
  assert(/<h1>TestName<\/h1>/.test(firstValue));
};
```

Llamar al método `handleClick` en `MyComponent` debe establecer la propiedad de nombre en estado igual a `React Rocks!`.

```js
async () => {
  const waitForIt = (fn) =>
    new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250));
  const mockedComponent = Enzyme.mount(React.createElement(MyComponent));
  const first = () => {
    mockedComponent.setState({ name: 'Before' });
    return waitForIt(() => mockedComponent.state('name'));
  };
  const second = () => {
    mockedComponent.instance().handleClick();
    return waitForIt(() => mockedComponent.state('name'));
  };
  const firstValue = await first();
  const secondValue = await second();
  assert(firstValue === 'Before' && secondValue === 'React Rocks!');
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
      name: 'Initial State'
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    // Change code below this line

    // Change code above this line
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Click Me</button>
        <h1>{this.state.name}</h1>
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
      name: 'Initial State'
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
     // Change code below this line
    this.setState({
      name: 'React Rocks!'
    });
    // Change code above this line
  }
  render() {
    return (
      <div>
        <button onClick = {this.handleClick}>Click Me</button>
        <h1>{this.state.name}</h1>
      </div>
    );
  }
};
```

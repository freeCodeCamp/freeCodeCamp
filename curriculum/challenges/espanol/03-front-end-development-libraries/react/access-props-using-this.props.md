---
id: 5a24c314108439a4d403616e
title: Accede a propiedades "props" usando this.props
challengeType: 6
forumTopicId: 301375
dashedName: access-props-using-this-props
---

# --description--

Los últimos desafíos cubrieron las formas básicas de pasar propiedades a un componente hijo. Pero, ¿qué pasa si el componente hijo al que se le pasa una propiedad es un componente de clase ES6, en lugar de un componente funcional sin estado? Los componentes de clase ES6 usan una convención un poco diferente para acceder a las propiedades.

Cada vez que se hace referencia a un componente de clase en sí mismo, se utiliza la palabra clave `this`. Para acceder a las propiedades dentro de un componente de clase, se antepone al código que se utiliza para acceder a él con `this`. Por ejemplo, si un componente de clase de ES6 tiene una propiedad llamada `data`, se escribirá `{this.props.data}` en JSX.

# --instructions--

Renderiza una instancia del componente `Welcome` en el componente padre `App`. Aquí, dale a `Welcome` un prop de `name` y asígnale un valor de una cadena. Dentro del hijo, `Welcome`, accede el prop `name` dentro de las etiquetas `strong`.

# --hints--

El componente `App` debe devolver un solo elemento `div`.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(App));
    return mockedComponent.children().type() === 'div';
  })()
);
```

El hijo de `App` debe ser el componente `Welcome`.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(App));
    return (
      mockedComponent.children().childAt(0).name() === 'Welcome'
    );
  })()
);
```

El componente `Welcome` debe tener un prop llamada `name`.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(App));
    return mockedComponent.find('Welcome').props().name;
  })()
);
```

El componente `Welcome` debe mostrar la cadena que pasas como el `name` prop dentro de las etiquetas `strong`.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(App));
    return (
      mockedComponent.find('strong').text() ===
      mockedComponent.find('Welcome').props().name
    );
  })()
);
```

# --seed--

## --after-user-code--

```jsx
ReactDOM.render(<App />, document.getElementById('root'))
```

## --seed-contents--

```jsx
class App extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
        <div>
            { /* Change code below this line */ }
            <Welcome />
            { /* Change code above this line */ }
        </div>
    );
  }
};

class Welcome extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
        <div>
          { /* Change code below this line */ }
          <p>Hello, <strong></strong>!</p>
          { /* Change code above this line */ }
        </div>
    );
  }
};
```

# --solutions--

```jsx
class Welcome extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
        <div>
          { /* Change code below this line */ }
          <p>Hello, <strong>{this.props.name}</strong>!</p>
          { /* Change code above this line */ }
        </div>
    );
  }
};

class App extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
        <div>
            { /* Change code below this line */ }
            <Welcome name="Quincy"/>
            { /* Change code above this line */ }
        </div>
    );
  }
};
```

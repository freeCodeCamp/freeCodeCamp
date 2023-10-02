---
id: 5a24c314108439a4d4036176
title: Usa el estado para alternar un elemento
challengeType: 6
forumTopicId: 301421
dashedName: use-state-to-toggle-an-element
---

# --description--

A veces puedes necesitar conocer el estado anterior al actualizar el estado. Sin embargo, las actualizaciones del estado pueden ser asíncronas: esto significa que React puede procesar múltiples llamadas a `setState()` en una sola actualización. Esto significa que no puedes confiar en el valor anterior de `this.state` o `this.props` al calcular el siguiente valor. Por lo tanto, no debes usar código como este:

```jsx
this.setState({
  counter: this.state.counter + this.props.increment
});
```

En su lugar, debes pasar una función a `setState` que te permitirá acceder al estado y props. El usar una función con `setState` te garantiza que estás trabajando con los valores más actuales del estado y props. Esto significa que lo anterior debe reescribirse así:

```jsx
this.setState((state, props) => ({
  counter: state.counter + props.increment
}));
```

También puedes usar un formulario sin `props` si necesitas solo el `state`:

```jsx
this.setState(state => ({
  counter: state.counter + 1
}));
```

Ten en cuenta que tienes que encapsular el objeto literal entre paréntesis, de lo contrario JavaScript pensará que es un bloque de código.

# --instructions--

`MyComponent` tiene una propiedad `visibility` que se inicializa con el valor `false`. El método de renderización devuelve un resultado si el valor de `visibility` es verdadero, y un resultado diferente si es falso.

Actualmente, no hay forma de actualizar la propiedad `visibility` en el `state` del componente. El valor debe cambiar entre verdadero y falso. Hay un manejador para el evento clic en el botón que activa un método de clase llamado `toggleVisibility()`. Pasa una función a `setState` para definir este método, de tal forma que el `state` de `visibility` cambie al valor opuesto cuando se llame el método. Si `visibility` es `false`, el método lo cambia a `true` y viceversa.

Finalmente, haz clic en el botón para ver la renderizado condicional del componente basado en su `state`.

**Pista:** ¡No olvides enlazar la palabra clave `this` al método en el `constructor`!

# --hints--

`MyComponent` debe devolver un elemento `div` el cual debe contener una etiqueta `button`.

```js
assert.strictEqual(
  Enzyme.mount(React.createElement(MyComponent)).find('div').find('button')
    .length,
  1
);
```

El estado de `MyComponent` debe inicializarse con una propiedad `visibility` establecida a `false`.

```js
assert.strictEqual(
  Enzyme.mount(React.createElement(MyComponent)).state('visibility'),
  false
);
```

Al hacer clic en el botón se debe cambiar la propiedad `visibility` en el estado entre `true` y `false`.

```js
(() => {
  const mockedComponent = Enzyme.mount(React.createElement(MyComponent));
  const first = () => {
    mockedComponent.setState({ visibility: false });
    return mockedComponent.state('visibility');
  };
  const second = () => {
    mockedComponent.find('button').simulate('click');
    return mockedComponent.state('visibility');
  };
  const third = () => {
    mockedComponent.find('button').simulate('click');
    return mockedComponent.state('visibility');
  };
  const firstValue = first();
  const secondValue = second();
  const thirdValue = third();
  assert(!firstValue && secondValue && !thirdValue);
})();
```

Una función anónima debe pasarse a `setState`.

```js
const paramRegex = '[a-zA-Z$_]\\w*(,[a-zA-Z$_]\\w*)?';
assert(
  new RegExp(
    'this\\.setState\\((function\\(' +
      paramRegex +
      '\\){|([a-zA-Z$_]\\w*|\\(' +
      paramRegex +
      '\\))=>)'
  ).test(__helpers.removeWhiteSpace(code))
);
```

`this` no debe usarse dentro de `setState`

```js
assert(!/this\.setState\([^}]*this/.test(code));
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
      visibility: false
    };
    // Change code below this line

    // Change code above this line
  }
  // Change code below this line

  // Change code above this line
  render() {
    if (this.state.visibility) {
      return (
        <div>
          <button onClick={this.toggleVisibility}>Click Me</button>
          <h1>Now you see me!</h1>
        </div>
      );
    } else {
      return (
        <div>
          <button onClick={this.toggleVisibility}>Click Me</button>
        </div>
      );
    }
  }
}
```

# --solutions--

```jsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: false
    };
    this.toggleVisibility = this.toggleVisibility.bind(this);
  }
  toggleVisibility() {
    this.setState(state => ({
      visibility: !state.visibility
    }));
  }
  render() {
    if (this.state.visibility) {
      return (
        <div>
          <button onClick={this.toggleVisibility}>Click Me</button>
          <h1>Now you see me!</h1>
        </div>
      );
    } else {
      return (
        <div>
          <button onClick={this.toggleVisibility}>Click Me</button>
        </div>
      );
    }
  }
}
```

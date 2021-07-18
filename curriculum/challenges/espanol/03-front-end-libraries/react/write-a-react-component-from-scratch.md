---
id: 5a24c314108439a4d4036168
title: Escribe un componente React desde cero
challengeType: 6
forumTopicId: 301424
dashedName: write-a-react-component-from-scratch
---

# --description--

Ahora que has aprendido los conceptos básicos de JSX y componentes React, es el momento de escribir un componente por tu cuenta. Los componentes React son el bloque de construcción principal de las aplicaciones React, por lo que es importante familiarizarse con cómo escribirlos. Recuerda, un componente típico de React es una `class` ES6 que hereda de `React.Component`. Tiene un método de render que retorna HTML (de JSX) o `null`. Esta es la estructura básica de un componente React. Una vez que tengas un buen entendimiento de esto, estarás preparado para empezar a construir proyectos React más complejos.

# --instructions--

Define una clase `MyComponent` que herede de `React.Component`. Su método render debe devolver un `div` que contenga una etiqueta `h1` con el texto: `My First React Component!` en él. Utiliza este texto de manera exacta, las mayúsculas, minúsculas y puntuación son importantes. También asegúrate de llamar el constructor de tu componente.

Renderiza este componente al DOM usando `ReactDOM.render()`. Hay un `div` con `id='challenge-node'` disponible para que lo uses.

# --hints--

Debe existir un componente React llamado `MyComponent`.

```js
(getUserInput) =>
  assert(
    __helpers
      .removeWhiteSpace(getUserInput('index'))
      .includes('classMyComponentextendsReact.Component{')
  );
```

`MyComponent` debe contener una etiqueta `h1` con texto `My First React Component!`. Las mayúsculas, minúsculas y puntuación son importantes.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(MyComponent));
    return mockedComponent.find('h1').text() === 'My First React Component!';
  })()
);
```

`MyComponent` debe renderizarse al DOM.

```js
assert(document.getElementById('challenge-node').childNodes.length === 1);
```

`MyComponent` debe tener un constructor invocando `super` con las `props`.

```js
assert(
  MyComponent.toString().includes('MyComponent(props)') &&
    MyComponent.toString().includes('_super.call(this, props)')
);
```

# --seed--

## --seed-contents--

```jsx
// Change code below this line
```

# --solutions--

```jsx
// Change code below this line
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>My First React Component!</h1>
      </div>
    );
  }
};

ReactDOM.render(<MyComponent />, document.getElementById('challenge-node'));
```

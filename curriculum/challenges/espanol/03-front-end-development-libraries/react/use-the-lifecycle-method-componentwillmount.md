---
id: 5a24c314108439a4d403617c
title: Usa el método de ciclo de vida componentWillMount
challengeType: 6
forumTopicId: 301423
dashedName: use-the-lifecycle-method-componentwillmount
---

# --description--

Los componentes React tienen varios métodos especiales que proporcionan oportunidades para realizar acciones en puntos específicos en el ciclo de vida de un componente. Estos se llaman métodos de ciclo de vida, o interceptores (hooks) de ciclo de vida, y te permiten interceptar componentes en determinados momentos del tiempo. Esto puede ser antes de que se rendericen, antes de que se actualicen, antes de que reciban las props, antes de que se desmonten, etc. Aquí hay una lista de algunos de los métodos principales del ciclo de vida: `componentWillMount()` `componentDidMount()` `shouldComponentUpdate()` `componentDidUpdate()` `componentWillUnmount()`. Las siguientes lecciones cubrirán algunos de los casos de uso básicos para estos métodos del ciclo de vida.

**Nota:** El método de ciclo de vida `componentWillMount` se desaprobará en una versión futura de 16.X y se eliminará en la versión 17. Más información en este <a href="https://www.freecodecamp.org/news/how-to-safely-use-reacts-life-cycles-with-fiber-s-async-rendering-fd4469ebbd8f/" target="_blank" rel="noopener noreferrer nofollow">artículo</a>

# --instructions--

El método `componentWillMount()` es invocado antes del método `render()` cuando un componente está siendo montado en el DOM. Imprime algo en la consola dentro de `componentWillMount()` - puede que quieras tener la consola del navegador abierta para ver el resultado.

# --hints--

`MyComponent` debe renderizar un elemento `div`.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(MyComponent));
    return mockedComponent.find('div').length === 1;
  })()
);
```

`console.log` debe ser llamado en `componentWillMount`.

```js
assert(
  (function () {
    const lifecycle = React.createElement(MyComponent)
      .type.prototype.componentWillMount.toString()
      .replace(/ /g, '');
    return lifecycle.includes('console.log(');
  })()
);
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
  }
  componentWillMount() {
    // Change code below this line

    // Change code above this line
  }
  render() {
    return <div />
  }
};
```

# --solutions--

```jsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    // Change code below this line
    console.log('Component is mounting...');
    // Change code above this line
  }
  render() {
    return <div />
  }
};
```

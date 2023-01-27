---
id: 5a24c314108439a4d403617c
title: Usar o método do ciclo de vida componentWillMount
challengeType: 6
forumTopicId: 301423
dashedName: use-the-lifecycle-method-componentwillmount
---

# --description--

Componentes do React têm vários métodos especiais que fornecem oportunidades de executar ações em pontos específicos do ciclo de vida de um componente. Eles são chamados de métodos do ciclo de vida, ou hooks do ciclo de vida, e permitem que você capture componentes em certos pontos do tempo. Isso pode ser antes que sejam renderizados, antes que eles atualizem, antes que eles recebam props, antes que eles desmontem e assim por diante. Aqui está uma lista de alguns dos principais métodos do ciclo de vida: `componentWillMount()` `componentDidMount()` `shouldComponentUpdate()` `componentDidUpdate()` `componentWillUnmount()` As próximas aulas cobrirão alguns dos casos de uso básicos para estes métodos de ciclo de vida.

**Observação:** o método do ciclo de vida `componentWillMount` será descontinuado em uma versão futura de 16.X e removido na versão 17. Saiba mais neste <a href="https://www.freecodecamp.org/news/how-to-safely-use-reacts-life-cycles-with-fiber-s-async-rendering-fd4469ebbd8f/" target="_blank" rel="noopener noreferrer nofollow">artigo</a>

# --instructions--

O método `componentWillMount()` é chamado antes do método `render()` quando um componente está sendo montado no DOM. Registre algo no console dentro de `componentWillMount()` - você pode querer que seu console do navegador esteja aberto para ver a saída.

# --hints--

`MyComponent` deve retornar um elemento `div`.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(MyComponent));
    return mockedComponent.find('div').length === 1;
  })()
);
```

`console.log` deve ser chamado em `componentWillMount`.

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

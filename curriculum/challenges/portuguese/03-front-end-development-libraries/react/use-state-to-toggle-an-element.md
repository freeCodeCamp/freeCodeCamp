---
id: 5a24c314108439a4d4036176
title: Usar state para alternar um elemento
challengeType: 6
forumTopicId: 301421
dashedName: use-state-to-toggle-an-element
---

# --description--

Às vezes você pode precisar saber o estado anterior ao atualizar o estado. No entanto, atualizações de estado podem ser assíncronas - isso significa que React pode fazer várias chamadas `setState()` em uma única atualização. Isto significa que você não pode confiar no valor anterior de `this.state` ou `this.props` ao calcular o próximo valor. Então, você não deve usar códigos como este:

```jsx
this.setState({
  counter: this.state.counter + this.props.increment
});
```

Ao invés disso, você deve passar a `setState` uma função que permita acessar state e props. Usando uma função com `setState` garante que você está trabalhando com os valores mais atuais de state e props. Isto significa que o acima deve ser reescrito como:

```jsx
this.setState((state, props) => ({
  counter: state.counter + props.increment
}));
```

Você também pode usar um formulário sem `props` se você precisar apenas do `state`:

```jsx
this.setState(state => ({
  counter: state.counter + 1
}));
```

Observe que você tem que envolver o objeto literalmente entre parênteses, caso contrário, JavaScript pensa que é um bloco de código.

# --instructions--

`MyComponent` tem uma propriedade `visibility` que foi inicializada como `false`. O método de renderização retorna uma view se o valor de `visibility` for verdadeiro e uma view diferente se for falsa.

Atualmente, não há forma de atualizar a propriedade `visibility` no `state` do componente. O valor deve alternar entre verdadeiro e falso. Há um manipulador de cliques no botão que aciona um método de classe chamado `toggleVisibility()`. Passe uma função para `setState` para definir esse método para que o `state` de `visibility` alterne para o valor oposto quando o método for chamado. Se `visibility` for `false`, o método define para `true`, e vice-versa.

Finalmente, clique no botão para ver a renderização condicional do componente com base no seu `state`.

**Dica:** não se esqueça de vincular a palavra-chave `this` ao método no `constructor`!

# --hints--

`MyComponent` deve retornar um elemento `div` que contém um `button`.

```js
assert.strictEqual(
  Enzyme.mount(React.createElement(MyComponent)).find('div').find('button')
    .length,
  1
);
```

O state de `MyComponent` deve inicializar com uma propriedade `visibility` definida como `false`.

```js
assert.strictEqual(
  Enzyme.mount(React.createElement(MyComponent)).state('visibility'),
  false
);
```

Clicar no elemento do botão deve alternar a propriedade `visibility` no state entre `true` e `false`.

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

Uma função anônima deve ser passada para `setState`.

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

`this` não deve ser usado dentro de `setState`

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

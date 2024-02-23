---
id: 5a24c314108439a4d4036174
title: Vincular 'this' para um método de classe
challengeType: 6
forumTopicId: 301379
dashedName: bind-this-to-a-class-method
---

# --description--

Além de definir e atualizar `state`, você também pode definir métodos para o seu componente de classe. Um método de classe tipicamente precisa usar a palavra-chave `this` para que possa acessar as propriedades na classe (assim como `state` e `props`) dentro do escopo do método. Existem algumas maneiras para permitir que os métodos da sua classe acessem `this`.

Uma forma comum é explicitamente vincular `this` no construtor para que `this` torne-se vinculado aos métodos da classe quando o componente é inicializado. Você pode ter percebido que o último desafio usou `this.handleClick = this.handleClick.bind(this)` para o método `handleClick` no construtor. Em seguida, quando você chama uma função como `this.setState()` dentro do método da classe, `this` refere-se a classe e não será `undefined`.

**Observação:** a palavra-chave `this` é um dos aspectos mais confusos do JavaScript mas ele exerce uma papel importante em React. Embora o seu comportamento aqui é completamente normal, essas aulas não são o lugar para uma análise profunda de `this` portanto, por favor consulte outras aulas se o conteúdo acima for confuso!

# --instructions--

O editor de código possui um componente com um `state` que mantém o controle do texto. Também possui um método o qual o permite definir o texto para `You clicked!`. No entanto, o método não funciona porque está usando a palavra-chave `this` que é undefined. Corrija isso ao vincular explicitamente `this` ao método `handleClick()` no construtor do componente.

Em seguida, adicione um manipulador de clique ao elemento `button` no método de renderização. Ele deve acionar o método `handleClick()` quando o botão recebe um evento de clique. Lembre-se de que o método que você passou ao manipulador `onClick` precisa de chaves porque ele deve ser interpretado diretamente como JavaScript.

Assim que você completar os passos acima você deve ser capaz de clicar o botão e ver `You clicked!`.

# --hints--

`MyComponent` deve retornar um elemento `div` o qual envolve dois elementos, os elementos button e `h1`, nessa ordem.

```js
assert(
  Enzyme.mount(React.createElement(MyComponent)).find('div').length === 1 &&
    Enzyme.mount(React.createElement(MyComponent))
      .find('div')
      .childAt(0)
      .type() === 'button' &&
    Enzyme.mount(React.createElement(MyComponent))
      .find('div')
      .childAt(1)
      .type() === 'h1'
);
```

O state de `MyComponent` deve inicializar com o par de chave e valor `{ text: "Hello" }`.

```js
assert(
  Enzyme.mount(React.createElement(MyComponent)).state('text') === 'Hello'
);
```

Clicar o elemento `button` deve executar o método `handleClick` e definir o estado de `text` para `You clicked!`.

```js
async () => {
  const waitForIt = (fn) =>
    new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250));
  const mockedComponent = Enzyme.mount(React.createElement(MyComponent));
  const first = () => {
    mockedComponent.setState({ text: 'Hello' });
    return waitForIt(() => mockedComponent.state('text'));
  };
  const second = () => {
    mockedComponent.find('button').simulate('click');
    return waitForIt(() => mockedComponent.state('text'));
  };
  const firstValue = await first();
  const secondValue = await second();
  assert(firstValue === 'Hello' && secondValue === 'You clicked!');
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
      text: "Hello"
    };
    // Change code below this line

    // Change code above this line
  }
  handleClick() {
    this.setState({
      text: "You clicked!"
    });
  }
  render() {
    return (
      <div>
        { /* Change code below this line */ }
        <button>Click Me</button>
        { /* Change code above this line */ }
        <h1>{this.state.text}</h1>
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
      text: "Hello"
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({
      text: "You clicked!"
    });
  }
  render() {
    return (
      <div>
        <button onClick = {this.handleClick}>Click Me</button>
        <h1>{this.state.text}</h1>
      </div>
    );
  }
};
```

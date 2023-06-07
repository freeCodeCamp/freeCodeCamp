---
id: 5a24c314108439a4d4036173
title: Definir estado com this.setState
challengeType: 6
forumTopicId: 301412
dashedName: set-state-with-this-setstate
---

# --description--

Os desafios anteriores abordaram o `state` dos componentes e como inicializar state no `constructor`. Há também uma maneira de alterar o `state` do componente. React fornece um método para atualizar o componente `state` chamado `setState`. Você chama o método `setState` dentro da sua classe de componente assim: `this.setState()`, passando como parâmetro um objeto com pares de valor chave. As chaves são suas propriedades do estado e os valores são dados do estado atualizados. Por exemplo, se armazenássemos um `username` em state e quiséssemos atualizá-lo, ficaria assim:

```jsx
this.setState({
  username: 'Lewis'
});
```

React espera que você nunca modifique o `state` diretamente, em vez disso sempre use `this.setState()` quando as mudanças de estado ocorrerem. Além disso, você deve notar que React pode agrupar várias atualizações de estado para melhorar o desempenho. Isso significa que atualizações de estado através do método `setState` podem ser assíncronas. Existe uma sintaxe alternativa para o método `setState` que fornece uma forma de contornar esse problema. Isso raramente é necessário, mas é bom ter isso em mente! Consulte nosso <a href="https://www.freecodecamp.org/news/what-is-state-in-react-explained-with-examples/" target="_blank" rel="noopener noreferrer nofollow">artigo sobre React</a> para saber mais detalhes.

# --instructions--

Há um elemento`button` no editor de código que tem um manipulador `onClick()`. Este manipulador é acionado quando o `button` recebe um evento de clique no navegador e executa o método `handleClick` definido no `MyComponent`. Dentro do método `handleClick`, atualize o componente `state` usando `this.setState()`. Defina a propriedade `name` no `state` para ser igual à string `React Rocks!`.

Clique no botão e veja a atualização do estado renderizado. Não se preocupe se você não entender completamente como o código do manipulador de cliques funciona neste momento. Isso será tratado nos desafios futuros.

# --hints--

O state de `MyComponent` deve inicializar com o par de chave e valor `{ name: Initial State }`.

```js
assert(
  Enzyme.mount(React.createElement(MyComponent)).state('name') ===
    'Initial State'
);
```

`MyComponent` deve retornar um elemento de título `h1`.

```js
assert(Enzyme.mount(React.createElement(MyComponent)).find('h1').length === 1);
```

O elemento de título `h1` renderizado deve conter apenas texto renderizado do estado do componente.

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

Chamar o método `handleClick` no `MyComponent` deve definir a propriedade name em state para igual a `React Rocks!`.

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

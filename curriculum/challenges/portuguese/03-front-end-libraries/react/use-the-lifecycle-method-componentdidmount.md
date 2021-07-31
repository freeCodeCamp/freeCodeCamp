---
id: 5a24c314108439a4d403617d
title: Usar o método do ciclo de vida componentDidMount
challengeType: 6
forumTopicId: 301422
dashedName: use-the-lifecycle-method-componentdidmount
---

# --description--

A maioria dos desenvolvedores web, em algum momento, precisa chamar uma rota de uma API para recuperar dados. Se você está trabalhando com React, é importante saber onde executar esta ação.

A melhor prática com React é colocar chamadas de API ou qualquer chamada para seu servidor no método do ciclo de vida `componentDidMount()`. Este método é chamado depois que um componente é montado no DOM. Qualquer chamada para `setState()` aqui ativará uma nova renderização do componente. Quando você chamar uma API neste método, e definir seu estado com os dados que a API retorna, ele automaticamente acionará uma atualização quando receber os dados.

# --instructions--

Há uma chamada de API simulada em `componentDidMount()`. Ele define o estado após 2,5 segundos para simular a chamada de um servidor para recuperar dados. Este exemplo solicita o total de usuários ativos atuais para um site. No método de renderização, renderiza o valor de `activeUsers` no `h1` após o texto `Active Users:`. Observe o que acontece na pré-visualização e sinta-se livre para mudar o tempo limite para ver os diferentes efeitos.

# --hints--

`MyComponent` deve renderizar um elemento `div` o qual envolve a tag `h1`.

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

State do componente deve ser atualizado com uma função de timeout em `componentDidMount`.

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

A tag `h1` deve renderizar o valor `activeUsers` do state de `MyComponent`.

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

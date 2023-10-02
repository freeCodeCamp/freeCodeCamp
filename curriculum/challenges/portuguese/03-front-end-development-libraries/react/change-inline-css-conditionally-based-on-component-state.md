---
id: 5a24c314108439a4d4036189
title: Mudar CSS em linha condicionalmente com base no estado do componente
challengeType: 6
forumTopicId: 301380
dashedName: change-inline-css-conditionally-based-on-component-state
---

# --description--

Nesse ponto, você já viu diversas aplicações de renderização condicional e o uso de estilos em linha. Aqui está mais um exemplo que combina ambos esses tópicos. Você também pode renderizar CSS condicionalmente baseado no estado de um componente React. Para fazer isso, você verifica por uma condição, e se essa condição for atendida, você modifica o objeto styles que foi atribuído aos elementos do JSX no método de renderização.

É importante entender esse paradigma porque é uma mudança dramática da abordagem mais tradicional de aplicar estilos ao modificar diretamente os elementos DOM (o que é muito comum com jQuery, por exemplo). Nessa abordagem, você precisa monitorar quando um elemento mudar e também lidar com a manipulação diretamente. Pode se tornar difícil acompanhar as mudanças, tornando a interface de usuário potencialmente imprevisível. Quando você define um objeto estilo baseado em uma condição, você descreve como a interface deve se parecer com uma função do estado da aplicação. Há um fluxo claro de informação que só avança em uma direção. Esse é o método preferido ao escrever aplicações com React.

# --instructions--

O editor de código tem um simples componente de entrada controlado com uma borda estilizada. Você quer estilizar essa borda como vermelha se o usuário escrever um texto com mais de 15 caracteres na caixa de entrada. Adicione uma condição para verificar por isso e, se a condição for válida, defina o estilo da borda do input para `3px solid red`. Você pode experimentá-lo inserindo texto no input.

# --hints--

O componente `GateKeeper` deve renderizar um elemento `div`.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(GateKeeper));
    return mockedComponent.find('div').length === 1;
  })()
);
```

O componente `GateKeeper` deve ser inicializado com a chave de estado `input` definida para uma string vazia.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(GateKeeper));
    return mockedComponent.state().input === '';
  })()
);
```

O componente `GateKeeper` deve renderizar uma tag `h3` e uma tag `input`.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(GateKeeper));
    return (
      mockedComponent.find('h3').length === 1 &&
      mockedComponent.find('input').length === 1
    );
  })()
);
```

A tag `input` deve inicialmente ter o estilo `1px solid black` para a propriedade `border`.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(GateKeeper));
    return (
      mockedComponent.find('input').props().style.border === '1px solid black'
    );
  })()
);
```

A tag `input` deve ser estilizada com a borda como `3px solid red` se o valor do input no estado tiver mais de 15 caracteres.

```js
async () => {
  const waitForIt = (fn) =>
    new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 100));
  const mockedComponent = Enzyme.mount(React.createElement(GateKeeper));
  const simulateChange = (el, value) =>
    el.simulate('change', { target: { value } });
  let initialStyle = mockedComponent.find('input').props().style.border;
  const state_1 = () => {
    mockedComponent.setState({ input: 'this is 15 char' });
    return waitForIt(() => mockedComponent.find('input').props().style.border);
  };
  const state_2 = () => {
    mockedComponent.setState({
      input: 'A very long string longer than 15 characters.'
    });
    return waitForIt(() => mockedComponent.find('input').props().style.border);
  };
  const style_1 = await state_1();
  const style_2 = await state_2();
  assert(
    initialStyle === '1px solid black' &&
      style_1 === '1px solid black' &&
      style_2 === '3px solid red'
  );
};
```

# --seed--

## --after-user-code--

```jsx
ReactDOM.render(<GateKeeper />, document.getElementById('root'))
```

## --seed-contents--

```jsx
class GateKeeper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({ input: event.target.value })
  }
  render() {
    let inputStyle = {
      border: '1px solid black'
    };
    // Change code below this line

    // Change code above this line
    return (
      <div>
        <h3>Don't Type Too Much:</h3>
        <input
          type="text"
          style={inputStyle}
          value={this.state.input}
          onChange={this.handleChange} />
      </div>
    );
  }
};
```

# --solutions--

```jsx
class GateKeeper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({ input: event.target.value })
  }
  render() {
    let inputStyle = {
      border: '1px solid black'
    };
    if (this.state.input.length > 15) {
      inputStyle.border = '3px solid red';
    };
    return (
      <div>
        <h3>Don't Type Too Much:</h3>
        <input
          type="text"
          style={inputStyle}
          value={this.state.input}
          onChange={this.handleChange} />
      </div>
    );
  }
};
```

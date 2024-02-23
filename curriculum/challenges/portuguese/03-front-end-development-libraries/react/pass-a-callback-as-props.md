---
id: 5a24c314108439a4d403617b
title: Passar uma função de callback como props
challengeType: 6
forumTopicId: 301400
dashedName: pass-a-callback-as-props
---

# --description--

Você pode passar `state` como "props" para componentes filho, mas você não se limita a passar os dados. Você também pode passar funções manipuladoras ou qualquer método definido em um componente React para um componente filho. É assim que você permite que componentes filhos interajam com seus componentes pai. Você passa métodos para uma criança como uma propriedade regular. Tem um nome atribuído e você tem acesso a esse nome de método sob `this.props` no componente filho.

# --instructions--

Existem três componentes delineados no editor de código. O componente `MyApp` é o pai que vai renderizar os componentes filhos `GetInput` e `RenderInput`. Adicione o componente `GetInput` ao método de renderização no `MyApp`, então passe uma propriedade chamada `input` atribuída a `inputValue` do `state` do `MyApp`. Também crie uma propriedade chamada `handleChange` e passe o manipulador de evento `handleChange` para ele.

Em seguida, adicione `RenderInput` para o método render em `MyApp`, em seguida crie uma propriedade chamada `input` e passe o `inputValue` de `state` para ela. Depois de terminar, você será capaz de digitar no campo `input` no componente `GetInput`, que então chama o método manipulador em seu pai via props. Isso atualiza a entrada no `state` do pai, que é passado como "props" para ambos os filhos. Observe como os dados fluem entre os componentes e como a única fonte da verdade permanece o `state` do componente pai. Reconheço que esse exemplo é um pouco inventado, mas deve servir para ilustrar como dados e callbacks podem ser passados entre componentes React.

# --hints--

O componente `MyApp` deve ser renderizado.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(MyApp));
    return mockedComponent.find('MyApp').length === 1;
  })()
);
```

O componente `GetInput` deve renderizar.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(MyApp));
    return mockedComponent.find('GetInput').length === 1;
  })()
);
```

O componente `RenderInput` deve renderizar.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(MyApp));
    return mockedComponent.find('RenderInput').length === 1;
  })()
);
```

O componente `GetInput` deve receber a propriedade state `inputValue` de `MyApp` como props e conter um elemento `input` que modifique o state de `MyApp`.

```js
async () => {
  const waitForIt = (fn) =>
    new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250));
  const mockedComponent = Enzyme.mount(React.createElement(MyApp));
  const state_1 = () => {
    mockedComponent.setState({ inputValue: '' });
    return waitForIt(() => mockedComponent.state());
  };
  const state_2 = () => {
    mockedComponent
      .find('input')
      .simulate('change', { target: { value: 'TestInput' } });
    return waitForIt(() => mockedComponent.state());
  };
  const updated_1 = await state_1();
  const updated_2 = await state_2();
  assert(updated_1.inputValue === '' && updated_2.inputValue === 'TestInput');
};
```

O componente `RenderInput` deve receber a propriedade state `inputValue` de `MyApp` como props.

```js
async () => {
  const waitForIt = (fn) =>
    new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250));
  const mockedComponent = Enzyme.mount(React.createElement(MyApp));
  const state_1 = () => {
    mockedComponent.setState({ inputValue: 'TestName' });
    return waitForIt(() => mockedComponent);
  };
  const updated_1 = await state_1();
  assert(updated_1.find('p').text().includes('TestName'));
};
```

# --seed--

## --after-user-code--

```jsx
ReactDOM.render(<MyApp />, document.getElementById('root'))
```

## --seed-contents--

```jsx
class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      inputValue: event.target.value
    });
  }
  render() {
    return (
       <div>
        { /* Change code below this line */ }

        { /* Change code above this line */ }
       </div>
    );
  }
};

class GetInput extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>Get Input:</h3>
        <input
          value={this.props.input}
          onChange={this.props.handleChange}/>
      </div>
    );
  }
};

class RenderInput extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>Input Render:</h3>
        <p>{this.props.input}</p>
      </div>
    );
  }
};
```

# --solutions--

```jsx
class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    }
  this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      inputValue: event.target.value
    });
  }
  render() {
    return (
       <div>
         <GetInput
           input={this.state.inputValue}
           handleChange={this.handleChange}/>
         <RenderInput
           input={this.state.inputValue}/>
       </div>
    );
  }
};

class GetInput extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>Get Input:</h3>
        <input
          value={this.props.input}
          onChange={this.props.handleChange}/>
      </div>
    );
  }
};

class RenderInput extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>Input Render:</h3>
        <p>{this.props.input}</p>
      </div>
    );
  }
};
```

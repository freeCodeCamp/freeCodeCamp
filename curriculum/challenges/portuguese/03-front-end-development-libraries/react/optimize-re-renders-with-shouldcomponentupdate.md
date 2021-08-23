---
id: 5a24c314108439a4d4036180
title: Otimizar novas renderizações com shouldComponentUpdate
challengeType: 6
forumTopicId: 301398
dashedName: optimize-re-renders-with-shouldcomponentupdate
---

# --description--

Até agora, se qualquer componente recebe um novo `state` ou novas `props`, ele se renderiza novamente com todos os seus filhos. Normalmente isto está ok. Mas React fornece um método de ciclo de vida que você pode chamar quando componentes filhos recebem um novo `state` ou `props`, e declarar especificamente se os componentes devem atualizar ou não. O método é `shouldComponentUpdate()`, e leva `nextProps` e `nextState` como parâmetros.

Esse método é uma maneira útil de otimizar o desempenho. Por exemplo, o comportamento padrão é que seu componente renderiza novamente quando recebe novas `props`, mesmo que as `props` não tenham mudado. Você pode usar `shouldComponentUpdate()` para evitar isso comparando as `props`. O método deve retornar um valor `boolean` que indica ao React se deve ou não atualizar o componente. Você pode comparar os "props" atuais (`this.props`) para os próximos props (`nextProps`) para determinar se você precisa atualizar ou não, e retorne `true` ou `false` de acordo.

# --instructions--

O método `shouldComponentUpdate()` é adicionado em um componente chamado `OnlyEvens`. Atualmente, esse método retorna `true` então `OnlyEvens` renderiza novamente toda vez que recebe novas `props`. Modifique o método para que `OnlyEvens` seja atualizado somente se os `value` de suas novas props forem par. Clique no botão `Add` e veja a ordem dos eventos no console do seu navegador enquanto os ganchos de ciclo de vida são ativados.

# --hints--

O componente `Controller` deve renderizar o componente `OnlyEvens` como um filho.

```js
assert(
  (() => {
    const mockedComponent = Enzyme.mount(React.createElement(Controller));
    return (
      mockedComponent.find('Controller').length === 1 &&
      mockedComponent.find('OnlyEvens').length === 1
    );
  })()
);
```

O método `shouldComponentUpdate` deve ser definido no componente `OnlyEvens`.

```js
assert(
  (() => {
    const child = React.createElement(OnlyEvens)
      .type.prototype.shouldComponentUpdate.toString()
      .replace(/s/g, '');
    return child !== 'undefined';
  })()
);
```

O componente `OnlyEvens` deve retornar uma tag `h1` que renderiza o valor de `this.props.value`.

```js
(() => {
  const mockedComponent = Enzyme.mount(React.createElement(Controller));
  const first = () => {
    mockedComponent.setState({ value: 1000 });
    return mockedComponent.find('h1').html();
  };
  const second = () => {
    mockedComponent.setState({ value: 10 });
    return mockedComponent.find('h1').html();
  };
  const firstValue = first();
  const secondValue = second();
  assert(firstValue === '<h1>1000</h1>' && secondValue === '<h1>10</h1>');
})();
```

`OnlyEvens` deve renderizar novamente somente quando `nextProps.value` for par.

```js
(() => {
  const mockedComponent = Enzyme.mount(React.createElement(Controller));
  const first = () => {
    mockedComponent.setState({ value: 8 });
    return mockedComponent.find('h1').text();
  };
  const second = () => {
    mockedComponent.setState({ value: 7 });
    return mockedComponent.find('h1').text();
  };
  const third = () => {
    mockedComponent.setState({ value: 42 });
    return mockedComponent.find('h1').text();
  };
  const firstValue = first();
  const secondValue = second();
  const thirdValue = third();
  assert(firstValue === '8' && secondValue === '8' && thirdValue === '42');
})();
```

# --seed--

## --after-user-code--

```jsx
ReactDOM.render(<Controller />, document.getElementById('root'));
```

## --seed-contents--

```jsx
class OnlyEvens extends React.Component {
  constructor(props) {
    super(props);
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log('Should I update?');
    // Change code below this line
    return true;
    // Change code above this line
  }
  componentDidUpdate() {
    console.log('Component re-rendered.');
  }
  render() {
    return <h1>{this.props.value}</h1>;
  }
}

class Controller extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
    this.addValue = this.addValue.bind(this);
  }
  addValue() {
    this.setState(state => ({
      value: state.value + 1
    }));
  }
  render() {
    return (
      <div>
        <button onClick={this.addValue}>Add</button>
        <OnlyEvens value={this.state.value} />
      </div>
    );
  }
}
```

# --solutions--

```jsx
class OnlyEvens extends React.Component {
  constructor(props) {
    super(props);
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log('Should I update?');
    // Change code below this line
    return nextProps.value % 2 === 0;
    // Change code above this line
  }
  componentDidUpdate() {
    console.log('Component re-rendered.');
  }
  render() {
    return <h1>{this.props.value}</h1>;
  }
}

class Controller extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
    this.addValue = this.addValue.bind(this);
  }
  addValue() {
    this.setState(state => ({
      value: state.value + 1
    }));
  }
  render() {
    return (
      <div>
        <button onClick={this.addValue}>Add</button>
        <OnlyEvens value={this.state.value} />
      </div>
    );
  }
}
```

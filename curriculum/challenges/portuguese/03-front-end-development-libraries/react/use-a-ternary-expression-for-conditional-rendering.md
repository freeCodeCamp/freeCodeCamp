---
id: 5a24c314108439a4d4036187
title: Usar uma expressão ternária para renderização condicional
challengeType: 6
forumTopicId: 301414
dashedName: use-a-ternary-expression-for-conditional-rendering
---

# --description--

Antes de seguir para técnicas de renderização dinâmica, há uma última maneira de usar condicionais de JavaScript incorporadas para renderizar o que você quer: o <dfn>operador ternário</dfn>. O operador ternário é frequentemente utilizado como um atalho para comandos `if/else` em JavaScript. Eles não são tão robustos quanto as declarações tradicionais `if/else`, mas são muito populares entre desenvolvedores React. Uma das razões para isso é devido a como JSX é compilado, instruções `if/else` não podem ser inseridas diretamente no código JSX. Você pode ter percebido isso há alguns desafios — quando uma instrução `if/else` foi necessária, estava sempre *fora* da instrução `return`. Expressões ternárias podem ser uma excelente alternativa se você deseja implementar a lógica condicional dentro de seu JSX. Lembre-se de que um operador ternário tem três partes, mas você pode combinar várias expressões ternárias juntas. Aqui está a sintaxe básica:

```jsx
condition ? expressionIfTrue : expressionIfFalse;
```

# --instructions--

O editor de código tem três constantes definidas dentro do método `render()` do componente `CheckUserAge`. Eles são chamados de `buttonOne`, `buttonTwo` e `buttonThree`. A cada uma destas é atribuída uma simples expressão JSX representando um elemento de botão. Primeiro, inicialize o estado de `CheckUserAge` com `input` e `userAge` definidos com valores de uma string vazia.

Uma vez que o componente está renderizando informações na página, os usuários devem ter uma maneira de interagir com ele. Dentro da instrução `return` do componente, configure uma expressão ternária que implementa a seguinte lógica: quando a página primeiro carrega, renderizar o botão de envio, `buttonOne`, para a página. Então, quando um usuário digita sua idade e clica no botão, renderize um botão diferente baseado na idade. Se um usuário inserir um número menor que `18`, renderize `buttonThree`. Se um usuário inserir um número maior ou igual a `18`, renderize `buttonTwo`.

# --hints--

O componente `CheckUserAge` deve renderizar com um único elemento `input` e um único elemento`button`.

```js
assert(
  Enzyme.mount(React.createElement(CheckUserAge)).find('div').find('input')
    .length === 1 &&
    Enzyme.mount(React.createElement(CheckUserAge)).find('div').find('button')
      .length === 1
);
```

O state do componente `CheckUserAge` deve ser inicializado com uma propriedade de `userAge` e uma propriedade `input`, ambos definidos com o valor de uma string vazia.

```js
assert(
  Enzyme.mount(React.createElement(CheckUserAge)).state().input === '' &&
    Enzyme.mount(React.createElement(CheckUserAge)).state().userAge === ''
);
```

Quando o componente `CheckUserAge` é renderizado pela primeira vez no DOM, o texto interno do `button` deve ser enviado.

```js
assert(
  Enzyme.mount(React.createElement(CheckUserAge)).find('button').text() ===
    'Submit'
);
```

Quando um número menor que 18 for inserido no elemento `input` e o `button` for clicado, o texto interno do `button` será `You Shall Not Pass`.

```js
(() => {
  const mockedComponent = Enzyme.mount(React.createElement(CheckUserAge));
  const initialButton = mockedComponent.find('button').text();
  const enter3AndClickButton = () => {
    mockedComponent
      .find('input')
      .simulate('change', { target: { value: '3' } });
    mockedComponent.find('button').simulate('click');
    mockedComponent.update();
    return mockedComponent.find('button').text();
  };
  const enter17AndClickButton = () => {
    mockedComponent
      .find('input')
      .simulate('change', { target: { value: '17' } });
    mockedComponent.find('button').simulate('click');
    mockedComponent.update();
    return mockedComponent.find('button').text();
  };
  const userAge3 = enter3AndClickButton();
  const userAge17 = enter17AndClickButton();
  assert(
    initialButton === 'Submit' &&
      userAge3 === 'You Shall Not Pass' &&
      userAge17 === 'You Shall Not Pass'
  );
})();
```

Quando um número maior ou igual a 18 for inserido no elemento `input` e o `button` for clicado, o texto interno do `button` deve ler `You May Enter`.

```js
(() => {
  const mockedComponent = Enzyme.mount(React.createElement(CheckUserAge));
  const initialButton = mockedComponent.find('button').text();
  const enter18AndClickButton = () => {
    mockedComponent
      .find('input')
      .simulate('change', { target: { value: '18' } });
    mockedComponent.find('button').simulate('click');
    mockedComponent.update();
    return mockedComponent.find('button').text();
  };
  const enter35AndClickButton = () => {
    mockedComponent
      .find('input')
      .simulate('change', { target: { value: '35' } });
    mockedComponent.find('button').simulate('click');
    mockedComponent.update();
    return mockedComponent.find('button').text();
  };
  const userAge18 = enter18AndClickButton();
  const userAge35 = enter35AndClickButton();
  assert(
    initialButton === 'Submit' &&
      userAge18 === 'You May Enter' &&
      userAge35 === 'You May Enter'
  );
})();
```

Uma vez que um número for enviado, e o valor do `input` é novamente alterado, o texto interno do `button` deve voltar a ser `Submit`.

```js
(() => {
  const mockedComponent = Enzyme.mount(React.createElement(CheckUserAge));
  const enter18AndClickButton = () => {
    mockedComponent
      .find('input')
      .simulate('change', { target: { value: '18' } });
    mockedComponent.find('button').simulate('click');
    mockedComponent.update();
    return mockedComponent.find('button').text();
  };
  const changeInputDontClickButton = () => {
    mockedComponent
      .find('input')
      .simulate('change', { target: { value: '5' } });
    mockedComponent.update();
    return mockedComponent.find('button').text();
  };
  const enter10AndClickButton = () => {
    mockedComponent
      .find('input')
      .simulate('change', { target: { value: '10' } });
    mockedComponent.find('button').simulate('click');
    mockedComponent.update();
    return mockedComponent.find('button').text();
  };
  const userAge18 = enter18AndClickButton();
  const changeInput1 = changeInputDontClickButton();
  const userAge10 = enter10AndClickButton();
  const changeInput2 = changeInputDontClickButton();
  assert(
    userAge18 === 'You May Enter' &&
      changeInput1 === 'Submit' &&
      userAge10 === 'You Shall Not Pass' &&
      changeInput2 === 'Submit'
  );
})();
```

O código não deve conter nenhuma instrução `if/else`.

```js
assert(
  new RegExp(/(\s|;)if(\s|\()/).test(
    code
  ) === false
);
```

# --seed--

## --after-user-code--

```jsx
ReactDOM.render(<CheckUserAge />, document.getElementById('root'));
```

## --seed-contents--

```jsx
const inputStyle = {
  width: 235,
  margin: 5
};

class CheckUserAge extends React.Component {
  constructor(props) {
    super(props);
    // Change code below this line

    // Change code above this line
    this.submit = this.submit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({
      input: e.target.value,
      userAge: ''
    });
  }
  submit() {
    this.setState(state => ({
      userAge: state.input
    }));
  }
  render() {
    const buttonOne = <button onClick={this.submit}>Submit</button>;
    const buttonTwo = <button>You May Enter</button>;
    const buttonThree = <button>You Shall Not Pass</button>;
    return (
      <div>
        <h3>Enter Your Age to Continue</h3>
        <input
          style={inputStyle}
          type='number'
          value={this.state.input}
          onChange={this.handleChange}
        />
        <br />
        {/* Change code below this line */}

        {/* Change code above this line */}
      </div>
    );
  }
}
```

# --solutions--

```jsx
const inputStyle = {
  width: 235,
  margin: 5
};

class CheckUserAge extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userAge: '',
      input: ''
    };
    this.submit = this.submit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({
      input: e.target.value,
      userAge: ''
    });
  }
  submit() {
    this.setState(state => ({
      userAge: state.input
    }));
  }
  render() {
    const buttonOne = <button onClick={this.submit}>Submit</button>;
    const buttonTwo = <button>You May Enter</button>;
    const buttonThree = <button>You Shall Not Pass</button>;
    return (
      <div>
        <h3>Enter Your Age to Continue</h3>
        <input
          style={inputStyle}
          type='number'
          value={this.state.input}
          onChange={this.handleChange}
        />
        <br />
        {this.state.userAge === ''
          ? buttonOne
          : this.state.userAge >= 18
          ? buttonTwo
          : buttonThree}
      </div>
    );
  }
}
```

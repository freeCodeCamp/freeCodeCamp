---
id: 5a24c314108439a4d4036179
title: Criar um formulário controlado
challengeType: 6
forumTopicId: 301384
dashedName: create-a-controlled-form
---

# --description--

O último desafio mostrou que React pode controlar o estado interno para certos elementos como `input` e `textarea`, o que os torna componentes controlados. Isso também se aplica a outros elementos de formulário, incluindo o elemento HTML regular `form`.

# --instructions--

O componente `MyForm` é definido com um `form` vazio com um manipulador de envio. O manipulador de envio será chamado quando o formulário for submetido.

Adicionamos um botão que envia o formulário. Você pode ver que tem o `type` definido como `submit` indicando que é o botão que controla o formulário. Adicione o elemento `input` no `form` e defina seus atributos `value` e `onChange()` como o último desafio. Você deve então completar o método `handleSubmit` para que ele defina a propriedade de estado `submit` do componente para o valor de entrada atual no `state`.

**Observação:** você deve chamar o evento `event.preventDefault()` no manipulador de envio, para evitar o comportamento de envio de formulário padrão que atualizará a página web. Por conveniência, o comportamento padrão foi desabilitado aqui para impedir que atualizações redefinam o código do desafio.

Por fim, crie uma tag `h1` após o `form` que renderize o valor `submit` do `state` do componente. Em seguida você pode digitar no formulário e clicar o botão (ou pressionar enter), e você deve ver seu input renderizado na página.

# --hints--

`MyForm` deve retornar um elemento `div` que contém as tags `form` e `h1`. O formulário deve incluir um `input` e um `button`.

```js
assert(
  (() => {
    const mockedComponent = Enzyme.mount(React.createElement(MyForm));
    return (
      mockedComponent.find('div').children().find('form').length === 1 &&
      mockedComponent.find('div').children().find('h1').length === 1 &&
      mockedComponent.find('form').children().find('input').length === 1 &&
      mockedComponent.find('form').children().find('button').length === 1
    );
  })()
);
```

O estado do `MyForm` deve inicializar com as propriedades `input` e `submit`, ambos definidos como strings vazias.

```js
assert(
  Enzyme.mount(React.createElement(MyForm)).state('input') === '' &&
    Enzyme.mount(React.createElement(MyForm)).state('submit') === ''
);
```

Digitar no elemento `input` deve atualizar a propriedade `input` do estado do componente.

```js
(() => {
  const mockedComponent = Enzyme.mount(React.createElement(MyForm));
  const _1 = () => {
    mockedComponent.setState({ input: '' });
    return mockedComponent.state('input');
  };
  const _2 = () => {
    mockedComponent
      .find('input')
      .simulate('change', { target: { value: 'TestInput' } });
    return {
      state: mockedComponent.state('input'),
      inputVal: mockedComponent.find('input').props().value
    };
  };
  const before = _1();
  const after = _2();
  assert(
    before === '' &&
      after.state === 'TestInput' &&
      after.inputVal === 'TestInput'
  );
})();
```

Enviar o formulário deve executar `handleSubmit` o qual deve definir a propriedade `submit` no estado igual a entrada atual.

```js
(() => {
  const mockedComponent = Enzyme.mount(React.createElement(MyForm));
  const _1 = () => {
    mockedComponent.setState({ input: '' });
    mockedComponent.setState({ submit: '' });
    mockedComponent
      .find('input')
      .simulate('change', { target: { value: 'SubmitInput' } });
    return mockedComponent.state('submit');
  };
  const _2 = () => {
    mockedComponent.find('form').simulate('submit');
    return mockedComponent.state('submit');
  };
  const before = _1();
  const after = _2();
  assert(before === '' && after === 'SubmitInput');
})();
```

`handleSubmit` deve chamar `event.preventDefault`

```js
assert(
  __helpers.isCalledWithNoArgs(
    'event.preventDefault',
    MyForm.prototype.handleSubmit.toString()
  )
);
```

O elemento de título `h1` deve renderizar o valor do campo `submit` do estado do componente.

```js
(() => {
  const mockedComponent = Enzyme.mount(React.createElement(MyForm));
  const _1 = () => {
    mockedComponent.setState({ input: '' });
    mockedComponent.setState({ submit: '' });
    mockedComponent
      .find('input')
      .simulate('change', { target: { value: 'TestInput' } });
    return mockedComponent.find('h1').text();
  };
  const _2 = () => {
    mockedComponent.find('form').simulate('submit');
    return mockedComponent.find('h1').text();
  };
  const before = _1();
  const after = _2();
  assert(before === '' && after === 'TestInput');
})();
```

# --seed--

## --after-user-code--

```jsx
ReactDOM.render(<MyForm />, document.getElementById('root'));
```

## --seed-contents--

```jsx
class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      submit: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }
  handleSubmit(event) {
    // Change code below this line

    // Change code above this line
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          {/* Change code below this line */}

          {/* Change code above this line */}
          <button type='submit'>Submit!</button>
        </form>
        {/* Change code below this line */}

        {/* Change code above this line */}
      </div>
    );
  }
}
```

# --solutions--

```jsx
class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      submit: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.setState(state => ({
      submit: state.input
    }));
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.input} onChange={this.handleChange} />
          <button type='submit'>Submit!</button>
        </form>
        <h1>{this.state.submit}</h1>
      </div>
    );
  }
}
```

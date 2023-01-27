---
id: 5a24c314108439a4d4036142
title: Gerenciar state localmente primeiro
challengeType: 6
forumTopicId: 301431
dashedName: manage-state-locally-first
---

# --description--

Aqui você terminará de criar o componente `DisplayMessages`.

# --instructions--

Primeiro, no método `render()`, faça o componente renderizar os elementos `input`, `button` e `ul`. Quando o elemento `input` alterar, ele deve acionar o método `handleChange()`. Além disso, o elemento `input` deve renderizar o valor do `input` que está no state do componente. O elemento `button` deve acionar o método `submitMessage()` quando for clicado.

Em segundo lugar, escreva esses dois métodos. O método `handleChange()` deve atualizar o `input` com o que o usuário digitar. O método `submitMessage()` deve concatenar a mensagem atual (armazenada em `input`) para o array `messages` no state local, e limpar o valor do `input`.

Finalmente, use o `ul` para mapear em cima do array `messages` e o renderize na tela como uma lista de elementos `li`.

# --hints--

O componente `DisplayMessages` deve inicializar com o estado igual a `{ input: "", messages: [] }`.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(DisplayMessages));
    const initialState = mockedComponent.state();
    return (
      typeof initialState === 'object' &&
      initialState.input === '' &&
      initialState.messages.length === 0
    );
  })()
);
```

O componente `DisplayMessages` deve renderizar um `div` contendo um elemento `h2`, um elemento `button`, um elemento `ul` e elementos `li` como filhos.

```js
() => {
  const mockedComponent = Enzyme.mount(React.createElement(DisplayMessages));
  const state = () => {
    mockedComponent.setState({ messages: ['__TEST__MESSAGE'] });
    return mockedComponent;
  };
  const updated = state();
  assert(
    updated.find('div').length === 1 &&
      updated.find('h2').length === 1 &&
      updated.find('button').length === 1 &&
      updated.find('ul').length === 1 &&
      updated.find('li').length > 0
  );
};
```

`.map` deve ser usado no array de `messages`.

```js
assert(code.match(/this\.state\.messages\.map/g));
```

O elemento `input` deve renderizar o valor de `input` no state local.

```js
() => {
  const mockedComponent = Enzyme.mount(React.createElement(DisplayMessages));
  const causeChange = (c, v) =>
    c.find('input').simulate('change', { target: { value: v } });
  const testValue = '__TEST__EVENT__INPUT';
  const changed = () => {
    causeChange(mockedComponent, testValue);
    return mockedComponent;
  };
  const updated = changed();
  assert(updated.find('input').props().value === testValue);
};
```

Chamar o método `handleChange` deve atualizar o valor do `input` no state para o input atual.

```js
() => {
  const mockedComponent = Enzyme.mount(React.createElement(DisplayMessages));
  const causeChange = (c, v) =>
    c.find('input').simulate('change', { target: { value: v } });
  const initialState = mockedComponent.state();
  const testMessage = '__TEST__EVENT__MESSAGE__';
  const changed = () => {
    causeChange(mockedComponent, testMessage);
    return mockedComponent;
  };
  const afterInput = changed();
  assert(
    initialState.input === '' &&
      afterInput.state().input === '__TEST__EVENT__MESSAGE__'
  );
};
```

Clicar o botão `Add message` deve chamar o método `submitMessage` o qual deve adicionar o texto atual no `input` ao array `messages` no state.

```js
() => {
  const mockedComponent = Enzyme.mount(React.createElement(DisplayMessages));
  const causeChange = (c, v) =>
    c.find('input').simulate('change', { target: { value: v } });
  const initialState = mockedComponent.state();
  const testMessage_1 = '__FIRST__MESSAGE__';
  const firstChange = () => {
    causeChange(mockedComponent, testMessage_1);
    return mockedComponent;
  };
  const firstResult = firstChange();
  const firstSubmit = () => {
    mockedComponent.find('button').simulate('click');
    return mockedComponent;
  };
  const afterSubmit_1 = firstSubmit();
  const submitState_1 = afterSubmit_1.state();
  const testMessage_2 = '__SECOND__MESSAGE__';
  const secondChange = () => {
    causeChange(mockedComponent, testMessage_2);
    return mockedComponent;
  };
  const secondResult = secondChange();
  const secondSubmit = () => {
    mockedComponent.find('button').simulate('click');
    return mockedComponent;
  };
  const afterSubmit_2 = secondSubmit();
  const submitState_2 = afterSubmit_2.state();
  assert(
    initialState.messages.length === 0 &&
      submitState_1.messages.length === 1 &&
      submitState_2.messages.length === 2 &&
      submitState_2.messages[1] === testMessage_2
  );
};
```

O método `submitMessage` deve limpar o input atual.

```js
() => {
  const mockedComponent = Enzyme.mount(React.createElement(DisplayMessages));
  const causeChange = (c, v) =>
    c.find('input').simulate('change', { target: { value: v } });
  const initialState = mockedComponent.state();
  const testMessage = '__FIRST__MESSAGE__';
  const firstChange = () => {
    causeChange(mockedComponent, testMessage);
    return mockedComponent;
  };
  const firstResult = firstChange();
  const firstState = firstResult.state();
  const firstSubmit = () => {
    mockedComponent.find('button').simulate('click');
    return mockedComponent;
  };
  const afterSubmit = firstSubmit();
  const submitState = afterSubmit.state();
  assert(firstState.input === testMessage && submitState.input === '');
};
```

# --seed--

## --after-user-code--

```jsx
ReactDOM.render(<DisplayMessages />, document.getElementById('root'))
```

## --seed-contents--

```jsx
class DisplayMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      messages: []
    }
  }
  // Add handleChange() and submitMessage() methods here

  render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>
        { /* Render an input, button, and ul below this line */ }

        { /* Change code above this line */ }
      </div>
    );
  }
};
```

# --solutions--

```jsx
class DisplayMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      messages: []
    }
 this.handleChange = this.handleChange.bind(this);
   this.submitMessage = this.submitMessage.bind(this);
 }
  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }
  submitMessage() {
    this.setState((state) => {
      const currentMessage = state.input;
      return {
        input: '',
        messages: state.messages.concat(currentMessage)
      };  
    });
  }
  render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>
        <input
          value={this.state.input}
          onChange={this.handleChange}/><br/>
        <button onClick={this.submitMessage}>Submit</button>
        <ul>
          {this.state.messages.map( (message, idx) => {
              return (
                 <li key={idx}>{message}</li>
              )
            })
          }
        </ul>
      </div>
    );
  }
};
```

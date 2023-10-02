---
id: 5a24c314108439a4d403617e
title: Adicionar listeners de evento
challengeType: 6
forumTopicId: 301377
dashedName: add-event-listeners
---

# --description--

O método `componentDidMount()` também é o melhor local para anexar qualquer ouvinte de evento (event listener) que você precisa adicionar para uma funcionalidade específica. React fornece um sistema de eventos sintéticos que envolve o sistema de evento nativo presente nos navegadores. Isso significa que o sistema de evento sintético se comporta exatamente da mesma forma independente do navegador do usuário - mesmo se os eventos nativos possam se comportar de forma diferente em diferentes navegadores.

Você já tem usado alguns destes manipuladores de eventos sintéticos como `onClick()`. O sistema de evento sintético do React é ótimo de usar para a maioria das interações que você gerenciará em elementos DOM. No entanto, se você que anexar um manipulador de evento aos objetos documento ou janela, você tem que fazer isso diretamente.

# --instructions--

Anexe um event listener no método `componentDidMount()` para eventos `keydown` e faça com que esses eventos acionem o callback `handleKeyPress()`. Você pode usar `document.addEventListener()` o qual recebe o evento (entre aspas) como o primeiro argumento e o callback como o segundo argumento.

Em seguida, em `componentWillUnmount()`, remova esse mesmo event listener. Você pode passar os mesmos argumentos para `document.removeEventListener()`. É uma boa prática usar este método de ciclo de vida para limpar qualquer componente do React antes deles serem desmontados e destruídos. Remover event listeners é um exemplo de uma ação de limpeza.

# --hints--

`MyComponent` deve renderizar um elemento `div` o qual envolve a tag `h1`.

```js
assert(
  (() => {
    const mockedComponent = Enzyme.mount(React.createElement(MyComponent));
    return mockedComponent.find('div').children().find('h1').length === 1;
  })()
);
```

Um listener de `keydown` deve ser anexado ao documento em `componentDidMount`.

```js
assert(
  (() => {
    const mockedComponent = Enzyme.mount(React.createElement(MyComponent));
    const didMountString = mockedComponent
      .instance()
      .componentDidMount.toString();
    return new RegExp(
      'document.addEventListener(.|\n|\r)+keydown(.|\n|\r)+this.handleKeyPress'
    ).test(didMountString);
  })()
);
```

O listener de `keydown` deve ser removido do documento em `componentWillUnmount`.

```js
assert(
  (() => {
    const mockedComponent = Enzyme.mount(React.createElement(MyComponent));
    const willUnmountString = mockedComponent
      .instance()
      .componentWillUnmount.toString();
    return new RegExp(
      'document.removeEventListener(.|\n|\r)+keydown(.|\n|\r)+this.handleKeyPress'
    ).test(willUnmountString);
  })()
);
```

Uma vez que o componente foi montado, pressionar `enter` deve atualizar seu estado e a tag renderizada `h1`.

```js
async () => {
  const waitForIt = (fn) =>
    new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250));
  const mockedComponent = Enzyme.mount(React.createElement(MyComponent));
  const beforeState = mockedComponent.state('message');
  const beforeText = mockedComponent.find('h1').text();
  const pressEnterKey = () => {
    mockedComponent.instance().handleKeyPress({ keyCode: 13 });
    return waitForIt(() => {
      mockedComponent.update();
      return {
        state: mockedComponent.state('message'),
        text: mockedComponent.find('h1').text()
      };
    });
  };
  const afterKeyPress = await pressEnterKey();
  assert(
    beforeState !== afterKeyPress.state && beforeText !== afterKeyPress.text
  );
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
      message: ''
    };
    this.handleEnter = this.handleEnter.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }
  // Change code below this line
  componentDidMount() {

  }
  componentWillUnmount() {

  }
  // Change code above this line
  handleEnter() {
    this.setState((state) => ({
      message: state.message + 'You pressed the enter key! '
    }));
  }
  handleKeyPress(event) {
    if (event.keyCode === 13) {
      this.handleEnter();
    }
  }
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
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
      message: ''
    };
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleEnter = this.handleEnter.bind(this);  }
  componentDidMount() {
    // Change code below this line
    document.addEventListener('keydown', this.handleKeyPress);
    // Change code above this line
  }
  componentWillUnmount() {
    // Change code below this line
    document.removeEventListener('keydown', this.handleKeyPress);
    // Change code above this line
  }
  handleEnter() {
    this.setState((state) => ({
      message: state.message + 'You pressed the enter key! '
    }));
  }
  handleKeyPress(event) {
    if (event.keyCode === 13) {
      this.handleEnter();
    }
  }
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
      </div>
    );
  }
};
```

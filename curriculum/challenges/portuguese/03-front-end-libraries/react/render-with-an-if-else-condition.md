---
id: 5a24c314108439a4d4036184
title: Renderizar com uma condição if-else
challengeType: 6
forumTopicId: 301410
dashedName: render-with-an-if-else-condition
---

# --description--

Outra aplicação de usar JavaScript para controlar sua visão renderizada é associar os elementos que são renderizados em uma condição. Quando a condição é verdadeira, uma visão renderiza. Quando é falso, é uma visão diferente. Você pode fazer isso com uma instrução padrão `if/else` no método `render()` de um componente React.

# --instructions--

MyComponent contém um `boolean` em seu estado que rastreia se você deseja exibir algum elemento na interface do usuário ou não. O `button` alterna o estado deste valor. No momento, ele renderiza a mesma interface do usuário todas as vezes. Reescreva o método `render()` com uma instrução `if/else` para que se `display` for `true`, você retorna a marcação atual. Caso contrário, retorne a marcação sem o elemento `h1`.

**Observação:** você deve escrever um `if/else` para passar nos testes. O uso do operador ternário não passará aqui.

# --hints--

`MyComponent` deve existir e renderizar.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(MyComponent));
    return mockedComponent.find('MyComponent').length === 1;
  })()
);
```

Quando `display` é definido como `true`, uma `div`, um `button`, e um `h1` devem renderizar.

```js
async () => {
  const waitForIt = (fn) =>
    new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250));
  const mockedComponent = Enzyme.mount(React.createElement(MyComponent));
  const state_1 = () => {
    mockedComponent.setState({ display: true });
    return waitForIt(() => mockedComponent);
  };
  const updated = await state_1();
  assert(
    mockedComponent.find('div').length === 1 &&
      mockedComponent.find('div').children().length === 2 &&
      mockedComponent.find('button').length === 1 &&
      mockedComponent.find('h1').length === 1
  );
};
```

Quando `display` é definido como `false`, apenas uma `div` e um `button` devem renderizar.

```js
async () => {
  const waitForIt = (fn) =>
    new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250));
  const mockedComponent = Enzyme.mount(React.createElement(MyComponent));
  const state_1 = () => {
    mockedComponent.setState({ display: false });
    return waitForIt(() => mockedComponent);
  };
  const updated = await state_1();
  assert(
    mockedComponent.find('div').length === 1 &&
      mockedComponent.find('div').children().length === 1 &&
      mockedComponent.find('button').length === 1 &&
      mockedComponent.find('h1').length === 0
  );
};
```

O método de renderização deve usar um comando `if/else` para verificar a condição de `this.state.display`.

```js
(getUserInput) =>
  assert(
    getUserInput('index').includes('if') &&
      getUserInput('index').includes('else')
  );
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
      display: true
    }
    this.toggleDisplay = this.toggleDisplay.bind(this);
  }
  toggleDisplay() {
    this.setState((state) => ({
      display: !state.display
    }));
  }
  render() {
    // Change code below this line

    return (
       <div>
         <button onClick={this.toggleDisplay}>Toggle Display</button>
         <h1>Displayed!</h1>
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
      display: true
    }
 this.toggleDisplay = this.toggleDisplay.bind(this);
 }
  toggleDisplay() {
    this.setState((state) => ({
      display: !state.display
    }));
  }
  render() {
    // Change code below this line
    if (this.state.display) {
      return (
         <div>
           <button onClick={this.toggleDisplay}>Toggle Display</button>
           <h1>Displayed!</h1>
         </div>
      );
    } else {
      return (
        <div>
           <button onClick={this.toggleDisplay}>Toggle Display</button>
         </div>
      );
    }
  }
};
```

---
id: 5a24c314108439a4d4036185
title: Usar && para uma forma mais concisa do condicional
challengeType: 6
forumTopicId: 301413
dashedName: use--for-a-more-concise-conditional
---

# --description--

As declarações `if/else` funcionaram no último desafio, mas há uma maneira mais concisa de alcançar o mesmo resultado. Imagine que está monitorando várias condições num componente e que pretende que diferentes elementos sejam renderizados, dependendo de cada uma destas condições. Se você escrever muitas instruções `else if` para retornar interfaces de usuário ligeiramente diferentes, você pode repetir código o que deixa espaço para erros. Ao invés disso, você pode usar o operador lógico `&&` para executar a lógica condicional de uma forma mais concisa. Isto é possível porque você quer verificar se uma condição é `true`, e se é, retorna uma marcação. Exemplo:

```jsx
{condition && <p>markup</p>}
```

Se a `condition` for `true`, a marcação será retornada. Se a condição for `false`, a operação retornará imediatamente `false` após avaliar a `condition` e não retornará nada. Você pode incluir essas declarações diretamente em seu JSX e juntar várias condições, escrevendo `&&` após cada uma. Isso permite que você lide com uma lógica condicional mais complexa em seu método `render()` sem repetir muito código.

# --instructions--

Resolva o exemplo anterior novamente, para que `h1` renderize apenas se `display` for `true`, mas use o operador lógico `&&` ao invés de uma instrução `if/else`.

# --hints--

`MyComponent` deve existir e renderizar.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(MyComponent));
    return mockedComponent.find('MyComponent').length;
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
    updated.find('div').length === 1 &&
      updated.find('div').children().length === 2 &&
      updated.find('button').length === 1 &&
      updated.find('h1').length === 1
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
    updated.find('div').length === 1 &&
      updated.find('div').children().length === 1 &&
      updated.find('button').length === 1 &&
      updated.find('h1').length === 0
  );
};
```

O método de renderização deve usar o operador lógico `&&` para verificar a condição de `this.state.display`.

```js
(getUserInput) => assert(getUserInput('index').includes('&&'));
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
    this.setState(state => ({
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
    this.setState(state => ({
      display: !state.display
    }));
  }
  render() {
    // Change code below this line
    return (
       <div>
         <button onClick={this.toggleDisplay}>Toggle Display</button>
         {this.state.display && <h1>Displayed!</h1>}
       </div>
    );
  }
};
```

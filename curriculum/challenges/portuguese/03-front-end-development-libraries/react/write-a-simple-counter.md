---
id: 5a24c314108439a4d4036177
title: Escrever um contador simples
challengeType: 6
forumTopicId: 301425
dashedName: write-a-simple-counter
---

# --description--

Você pode projetar um componente de estado mais complexo combinando os conceitos abordados até agora. Estes incluem inicializar o `state`, escrever métodos que definem `state`, e atribuir manipuladores de cliques para acionar esses métodos.

# --instructions--

O componente `Counter` mantém controle de um valor `count` em `state`. Existem dois botões que chamam os métodos `increment()` e `decrement()`. Escreva esses métodos para que o valor do contador seja incrementado ou decrementado por 1 quando o botão apropriado for clicado. Além disso, crie um método `reset()`, para que quando o botão reset é clicado, a contagem é definida como 0.

**Observação:** certifique-se de não modificar o `className` dos botões. Lembre-se também de adicionar as ligações necessárias para os métodos recém-criados no construtor.

# --hints--

`Counter` deve retornar um elemento `div` que contém três botões com conteúdo de texto nesta ordem `Increment!`, `Decrement!`, `Reset`.

```js
assert(
  (() => {
    const mockedComponent = Enzyme.mount(React.createElement(Counter));
    return (
      mockedComponent.find('.inc').text() === 'Increment!' &&
      mockedComponent.find('.dec').text() === 'Decrement!' &&
      mockedComponent.find('.reset').text() === 'Reset'
    );
  })()
);
```

O estado de `Counter` deve inicializar com a propriedade `count` definida como `0`.

```js
const mockedComponent = Enzyme.mount(React.createElement(Counter));
assert(mockedComponent.find('h1').text() === 'Current Count: 0');
```

Clicar no botão increment deve incrementar a contagem em `1`.

```js
const mockedComponent = Enzyme.mount(React.createElement(Counter));
mockedComponent.find('.inc').simulate('click');
assert(mockedComponent.find('h1').text() === 'Current Count: 1');
```

Clicar no botão decrement deve decrementar a contagem em `1`.

```js
const mockedComponent = Enzyme.mount(React.createElement(Counter));
mockedComponent.find('.dec').simulate('click');
assert(mockedComponent.find('h1').text() === 'Current Count: -1');
```

Clicar no botão reset deve redefinir a contagem para `0`.

```js
const mockedComponent = Enzyme.mount(React.createElement(Counter));
mockedComponent.setState({ count: 5 });
const currentCountElement = mockedComponent.find('h1');
assert(currentCountElement.text() === 'Current Count: 5');
mockedComponent.find('.reset').simulate('click');
assert(currentCountElement.text() === 'Current Count: 0');
```

# --seed--

## --after-user-code--

```jsx
ReactDOM.render(<Counter />, document.getElementById('root'))
```

## --seed-contents--

```jsx
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    // Change code below this line

    // Change code above this line
  }
  // Change code below this line

  // Change code above this line
  render() {
    return (
      <div>
        <button className='inc' onClick={this.increment}>Increment!</button>
        <button className='dec' onClick={this.decrement}>Decrement!</button>
        <button className='reset' onClick={this.reset}>Reset</button>
        <h1>Current Count: {this.state.count}</h1>
      </div>
    );
  }
};
```

# --solutions--

```jsx
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  this.increment = this.increment.bind(this);
 this.decrement = this.decrement.bind(this);
 this.reset = this.reset.bind(this);
 }
  reset() {
    this.setState({
      count: 0
    });
  }
  increment() {
    this.setState(state => ({
      count: state.count + 1
    }));
  }
  decrement() {
    this.setState(state => ({
      count: state.count - 1
    }));
  }
  render() {
    return (
      <div>
        <button className='inc' onClick={this.increment}>Increment!</button>
        <button className='dec' onClick={this.decrement}>Decrement!</button>
        <button className='reset' onClick={this.reset}>Reset</button>
        <h1>Current Count: {this.state.count}</h1>
      </div>
    );
  }
};
```

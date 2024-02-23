---
id: 5a24c314108439a4d4036177
title: Escribe un contador simple
challengeType: 6
forumTopicId: 301425
dashedName: write-a-simple-counter
---

# --description--

Puedes diseñar un componente con un estado más complejo combinando los conceptos cubiertos hasta ahora. Estos incluyen inicializar el `state`, escribir métodos que establezcan `state` y asignar manejadores de eventos clic para activar estos métodos.

# --instructions--

El componente `Counter` mantiene un seguimiento de un valor `count` en el `state`. Hay dos botones que llaman a métodos `increment()` y `decrement()`. Escribe estos métodos para que el valor del contador sea incrementado o disminuyendo por 1 cuando se haga clic en el botón apropiado. También, crea un método `reset()` para que cuando se haga clic en el botón reset, el contador se establezca a 0.

**Nota:** Asegúrate de no modificar el `className`de los botones. Además, recuerda agregar en el constructor los enlaces necesarios para los métodos recién creados.

# --hints--

`Counter` debe devolver un elemento `div` que contiene tres botones con contenido de texto en este orden `Increment!`, `Decrement!`, `Reset`.

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

El estado de `Counter` debe inicializarse con una propiedad `count` establecida en `0`.

```js
const mockedComponent = Enzyme.mount(React.createElement(Counter));
assert(mockedComponent.find('h1').text() === 'Current Count: 0');
```

Al hacer clic en el botón de incremento se incrementará el contador en `1`.

```js
const mockedComponent = Enzyme.mount(React.createElement(Counter));
mockedComponent.find('.inc').simulate('click');
assert(mockedComponent.find('h1').text() === 'Current Count: 1');
```

Al hacer clic en el botón de disminuir se disminuirá el contador en `1`.

```js
const mockedComponent = Enzyme.mount(React.createElement(Counter));
mockedComponent.find('.dec').simulate('click');
assert(mockedComponent.find('h1').text() === 'Current Count: -1');
```

Al hacer clic en el botón reset se reiniciará el contador a `0`.

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

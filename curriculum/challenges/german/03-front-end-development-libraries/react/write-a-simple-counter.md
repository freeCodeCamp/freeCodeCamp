---
id: 5a24c314108439a4d4036177
title: Einen einfachen Zähler schreiben
challengeType: 6
forumTopicId: 301425
dashedName: write-a-simple-counter
---

# --description--

Du kannst eine komplexere zustandsabhängige Komponente entwerfen, indem du die bisher behandelten Konzepte kombinierst. Dazu gehören die Initialisierung des `state`, das Schreiben von Methoden, die den `state` setzen, und die Zuweisung von Click-Handlern, die diese Methoden auslösen.

# --instructions--

Die Zähler(`Counter`)-komponente verfolgt einen `count`-Wert im `state`. Es gibt zwei Buttons, die die Methoden `increment()` und `decrement()` aufrufen. Schreibe diese Methoden so, dass der Zählerwert um 1 erhöht oder verringert wird, wenn der entsprechende Button angeklickt wird. Erstelle außerdem eine `reset()`-Methode, damit der Zähler auf 0 gesetzt wird, wenn der Reset-Button angeklickt wird.

**Hinweis:** Achte darauf, dass du die Klassenamen (`className`) der Buttons nicht veränderst. Denke auch daran, die notwendigen Bindungen für die neu erstellten Methoden im Konstruktor hinzuzufügen.

# --hints--

`Counter` sollte ein `div`-Element zurückgeben, das drei Buttons mit Textinhalten in dieser Reihenfolge enthält: `Increment!`, `Decrement!`, `Reset`.

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

Der Zustand von `Counter` sollte mit einer `count`-Eigenschaft initialisiert werden, die auf `0` gesetzt ist.

```js
const mockedComponent = Enzyme.mount(React.createElement(Counter));
assert(mockedComponent.find('h1').text() === 'Current Count: 0');
```

Wenn du auf den Inkrement-Button klickst, wird die Zahl um `1` erhöht.

```js
const mockedComponent = Enzyme.mount(React.createElement(Counter));
mockedComponent.find('.inc').simulate('click');
assert(mockedComponent.find('h1').text() === 'Current Count: 1');
```

Wenn du auf den Dekrement-Button klickst, wird die Anzahl um `1` verringert.

```js
const mockedComponent = Enzyme.mount(React.createElement(Counter));
mockedComponent.find('.dec').simulate('click');
assert(mockedComponent.find('h1').text() === 'Current Count: -1');
```

Ein Klick auf den Reset-Button sollte den Zähler auf `0` zurücksetzen.

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

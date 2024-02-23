---
id: 5a24c314108439a4d4036188
title: Rendere abhängig von den Eigenschaften
challengeType: 6
forumTopicId: 301405
dashedName: render-conditionally-from-props
---

# --description--

Bisher hast du gesehen, wie man `if/else`, `&&` und den ternären Operator (`condition ? expressionIfTrue : expressionIfFalse`) verwendet, um bedingte Entscheidungen darüber zu treffen, was wann dargestellt werden soll. Es bleibt jedoch noch ein wichtiges Thema zu besprechen, mit dem du jedes dieser Konzepte mit einer anderen leistungsstarken React-Funktion kombinieren kannst: Props (Eigenschaften). Die Verwendung von Eigenschaften zum bedingten Rendern von Code ist bei React-Entwicklern sehr verbreitet - das heißt, sie verwenden den Wert einer bestimmten Eigenschaft, um automatisch Entscheidungen darüber zu treffen, was gerendert werden soll.

In dieser Aufgabe wirst du eine Kindkomponente einrichten, die Rendering-Entscheidungen anhand von Eigenschaften trifft. Du wirst auch den ternären Operator verwenden, aber du kannst sehen, dass einige der anderen Konzepte, die in den letzten Aufgaben behandelt wurden, in diesem Zusammenhang genauso nützlich sein können.

# --instructions--

Der Code-Editor hat zwei Komponenten, die teilweise für dich definiert sind: ein Elternelement namens `GameOfChance` und ein Kindelement namens `Results`. Sie werden verwendet, um ein einfaches Spiel zu erstellen, bei dem der/die NutzerIn einen Knopf drückt, um zu sehen, ob er/sie gewinnt oder verliert.

Zuerst brauchst du einen einfachen Ausdruck, der bei jeder Ausführung zufällig einen anderen Wert liefert. Du kannst `Math.random()` verwenden. Diese Methode gibt bei jedem Aufruf einen Wert zwischen `0` (einschließlich) und `1` (ausschließlich) zurück. Für eine 50/50-Wahrscheinlichkeit verwendest du also `Math.random() >= .5` in deinem Ausdruck. Statistisch gesehen wird dieser Ausdruck in 50% der Fälle `true` und in den anderen 50% `false` zurückgeben. Ersetze in der Render-Methode `null` durch den obigen Ausdruck, um die Variablendeklaration zu vervollständigen.

Jetzt hast du einen Ausdruck, den du verwenden kannst, um eine zufällige Entscheidung im Code zu treffen. Als nächstes musst du dies umsetzen. Rendere die Komponente `Results` als Kindelement von `GameOfChance` und übergebe `expression` als Eigenschaft namens `fiftyFifty`. Schreibe in der Komponente `Results` einen ternären Ausdruck, um das `h1`-Element mit dem Text `You Win!` oder `You Lose!` basierend auf der Eigenschaft `fiftyFifty`, die von `GameOfChance` übergeben wird, darzustellen. Stelle schließlich sicher, dass die `handleClick()`-Methode jede Runde korrekt zählt, damit der Benutzer weiß, wie oft er gespielt hat. Dies dient auch dazu, dass der Benutzer weiß, dass die Komponente aktualisiert wurde, falls er zweimal hintereinander gewinnt oder verliert.

# --hints--

Die Komponente `GameOfChance` sollte existieren und auf der Seite dargestellt werden.

```js
assert.strictEqual(
  Enzyme.mount(React.createElement(GameOfChance)).find('GameOfChance').length,
  1
);
```

`GameOfChance` sollte ein einzelnes `button`-Element zurückgeben.

```js
assert.strictEqual(
  Enzyme.mount(React.createElement(GameOfChance)).find('button').length,
  1
);
```

`GameOfChance` sollte eine einzelne Instanz der Komponente `Results` zurückgeben, die eine Eigenschaft namens `fiftyFifty` hat.

```js
assert(
  Enzyme.mount(React.createElement(GameOfChance)).find('Results').length ===
    1 &&
    Enzyme.mount(React.createElement(GameOfChance))
      .find('Results')
      .props()
      .hasOwnProperty('fiftyFifty') === true
);
```

Der Zustand von `GameOfChance` sollte mit der Eigenschaft `counter` initialisiert werden, die auf den Wert `1` gesetzt ist.

```js
assert.strictEqual(
  Enzyme.mount(React.createElement(GameOfChance)).state().counter,
  1
);
```

Wenn die Komponente `GameOfChance` zum ersten Mal im DOM gerendert wird, sollte ein `p`-Element mit dem inneren Text `Turn: 1` zurückgegeben werden.

```js
assert.strictEqual(
  Enzyme.mount(React.createElement(GameOfChance)).find('p').text(),
  'Turn: 1'
);
```

Jedes Mal, wenn der Button angeklickt wird, sollte der Zählerstand um den Wert 1 erhöht werden und ein einzelnes `p`-Element sollte im DOM gerendert werden, das den Text `Turn: N` enthält, wobei `N` der Wert des Zählerstandes ist.

```js
(() => {
  const comp = Enzyme.mount(React.createElement(GameOfChance));
  const simulate = () => {
    comp.find('button').simulate('click');
  };
  const result = () => ({
    count: comp.state('counter'),
    text: comp.find('p').text()
  });
  const _1 = () => {
    simulate();
    return result();
  };
  const _2 = () => {
    simulate();
    return result();
  };
  const _3 = () => {
    simulate();
    return result();
  };
  const _4 = () => {
    simulate();
    return result();
  };
  const _5 = () => {
    simulate();
    return result();
  };
  const _1_val = _1();
  const _2_val = _2();
  const _3_val = _3();
  const _4_val = _4();
  const _5_val = _5();
  assert(
    _1_val.count === 2 &&
      _1_val.text === 'Turn: 2' &&
      _2_val.count === 3 &&
      _2_val.text === 'Turn: 3' &&
      _3_val.count === 4 &&
      _3_val.text === 'Turn: 4' &&
      _4_val.count === 5 &&
      _4_val.text === 'Turn: 5' &&
      _5_val.count === 6 &&
      _5_val.text === 'Turn: 6'
  );
})();
```

Wenn die Komponente `GameOfChance` zum ersten Mal in das DOM eingebunden wird und, wenn jedes Mal der Button danach angeklickt wird, sollte ein einzelnes `h1`-Element zurückgegeben werden, das zufällig entweder `You Win!` oder `You Lose!` wiedergibt. Hinweis: Dies kann willkürlich fehlschlagen. Wenn das passiert, versuche es bitte erneut.

```js
(() => {
  const comp = Enzyme.mount(React.createElement(GameOfChance));
  const simulate = () => {
    comp.find('button').simulate('click');
  };
  const result = () => ({
    h1: comp.find('h1').length,
    text: comp.find('h1').text()
  });
  const _1 = result();
  const _2 = () => {
    simulate();
    return result();
  };
  const _3 = () => {
    simulate();
    return result();
  };
  const _4 = () => {
    simulate();
    return result();
  };
  const _5 = () => {
    simulate();
    return result();
  };
  const _6 = () => {
    simulate();
    return result();
  };
  const _7 = () => {
    simulate();
    return result();
  };
  const _8 = () => {
    simulate();
    return result();
  };
  const _9 = () => {
    simulate();
    return result();
  };
  const _10 = () => {
    simulate();
    return result();
  };
  const _2_val = _2();
  const _3_val = _3();
  const _4_val = _4();
  const _5_val = _5();
  const _6_val = _6();
  const _7_val = _7();
  const _8_val = _8();
  const _9_val = _9();
  const _10_val = _10();
  const __text = new Set([
    _1.text,
    _2_val.text,
    _3_val.text,
    _4_val.text,
    _5_val.text,
    _6_val.text,
    _7_val.text,
    _8_val.text,
    _9_val.text,
    _10_val.text
  ]);
  const __h1 = new Set([
    _1.h1,
    _2_val.h1,
    _3_val.h1,
    _4_val.h1,
    _5_val.h1,
    _6_val.h1,
    _7_val.h1,
    _8_val.h1,
    _9_val.h1,
    _10_val.h1
  ]);
  assert(__text.size === 2 && __h1.size === 1);
})();
```

# --seed--

## --after-user-code--

```jsx
ReactDOM.render(<GameOfChance />, document.getElementById('root'));
```

## --seed-contents--

```jsx
class Results extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    {/* Change code below this line */}
    return <h1></h1>;
    {/* Change code above this line */}
  }
}

class GameOfChance extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 1
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState(prevState => {
      // Complete the return statement:
      return {
        counter: prevState
      }
    });
  }
  render() {
    const expression = null; // Change this line
    return (
      <div>
        <button onClick={this.handleClick}>Play Again</button>
        {/* Change code below this line */}

        {/* Change code above this line */}
        <p>{'Turn: ' + this.state.counter}</p>
      </div>
    );
  }
}
```

# --solutions--

```jsx
// We want this to be deterministic for testing purposes.
const randomSequence = [true, false, false, true, true, false, false, true, true, false];
let index = 0;
const fiftyFifty = () => randomSequence[index++ % randomSequence.length];

class Results extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <h1>{this.props.fiftyFifty ? 'You Win!' : 'You Lose!'}</h1>;
  }
}

class GameOfChance extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 1
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState(prevState => {
      return {
        counter: prevState.counter + 1
      }
    });
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Play Again</button>
        <Results fiftyFifty={fiftyFifty()} />
        <p>{'Turn: ' + this.state.counter}</p>
      </div>
    );
  }
}
```

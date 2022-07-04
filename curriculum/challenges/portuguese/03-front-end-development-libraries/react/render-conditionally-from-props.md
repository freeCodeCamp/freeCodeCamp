---
id: 5a24c314108439a4d4036188
title: Renderizar condicionalmente a partir das props
challengeType: 6
forumTopicId: 301405
dashedName: render-conditionally-from-props
---

# --description--

Até agora, você viu como usar o `if/else`, `&&` e o operador ternário (`condition ? expressionIfTrue : expressionIfFalse`) para tomar decisões condicionais sobre o que renderizar e quando. No entanto, resta um tópico importante para discutir que permite que você combine todos esses conceitos com outro poderoso recurso do React: props. Usar props para renderizar código condicionalmente é muito comum entre desenvolvedores React — isto é, eles usam o valor de uma determinada propriedade para tomar decisões automaticamente sobre o que renderizar.

Neste desafio, você vai configurar um componente filho para tomar decisões de renderização com base em props. Você também usará o operador ternário, mas você pode ver como vários dos outros conceitos que foram abordados nos últimos desafios poderão ser igualmente úteis neste contexto.

# --instructions--

O editor de código tem dois componentes que estão parcialmente definidos para você: um pai chamado `GameOfChance` e um filho chamado `Results`. Eles são usados para criar um jogo simples onde o usuário pressiona um botão para ver se ele vence ou perde.

Primeiro, você precisará de uma expressão simples que retorna aleatoriamente um valor diferente toda vez que for executado. Você pode usar `Math.random()`. Esse método retorna um valor entre `0` (inclusivo) e `1` (exclusivo) a cada vez que é chamado. Portanto, para probabilidades 50/50, use `Math.random() >= .5` na sua expressão. Estatísticas falando, essa expressão retornará `true` 50% das vezes, e `false` os outros 50%. No método de renderização, substitua `null` pela expressão acima para completar a declaração de variável.

Agora você tem uma expressão que pode usar para tomar uma decisão aleatória no código. Em seguida, você precisa implementar isso. Renderize o componente `Results` como filho de `GameOfChance`, e passe `expression` como uma prop chamada `fiftyFifty`. No componente `Results`, escreva uma expressão ternária para renderizar o elemento `h1` com o texto `You Win!` ou `You Lose!` baseado na prop `fiftyFifty` que está sendo passada de `GameOfChance`. Finalmente, certifique-se de que o método `handleClick()` está contando corretamente cada turno para que o usuário saiba quantas vezes jogou. Isso também serve para que o usuário saiba que o componente realmente atualizou caso vença ou perca duas vezes consecutivas.

# --hints--

O componente `GameOfChance` deve existir e renderizar à página.

```js
assert.strictEqual(
  Enzyme.mount(React.createElement(GameOfChance)).find('GameOfChance').length,
  1
);
```

`GameOfChance` deve retornar um único elemento `button`.

```js
assert.strictEqual(
  Enzyme.mount(React.createElement(GameOfChance)).find('button').length,
  1
);
```

`GameOfChance` deve retornar uma única instância do componente `Results`, que tem uma prop chamada `fiftyFifty`.

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

O state de `GameOfChance` deve ser inicializado com a propriedade `counter` definida com o valor `1`.

```js
assert.strictEqual(
  Enzyme.mount(React.createElement(GameOfChance)).state().counter,
  1
);
```

Quando o componente `GameOfChance` é renderizado pela primeira vez para o DOM, um elemento `p` deve ser retornado com o texto interno de `Turn: 1`.

```js
assert.strictEqual(
  Enzyme.mount(React.createElement(GameOfChance)).find('p').text(),
  'Turn: 1'
);
```

Cada vez que o botão é clicado, o estado do contador deve ser incrementado por um valor de 1, e um único elemento `p` deve ser renderizado para o DOM que contém o texto `Turn: N`, onde `N` é o valor do estado contador.

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

Quando o componente `GameOfChance` é montado pela primeira vez no DOM e toda vez que o botão é clicado depois, um único elemento `h1` deve ser retornado que renderiza aleatoriamente qualquer um dos textos `You Win!` ou `You Lose!`. Observação: isso pode falhar aleatoriamente. Se isso acontecer, tente novamente.

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

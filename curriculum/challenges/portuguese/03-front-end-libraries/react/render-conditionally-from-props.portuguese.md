---
id: 5a24c314108439a4d4036188
title: Render Conditionally from Props
challengeType: 6
isRequired: false
videoUrl: ''
localeTitle: Render condicionalmente de adereços
---

## Description
<section id="description"> Até agora, você viu como usar <code>if/else</code> , <code>&amp;&amp;,</code> <code>null</code> e o operador ternário ( <code>condition ? expressionIfTrue : expressionIfFalse</code> ) para tomar decisões condicionais sobre o que renderizar e quando. No entanto, há um tópico importante a ser discutido que permite combinar qualquer um ou todos esses conceitos com outro recurso poderoso do React: adereços. Usar adereços para renderizar condicionalmente o código é muito comum com os desenvolvedores do React - isto é, eles usam o valor de um determinado objeto para tomar decisões automaticamente sobre o que renderizar. Nesse desafio, você configurará um componente filho para tomar decisões de renderização com base em adereços. Você também usará o operador ternário, mas poderá ver como vários outros conceitos abordados nos últimos desafios podem ser úteis nesse contexto. </section>

## Instructions
<section id="instructions"> O editor de código tem dois componentes parcialmente definidos para você: um pai chamado <code>GameOfChance</code> e um filho chamado <code>Results</code> . Eles são usados ​​para criar um jogo simples em que o usuário pressiona um botão para ver se ele ganha ou perde. Primeiro, você precisará de uma expressão simples que retorne aleatoriamente um valor diferente toda vez que for executada. Você pode usar <code>Math.random()</code> . Esse método retorna um valor entre <code>0</code> (inclusive) e <code>1</code> (exclusivo) sempre que é chamado. Portanto, para probabilidades de 50/50, use <code>Math.random() &gt; .5</code> em sua expressão. Estatisticamente falando, essa expressão retornará <code>true</code> 50% do tempo e <code>false</code> os outros 50%. Na linha 30, substitua o comentário por essa expressão para completar a declaração da variável. Agora você tem uma expressão que pode ser usada para tomar uma decisão aleatória no código. Em seguida, você precisa implementar isso. Renderize o componente <code>Results</code> como um filho de <code>GameOfChance</code> e passe a <code>expression</code> como um prop chamado <code>fiftyFifty</code> . No componente <code>Results</code> , escreva uma expressão ternária para renderizar o texto <code>&quot;You win!&quot;</code> ou <code>&quot;You lose!&quot;</code> baseado no <code>fiftyFifty</code> que está sendo passado de <code>GameOfChance</code> . Por fim, verifique se o método <code>handleClick()</code> está contando corretamente cada turno, para que o usuário saiba quantas vezes eles foram reproduzidos. Isso também serve para informar ao usuário que o componente foi realmente atualizado caso ganhe ou perca duas vezes seguidas. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: O componente <code>GameOfChance</code> deve existir e renderizar para a página.
    testString: 'assert.strictEqual(Enzyme.mount(React.createElement(GameOfChance)).find("GameOfChance").length, 1, "The <code>GameOfChance</code> component should exist and render to the page.");'
  - text: <code>GameOfChance</code> deve retornar um único elemento de <code>button</code> .
    testString: 'assert.strictEqual(Enzyme.mount(React.createElement(GameOfChance)).find("button").length, 1, "<code>GameOfChance</code> should return a single <code>button</code> element.");'
  - text: '<code>GameOfChance</code> deve retornar uma única instância do componente <code>Results</code> , que possui um prop chamado <code>fiftyFifty</code> .'
    testString: 'assert(Enzyme.mount(React.createElement(GameOfChance)).find("Results").length === 1 && Enzyme.mount(React.createElement(GameOfChance)).find("Results").props().hasOwnProperty("fiftyFifty") === true, "<code>GameOfChance</code> should return a single instance of the <code>Results</code> component, which has a prop called <code>fiftyFifty</code>.");'
  - text: <code>GameOfChance</code> estado de <code>GameOfChance</code> deve ser inicializado com uma propriedade do <code>counter</code> definida como um valor de <code>1</code> .
    testString: 'assert.strictEqual(Enzyme.mount(React.createElement(GameOfChance)).state().counter, 1, "<code>GameOfChance</code> state should be initialized with a property of <code>counter</code> set to a value of <code>1</code>.");'
  - text: 'Quando o componente <code>GameOfChance</code> é renderizado pela primeira vez no DOM, um elemento <code>p</code> deve ser retornado com o texto interno de <code>Turn: 1</code> .'
    testString: 'assert.strictEqual(Enzyme.mount(React.createElement(GameOfChance)).find("p").text(), "Turn: 1", "When the <code>GameOfChance</code> component is first rendered to the DOM, a <code>p</code> element should be returned with the inner text of <code>Turn: 1</code>.");'
  - text: 'Cada vez que o botão é clicado, o estado do contador deve ser incrementado por um valor de 1, e um único elemento <code>p</code> deve ser renderizado para o DOM que contém o texto &quot;Turn: N&quot;, onde N é o valor do estado do contador.'
    testString: 'async () => { const waitForIt = (fn) => new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250)); const comp = Enzyme.mount(React.createElement(GameOfChance)); const simulate = () => { comp.find("button").simulate("click"); };const result = () => ({ count: comp.state("counter"), text: comp.find("p").text() });const _1 = () => { simulate(); return waitForIt(() => result())}; const _2 = () => { simulate(); return waitForIt(() => result())}; const _3 = () => { simulate(); return waitForIt(() => result())}; const _4 = () => { simulate(); return waitForIt(() => result())}; const _5 = () => { simulate(); return waitForIt(() => result())}; const _1_val = await _1(); const _2_val = await _2(); const _3_val = await _3(); const _4_val = await _4(); const _5_val = await _5(); assert(_1_val.count === 2 && _1_val.text === "Turn: 2" && _2_val.count === 3 && _2_val.text === "Turn: 3" && _3_val.count === 4 && _3_val.text === "Turn: 4" && _4_val.count === 5 && _4_val.text === "Turn: 5" && _5_val.count === 6 && _5_val.text === "Turn: 6", "Each time the button is clicked, the counter state should be incremented by a value of 1, and a single <code>p</code> element should be rendered to the DOM that contains the text "Turn: N", where N is the value of the counter state."); }; '
  - text: 'Quando o componente <code>GameOfChance</code> é montado pela primeira vez no DOM e cada vez que o botão é clicado, um único elemento <code>h1</code> deve ser retornado para renderizar aleatoriamente <code>You Win!</code> ou <code>You Lose!</code> .'
    testString: 'async () => { const waitForIt = (fn) => new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250)); const comp = Enzyme.mount(React.createElement(GameOfChance)); const simulate = () => { comp.find("button").simulate("click"); };const result = () => ({ h1: comp.find("h1").length, text: comp.find("h1").text() });const _1 = result(); const _2 = () => { simulate(); return waitForIt(() => result())}; const _3 = () => { simulate(); return waitForIt(() => result())}; const _4 = () => { simulate(); return waitForIt(() => result())}; const _5 = () => { simulate(); return waitForIt(() => result())}; const _6 = () => { simulate(); return waitForIt(() => result())}; const _7 = () => { simulate(); return waitForIt(() => result())}; const _8 = () => { simulate(); return waitForIt(() => result())}; const _9 = () => { simulate(); return waitForIt(() => result())}; const _10 = () => { simulate(); return waitForIt(() => result())}; const _2_val = await _2(); const _3_val = await _3(); const _4_val = await _4(); const _5_val = await _5(); const _6_val = await _6(); const _7_val = await _7(); const _8_val = await _8(); const _9_val = await _9(); const _10_val = await _10(); const __text = new Set([_1.text, _2_val.text, _3_val.text, _4_val.text, _5_val.text, _6_val.text, _7_val.text, _8_val.text, _9_val.text, _10_val.text]); const __h1 = new Set([_1.h1, _2_val.h1, _3_val.h1, _4_val.h1, _5_val.h1, _6_val.h1, _7_val.h1, _8_val.h1, _9_val.h1, _10_val.h1]); assert(__text.size === 2 && __h1.size === 1, "When the <code>GameOfChance</code> component is first mounted to the DOM and each time the button is clicked thereafter, a single <code>h1</code> element should be returned that randomly renders either <code>You Win!</code> or <code>You Lose!</code>."); }; '

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
class Results extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <h1>
      {
        /* change code here */
      }
      </h1>
    )
  };
};

class GameOfChance extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 1
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({
      counter: 0 // change code here
    });
  }
  render() {
    let expression = null; // change code here
    return (
      <div>
        <button onClick={this.handleClick}>Play Again</button>
        { /* change code below this line */ }

        { /* change code above this line */ }
        <p>{'Turn: ' + this.state.counter}</p>
      </div>
    );
  }
};

```

</div>


### After Test
<div id='jsx-teardown'>

```js
console.info('after the test');
```

</div>

</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

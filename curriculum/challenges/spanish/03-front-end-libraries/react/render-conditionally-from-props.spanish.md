---
id: 5a24c314108439a4d4036188
title: Render Conditionally from Props
challengeType: 6
isRequired: false
videoUrl: ''
localeTitle: Procesamiento condicional de apoyos
---

## Description
<section id="description"> Hasta ahora, ha visto cómo usar <code>if/else</code> , <code>&amp;&amp;,</code> <code>null</code> y el operador ternario ( <code>condition ? expressionIfTrue : expressionIfFalse</code> ) para tomar decisiones condicionales sobre qué representar y cuándo. Sin embargo, hay un tema importante que queda por discutir que te permite combinar cualquiera o todos estos conceptos con otra poderosa característica React: accesorios. El uso de utilería para generar condicionalmente el código es muy común entre los desarrolladores de React, es decir, utilizan el valor de una prop determinada para tomar decisiones automáticamente sobre qué representar. En este desafío, configurará un componente secundario para tomar decisiones de representación basadas en accesorios. También usará el operador ternario, pero puede ver cómo varios de los otros conceptos que se cubrieron en los últimos desafíos podrían ser igual de útiles en este contexto. </section>

## Instructions
<section id="instructions"> El editor de código tiene dos componentes que están parcialmente definidos para usted: un padre llamado <code>GameOfChance</code> y un hijo llamado <code>Results</code> . Se utilizan para crear un juego simple en el que el usuario presiona un botón para ver si gana o pierde. Primero, necesitará una expresión simple que retorne aleatoriamente un valor diferente cada vez que se ejecute. Puedes usar <code>Math.random()</code> . Este método devuelve un valor entre <code>0</code> (incluido) y <code>1</code> (exclusivo) cada vez que se llama. Entonces, para probabilidades 50/50, use <code>Math.random() &gt; .5</code> en su expresión. Estadísticamente hablando, esta expresión devolverá <code>true</code> 50% del tiempo, y <code>false</code> el otro 50%. En la línea 30, reemplace el comentario con esta expresión para completar la declaración de la variable. Ahora tiene una expresión que puede usar para tomar una decisión aleatoria en el código. A continuación necesitas implementar esto. Procese el componente <code>Results</code> como un elemento secundario de <code>GameOfChance</code> y pase la <code>expression</code> como un prop llamado <code>fiftyFifty</code> . En el componente <code>Results</code> , escriba una expresión ternaria para representar el texto <code>&quot;You win!&quot;</code> o <code>&quot;You lose!&quot;</code> basado en la propuesta <code>fiftyFifty</code> que se transmite desde <code>GameOfChance</code> . Finalmente, asegúrese de que el método <code>handleClick()</code> esté contando correctamente cada turno para que el usuario sepa cuántas veces ha jugado. Esto también sirve para que el usuario sepa que el componente se ha actualizado en caso de que gane o pierda dos veces seguidas. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: El componente <code>GameOfChance</code> debe existir y representarse en la página.
    testString: 'assert.strictEqual(Enzyme.mount(React.createElement(GameOfChance)).find("GameOfChance").length, 1, "The <code>GameOfChance</code> component should exist and render to the page.");'
  - text: <code>GameOfChance</code> debería devolver un único elemento de <code>button</code> .
    testString: 'assert.strictEqual(Enzyme.mount(React.createElement(GameOfChance)).find("button").length, 1, "<code>GameOfChance</code> should return a single <code>button</code> element.");'
  - text: '<code>GameOfChance</code> debe devolver una sola instancia del componente <code>Results</code> , que tiene un prop llamado <code>fiftyFifty</code> .'
    testString: 'assert(Enzyme.mount(React.createElement(GameOfChance)).find("Results").length === 1 && Enzyme.mount(React.createElement(GameOfChance)).find("Results").props().hasOwnProperty("fiftyFifty") === true, "<code>GameOfChance</code> should return a single instance of the <code>Results</code> component, which has a prop called <code>fiftyFifty</code>.");'
  - text: <code>GameOfChance</code> estado de <code>GameOfChance</code> debe inicializar con una propiedad de <code>counter</code> configurada en un valor de <code>1</code> .
    testString: 'assert.strictEqual(Enzyme.mount(React.createElement(GameOfChance)).state().counter, 1, "<code>GameOfChance</code> state should be initialized with a property of <code>counter</code> set to a value of <code>1</code>.");'
  - text: 'Cuando el componente <code>GameOfChance</code> se procesa por primera vez en el DOM, se debe devolver un elemento <code>p</code> con el texto interno de <code>Turn: 1</code> .'
    testString: 'assert.strictEqual(Enzyme.mount(React.createElement(GameOfChance)).find("p").text(), "Turn: 1", "When the <code>GameOfChance</code> component is first rendered to the DOM, a <code>p</code> element should be returned with the inner text of <code>Turn: 1</code>.");'
  - text: 'Cada vez que se hace clic en el botón, el estado del contador debe incrementarse en un valor de 1, y se debe representar un solo elemento <code>p</code> en el DOM que contiene el texto &quot;Turn: N&quot;, donde N es el valor del estado del contador.'
    testString: 'async () => { const waitForIt = (fn) => new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250)); const comp = Enzyme.mount(React.createElement(GameOfChance)); const simulate = () => { comp.find("button").simulate("click"); };const result = () => ({ count: comp.state("counter"), text: comp.find("p").text() });const _1 = () => { simulate(); return waitForIt(() => result())}; const _2 = () => { simulate(); return waitForIt(() => result())}; const _3 = () => { simulate(); return waitForIt(() => result())}; const _4 = () => { simulate(); return waitForIt(() => result())}; const _5 = () => { simulate(); return waitForIt(() => result())}; const _1_val = await _1(); const _2_val = await _2(); const _3_val = await _3(); const _4_val = await _4(); const _5_val = await _5(); assert(_1_val.count === 2 && _1_val.text === "Turn: 2" && _2_val.count === 3 && _2_val.text === "Turn: 3" && _3_val.count === 4 && _3_val.text === "Turn: 4" && _4_val.count === 5 && _4_val.text === "Turn: 5" && _5_val.count === 6 && _5_val.text === "Turn: 6", "Each time the button is clicked, the counter state should be incremented by a value of 1, and a single <code>p</code> element should be rendered to the DOM that contains the text "Turn: N", where N is the value of the counter state."); }; '
  - text: 'Cuando el componente <code>GameOfChance</code> se monta por primera vez en el DOM y cada vez que se hace clic en el botón a continuación, se debe devolver un único elemento <code>h1</code> que muestre aleatoriamente ¡ <code>You Win!</code> o <code>You Lose!</code> .'
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

---
id: 5a24c314108439a4d4036183
title: Use Advanced JavaScript in React Render Method
challengeType: 6
isRequired: false
videoUrl: ''
localeTitle: Utilice JavaScript avanzado en el método React Render
---

## Description
<section id="description"> En los desafíos anteriores, aprendió a inyectar código JavaScript en el código JSX usando llaves, <code>{ }</code> , para tareas como acceder a accesorios, aprobar accesorios, acceder a estados, insertar comentarios en su código y, más recientemente, diseñar estilos para sus componentes. Estos son todos los casos de uso comunes para poner JavaScript en JSX, pero no son la única forma en que puede utilizar el código JavaScript en sus componentes React. También puede escribir JavaScript directamente en sus métodos de <code>render</code> , antes de la declaración de <code>return</code> , <strong><em>sin</em></strong> insertarlo dentro de llaves. Esto se debe a que aún no está dentro del código JSX. Cuando desee utilizar una variable más adelante en el código JSX <em>dentro de</em> la declaración de <code>return</code> , coloque el nombre de la variable entre llaves. </section>

## Instructions
<section id="instructions"> En el código provisto, el método de <code>render</code> tiene una matriz que contiene 20 frases para representar las respuestas encontradas en el clásico juguete de la bola mágica de los ochenta. El evento de clic de botón está ligado al <code>ask</code> método, por lo que cada vez que se hace clic en el botón de un número aleatorio se genera y se almacena como el <code>randomIndex</code> en el estado. En la línea 52, borra la cadena <code>&quot;change me!&quot;</code> y reasigne la <code>answer</code> constante para que su código acceda al azar a un índice diferente de la <code>possibleAnswers</code> matriz de <code>answer</code> cada vez que se actualice el componente. Finalmente, inserta la <code>answer</code> const dentro de las etiquetas <code>p</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: El componente <code>MagicEightBall</code> debe existir y debe <code>MagicEightBall</code> en la página.
    testString: 'assert.strictEqual(Enzyme.mount(React.createElement(MagicEightBall)).find("MagicEightBall").length, 1, "The <code>MagicEightBall</code> component should exist and should render to the page.");'
  - text: El primer hijo de <code>MagicEightBall</code> debería ser un elemento de <code>input</code> .
    testString: 'assert.strictEqual(Enzyme.mount(React.createElement(MagicEightBall)).children().childAt(0).name(), "input", "<code>MagicEightBall</code>&apos;s first child should be an <code>input</code> element.");'
  - text: El tercer hijo de <code>MagicEightBall</code> debería ser un elemento de <code>button</code> .
    testString: 'assert.strictEqual(Enzyme.mount(React.createElement(MagicEightBall)).children().childAt(2).name(), "button", "<code>MagicEightBall</code>&apos;s third child should be a <code>button</code> element.");'
  - text: El estado de <code>MagicEightBall</code> debe inicializarse con una propiedad de <code>userInput</code> y una propiedad de <code>randomIndex</code> ambas configuradas en un valor de una cadena vacía.
    testString: 'assert(Enzyme.mount(React.createElement(MagicEightBall)).state("randomIndex") === "" && Enzyme.mount(React.createElement(MagicEightBall)).state("userInput") === "", "<code>MagicEightBall</code>&apos;s state should be initialized with a property of <code>userInput</code> and a property of <code>randomIndex</code> both set to a value of an empty string.");'
  - text: 'Cuando <code>MagicEightBall</code> se monta por primera vez en el DOM, debe devolver un elemento <code>p</code> vacío.'
    testString: 'assert(Enzyme.mount(React.createElement(MagicEightBall)).find("p").length === 1 && Enzyme.mount(React.createElement(MagicEightBall)).find("p").text() === "", "When <code>MagicEightBall</code> is first mounted to the DOM, it should return an empty <code>p</code> element.");'
  - text: 'Cuando se ingresa texto en el elemento de <code>input</code> y se hace clic en el botón, el componente <code>MagicEightBall</code> debería devolver un elemento <code>p</code> que contenga un elemento aleatorio de la <code>possibleAnswers</code> matriz de <code>MagicEightBall</code> .'
    testString: 'async () => { const waitForIt = (fn) => new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250)); const comp = Enzyme.mount(React.createElement(MagicEightBall)); const simulate = () => { comp.find("input").simulate("change", { target: { value: "test?" }}); comp.find("button").simulate("click"); }; const result = () => comp.find("p").text(); const _1 = () => { simulate(); return waitForIt(() => result()) }; const _2 = () => { simulate(); return waitForIt(() => result()) }; const _3 = () => { simulate(); return waitForIt(() => result()) }; const _4 = () => { simulate(); return waitForIt(() => result()) }; const _5 = () => { simulate(); return waitForIt(() => result()) }; const _6 = () => { simulate(); return waitForIt(() => result()) }; const _7 = () => { simulate(); return waitForIt(() => result()) }; const _8 = () => { simulate(); return waitForIt(() => result()) }; const _9 = () => { simulate(); return waitForIt(() => result()) }; const _10 = () => { simulate(); return waitForIt(() => result()) }; const _1_val = await _1(); const _2_val = await _2(); const _3_val = await _3(); const _4_val = await _4(); const _5_val = await _5(); const _6_val = await _6(); const _7_val = await _7(); const _8_val = await _8(); const _9_val = await _9(); const _10_val = await _10(); const actualAnswers = [_1_val, _2_val, _3_val, _4_val, _5_val, _6_val, _7_val, _8_val, _9_val, _10_val]; const hasIndex = actualAnswers.filter((answer, i) => possibleAnswers.indexOf(answer) !== -1); const notAllEqual = new Set(actualAnswers); assert(notAllEqual.size > 1 && hasIndex.length === 10, "When text is entered into the <code>input</code> element and the button is clicked, the <code>MagicEightBall</code> component should return a <code>p</code> element that contains a random element from the <code>possibleAnswers</code> array.");}'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
const inputStyle = {
  width: 235,
  margin: 5
}

class MagicEightBall extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: ",
      randomIndex: "
    }
    this.ask = this.ask.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  ask() {
    if (this.state.userInput) {
      this.setState({
        randomIndex: Math.floor(Math.random() * 20),
        userInput: "
      });
    }
  }
  handleChange(event) {
    this.setState({
      userInput: event.target.value
    });
  }
  render() {
    const possibleAnswers = [
      'It is certain',
      'It is decidedly so',
      'Without a doubt',
      'Yes, definitely',
      'You may rely on it',
      'As I see it, yes',
      'Outlook good',
      'Yes',
      'Signs point to yes',
      'Reply hazy try again',
      'Ask again later',
      'Better not tell you now',
      'Cannot predict now',
      'Concentrate and ask again',
      'Don\'t count on it',
      'My reply is no',
      'My sources say no',
      'Most likely',
      'Outlook not so good',
      'Very doubtful'
    ];
    const answer = 'change me!' // << change code here
    return (
      <div>
        <input
          type="text"
          value={this.state.userInput}
          onChange={this.handleChange}
          style={inputStyle} /><br />
        <button onClick={this.ask}>
          Ask the Magic Eight Ball!
        </button><br />
        <h3>Answer:</h3>
        <p>
          { /* change code below this line */ }

          { /* change code above this line */ }
        </p>
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

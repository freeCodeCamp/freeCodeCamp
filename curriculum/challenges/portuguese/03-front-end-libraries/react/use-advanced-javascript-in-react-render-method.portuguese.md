---
id: 5a24c314108439a4d4036183
title: Use Advanced JavaScript in React Render Method
challengeType: 6
videoUrl: ''
localeTitle: Use JavaScript avançado no método Renderização de Reação
---

## Description
<section id="description"> Nos desafios anteriores, você aprendeu como injetar código JavaScript no código JSX usando chaves, <code>{ }</code> , para tarefas como acessar adereços, aprovar, acessar o estado, inserir comentários em seu código e, mais recentemente, estilizar seus componentes. Esses são todos os casos de uso comuns para colocar o JavaScript no JSX, mas eles não são a única maneira de usar o código JavaScript nos componentes do React. Você também pode escrever JavaScript diretamente em seus métodos de <code>render</code> , antes da instrução de <code>return</code> , <strong><em>sem</em></strong> inseri-lo dentro das chaves. Isso ocorre porque ainda não está no código JSX. Quando você quiser usar uma variável posteriormente no código JSX <em>dentro</em> da instrução de <code>return</code> , coloque o nome da variável dentro de chaves. </section>

## Instructions
<section id="instructions"> No código fornecido, o método de <code>render</code> tem uma matriz que contém 20 frases para representar as respostas encontradas no brinquedo clássico dos anos 80 do Magic Eight Ball. O evento de clique de botão está vinculado ao método <code>ask</code> , então toda vez que o botão for clicado, um número aleatório será gerado e armazenado como o <code>randomIndex</code> no estado. Na linha 52, exclua a string <code>&quot;change me!&quot;</code> e reatribuir a <code>answer</code> const para que seu código acesse aleatoriamente um índice diferente do array <code>possibleAnswers</code> sempre que o componente for atualizado. Finalmente, insira a <code>answer</code> const dentro das tags <code>p</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: O componente <code>MagicEightBall</code> deve existir e deve renderizar para a página.
    testString: 'assert.strictEqual(Enzyme.mount(React.createElement(MagicEightBall)).find("MagicEightBall").length, 1, "The <code>MagicEightBall</code> component should exist and should render to the page.");'
  - text: O primeiro filho de <code>MagicEightBall</code> deve ser um elemento de <code>input</code> .
    testString: 'assert.strictEqual(Enzyme.mount(React.createElement(MagicEightBall)).children().childAt(0).name(), "input", "<code>MagicEightBall</code>&apos;s first child should be an <code>input</code> element.");'
  - text: O terceiro filho de <code>MagicEightBall</code> deve ser um elemento de <code>button</code> .
    testString: 'assert.strictEqual(Enzyme.mount(React.createElement(MagicEightBall)).children().childAt(2).name(), "button", "<code>MagicEightBall</code>&apos;s third child should be a <code>button</code> element.");'
  - text: O estado de <code>MagicEightBall</code> deve ser inicializado com uma propriedade de <code>userInput</code> e uma propriedade de <code>randomIndex</code> ambas configuradas para um valor de uma string vazia.
    testString: 'assert(Enzyme.mount(React.createElement(MagicEightBall)).state("randomIndex") === "" && Enzyme.mount(React.createElement(MagicEightBall)).state("userInput") === "", "<code>MagicEightBall</code>&apos;s state should be initialized with a property of <code>userInput</code> and a property of <code>randomIndex</code> both set to a value of an empty string.");'
  - text: 'Quando o <code>MagicEightBall</code> é montado pela primeira vez no DOM, ele deve retornar um elemento <code>p</code> vazio.'
    testString: 'assert(Enzyme.mount(React.createElement(MagicEightBall)).find("p").length === 1 && Enzyme.mount(React.createElement(MagicEightBall)).find("p").text() === "", "When <code>MagicEightBall</code> is first mounted to the DOM, it should return an empty <code>p</code> element.");'
  - text: 'Quando o texto é inserido no elemento de <code>input</code> e o botão é clicado, o componente <code>MagicEightBall</code> deve retornar um elemento <code>p</code> que contém um elemento aleatório da matriz <code>possibleAnswers</code> .'
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

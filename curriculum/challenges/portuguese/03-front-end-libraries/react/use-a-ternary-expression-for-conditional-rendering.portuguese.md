---
id: 5a24c314108439a4d4036187
title: Use a Ternary Expression for Conditional Rendering
challengeType: 6
isRequired: false
videoUrl: ''
localeTitle: Use uma expressão ternária para renderização condicional
---

## Description
<section id="description"> Antes de passar para as técnicas de renderização dinâmica, há uma última maneira de usar condicionais JavaScript internos para renderizar o que você deseja: o <em><strong>operador ternário</strong></em> . O operador ternário é frequentemente utilizado como um atalho para instruções <code>if/else</code> em JavaScript. Eles não são tão robustos quanto as tradicionais declarações <code>if/else</code> , mas são muito populares entre os desenvolvedores do React. Uma razão para isso é devido ao modo como o JSX é compilado, <code>if/else</code> instruções <code>if/else</code> não puderem ser inseridas diretamente no código JSX. Você deve ter percebido isso há alguns anos atrás - quando uma declaração <code>if/else</code> era necessária, estava sempre <em>fora</em> da declaração de <code>return</code> . Expressões ternárias podem ser uma excelente alternativa se você quiser implementar uma lógica condicional no seu JSX. Lembre-se de que um operador ternário possui três partes, mas você pode combinar várias expressões ternárias juntas. Aqui está a sintaxe básica: <blockquote> condição? expressionIfTrue: expressionIfFalse </blockquote></section>

## Instructions
<section id="instructions"> O editor de código possui três constantes definidas no método <code>render()</code> do componente <code>CheckUserAge</code> . Eles são chamados de <code>buttonOne</code> , <code>buttonTwo</code> e <code>buttonThree</code> . Cada uma delas é atribuída a uma expressão simples de JSX representando um elemento de botão. Primeiro, inicialize o estado de <code>CheckUserAge</code> com <code>input</code> e <code>userAge</code> ambos configurados para valores de uma string vazia. Depois que o componente estiver renderizando informações para a página, os usuários devem ter uma maneira de interagir com ele. Na instrução de <code>return</code> do componente, configure uma expressão ternária que implemente a seguinte lógica: quando a página carregar pela primeira vez, renderize o botão de envio, <code>buttonOne</code> , na página. Em seguida, quando um usuário digitar sua idade e clicar no botão, processe um botão diferente com base na idade. Se um usuário digitar um número menor que <code>18</code> , renderize <code>buttonThree</code> . Se um usuário digitar um número maior ou igual a <code>18</code> , <code>buttonTwo</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: O componente <code>CheckUserAge</code> deve renderizar com um único elemento de <code>input</code> e um único elemento de <code>button</code> .
    testString: 'assert(Enzyme.mount(React.createElement(CheckUserAge)).find("div").find("input").length === 1 && Enzyme.mount(React.createElement(CheckUserAge)).find("div").find("button").length === 1, "The <code>CheckUserAge</code> component should render with a single <code>input</code> element and a single <code>button</code> element.");'
  - text: 'O estado do componente <code>CheckUserAge</code> deve ser inicializado com uma propriedade de <code>userAge</code> e uma propriedade de <code>input</code> , ambas configuradas para um valor de uma cadeia vazia.'
    testString: 'assert(Enzyme.mount(React.createElement(CheckUserAge)).state().input === "" && Enzyme.mount(React.createElement(CheckUserAge)).state().userAge === "", "The <code>CheckUserAge</code> component&apos;s state should be initialized with a property of <code>userAge</code> and a property of <code>input</code>, both set to a value of an empty string.");'
  - text: 'Quando o componente <code>CheckUserAge</code> é renderizado pela primeira vez para o DOM, o texto interno do <code>button</code> deve ser Enviar.'
    testString: 'assert(Enzyme.mount(React.createElement(CheckUserAge)).find("button").text() === "Submit", "When the <code>CheckUserAge</code> component is first rendered to the DOM, the <code>button</code>&apos;s inner text should be Submit.");'
  - text: 'Quando um número menor que 18 é inserido no elemento de <code>input</code> e o <code>button</code> é clicado, o texto interno do <code>button</code> deve ser lido como <code>You Shall Not Pass</code> .'
    testString: 'async () => { const waitForIt = (fn) => new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250)); const mockedComponent = Enzyme.mount(React.createElement(CheckUserAge)); const initialButton = mockedComponent.find("button").text(); const enter3AndClickButton = () => { mockedComponent.find("input").simulate("change", {target: { value: "3" }}); mockedComponent.find("button").simulate("click"); return waitForIt(() => { mockedComponent.update(); return mockedComponent.find("button").text(); }); }; const enter17AndClickButton = () => { mockedComponent.find("input").simulate("change", {target: { value: "17" }}); mockedComponent.find("button").simulate("click"); return waitForIt(() => { mockedComponent.update(); return mockedComponent.find("button").text(); }); }; const userAge3 = await enter3AndClickButton(); const userAge17 = await enter17AndClickButton(); assert(initialButton === "Submit" && userAge3 === "You Shall Not Pass" && userAge17 === "You Shall Not Pass", "When a number of less than 18 is entered into the <code>input</code> element and the <code>button</code> is clicked, the <code>button</code>&apos;s inner text should read <code>You Shall Not Pass</code>."); }; '
  - text: 'Quando um número maior ou igual a 18 é inserido no elemento de <code>input</code> e o <code>button</code> é clicado, o texto interno do <code>button</code> deve ler <code>You May Enter</code> .'
    testString: 'async () => { const waitForIt = (fn) => new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250)); const mockedComponent = Enzyme.mount(React.createElement(CheckUserAge)); const initialButton = mockedComponent.find("button").text(); const enter18AndClickButton = () => { mockedComponent.find("input").simulate("change", {target: { value: "18" }}); mockedComponent.find("button").simulate("click"); return waitForIt(() => { mockedComponent.update(); return mockedComponent.find("button").text(); }); }; const enter35AndClickButton = () => { mockedComponent.find("input").simulate("change", {target: { value: "35" }}); mockedComponent.find("button").simulate("click"); return waitForIt(() => { mockedComponent.update(); return mockedComponent.find("button").text(); }); }; const userAge18 = await enter18AndClickButton(); const userAge35 = await enter35AndClickButton(); assert(initialButton === "Submit" && userAge18 === "You May Enter" && userAge35 === "You May Enter", "When a number greater than or equal to 18 is entered into the <code>input</code> element and the <code>button</code> is clicked, the <code>button</code>&apos;s inner text should read <code>You May Enter</code>."); }; '
  - text: 'Quando um número for enviado e o valor da <code>input</code> for novamente alterado, o <code>button</code> retornará para a leitura de <code>Submit</code> .'
    testString: 'async () => { const waitForIt = (fn) => new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250)); const mockedComponent = Enzyme.mount(React.createElement(CheckUserAge)); const enter18AndClickButton = () => { mockedComponent.find("input").simulate("change", {target: { value: "18" }}); mockedComponent.find("button").simulate("click"); return waitForIt(() => { mockedComponent.update(); return mockedComponent.find("button").text(); }); }; const changeInputDontClickButton = () => { mockedComponent.find("input").simulate("change", {target: { value: "5" }}); return waitForIt(() => { mockedComponent.update(); return mockedComponent.find("button").text(); }); }; const enter10AndClickButton = () => { mockedComponent.find("input").simulate("change", {target: { value: "10" }}); mockedComponent.find("button").simulate("click"); return waitForIt(() => { mockedComponent.update(); return mockedComponent.find("button").text(); }); }; const userAge18 = await enter18AndClickButton(); const changeInput1 = await changeInputDontClickButton(); const userAge10 = await enter10AndClickButton(); const changeInput2 = await changeInputDontClickButton(); assert(userAge18 === "You May Enter" && changeInput1 === "Submit" && userAge10 === "You Shall Not Pass" && changeInput2 === "Submit", "Once a number has been submitted, and the value of the <code>input</code> is once again changed, the <code>button</code> should return to reading <code>Submit</code>."); }; '
  - text: Seu código não deve conter nenhuma instrução <code>if/else</code> .
    testString: 'assert(new RegExp(/(\s|;)if(\s|\()/).test(Enzyme.mount(React.createElement(CheckUserAge)).instance().render.toString()) === false, "Your code should not contain any <code>if/else</code> statements.");'

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

class CheckUserAge extends React.Component {
  constructor(props) {
    super(props);
    // change code below this line

    // change code above this line
    this.submit = this.submit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({
      input: e.target.value,
      userAge: "
    });
  }
  submit() {
    this.setState({
      userAge: this.state.input
    });
  }
  render() {
    const buttonOne = <button onClick={this.submit}>Submit</button>;
    const buttonTwo = <button>You May Enter</button>;
    const buttonThree = <button>You Shall Not Pass</button>;
    return (
      <div>
        <h3>Enter Your Age to Continue</h3>
        <input
          style={inputStyle}
          type="number"
          value={this.state.input}
          onChange={this.handleChange} /><br />
        {
          /* change code here */
        }
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

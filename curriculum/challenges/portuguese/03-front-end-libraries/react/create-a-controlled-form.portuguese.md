---
id: 5a24c314108439a4d4036179
title: Create a Controlled Form
challengeType: 6
videoUrl: ''
localeTitle: Crie um formulário controlado
---

## Description
<section id="description"> O último desafio mostrou que o React pode controlar o estado interno de certos elementos como <code>input</code> e área de <code>textarea</code> , o que os torna componentes controlados. Isso se aplica também a outros elementos de formulário, incluindo o elemento de <code>form</code> HTML regular. </section>

## Instructions
<section id="instructions"> O componente <code>MyForm</code> é configurado com um <code>form</code> vazio com um manipulador de envio. O manipulador de envio será chamado quando o formulário for enviado. Adicionamos um botão que envia o formulário. Você pode ver que ele tem o <code>type</code> configurado para <code>submit</code> indicando que é o botão que controla o formulário. Adicione o elemento de <code>input</code> no <code>form</code> e defina seu <code>value</code> e os atributos <code>onChange()</code> como o último desafio. Você deve, em seguida, completar o <code>handleSubmit</code> método para que ele define a propriedade estado do componente <code>submit</code> ao valor de entrada atual no local de <code>state</code> . <strong>Nota:</strong> Você também deve chamar <code>event.preventDefault()</code> no manipulador de envio, para evitar o comportamento de envio de formulário padrão que atualizará a página da web. Finalmente, crie uma tag <code>h1</code> após o <code>form</code> que renderiza o valor de <code>submit</code> do <code>state</code> do componente. Você pode então digitar o formulário e clicar no botão (ou pressionar enter), e você deverá ver sua entrada renderizada para a página. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>MyForm</code> deve retornar um elemento <code>div</code> que contém um <code>form</code> e uma tag <code>h1</code> . O formulário deve incluir uma <code>input</code> e um <code>button</code> .
    testString: 'assert((() => { const mockedComponent = Enzyme.mount(React.createElement(MyForm)); return (mockedComponent.find("div").children().find("form").length === 1 && mockedComponent.find("div").children().find("h1").length === 1 && mockedComponent.find("form").children().find("input").length === 1 && mockedComponent.find("form").children().find("button").length === 1) })(), "<code>MyForm</code> should return a <code>div</code> element which contains a <code>form</code> and an <code>h1</code> tag. The form should include an <code>input</code> and a <code>button</code>.");'
  - text: 'O estado de <code>MyForm</code> deve inicializar com <code>input</code> e <code>submit</code> propriedades, ambas definidas para seqüências vazias.'
    testString: 'assert(Enzyme.mount(React.createElement(MyForm)).state("input") === "" && Enzyme.mount(React.createElement(MyForm)).state("submit") === "", "The state of <code>MyForm</code> should initialize with <code>input</code> and <code>submit</code> properties, both set to empty strings.");'
  - text: Digitar no elemento de <code>input</code> deve atualizar a propriedade de <code>input</code> do estado do componente.
    testString: 'async () => { const waitForIt = (fn) => new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250)); const mockedComponent = Enzyme.mount(React.createElement(MyForm)); const _1 = () => { mockedComponent.setState({ input: "" }); return waitForIt(() => mockedComponent.state("input"))}; const _2 = () => { mockedComponent.find("input").simulate("change", { target: { value: "TestInput" }}); return waitForIt(() => ({ state: mockedComponent.state("input"), inputVal: mockedComponent.find("input").props().value }))}; const before = await _1(); const after = await _2(); assert(before === "" && after.state === "TestInput" && after.inputVal === "TestInput", "Typing in the <code>input</code> element should update the <code>input</code> property of the component&apos;s state."); }; '
  - text: O envio do formulário deve executar o <code>handleSubmit</code> que deve definir a propriedade <code>submit</code> no estado igual à entrada atual.
    testString: 'async () => { const waitForIt = (fn) => new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250)); const mockedComponent = Enzyme.mount(React.createElement(MyForm)); const _1 = () => { mockedComponent.setState({ input: "" }); mockedComponent.setState({submit: ""}); mockedComponent.find("input").simulate("change", {target: {value: "SubmitInput"}}); return waitForIt(() => mockedComponent.state("submit"))}; const _2 = () => { mockedComponent.find("form").simulate("submit"); return waitForIt(() => mockedComponent.state("submit"))}; const before = await _1(); const after = await _2(); assert(before === "" && after === "SubmitInput", "Submitting the form should run <code>handleSubmit</code> which should set the <code>submit</code> property in state equal to the current input."); };'
  - text: O cabeçalho <code>h1</code> deve renderizar o valor do campo de <code>submit</code> do estado do componente.
    testString: 'async () => { const waitForIt = (fn) => new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250)); const mockedComponent = Enzyme.mount(React.createElement(MyForm)); const _1 = () => { mockedComponent.setState({ input: "" }); mockedComponent.setState({submit: ""}); mockedComponent.find("input").simulate("change", {target: {value: "TestInput"}}); return waitForIt(() => mockedComponent.find("h1").text())}; const _2 = () => { mockedComponent.find("form").simulate("submit"); return waitForIt(() => mockedComponent.find("h1").text())}; const before = await _1(); const after = await _2(); assert(before === "" && after === "TestInput", "The <code>h1</code> header should render the value of the <code>submit</code> field from the component&apos;s state."); }; '

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ",
      submit: "
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }
  handleSubmit(event) {
    // change code below this line

    // change code above this line
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          { /* change code below this line */ }

          { /* change code above this line */ }
          <button type='submit'>Submit!</button>
        </form>
        { /* change code below this line */ }

        { /* change code above this line */ }
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

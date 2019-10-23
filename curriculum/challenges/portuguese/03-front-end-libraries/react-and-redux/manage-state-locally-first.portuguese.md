---
id: 5a24c314108439a4d4036142
title: Manage State Locally First
challengeType: 6
isRequired: false
videoUrl: ''
localeTitle: Gerenciar Estado Localmente Primeiro
---

## Description
<section id="description"> Aqui você terminará de criar o componente <code>DisplayMessages</code> . </section>

## Instructions
<section id="instructions"> Primeiro, no método <code>render()</code> , faça o componente renderizar um elemento de <code>input</code> , elemento de <code>button</code> e elemento <code>ul</code> . Quando o elemento de <code>input</code> é alterado, ele deve acionar um método <code>handleChange()</code> . Além disso, o elemento de <code>input</code> deve renderizar o valor da <code>input</code> que está no estado do componente. O elemento <code>button</code> deve acionar um método <code>submitMessage()</code> quando é clicado. Em segundo lugar, escreva esses dois métodos. O método <code>handleChange()</code> deve atualizar a <code>input</code> com o que o usuário está digitando. O método <code>submitMessage()</code> deve concatenar a mensagem atual (armazenada na <code>input</code> ) para a matriz de <code>messages</code> no estado local e limpar o valor da <code>input</code> . Finalmente, use o <code>ul</code> para mapear a matriz de <code>messages</code> e renderizá-la na tela como uma lista de elementos <code>li</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 'O componente <code>DisplayMessages</code> deve inicializar com um estado igual a <code>{ input: &quot;&quot;, messages: [] }</code> .'
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(DisplayMessages)); const initialState = mockedComponent.state(); return ( typeof initialState === "object" && initialState.input === "" && initialState.messages.length === 0); })(), "The <code>DisplayMessages</code> component should initialize with a state equal to <code>{ input: "", messages: [] }</code>.");'
  - text: 'O componente <code>DisplayMessages</code> deve renderizar uma <code>div</code> contendo um elemento <code>h2</code> , um elemento <code>button</code> , um elemento <code>ul</code> e <code>li</code> como filhos.'
    testString: 'async () => { const mockedComponent = Enzyme.mount(React.createElement(DisplayMessages)); const waitForIt = (fn) => new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 100)); const state = () => { mockedComponent.setState({messages: ["__TEST__MESSAGE"]}); return waitForIt(() => mockedComponent )}; const updated = await state(); assert(updated.find("div").length === 1 && updated.find("h2").length === 1 && updated.find("button").length === 1 && updated.find("ul").length === 1, "The <code>DisplayMessages</code> component should render a <code>div</code> containing an <code>h2</code> element, a <code>button</code> element, a <code>ul</code> element, and <code>li</code> elements as children."); }; '
  - text: O elemento de <code>input</code> deve renderizar o valor da <code>input</code> no estado local.
    testString: 'async () => { const mockedComponent = Enzyme.mount(React.createElement(DisplayMessages)); const waitForIt = (fn) => new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 100)); const causeChange = (c, v) => c.find("input").simulate("change", { target: { value: v }}); const testValue = "__TEST__EVENT__INPUT"; const changed = () => { causeChange(mockedComponent, testValue); return waitForIt(() => mockedComponent )}; const updated = await changed(); assert(updated.find("input").props().value === testValue, "The <code>input</code> element should render the value of <code>input</code> in local state."); }; '
  - text: Chamar o método <code>handleChange</code> deve atualizar o valor de <code>input</code> em estado para a entrada atual.
    testString: 'async () => { const mockedComponent = Enzyme.mount(React.createElement(DisplayMessages)); const waitForIt = (fn) => new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 100)); const causeChange = (c, v) => c.find("input").simulate("change", { target: { value: v }}); const initialState = mockedComponent.state(); const testMessage = "__TEST__EVENT__MESSAGE__"; const changed = () => { causeChange(mockedComponent, testMessage); return waitForIt(() => mockedComponent )}; const afterInput = await changed(); assert(initialState.input === "" && afterInput.state().input === "__TEST__EVENT__MESSAGE__", "Calling the method <code>handleChange</code> should update the <code>input</code> value in state to the current input.");  }; '
  - text: Clicar no botão <code>Add message</code> deve chamar o método <code>submitMessage</code> que deve adicionar a <code>input</code> atual ao array de <code>messages</code> no estado.
    testString: 'async () => { const mockedComponent = Enzyme.mount(React.createElement(DisplayMessages)); const waitForIt = (fn) => new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 100)); const causeChange = (c, v) => c.find("input").simulate("change", { target: { value: v }}); const initialState = mockedComponent.state(); const testMessage_1 = "__FIRST__MESSAGE__"; const firstChange = () => { causeChange(mockedComponent, testMessage_1); return waitForIt(() => mockedComponent )}; const firstResult = await firstChange(); const firstSubmit = () => { mockedComponent.find("button").simulate("click"); return waitForIt(() => mockedComponent )}; const afterSubmit_1 = await firstSubmit(); const submitState_1 = afterSubmit_1.state(); const testMessage_2 = "__SECOND__MESSAGE__"; const secondChange = () => { causeChange(mockedComponent, testMessage_2); return waitForIt(() => mockedComponent )}; const secondResult = await secondChange(); const secondSubmit = () => { mockedComponent.find("button").simulate("click"); return waitForIt(() => mockedComponent )}; const afterSubmit_2 = await secondSubmit(); const submitState_2 = afterSubmit_2.state(); assert(initialState.messages.length === 0 && submitState_1.messages.length === 1 && submitState_2.messages.length === 2 && submitState_2.messages[1] === testMessage_2, "Clicking the <code>Add message</code> button should call the method <code>submitMessage</code> which should add the current <code>input</code> to the <code>messages</code> array in state."); }; '
  - text: O método <code>submitMessage</code> deve limpar a entrada atual.
    testString: 'async () => { const mockedComponent = Enzyme.mount(React.createElement(DisplayMessages)); const waitForIt = (fn) => new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 100)); const causeChange = (c, v) => c.find("input").simulate("change", { target: { value: v }}); const initialState = mockedComponent.state(); const testMessage = "__FIRST__MESSAGE__"; const firstChange = () => { causeChange(mockedComponent, testMessage); return waitForIt(() => mockedComponent )}; const firstResult = await firstChange(); const firstState = firstResult.state(); const firstSubmit = () => { mockedComponent.find("button").simulate("click"); return waitForIt(() => mockedComponent )}; const afterSubmit = await firstSubmit(); const submitState = afterSubmit.state(); assert(firstState.input === testMessage && submitState.input === "", "The <code>submitMessage</code> method should clear the current input."); }; '

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
class DisplayMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ",
      messages: []
    }
  }
  // add handleChange() and submitMessage() methods here

  render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>
        { /* render an input, button, and ul here */ }

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

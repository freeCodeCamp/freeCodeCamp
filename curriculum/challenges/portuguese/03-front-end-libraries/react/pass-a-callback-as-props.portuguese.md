---
id: 5a24c314108439a4d403617b
title: Pass a Callback as Props
challengeType: 6
videoUrl: ''
localeTitle: Passar um retorno de chamada como adereços
---

## Description
<section id="description"> Você pode passar o <code>state</code> como props para componentes filhos, mas você não está limitado a passar dados. Você também pode passar funções de manipulador ou qualquer método definido em um componente React para um componente filho. É assim que você permite que componentes filho interajam com seus componentes pai. Você passa métodos para uma criança como se fosse um adereço regular. É atribuído um nome e você tem acesso a esse nome de método sob <code>this.props</code> no componente filho. </section>

## Instructions
<section id="instructions"> Existem três componentes descritos no editor de código. O <code>MyApp</code> componente é o pai que irá processar os <code>GetInput</code> e <code>RenderInput</code> componentes filhos. Adicione o componente <code>GetInput</code> ao método de renderização em <code>MyApp</code> , em seguida, passe-o a uma <code>input</code> denominada <code>input</code> <code>inputValue</code> do <code>state</code> de <code>MyApp</code> . Também crie um prop chamado <code>handleChange</code> e passe o manipulador de entrada <code>handleChange</code> para ele. Em seguida, adicione <code>RenderInput</code> ao método render em <code>MyApp</code> , crie um prop chamado <code>input</code> e passe o <code>inputValue</code> do <code>state</code> para ele. Quando terminar, você poderá digitar o campo de <code>input</code> no componente <code>GetInput</code> , que chama o método handler em seu pai por meio de props. Isso atualiza a entrada no <code>state</code> do pai, que é passado como acessório para os dois filhos. Observe como os dados fluem entre os componentes e como a única fonte de verdade permanece como o <code>state</code> do componente pai. É verdade que este exemplo é um pouco inventado, mas deve servir para ilustrar como dados e retornos de chamada podem ser passados ​​entre os componentes do React. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: O componente <code>MyApp</code> deve renderizar.
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(MyApp)); return mockedComponent.find("MyApp").length === 1; })(), "The <code>MyApp</code> component should render.");'
  - text: O componente <code>GetInput</code> deve renderizar.
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(MyApp)); return mockedComponent.find("GetInput").length === 1; })(), "The <code>GetInput</code> component should render.");'
  - text: O componente <code>RenderInput</code> deve renderizar.
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(MyApp)); return mockedComponent.find("RenderInput").length === 1; })(), "The <code>RenderInput</code> component should render.");'
  - text: O componente <code>GetInput</code> deve receber a propriedade de estado <code>MyApp</code> <code>inputValue</code> como props e conter um elemento de <code>input</code> que modifica o estado <code>MyApp</code> .
    testString: 'async () => { const waitForIt = (fn) => new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250)); const mockedComponent = Enzyme.mount(React.createElement(MyApp)); const state_1 = () => { mockedComponent.setState({inputValue: ""}); return waitForIt(() => mockedComponent.state() )}; const state_2 = () => { mockedComponent.find("input").simulate("change", {target: {value: "TestInput"}}); return waitForIt(() => mockedComponent.state() )}; const updated_1 = await state_1(); const updated_2 = await state_2(); assert(updated_1.inputValue === "" && updated_2.inputValue === "TestInput", "The <code>GetInput</code> component should receive the <code>MyApp</code> state property <code>inputValue</code> as props and contain an <code>input</code> element which modifies <code>MyApp</code> state."); }; '
  - text: O componente <code>RenderInput</code> deve receber a propriedade de estado <code>MyApp</code> <code>inputValue</code> como props.
    testString: 'async () => { const waitForIt = (fn) => new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250)); const mockedComponent = Enzyme.mount(React.createElement(MyApp)); const state_1 = () => { mockedComponent.setState({inputValue: "TestName"}); return waitForIt(() => mockedComponent )}; const updated_1 = await state_1(); assert(updated_1.find("p").text().includes("TestName"), "The <code>RenderInput</code> component should receive the <code>MyApp</code> state property <code>inputValue</code> as props."); }; '

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      inputValue: event.target.value
    });
  }
  render() {
    return (
       <div>
        { /* change code below this line */ }

        { /* change code above this line */ }
       </div>
    );
  }
};

class GetInput extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>Get Input:</h3>
        <input
          value={this.props.input}
          onChange={this.props.handleChange}/>
      </div>
    );
  }
};

class RenderInput extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>Input Render:</h3>
        <p>{this.props.input}</p>
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

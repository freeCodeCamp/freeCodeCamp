---
id: 5a24c314108439a4d4036189
title: Change Inline CSS Conditionally Based on Component State
challengeType: 6
videoUrl: ''
localeTitle: Alterar Inline CSS Condicionalmente Baseado no Estado do Componente
---

## Description
<section id="description"> Neste ponto, você viu vários aplicativos de renderização condicional e o uso de estilos in-line. Aqui está mais um exemplo que combina esses dois tópicos. Você também pode processar CSS condicionalmente com base no estado de um componente React. Para fazer isso, você verifica uma condição e, se essa condição for atendida, você modifica o objeto de estilos atribuído aos elementos JSX no método de renderização. Esse paradigma é importante para entender, porque é uma mudança dramática da abordagem mais tradicional de aplicar estilos modificando elementos DOM diretamente (o que é muito comum com jQuery, por exemplo). Nessa abordagem, você deve acompanhar quando os elementos são alterados e também manipular diretamente a manipulação real. Pode tornar-se difícil acompanhar as alterações, tornando a sua interface do usuário imprevisível. Quando você define um objeto de estilo com base em uma condição, descreve como a interface do usuário deve ser uma função do estado do aplicativo. Há um fluxo claro de informações que só se move em uma direção. Este é o método preferido ao escrever aplicativos com o React. </section>

## Instructions
<section id="instructions"> O editor de código possui um componente de entrada controlado simples com uma borda estilizada. Você deseja estilizar essa borda em vermelho se o usuário digitar mais de 15 caracteres de texto na caixa de entrada. Adicione uma condição para verificar isso e, se a condição for válida, defina o estilo de borda de entrada como <code>3px solid red</code> . Você pode experimentá-lo digitando o texto na entrada. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: O componente <code>GateKeeper</code> deve renderizar um elemento <code>div</code> .
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(GateKeeper)); return mockedComponent.find("div").length === 1; })(), "The <code>GateKeeper</code> component should render a <code>div</code> element.");'
  - text: O componente <code>GateKeeper</code> deve ser inicializado com uma <code>input</code> chave de estado configurada para uma cadeia vazia.
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(GateKeeper)); return mockedComponent.state().input === ""; })(), "The <code>GateKeeper</code> component should be initialized with a state key <code>input</code> set to an empty string.");'
  - text: O componente <code>GateKeeper</code> deve renderizar uma tag <code>h3</code> e uma tag de <code>input</code> .
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(GateKeeper)); return mockedComponent.find("h3").length === 1 && mockedComponent.find("input").length === 1; })(), "The <code>GateKeeper</code> component should render an <code>h3</code> tag and an <code>input</code> tag.");'
  - text: A tag de <code>input</code> deve inicialmente ter um estilo de <code>1px solid black</code> para a propriedade da <code>border</code> .
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(GateKeeper)); return mockedComponent.find("input").props().style.border === "1px solid black"; })(), "The <code>input</code> tag should initially have a style of <code>1px solid black</code> for the <code>border</code> property.");'
  - text: A tag de <code>input</code> deve ser estilizada com uma borda de <code>3px solid red</code> se o valor de entrada no estado for maior que 15 caracteres.
    testString: 'async () => {  const waitForIt = (fn) => new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 100)); const mockedComponent = Enzyme.mount(React.createElement(GateKeeper)); const simulateChange = (el, value) => el.simulate("change", {target: {value}}); let initialStyle = mockedComponent.find("input").props().style.border; const state_1 = () => { mockedComponent.setState({input: "this is 15 char" }); return waitForIt(() => mockedComponent.find("input").props().style.border )}; const state_2 = () => { mockedComponent.setState({input: "A very long string longer than 15 characters." }); return waitForIt(() => mockedComponent.find("input").props().style.border )}; const style_1 = await state_1(); const style_2 = await state_2(); assert(initialStyle === "1px solid black" && style_1 === "1px solid black" && style_2 === "3px solid red", "The <code>input</code> tag should be styled with a border of <code>3px solid red</code> if the input value in state is longer than 15 characters."); }; '

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
class GateKeeper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({ input: event.target.value })
  }
  render() {
    let inputStyle = {
      border: '1px solid black'
    };
    // change code below this line

    // change code above this line
    return (
      <div>
        <h3>Don't Type Too Much:</h3>
        <input
          type="text"
          style={inputStyle}
          value={this.state.input}
          onChange={this.handleChange} />
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

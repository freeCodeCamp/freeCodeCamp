---
id: 5a24c314108439a4d4036174
title: Bind 'this' to a Class Method
challengeType: 6
videoUrl: ''
localeTitle: Vincule 'this' a um método de classe
---

## Description
<section id="description"> Além de definir e atualizar o <code>state</code> , você também pode definir métodos para sua classe de componentes. Um método de classe geralmente precisa usar a palavra <code>this</code> chave <code>this</code> para poder acessar propriedades na classe (como <code>state</code> e <code>props</code> ) dentro do escopo do método. Existem algumas maneiras de permitir que seus métodos de classe acessem <code>this</code> . Uma maneira comum é vincular explicitamente <code>this</code> no construtor, de modo que <code>this</code> se torne vinculado aos métodos de classe quando o componente for inicializado. Você deve ter notado o último desafio usado <code>this.handleClick = this.handleClick.bind(this)</code> para seu método <code>handleClick</code> no construtor. Então, quando você chamar uma função como <code>this.setState()</code> dentro do seu método de classe, <code>this</code> se refere à classe e não será <code>undefined</code> . <strong>Nota:</strong> A palavra-chave <code>this</code> é um dos aspectos mais confusos do JavaScript, mas desempenha um papel importante no React. Embora seu comportamento aqui seja totalmente normal, essas lições não são o lugar para uma análise profunda <code>this</code> então, por favor, consulte outras lições se o texto acima for confuso! </section>

## Instructions
<section id="instructions"> O editor de código tem um componente com um <code>state</code> que controla uma contagem de itens. Também possui um método que permite incrementar essa contagem de itens. No entanto, o método não funciona porque está usando a palavra <code>this</code> chave <code>this</code> que é indefinida. Corrigi-lo por explicitamente ligação <code>this</code> ao <code>addItem()</code> método no construtor do componente. Em seguida, adicione um manipulador de clique ao elemento <code>button</code> no método render. Ele deve acionar o <code>addItem()</code> quando o botão receber um evento click. Lembre-se de que o método que você passa para o manipulador <code>onClick</code> precisa de chaves porque ele deve ser interpretado diretamente como JavaScript. Depois de concluir as etapas acima, você poderá clicar no botão e ver o incremento da contagem de itens no HTML. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>MyComponent</code> deve retornar um elemento <code>div</code> que envolve dois elementos, um botão e um elemento <code>h1</code> , nessa ordem.'
    testString: 'assert(Enzyme.mount(React.createElement(MyComponent)).find("div").length === 1 && Enzyme.mount(React.createElement(MyComponent)).find("div").childAt(0).type() === "button" && Enzyme.mount(React.createElement(MyComponent)).find("div").childAt(1).type() === "h1", "<code>MyComponent</code> should return a <code>div</code> element which wraps two elements, a button and an <code>h1</code> element, in that order.");'
  - text: 'O estado de <code>MyComponent</code> deve ser inicializado com o par de valores de chave <code>{ itemCount: 0 }</code> .'
    testString: 'assert(Enzyme.mount(React.createElement(MyComponent)).state("itemCount") === 0, "The state of <code>MyComponent</code> should initialize with the key value pair <code>{ itemCount: 0 }</code>.");'
  - text: Clicando no <code>button</code> elemento deve executar o <code>addItem</code> método e incrementar o estado <code>itemCount</code> por <code>1</code> .
    testString: 'async () => { const waitForIt = (fn) => new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250)); const mockedComponent = Enzyme.mount(React.createElement(MyComponent)); const first = () => { mockedComponent.setState({ itemCount: 0 }); return waitForIt(() => mockedComponent.state("itemCount")); }; const second = () => { mockedComponent.find("button").simulate("click"); return waitForIt(() => mockedComponent.state("itemCount")); }; const firstValue = await first(); const secondValue = await second(); assert(firstValue === 0 && secondValue === 1, "Clicking the <code>button</code> element should run the <code>addItem</code> method and increment the state <code>itemCount</code> by <code>1</code>."); };'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemCount: 0
    };
    // change code below this line

    // change code above this line
  }
  addItem() {
    this.setState({
      itemCount: this.state.itemCount + 1
    });
  }
  render() {
    return (
      <div>
        { /* change code below this line */ }
        <button>Click Me</button>
        { /* change code above this line */ }
        <h1>Current Item Count: {this.state.itemCount}</h1>
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

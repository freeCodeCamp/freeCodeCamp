---
id: 5a24c314108439a4d4036177
title: Write a Simple Counter
challengeType: 6
videoUrl: ''
localeTitle: Escreva um contador simples
---

## Description
<section id="description"> Você pode criar um componente com estado mais complexo combinando os conceitos abordados até o momento. Isso inclui a inicialização do <code>state</code> , a criação de métodos que definem o <code>state</code> e a atribuição de manipuladores de clique para acionar esses métodos. </section>

## Instructions
<section id="instructions"> O componente <code>Counter</code> registra um valor de <code>count</code> no <code>state</code> . Existem dois botões que chamam os métodos <code>increment()</code> e <code>decrement()</code> . Escreva esses métodos para que o valor do contador seja incrementado ou diminuído em 1 quando o botão apropriado for clicado. Além disso, crie um método <code>reset()</code> para que, ao clicar no botão de reinicialização, a contagem seja definida como 0. <strong>Nota:</strong> Certifique-se de não modificar os <code>classNames</code> das <code>classNames</code> dos botões. Além disso, lembre-se de adicionar as ligações necessárias para os métodos recém-criados no construtor. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>Counter</code> deve retornar um elemento <code>div</code> que contém três botões com conteúdo de texto nesta ordem <code>Increment!</code> <code>Decrement!</code> , <code>Reset</code> .'
    testString: 'assert((() => { const mockedComponent = Enzyme.mount(React.createElement(Counter)); return (mockedComponent.find(".inc").text() === "Increment!" && mockedComponent.find(".dec").text() === "Decrement!" && mockedComponent.find(".reset").text() === "Reset"); })(), "<code>Counter</code> should return a <code>div</code> element which contains three buttons with text content in this order <code>Increment!</code>, <code>Decrement!</code>, <code>Reset</code>.");'
  - text: O estado do <code>Counter</code> deve inicializar com uma propriedade de <code>count</code> definida como <code>0</code> .
    testString: 'assert.strictEqual(Enzyme.mount(React.createElement(Counter)).state("count"), 0, "The state of <code>Counter</code> should initialize with a <code>count</code> property set to <code>0</code>.");'
  - text: Clicar no botão de incremento deve incrementar a contagem em <code>1</code> .
    testString: 'async () => { const waitForIt = (fn) => new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250)); const mockedComponent = Enzyme.mount(React.createElement(Counter)); const first = () => { mockedComponent.setState({ count: 0 }); return waitForIt(() => mockedComponent.state("count")); }; const second = () => { mockedComponent.find(".inc").simulate("click"); return waitForIt(() => mockedComponent.state("count")); }; const firstValue = await first(); const secondValue = await second(); assert(firstValue === 0 && secondValue === 1, "Clicking the increment button should increment the count by <code>1</code>."); }; '
  - text: Clicar no botão de decremento deve diminuir a contagem em <code>1</code> .
    testString: 'async () => { const waitForIt = (fn) => new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250)); const mockedComponent = Enzyme.mount(React.createElement(Counter)); const first = () => { mockedComponent.setState({ count: 0 }); return waitForIt(() => mockedComponent.state("count")); }; const second = () => { mockedComponent.find(".dec").simulate("click"); return waitForIt(() => mockedComponent.state("count")); }; const firstValue = await first(); const secondValue = await second(); assert(firstValue === 0 && secondValue === -1, "Clicking the decrement button should decrement the count by <code>1</code>."); }; '
  - text: Clicar no botão de redefinição deve redefinir a contagem para <code>0</code> .
    testString: 'async () => { const waitForIt = (fn) => new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250)); const mockedComponent = Enzyme.mount(React.createElement(Counter)); const init = () => { mockedComponent.setState({ count: 0 }); return waitForIt(() => mockedComponent.state("count")); }; const increment = () => { mockedComponent.find(".inc").simulate("click"); mockedComponent.find(".inc").simulate("click"); return waitForIt(() => mockedComponent.state("count")); }; const decrement = () => { mockedComponent.find(".dec").simulate("click"); return waitForIt(() => mockedComponent.state("count")); }; const reset = () => { mockedComponent.find(".reset").simulate("click"); return waitForIt(() => mockedComponent.state("count")); }; const firstValue = await init(); const secondValue = await increment(); const thirdValue = await decrement(); const fourthValue = await reset(); assert(firstValue === 0 && secondValue === 2 && thirdValue === 1 && fourthValue === 0, "Clicking the reset button should reset the count to <code>0</code>."); }; '

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    // change code below this line

    // change code above this line
  }
  // change code below this line

  // change code above this line
  render() {
    return (
      <div>
        <button className='inc' onClick={this.increment}>Increment!</button>
        <button className='dec' onClick={this.decrement}>Decrement!</button>
        <button className='reset' onClick={this.reset}>Reset</button>
        <h1>Current Count: {this.state.count}</h1>
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

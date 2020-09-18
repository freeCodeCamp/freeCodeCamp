---
id: 5a24c314108439a4d4036184
title: Render with an If-Else Condition
challengeType: 6
videoUrl: ''
localeTitle: Renderizar com uma condição If-else
---

## Description
<section id="description"> Outra aplicação de usar o JavaScript para controlar sua exibição renderizada é amarrar os elementos que são renderizados a uma condição. Quando a condição é verdadeira, uma exibição é renderizada. Quando é falsa, é uma visão diferente. Você pode fazer isso com uma instrução <code>if/else</code> padrão no método <code>render()</code> de um componente React. </section>

## Instructions
<section id="instructions"> MyComponent contém um <code>boolean</code> em seu estado que controla se você deseja exibir algum elemento na interface do usuário ou não. O <code>button</code> alterna o estado desse valor. Atualmente, ele processa a mesma interface do usuário todas as vezes. Reescreva o método <code>render()</code> com uma instrução <code>if/else</code> para que, se a <code>display</code> for <code>true</code> , você retorne a marcação atual. Caso contrário, retorne a marcação sem o elemento <code>h1</code> . <strong>Nota:</strong> Você deve escrever um <code>if/else</code> para passar nos testes. O uso do operador ternário não passará aqui. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>MyComponent</code> deve existir e renderizar.
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(MyComponent)); return mockedComponent.find("MyComponent").length === 1; })(), "<code>MyComponent</code> should exist and render.");'
  - text: 'Quando a <code>display</code> está definida como <code>true</code> , um <code>button</code> <code>div</code> , e <code>h1</code> devem ser renderizados.'
    testString: 'async () => { const waitForIt = (fn) => new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250)); const mockedComponent = Enzyme.mount(React.createElement(MyComponent)); const state_1 = () => { mockedComponent.setState({display: true}); return waitForIt(() => mockedComponent )}; const updated = await state_1(); assert(mockedComponent.find("div").length === 1 && mockedComponent.find("div").children().length === 2 && mockedComponent.find("button").length === 1 && mockedComponent.find("h1").length === 1, "When <code>display</code> is set to <code>true</code>, a <code>div</code>, <code>button</code>, and <code>h1</code> should render."); }; '
  - text: 'Quando a <code>display</code> está definida como <code>false</code> , apenas um <code>div</code> e um <code>button</code> devem ser renderizados.'
    testString: 'async () => { const waitForIt = (fn) => new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250)); const mockedComponent = Enzyme.mount(React.createElement(MyComponent)); const state_1 = () => { mockedComponent.setState({display: false}); return waitForIt(() => mockedComponent )}; const updated = await state_1(); assert(mockedComponent.find("div").length === 1 && mockedComponent.find("div").children().length === 1 && mockedComponent.find("button").length === 1 && mockedComponent.find("h1").length === 0, "When <code>display</code> is set to <code>false</code>, only a <code>div</code> and <code>button</code> should render."); }; '
  - text: ''
    testString: 'getUserInput => assert(getUserInput("index").includes("if") && getUserInput("index").includes("else"), "The render method should use an <code>if/else</code> statement to check the condition of <code>this.state.display</code>.");'

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
      display: true
    }
    this.toggleDisplay = this.toggleDisplay.bind(this);
  }
  toggleDisplay() {
    this.setState({
      display: !this.state.display
    });
  }
  render() {
    // change code below this line

    return (
       <div>
         <button onClick={this.toggleDisplay}>Toggle Display</button>
         <h1>Displayed!</h1>
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

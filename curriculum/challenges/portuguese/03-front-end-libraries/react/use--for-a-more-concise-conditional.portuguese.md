---
id: 5a24c314108439a4d4036185
title: Use && for a More Concise Conditional
challengeType: 6
isRequired: false
videoUrl: ''
localeTitle: Use && para uma condicional mais concisa
---

## Description
<section id="description"> As instruções if / else funcionaram no último desafio, mas há uma maneira mais concisa de alcançar o mesmo resultado. Imagine que você esteja rastreando várias condições em um componente e queira que diferentes elementos sejam renderizados dependendo de cada uma dessas condições. Se você escrever muito <code>else if</code> instruções retornarem UIs ligeiramente diferentes, você poderá repetir o código, o que deixa margem para erros. Em vez disso, você pode usar o operador <code>&amp;&amp;</code> lógico para executar a lógica condicional de uma maneira mais concisa. Isso é possível porque você deseja verificar se uma condição é <code>true</code> e, se estiver, retornar alguma marcação. Aqui está um exemplo: <code>{condition &amp;&amp; &lt;p&gt;markup&lt;/p&gt;}</code> Se a <code>condition</code> for <code>true</code> , a marcação será retornada. Se a condição for <code>false</code> , a operação retornará imediatamente <code>false</code> após avaliar a <code>condition</code> e não retornar nada. Você pode incluir essas instruções diretamente no seu JSX e agrupar várias condições, escrevendo <code>&amp;&amp;</code> após cada uma delas. Isso permite que você lide com uma lógica condicional mais complexa em seu método <code>render()</code> sem repetir muito código. </section>

## Instructions
<section id="instructions"> Resolva o exemplo anterior novamente, de modo que o <code>h1</code> só processe se <code>display</code> for <code>true</code> , mas use o operador <code>&amp;&amp;</code> logical em vez de uma instrução <code>if/else</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>MyComponent</code> deve existir e renderizar.
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(MyComponent)); return mockedComponent.find("MyComponent").length; })(), "<code>MyComponent</code> should exist and render.");'
  - text: 'Quando a <code>display</code> está definida como <code>true</code> , um <code>button</code> <code>div</code> , e <code>h1</code> devem ser renderizados.'
    testString: 'async () => { const waitForIt = (fn) => new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250)); const mockedComponent = Enzyme.mount(React.createElement(MyComponent)); const state_1 = () => { mockedComponent.setState({display: true}); return waitForIt(() => mockedComponent )}; const updated = await state_1(); assert(updated.find("div").length === 1 && updated.find("div").children().length === 2 && updated.find("button").length === 1 && updated.find("h1").length === 1, "When <code>display</code> is set to <code>true</code>, a <code>div</code>, <code>button</code>, and <code>h1</code> should render."); }; '
  - text: 'Quando a <code>display</code> está definida como <code>false</code> , apenas um <code>div</code> e um <code>button</code> devem ser renderizados.'
    testString: 'async () => { const waitForIt = (fn) => new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250)); const mockedComponent = Enzyme.mount(React.createElement(MyComponent)); const state_1 = () => { mockedComponent.setState({display: false}); return waitForIt(() => mockedComponent )}; const updated = await state_1(); assert(updated.find("div").length === 1 && updated.find("div").children().length === 1 && updated.find("button").length === 1 && updated.find("h1").length === 0, "When <code>display</code> is set to <code>false</code>, only a <code>div</code> and <code>button</code> should render."); }; '
  - text: O método de renderização deve usar o operador && lógico para verificar a condição de this.state.display.
    testString: 'getUserInput => assert(getUserInput("index").includes("&&"), "The render method should use the && logical operator to check the condition of this.state.display.");'

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

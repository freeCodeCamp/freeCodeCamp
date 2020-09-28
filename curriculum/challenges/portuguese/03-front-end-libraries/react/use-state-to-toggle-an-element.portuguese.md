---
id: 5a24c314108439a4d4036176
title: Use State to Toggle an Element
challengeType: 6
videoUrl: ''
localeTitle: Use o estado para alternar um elemento
---

## Description
<section id="description"> Você pode usar o <code>state</code> em aplicativos React de maneiras mais complexas do que o que você viu até agora. Um exemplo é monitorar o status de um valor e renderizar a UI condicionalmente com base nesse valor. Existem várias maneiras diferentes de fazer isso, e o editor de código mostra um método. </section>

## Instructions
<section id="instructions"> <code>MyComponent</code> tem uma propriedade de <code>visibility</code> que é inicializada como <code>false</code> . O método render retorna uma visualização se o valor da <code>visibility</code> for true e uma visualização diferente se for false. Atualmente, não há como atualizar a propriedade de <code>visibility</code> no <code>state</code> do componente. O valor deve alternar entre verdadeiro e falso. Há um manipulador de cliques no botão que aciona um método de classe chamado <code>toggleVisibility()</code> . Defina este método para que o <code>state</code> de <code>visibility</code> alternado para o valor oposto quando o método for chamado. Se a <code>visibility</code> for <code>false</code> , o método a define como <code>true</code> e vice-versa. Por fim, clique no botão para ver a renderização condicional do componente com base em seu <code>state</code> . <strong>Dica:</strong> não se esqueça de ligar a palavra-chave <code>this</code> ao método no construtor! </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>MyComponent</code> deve retornar um elemento <code>div</code> que contém um <code>button</code> .
    testString: 'assert.strictEqual(Enzyme.mount(React.createElement(MyComponent)).find("div").find("button").length, 1, "<code>MyComponent</code> should return a <code>div</code> element which contains a <code>button</code>.");'
  - text: O estado de <code>MyComponent</code> deve ser inicializado com uma propriedade de <code>visibility</code> configurada como <code>false</code> .
    testString: 'assert.strictEqual(Enzyme.mount(React.createElement(MyComponent)).state("visibility"), false, "The state of <code>MyComponent</code> should initialize with a <code>visibility</code> property set to <code>false</code>.");'
  - text: Clicar no elemento de botão deve alternar a propriedade de <code>visibility</code> no estado entre <code>true</code> e <code>false</code> .
    testString: 'async () => { const waitForIt = (fn) => new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250)); const mockedComponent = Enzyme.mount(React.createElement(MyComponent)); const first = () => { mockedComponent.setState({ visibility: false }); return waitForIt(() => mockedComponent.state("visibility")); }; const second = () => { mockedComponent.find("button").simulate("click"); return waitForIt(() => mockedComponent.state("visibility")); }; const third = () => { mockedComponent.find("button").simulate("click"); return waitForIt(() => mockedComponent.state("visibility")); }; const firstValue = await first(); const secondValue = await second(); const thirdValue = await third(); assert(!firstValue && secondValue && !thirdValue, "Clicking the button element should toggle the <code>visibility</code> property in state between <code>true</code> and <code>false</code>."); }; '

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
      visibility: false
    };
    // change code below this line

    // change code above this line
  }
  // change code below this line

  // change code above this line
  render() {
    if (this.state.visibility) {
      return (
        <div>
          <button onClick={this.toggleVisibility}>Click Me</button>
          <h1>Now you see me!</h1>
        </div>
      );
    } else {
      return (
        <div>
          <button onClick={this.toggleVisibility}>Click Me</button>
        </div>
      );
    }
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

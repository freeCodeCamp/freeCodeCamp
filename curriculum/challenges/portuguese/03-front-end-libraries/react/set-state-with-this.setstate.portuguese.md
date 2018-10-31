---
id: 5a24c314108439a4d4036173
title: Set State with this.setState
challengeType: 6
isRequired: false
videoUrl: ''
localeTitle: Definir estado com this.setState
---

## Description
<section id="description"> Os desafios anteriores cobriram o <code>state</code> componente e como inicializar o estado no <code>constructor</code> . Há também uma maneira de alterar o <code>state</code> do componente. React fornece um método para atualizar o <code>state</code> componente chamado <code>setState</code> . Você chama o método <code>setState</code> dentro de sua classe de componentes da seguinte forma: <code>this.setState()</code> , passando um objeto com pares de valor-chave. As chaves são suas propriedades de estado e os valores são os dados de estado atualizados. Por exemplo, se estivéssemos armazenando um <code>username</code> no estado e queríamos atualizá-lo, ficaria assim: <blockquote> this.setState ({ <br> nome de usuário: &#39;Lewis&#39; <br> }); </blockquote> React espera que você nunca modifique o <code>state</code> diretamente, em vez disso, sempre use <code>this.setState()</code> quando ocorrerem mudanças de estado. Além disso, você deve observar que o React pode agrupar várias atualizações de estado para melhorar o desempenho. O que isto significa é que as atualizações de estado através do método <code>setState</code> podem ser assíncronas. Há uma sintaxe alternativa para o método <code>setState</code> , que fornece uma maneira de contornar esse problema. Isso raramente é necessário, mas é bom manter isso em mente! Por favor, consulte a <a target="_blank" href="https://facebook.github.io/react/docs/state-and-lifecycle.html">documentação</a> do <a target="_blank" href="https://facebook.github.io/react/docs/state-and-lifecycle.html">React</a> para mais detalhes. </section>

## Instructions
<section id="instructions"> Existe um elemento de <code>button</code> no editor de código que possui um manipulador <code>onClick()</code> . Esse manipulador é acionado quando o <code>button</code> recebe um evento de clique no navegador e executa o método <code>handleClick</code> definido no <code>MyComponent</code> . No método <code>handleClick</code> , atualize o <code>state</code> do componente usando <code>this.setState()</code> . Defina a propriedade <code>name</code> no <code>state</code> para igualar a string <code>React Rocks!</code> . Clique no botão e veja a atualização do estado renderizado. Não se preocupe se você não entender completamente como o código do manipulador de cliques funciona neste momento. Está coberto nos próximos desafios. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 'O estado de <code>MyComponent</code> deve ser inicializado com o par de valores de chave <code>{ name: Initial State }</code> .'
    testString: 'assert(Enzyme.mount(React.createElement(MyComponent)).state("name") === "Initial State", "The state of <code>MyComponent</code> should initialize with the key value pair <code>{ name: Initial State }</code>.");'
  - text: <code>MyComponent</code> deve renderizar um cabeçalho <code>h1</code> .
    testString: 'assert(Enzyme.mount(React.createElement(MyComponent)).find("h1").length === 1, "<code>MyComponent</code> should render an <code>h1</code> header.");'
  - text: O cabeçalho <code>h1</code> renderizado deve conter texto renderizado a partir do estado do componente.
    testString: 'async () => { const waitForIt = (fn) => new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250)); const mockedComponent = Enzyme.mount(React.createElement(MyComponent)); const first = () => { mockedComponent.setState({ name: "TestName" }); return waitForIt(() => mockedComponent.html()); }; const firstValue = await first(); assert(/<h1>TestName<\/h1>/.test(firstValue), "The rendered <code>h1</code> header should contain text rendered from the component&apos;s state."); };'
  - text: Chamar o método <code>handleClick</code> no <code>MyComponent</code> deve definir a propriedade name no estado para igualar <code>React Rocks!</code> .
    testString: 'async () => { const waitForIt = (fn) => new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250)); const mockedComponent = Enzyme.mount(React.createElement(MyComponent)); const first = () => { mockedComponent.setState({ name: "Before" }); return waitForIt(() => mockedComponent.state("name")); }; const second = () => { mockedComponent.instance().handleClick(); return waitForIt(() => mockedComponent.state("name")); }; const firstValue = await first(); const secondValue = await second(); assert(firstValue === "Before" && secondValue === "React Rocks!", "Calling the <code>handleClick</code> method on <code>MyComponent</code> should set the name property in state to equal <code>React Rocks!</code>."); };'

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
      name: 'Initial State'
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    // change code below this line

    // change code above this line
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Click Me</button>
        <h1>{this.state.name}</h1>
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

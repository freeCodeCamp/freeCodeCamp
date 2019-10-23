---
id: 5a24c314108439a4d4036172
title: Render State in the User Interface Another Way
challengeType: 6
isRequired: false
videoUrl: ''
localeTitle: Estado de renderização na interface do usuário Outra maneira
---

## Description
<section id="description"> Existe outra maneira de acessar o <code>state</code> em um componente. No método <code>render()</code> , antes da instrução de <code>return</code> , você pode escrever JavaScript diretamente. Por exemplo, você poderia declarar funções, acessar dados do <code>state</code> ou <code>props</code> , executar cálculos nesses dados e assim por diante. Em seguida, você pode atribuir dados a variáveis ​​às quais você tem acesso na declaração de <code>return</code> . </section>

## Instructions
<section id="instructions"> No método de renderização <code>MyComponent</code> , defina uma <code>const</code> chamada <code>name</code> e defina-a como igual ao valor do nome no <code>state</code> do componente. Como você pode escrever JavaScript diretamente nessa parte do código, não é necessário incluir essa referência entre chaves. Em seguida, na instrução de retorno, renderize esse valor em uma tag <code>h1</code> usando o <code>name</code> da variável. Lembre-se, você precisa usar a sintaxe JSX (chaves para JavaScript) na declaração de retorno. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>MyComponent</code> deve ter um <code>name</code> chave com valor <code>freeCodeCamp</code> armazenado em seu estado.
    testString: 'assert(Enzyme.mount(React.createElement(MyComponent)).state("name") === "freeCodeCamp", "<code>MyComponent</code> should have a key <code>name</code> with value <code>freeCodeCamp</code> stored in its state.");'
  - text: <code>MyComponent</code> deve renderizar um cabeçalho <code>h1</code> em uma única <code>div</code> .
    testString: 'assert(/<div><h1>.*<\/h1><\/div>/.test(Enzyme.mount(React.createElement(MyComponent)).html()), "<code>MyComponent</code> should render an <code>h1</code> header enclosed in a single <code>div</code>.");'
  - text: 'A tag <code>h1</code> renderizada deve incluir uma referência a <code>{name}</code> .'
    testString: 'getUserInput => assert(/<h1>\n*\s*\{\s*name\s*\}\s*\n*<\/h1>/.test(getUserInput("index")), "The rendered <code>h1</code> tag should include a reference to <code>{name}</code>.");'
  - text: O cabeçalho <code>h1</code> renderizado deve conter texto renderizado a partir do estado do componente.
    testString: 'async () => { const waitForIt = (fn) => new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250)); const mockedComponent = Enzyme.mount(React.createElement(MyComponent)); const first = () => { mockedComponent.setState({ name: "TestName" });   return waitForIt(() => mockedComponent.html()) }; const firstValue = await first(); assert(firstValue === "<div><h1>TestName</h1></div>", "The rendered <code>h1</code> header should contain text rendered from the component&apos;s state."); };'

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
      name: 'freeCodeCamp'
    }
  }
  render() {
    // change code below this line

    // change code above this line
    return (
      <div>
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

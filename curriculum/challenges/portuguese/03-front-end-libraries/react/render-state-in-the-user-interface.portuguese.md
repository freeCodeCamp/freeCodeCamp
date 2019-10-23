---
id: 5a24c314108439a4d4036171
title: Render State in the User Interface
challengeType: 6
isRequired: false
videoUrl: ''
localeTitle: Estado de renderização na interface do usuário
---

## Description
<section id="description"> Depois de definir o estado inicial de um componente, você pode exibir qualquer parte dele na interface do usuário processada. Se um componente for stateful, ele sempre terá acesso aos dados no <code>state</code> em seu método <code>render()</code> . Você pode acessar os dados com <code>this.state</code> . Se você quiser acessar um valor de estado dentro do <code>return</code> do método de renderização, inclua o valor entre chaves. <code>State</code> é um dos recursos mais poderosos dos componentes do React. Ele permite que você acompanhe dados importantes no seu aplicativo e renderize uma interface do usuário em resposta a alterações nesses dados. Se seus dados forem alterados, sua interface do usuário será alterada. O React usa o que é chamado de DOM virtual, para acompanhar as alterações nos bastidores. Quando atualiza os dados do estado, ele aciona uma nova renderização dos componentes usando esses dados - incluindo os componentes filhos que receberam os dados como um prop. Reagir atualiza o DOM real, mas somente quando necessário. Isso significa que você não precisa se preocupar em alterar o DOM. Você simplesmente declara como deve ser a interface do usuário. Observe que, se você tornar um componente com estado, nenhum outro componente está ciente de seu <code>state</code> . Seu <code>state</code> é completamente encapsulado ou local para esse componente, a menos que você passe dados de estado para um componente filho como <code>props</code> . Essa noção de <code>state</code> encapsulado é muito importante, pois permite que você escreva determinada lógica e, em seguida, tenha essa lógica contida e isolada em um lugar em seu código. </section>

## Instructions
<section id="instructions"> No editor de código, o <code>MyComponent</code> já é stateful. Defina uma tag <code>h1</code> no método de renderização do componente, que renderiza o valor do <code>name</code> do estado do componente. <strong>Nota:</strong> O <code>h1</code> só deve renderizar o valor do <code>state</code> e nada mais. No JSX, qualquer código que você escrever com chaves <code>{ }</code> será tratado como JavaScript. Então, para acessar o valor do <code>state</code> apenas coloque a referência entre chaves. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>MyComponent</code> deve ter um <code>name</code> chave com valor <code>freeCodeCamp</code> armazenado em seu estado.
    testString: 'assert(Enzyme.mount(React.createElement(MyComponent)).state("name") === "freeCodeCamp", "<code>MyComponent</code> should have a key <code>name</code> with value <code>freeCodeCamp</code> stored in its state.");'
  - text: <code>MyComponent</code> deve renderizar um cabeçalho <code>h1</code> em uma única <code>div</code> .
    testString: 'assert(/<div><h1>.*<\/h1><\/div>/.test(Enzyme.mount(React.createElement(MyComponent)).html()), "<code>MyComponent</code> should render an <code>h1</code> header enclosed in a single <code>div</code>.");'
  - text: O cabeçalho <code>h1</code> renderizado deve conter texto renderizado a partir do estado do componente.
    testString: 'async () => { const waitForIt = (fn) => new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250)); const mockedComponent = Enzyme.mount(React.createElement(MyComponent)); const first = () => { mockedComponent.setState({ name: "TestName" });   return waitForIt(() => mockedComponent.html()) }; const firstValue = await first(); assert(firstValue === "<div><h1>TestName</h1></div>", "The rendered <code>h1</code> header should contain text rendered from the component&apos;s state.");};'

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

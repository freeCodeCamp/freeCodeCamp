---
id: 5a24c314108439a4d403617a
title: Pass State as Props to Child Components
challengeType: 6
videoUrl: ''
localeTitle: Passar o estado como adereços aos componentes filhos
---

## Description
<section id="description"> Você viu muitos exemplos que passaram por adereços a elementos filho JSX e componentes filho React em desafios anteriores. Você pode estar se perguntando de onde esses adereços vêm. Um padrão comum é ter um componente stateful contendo o <code>state</code> importante para o seu aplicativo, que renderiza os componentes filhos. Você deseja que esses componentes tenham acesso a algumas partes desse <code>state</code> , que são passadas como adereços. Por exemplo, talvez você tenha um componente de <code>App</code> que renderize uma <code>Navbar</code> , entre outros componentes. Em seu <code>App</code> , você tem um <code>state</code> que contém muitas informações do usuário, mas a <code>Navbar</code> só precisa acessar o nome de usuário do usuário para poder exibi-lo. Você passa esse pedaço de <code>state</code> para o componente <code>Navbar</code> como um prop. Esse padrão ilustra alguns paradigmas importantes no React. O primeiro é o <em>fluxo de dados unidirecional</em> . O estado flui em uma direção para baixo da árvore dos componentes do seu aplicativo, do componente pai com preservação de estado para componentes filhos. Os componentes filho recebem apenas os dados de estado necessários. A segunda é que os aplicativos stateful complexos podem ser divididos em apenas alguns, ou talvez um único componente com estado. O resto de seus componentes simplesmente recebe o estado do pai como props e renderiza uma UI daquele estado. Ele começa a criar uma separação em que o gerenciamento de estado é tratado em uma parte do código e a renderização da UI em outra. Este princípio de separar a lógica de estado da lógica da IU é um dos princípios-chave da React. Quando é usado corretamente, facilita muito o gerenciamento de projetos de aplicativos complexos e com monitoração de estado. </section>

## Instructions
<section id="instructions"> O componente <code>MyApp</code> é stateful e renderiza um componente <code>Navbar</code> como um filho. Passe a propriedade <code>name</code> em seu <code>state</code> até o componente filho e, em seguida, mostre o <code>name</code> na tag <code>h1</code> que faz parte do método de renderização <code>Navbar</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: O componente <code>MyApp</code> deve renderizar com um componente <code>Navbar</code> dentro.
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(MyApp)); return mockedComponent.find("MyApp").length === 1 && mockedComponent.find("Navbar").length === 1; })(), "The <code>MyApp</code> component should render with a <code>Navbar</code> component inside.");'
  - text: O componente <code>Navbar</code> deve receber o <code>name</code> propriedade do estado <code>MyApp</code> como props.
    testString: 'async () => { const waitForIt = (fn) => new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250)); const mockedComponent = Enzyme.mount(React.createElement(MyApp)); const setState = () => { mockedComponent.setState({name: "TestName"}); return waitForIt(() => mockedComponent.find("Navbar").props() )}; const navProps = await setState(); assert(navProps.name === "TestName", "The <code>Navbar</code> component should receive the <code>MyApp</code> state property <code>name</code> as props."); }; '
  - text: O elemento <code>h1</code> na <code>Navbar</code> deve renderizar o <code>name</code> prop.
    testString: 'async () => { const waitForIt = (fn) => new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250)); const mockedComponent = Enzyme.mount(React.createElement(MyApp)); const navH1Before = mockedComponent.find("Navbar").find("h1").text(); const setState = () => { mockedComponent.setState({name: "TestName"}); return waitForIt(() => mockedComponent.find("Navbar").find("h1").text() )}; const navH1After = await setState(); assert(new RegExp("TestName").test(navH1After) && navH1After !== navH1Before, "The <code>h1</code> element in <code>Navbar</code> should render the <code>name</code> prop."); }; '

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
      name: 'CamperBot'
    }
  }
  render() {
    return (
       <div>
         <Navbar /* your code here */ />
       </div>
    );
  }
};

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
    <div>
      <h1>Hello, my name is: /* your code here */ </h1>
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

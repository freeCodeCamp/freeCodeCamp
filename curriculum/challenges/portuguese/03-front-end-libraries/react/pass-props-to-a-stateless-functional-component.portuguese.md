---
id: 5a24c314108439a4d4036169
title: Pass Props to a Stateless Functional Component
challengeType: 6
videoUrl: ''
localeTitle: Passe Adereços a um Componente Funcional Stateless
---

## Description
<section id="description"> Os desafios anteriores cobriram muito sobre a criação e composição de elementos JSX, componentes funcionais e componentes de classe de estilo ES6 no React. Com esta base, é hora de olhar para outro recurso muito comum em React: <b>props</b> . No React, você pode passar props ou propriedades para componentes filho. Digamos que você tenha um componente <code>App</code> que renderize um componente filho chamado <code>Welcome</code> que é um componente funcional sem estado. Você pode passar <code>Welcome</code> um <code>user</code> propriedade escrevendo: <blockquote> &lt;App&gt; <br> &lt;Usuário de boas-vindas = &#39;Mark&#39; /&gt; <br> &lt;/ App&gt; </blockquote> Você usa <strong>atributos HTML personalizados aos</strong> quais o React fornece suporte para passar o <code>user</code> da propriedade ao componente <code>Welcome</code> . Como <code>Welcome</code> é um componente funcional sem estado, ele tem acesso a esse valor da seguinte forma: <blockquote> const Welcome = (props) =&gt; &lt;h1&gt; Olá, {props.user}! &lt;/ h1&gt; </blockquote> É padrão chamar este valor <code>props</code> e ao lidar com componentes funcionais sem estado, você basicamente o considera como um argumento para uma função que retorna JSX. Você pode acessar o valor do argumento no corpo da função. Com componentes de classe, você verá que isso é um pouco diferente. </section>

## Instructions
<section id="instructions"> Existem componentes <code>Calendar</code> e <code>CurrentDate</code> no editor de código. Ao renderizar <code>CurrentDate</code> partir do componente <code>Calendar</code> , passe uma propriedade de <code>date</code> atribuída à data atual do objeto <code>Date</code> do JavaScript. Em seguida, acesse este <code>prop</code> no componente <code>CurrentDate</code> , mostrando seu valor dentro das tags <code>p</code> . Observe que, para valores <code>prop</code> a serem avaliados como JavaScript, eles devem ser colocados entre chaves, por exemplo <code>date={Date()}</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: O componente <code>Calendar</code> deve retornar um único elemento <code>div</code> .
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(Calendar)); return mockedComponent.children().type() === "div"; })(), "The <code>Calendar</code> component should return a single <code>div</code> element.");'
  - text: O segundo filho do componente <code>Calendar</code> deve ser o componente <code>CurrentDate</code> .
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(Calendar)); return mockedComponent.children().childAt(1).name() === "CurrentDate"; })(), "The second child of the <code>Calendar</code> component should be the <code>CurrentDate</code> component.");'
  - text: O componente <code>CurrentDate</code> deve ter uma <code>date</code> chamada prop.
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(Calendar)); return mockedComponent.children().childAt(1).props().date })(), "The <code>CurrentDate</code> component should have a prop called <code>date</code>.");'
  - text: A <code>date</code> prop do <code>CurrentDate</code> deve conter uma cadeia de texto.
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(Calendar)); const prop = mockedComponent.children().childAt(1).props().date; return( typeof prop === "string" && prop.length > 0 ); })(), "The <code>date</code> prop of the <code>CurrentDate</code> should contain a string of text.");'
  - text: O componente <code>CurrentDate</code> deve renderizar o valor a partir da <code>date</code> prop na tag <code>p</code> .
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(Calendar)); return mockedComponent.find("p").html().includes(Date().substr(3)); })(), "The <code>CurrentDate</code> component should render the value from the <code>date</code> prop in the <code>p</code> tag.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
const CurrentDate = (props) => {
  return (
    <div>
      { /* change code below this line */ }
      <p>The current date is: </p>
      { /* change code above this line */ }
    </div>
  );
};

class Calendar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>What date is it?</h3>
        { /* change code below this line */ }
        <CurrentDate />
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

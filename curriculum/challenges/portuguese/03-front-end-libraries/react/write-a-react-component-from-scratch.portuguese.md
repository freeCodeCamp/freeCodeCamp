---
id: 5a24c314108439a4d4036168
title: Write a React Component from Scratch
challengeType: 6
isRequired: false
videoUrl: ''
localeTitle: Escrever um componente Reagir do zero
---

## Description
<section id="description"> Agora que você aprendeu os fundamentos dos componentes JSX e React, é hora de escrever um componente por conta própria. Os componentes React são os principais blocos de construção dos aplicativos React, por isso é importante se familiarizar com a gravação deles. Lembre-se, um componente React típico é uma <code>class</code> ES6 que estende o <code>React.Component</code> . Tem um método de renderização que retorna HTML (de JSX) ou <code>null</code> . Esta é a forma básica de um componente React. Depois de entender isso bem, você estará preparado para começar a construir projetos React mais complexos. </section>

## Instructions
<section id="instructions"> Defina uma classe <code>MyComponent</code> que estenda <code>React.Component</code> . Seu método de renderização deve retornar um <code>div</code> que contenha uma tag <code>h1</code> com o texto: <code>My First React Component!</code> nisso. Use exatamente este texto, o caso e a pontuação. Certifique-se de chamar o construtor para o seu componente também. Renderize esse componente para o DOM usando <code>ReactDOM.render()</code> . Existe um <code>div</code> com <code>id=&#39;challenge-node&#39;</code> disponível para você usar. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Deve haver um componente React chamado <code>MyComponent</code> .
    testString: 'getUserInput => assert(getUserInput("index").replace(/\s/g, "").includes("classMyComponentextendsReact.Component{"), "There should be a React component called <code>MyComponent</code>.");'
  - text: <code>MyComponent</code> deve conter uma tag <code>h1</code> com o texto <code>My First React Component!</code> Caso e pontuação são importantes.
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(MyComponent)); return mockedComponent.find("h1").text() === "My First React Component!"; })(), "<code>MyComponent</code> should contain an <code>h1</code> tag with text <code>My First React Component!</code> Case and punctuation matter.");'
  - text: <code>MyComponent</code> deve renderizar para o DOM.
    testString: 'assert(document.getElementById("challenge-node").childNodes.length === 1, "<code>MyComponent</code> should render to the DOM.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
// change code below this line

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

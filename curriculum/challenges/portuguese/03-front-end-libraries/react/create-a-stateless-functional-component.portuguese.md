---
id: 5a24c314108439a4d4036162
title: Create a Stateless Functional Component
challengeType: 6
isRequired: false
videoUrl: ''
localeTitle: Criar um componente funcional sem estado
---

## Description
<section id="description"> Componentes são o núcleo do React. Tudo no React é um componente e aqui você aprenderá como criar um. Existem duas maneiras de criar um componente React. A primeira maneira é usar uma função JavaScript. Definir um componente dessa maneira cria um <em>componente funcional sem estado</em> . O conceito de estado em um aplicativo será abordado em desafios posteriores. Por enquanto, pense em um componente sem estado como um que pode receber dados e processá-los, mas não gerencia ou rastreia alterações nesses dados. (Abordaremos a segunda maneira de criar um componente React no próximo desafio.) Para criar um componente com uma função, basta escrever uma função JavaScript que retorne JSX ou <code>null</code> . Uma coisa importante a notar é que React requer que o nome da sua função comece com uma letra maiúscula. Aqui está um exemplo de um componente funcional sem estado que atribui uma classe HTML no JSX: <blockquote> // Depois de ser transpilado, o &lt;div&gt; terá uma classe CSS de &#39;customClass&#39; <br> const DemoComponent = function () { <br> Retorna ( <br> &lt;div className = &#39;customClass&#39; /&gt; <br> ); <br> }; </blockquote> Como um componente JSX representa o HTML, você pode colocar vários componentes juntos para criar uma página HTML mais complexa. Essa é uma das principais vantagens da arquitetura de componentes que o React fornece. Ele permite que você componha sua interface do usuário de vários componentes separados e isolados. Isso facilita a criação e manutenção de interfaces de usuário complexas. </section>

## Instructions
<section id="instructions"> O editor de código tem uma função chamada <code>MyComponent</code> . Complete esta função para que ela retorne um único elemento <code>div</code> que contenha alguma cadeia de texto. <strong>Nota:</strong> O texto é considerado um filho do elemento <code>div</code> , portanto, você não poderá usar uma tag de fechamento automático. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>MyComponent</code> deve retornar o JSX.
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(MyComponent)); return mockedComponent.length === 1; })(), "<code>MyComponent</code> should return JSX.");'
  - text: <code>MyComponent</code> deve retornar um elemento <code>div</code> .
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(MyComponent)); return mockedComponent.children().type() === "div" })(), "<code>MyComponent</code> should return a <code>div</code> element.");'
  - text: O elemento <code>div</code> deve conter uma string de texto.
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(MyComponent)); return mockedComponent.find("div").text() !== ""; })(), "The <code>div</code> element should contain a string of text.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
const MyComponent = function() {
  // change code below this line



  // change code above this line
}

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

---
id: 5a24c314108439a4d4036163
title: Create a React Component
challengeType: 6
isRequired: false
videoUrl: ''
localeTitle: Criar um componente React
---

## Description
<section id="description"> A outra maneira de definir um componente React é com a sintaxe da <code>class</code> ES6. No exemplo a seguir, <code>Kitten</code> estende <code>React.Component</code> : <blockquote> classe Kitten estende React.Component { <br> construtor (props) { <br> super (adereços); <br> } <br><br> render () { <br> Retorna ( <br> &lt;h1&gt; Hi &lt;/ h1&gt; <br> ); <br> } <br> } </blockquote> Isso cria uma classe ES6 <code>Kitten</code> que estende a classe <code>React.Component</code> . Portanto, a classe <code>Kitten</code> agora tem acesso a muitos recursos úteis do React, como ganchos do estado local e do ciclo de vida. Não se preocupe se você ainda não estiver familiarizado com esses termos, eles serão abordados em maiores detalhes em desafios posteriores. Observe também que a classe <code>Kitten</code> possui um <code>constructor</code> definido dentro dela que chama <code>super()</code> . Ele usa <code>super()</code> para chamar o construtor da classe pai, neste caso, <code>React.Component</code> . O construtor é um método especial usado durante a inicialização de objetos criados com a palavra-chave <code>class</code> . É uma boa prática chamar o <code>constructor</code> um componente com <code>super</code> e passar <code>props</code> para ambos. Isso garante que o componente seja inicializado corretamente. Por enquanto, saiba que é padrão para este código ser incluído. Logo você verá outros usos para o construtor, bem como <code>props</code> . </section>

## Instructions
<section id="instructions"> <code>MyComponent</code> é definido no editor de código usando a sintaxe de classe. Termine de escrever o método de <code>render</code> para que ele retorne um elemento <code>div</code> que contenha um <code>h1</code> com o texto <code>Hello React!</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: O componente React deve retornar um elemento <code>div</code> .
    testString: 'assert(Enzyme.shallow(React.createElement(MyComponent)).type() === "div", "The React component should return a <code>div</code> element.");'
  - text: O <code>div</code> retornado deve renderizar um cabeçalho <code>h1</code> dentro dele.
    testString: 'assert(/<div><h1>.*<\/h1><\/div>/.test(Enzyme.shallow(React.createElement(MyComponent)).html()), "The returned <code>div</code> should render an <code>h1</code> header within it.");'
  - text: O cabeçalho <code>h1</code> deve conter a string <code>Hello React!</code> .
    testString: 'assert(Enzyme.shallow(React.createElement(MyComponent)).html() === "<div><h1>Hello React!</h1></div>", "The <code>h1</code> header should contain the string <code>Hello React!</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    // Mude o código depois dessa linha


    // Mude o código acima dessa linha
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

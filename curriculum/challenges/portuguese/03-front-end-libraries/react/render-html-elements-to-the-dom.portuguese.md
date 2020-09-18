---
id: 5a24bbe0dba28a8d3cbd4c5f
title: Render HTML Elements to the DOM
challengeType: 6
videoUrl: ''
localeTitle: Renderizar elementos HTML no DOM
---

## Description
<section id="description"> Até agora, você aprendeu que o JSX é uma ferramenta conveniente para escrever HTML legível em JavaScript. Com o React, podemos renderizar esse JSX diretamente para o HTML DOM usando a API de renderização do React, conhecida como ReactDOM. O ReactDOM oferece um método simples para renderizar os elementos React no DOM que se parece com: <code>ReactDOM.render(componentToRender, targetNode)</code> , em que o primeiro argumento é o elemento ou componente React que você deseja renderizar, e o segundo argumento é o nó DOM para o qual você deseja renderizar o componente. Como seria de esperar, <code>ReactDOM.render()</code> deve ser chamado após as declarações de elementos JSX, assim como você deve declarar as variáveis ​​antes de usá-las. </section>

## Instructions
<section id="instructions"> O editor de código possui um componente JSX simples. Use o método <code>ReactDOM.render()</code> para renderizar esse componente para a página. Você pode passar elementos JSX definidos diretamente como o primeiro argumento e usar <code>document.getElementById()</code> para selecionar o nó DOM para renderizá-los. Existe um <code>div</code> com <code>id=&#39;challenge-node&#39;</code> disponível para você usar. Certifique-se de não alterar a constante de <code>JSX</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: A constante <code>JSX</code> deve retornar um elemento <code>div</code> .
    testString: 'assert(JSX.type === "div", "The constant <code>JSX</code> should return a <code>div</code> element.");'
  - text: O <code>div</code> deve conter uma tag <code>h1</code> como o primeiro elemento.
    testString: 'assert(JSX.props.children[0].type === "h1", "The <code>div</code> should contain an <code>h1</code> tag as the first element.");'
  - text: O <code>div</code> deve conter uma tag <code>p</code> como o segundo elemento.
    testString: 'assert(JSX.props.children[1].type === "p", "The <code>div</code> should contain a <code>p</code> tag as the second element.");'
  - text: O elemento JSX fornecido deve renderizar para o nó DOM com o nó de <code>challenge-node</code> identificação.
    testString: 'assert(document.getElementById("challenge-node").childNodes[0].innerHTML === "<h1>Hello World</h1><p>Lets render this to the DOM</p>", "The provided JSX element should render to the DOM node with id <code>challenge-node</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
const JSX = (
  <div>
    <h1>Hello World</h1>
    <p>Lets render this to the DOM</p>
  </div>
);
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

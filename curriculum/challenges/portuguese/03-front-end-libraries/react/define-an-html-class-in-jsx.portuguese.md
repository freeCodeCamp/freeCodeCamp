---
id: 5a24c314108439a4d4036160
title: Define an HTML Class in JSX
challengeType: 6
videoUrl: ''
localeTitle: Definir uma classe HTML no JSX
---

## Description
<section id="description"> Agora que você está se sentindo confortável escrevendo JSX, talvez esteja se perguntando como isso difere do HTML. Até agora, pode parecer que HTML e JSX são exatamente os mesmos. Uma diferença fundamental no JSX é que você não pode mais usar a <code>class</code> word para definir classes HTML. Isso ocorre porque a <code>class</code> é uma palavra reservada em JavaScript. Em vez disso, o JSX usa <code>className</code> . Na verdade, a convenção de nomenclatura para todos os atributos HTML e referências de eventos no JSX se torna camelCase. Por exemplo, um evento de clique no JSX é <code>onClick</code> , em vez de <code>onclick</code> . Da mesma forma, <code>onchange</code> se torna <code>onChange</code> . Embora esta seja uma diferença sutil, é importante ter em mente seguir em frente. </section>

## Instructions
<section id="instructions"> Aplique uma classe de <code>myDiv</code> ao <code>div</code> fornecido no código JSX. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: A constante <code>JSX</code> deve retornar um elemento <code>div</code> .
    testString: 'assert.strictEqual(JSX.type, "div", "The constant <code>JSX</code> should return a <code>div</code> element.");'
  - text: O <code>div</code> tem uma classe de <code>myDiv</code> .
    testString: 'assert.strictEqual(JSX.props.className, "myDiv", "The <code>div</code> has a class of <code>myDiv</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
const JSX = (
  <div>
    <h1>Add a class to this div</h1>
  </div>
);

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

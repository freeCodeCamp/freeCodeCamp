---
id: 5a24c314108439a4d4036161
title: Learn About Self-Closing JSX Tags
challengeType: 6
videoUrl: ''
localeTitle: Aprenda sobre tags JSX de fecho automático
---

## Description
<section id="description"> Até agora, você viu como o JSX difere do HTML de uma maneira fundamental com o uso de <code>className</code> vs. <code>class</code> para definir classes HTML. Outra maneira importante pela qual o JSX difere do HTML é a ideia da tag de fechamento automático. Em HTML, quase todas as tags têm uma tag de abertura e fechamento: <code>&lt;div&gt;&lt;/div&gt;</code> ; a tag de fechamento sempre tem uma barra antes do nome da tag que você está fechando. No entanto, há instâncias especiais em HTML chamadas &quot;tags de fechamento automático&quot; ou tags que não exigem uma tag de abertura e de fechamento antes que outra tag possa ser iniciada. Por exemplo, a tag de quebra de linha pode ser escrita como <code>&lt;br&gt;</code> ou como <code>&lt;br /&gt;</code> , mas nunca deve ser escrita como <code>&lt;br&gt;&lt;/br&gt;</code> , uma vez que não contém nenhum conteúdo. No JSX, as regras são um pouco diferentes. Qualquer elemento JSX pode ser gravado com uma tag de fechamento automático e todos os elementos devem ser fechados. A tag de quebra de linha, por exemplo, deve sempre ser escrita como <code>&lt;br /&gt;</code> para ser um JSX válido que pode ser transpilado. Um <code>&lt;div&gt;</code> , por outro lado, pode ser escrito como <code>&lt;div /&gt;</code> ou <code>&lt;div&gt;&lt;/div&gt;</code> . A diferença é que na primeira versão da sintaxe não há como incluir nada no <code>&lt;div /&gt;</code> . Você verá em desafios posteriores que essa sintaxe é útil ao renderizar componentes React. </section>

## Instructions
<section id="instructions"> Corrija os erros no editor de código para que ele seja um JSX válido e transpile com êxito. Certifique-se de não alterar nenhum conteúdo. Você só precisa fechar as tags onde elas são necessárias. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: A constante <code>JSX</code> deve retornar um elemento <code>div</code> .
    testString: 'assert.strictEqual(JSX.type, "div", "The constant <code>JSX</code> should return a <code>div</code> element.");'
  - text: O <code>div</code> deve conter uma tag <code>br</code> .
    testString: 'assert(Enzyme.shallow(JSX).find("br").length === 1, "The <code>div</code> should contain a <code>br</code> tag.");'
  - text: O <code>div</code> deve conter uma tag <code>hr</code> .
    testString: 'assert(Enzyme.shallow(JSX).find("hr").length === 1, "The <code>div</code> should contain an <code>hr</code> tag.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
const JSX = (
  <div>
    {/* remove comment and change code below this line
    <h2>Welcome to React!</h2> <br >
    <p>Be sure to close all tags!</p>
    <hr >
    remove comment and change code above this line */}
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

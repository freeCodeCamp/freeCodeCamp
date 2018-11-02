---
id: 587d7dbc367417b2b2512bb1
title: Create a Simple JSX Element
challengeType: 6
isRequired: false
videoUrl: ''
localeTitle: Crie um elemento JSX simples
---

## Description
<section id="description"> <strong>Intro:</strong> React é uma biblioteca de visualização de código aberto criada e mantida pelo Facebook. É uma ótima ferramenta para processar a interface do usuário (UI) de aplicativos da web modernos. O React usa uma extensão de sintaxe do JavaScript chamada JSX que permite gravar HTML diretamente no JavaScript. Isso tem vários benefícios. Ele permite que você use o poder programático completo do JavaScript em HTML e ajuda a manter seu código legível. Na maior parte, o JSX é semelhante ao HTML que você já aprendeu, no entanto, existem algumas diferenças importantes que serão abordadas ao longo desses desafios. Por exemplo, como o JSX é uma extensão sintática do JavaScript, você pode escrever JavaScript diretamente no JSX. Para fazer isso, basta incluir o código que deseja tratar como JavaScript entre chaves: <code>{ &#39;isto é tratado como código Javascript&#39; }</code> . Tenha isso em mente, já que é usado em vários desafios futuros. No entanto, como o JSX não é um JavaScript válido, o código JSX deve ser compilado em JavaScript. O transpilador Babel é uma ferramenta popular para este processo. Para sua conveniência, este transpilador já foi adicionado nos bastidores para esses desafios. Se acontecer de você escrever JSX sintaticamente inválido, você verá o primeiro teste nesses desafios falhar. Vale a pena notar que os desafios estão chamando <code>ReactDOM.render(JSX, document.getElementById(&#39;root&#39;))</code> . Essa chamada de função é o que coloca seu JSX na representação leve do próprio React do DOM. O React usa instantâneos de seu próprio DOM para otimizar a atualização apenas de partes específicas do DOM real. </section>

## Instructions
<section id="instructions"> <strong>Instruções:</strong> O código atual usa JSX para atribuir um elemento <code>div</code> à constante <code>JSX</code> . Substitua o <code>div</code> por um elemento <code>h1</code> e adicione o texto <code>Hello JSX!</code> dentro dele. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: A constante <code>JSX</code> deve retornar um elemento <code>h1</code> .
    testString: 'assert(JSX.type === "h1", "The constant <code>JSX</code> should return an <code>h1</code> element.");'
  - text: A tag <code>h1</code> deve incluir o texto <code>Hello JSX!</code>
    testString: 'assert(Enzyme.shallow(JSX).contains("Hello JSX!"), "The <code>h1</code> tag should include the text <code>Hello JSX!</code>");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
const JSX = <div></div>;

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

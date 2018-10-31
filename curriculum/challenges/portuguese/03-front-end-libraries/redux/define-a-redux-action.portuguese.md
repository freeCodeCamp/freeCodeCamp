---
id: 5a24c314108439a4d403614d
title: Define a Redux Action
challengeType: 6
isRequired: false
videoUrl: ''
localeTitle: Definir uma ação do Redux
---

## Description
<section id="description"> Como o Redux é uma estrutura de gerenciamento de estado, o estado de atualização é uma de suas principais tarefas. No Redux, todas as atualizações de estado são acionadas por ações de despacho. Uma ação é simplesmente um objeto JavaScript que contém informações sobre um evento de ação ocorrido. O repositório do Redux recebe esses objetos de ação e atualiza seu estado de acordo. Às vezes, uma ação do Redux também carrega alguns dados. Por exemplo, a ação carrega um nome de usuário depois que um usuário efetua login. Embora os dados sejam opcionais, as ações devem conter uma propriedade de <code>type</code> que especifica o &#39;tipo&#39; de ação que ocorreu. Pense em ações do Redux como mensageiros que fornecem informações sobre eventos que acontecem no seu aplicativo para a loja Redux. Em seguida, a loja conduz o negócio de atualizar o estado com base na ação que ocorreu. </section>

## Instructions
<section id="instructions"> Escrever uma ação Redux é tão simples quanto declarar um objeto com uma propriedade type. Declare uma <code>action</code> objeto e dê a ela um <code>type</code> propriedade definido como a string <code>&#39;LOGIN&#39;</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Um objeto de ação deve existir.
    testString: 'assert((function() { return typeof action === "object" })(), "An action object should exist.");'
  - text: A ação deve ter um tipo de propriedade de chave com o valor <code>LOGIN</code> .
    testString: 'assert((function() { return action.type === "LOGIN" })(), "The action should have a key property type with value <code>LOGIN</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
// Define an action here:

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

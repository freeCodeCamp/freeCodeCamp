---
id: 587d78a7367417b2b2512ae0
title: Use CSS Animation to Change the Hover State of a Button
challengeType: 0
videoUrl: ''
localeTitle: Use animação CSS para alterar o estado de foco de um botão
---

## Description
<section id="description"> Você pode usar CSS <code>@keyframes</code> para alterar a cor de um botão em seu estado de foco. Veja um exemplo de como alterar a largura de uma imagem no hover: <blockquote><style><br>&nbsp;&nbsp;img:hover {<br>&nbsp;&nbsp;&nbsp;&nbsp;animation-name: width;<br>&nbsp;&nbsp;&nbsp;&nbsp;animation-duration: 500ms;<br>&nbsp;&nbsp;}<br><br>&nbsp;&nbsp;@keyframes width {<br>&nbsp;&nbsp;&nbsp;&nbsp;100% {<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;width: 40px;<br>&nbsp;&nbsp;&nbsp;&nbsp;}<br>&nbsp;&nbsp;}<br>&lt;/style&gt;<br><br>&lt;img src="https://bit.ly/smallgooglelogo" alt="Logotipo da Google" /></blockquote></section>

## Instructions
<section id="instructions"> Observe que <code>ms</code> significa milissegundos, em que 1000ms é igual a 1s. Use CSS <code>@keyframes</code> para alterar a <code>background-color</code> de fundo do elemento <code>button</code> , de modo que ele se torne <code>#4791d0</code> quando um usuário passar por cima dele. A regra <code>@keyframes</code> deve ter apenas uma entrada para <code>100%</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: A regra @keyframes deve usar a cor de fundo do <code>animation-name</code> da <code>animation-name</code> .
    testString: 'assert(code.match(/@keyframes\s+?background-color\s*?{/g), "The @keyframes rule should use the <code>animation-name</code> background-color.");'
  - text: 'Deve haver uma regra em <code>@keyframes</code> que altere a <code>background-color</code> para <code>#4791d0</code> a 100%.'
    testString: 'assert(code.match(/100%\s*?{\s*?background-color:\s*?#4791d0;\s*?}/gi), "There should be one rule under <code>@keyframes</code> that changes the <code>background-color</code> to <code>#4791d0</code> at 100%.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  button {
    border-radius: 5px;
    color: white;
    background-color: #0F5897;
    padding: 5px 10px 8px 10px;
  }

  button:hover {
    animation-name: background-color;
    animation-duration: 500ms;
  }


</style>

<button>Register</button>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

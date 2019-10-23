---
id: 587d78a7367417b2b2512ae1
title: Create Movement Using CSS Animation
challengeType: 0
videoUrl: ''
localeTitle: Criar movimento usando animação CSS
---

## Description
<section id="description"> Quando os elementos têm uma <code>position</code> especificada, como <code>fixed</code> ou <code>relative</code> , as propriedades de deslocamento de CSS <code>right</code> , <code>left</code> , <code>top</code> e <code>bottom</code> podem ser usadas em regras de animação para criar movimento. Conforme mostrado no exemplo abaixo, você pode empurrar o item para baixo e depois para cima definindo a propriedade <code>top</code> do quadro-chave de <code>50%</code> para 50px, mas definindo-o como 0px para o primeiro ( <code>0%</code> ) e o último ( <code>100%</code> ) quadro-chave. <blockquote> @keyframes rainbow {<br>&nbsp;&nbsp;0% {<br>&nbsp;&nbsp;&nbsp;&nbsp;background-color: blue;<br>&nbsp;&nbsp;&nbsp;&nbsp;top: 0px;<br>&nbsp;&nbsp;}<br>&nbsp;&nbsp;50% {<br>&nbsp;&nbsp;&nbsp;&nbsp;background-color: green;<br>&nbsp;&nbsp;&nbsp;&nbsp;top: 50px;<br>&nbsp;&nbsp;}<br>&nbsp;&nbsp;100% {<br>&nbsp;&nbsp;&nbsp;&nbsp;background-color: yellow;<br>&nbsp;&nbsp;&nbsp;&nbsp;top: 0px;<br>&nbsp;&nbsp;}<br>}</blockquote></section>

## Instructions
<section id="instructions"> Adicione um movimento horizontal à animação <code>div</code> . Usando a propriedade offset <code>left</code> , adicione à regra <code>@keyframes</code> para que o arco-íris comece em 0 pixels a <code>0%</code> , <code>@keyframes</code> para 25 pixels em <code>50%</code> e termine em -25 pixels em <code>100%</code> . Não substitua a propriedade <code>top</code> no editor - a animação deve ter movimento vertical e horizontal. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: A regra <code>@keyframes</code> para <code>0%</code> deve usar o deslocamento <code>left</code> de 0px.
    testString: 'assert(code.match(/0%\s*?{\s*?background-color:\s*?blue;\s*?top:\s*?0(px)?;\s*?left:\s*?0(px)?;\s*?}/gi), "The <code>@keyframes</code> rule for <code>0%</code> should use the <code>left</code> offset of 0px.");'
  - text: A regra <code>@keyframes</code> para <code>50%</code> deve usar o deslocamento <code>left</code> de 25px.
    testString: 'assert(code.match(/50%\s*?{\s*?background-color:\s*?green;\s*?top:\s*?50px;\s*?left:\s*?25px;\s*?}/gi), "The <code>@keyframes</code> rule for <code>50%</code> should use the <code>left</code> offset of 25px.");'
  - text: A regra <code>@keyframes</code> para <code>100%</code> deve usar o deslocamento <code>left</code> de -25px.
    testString: 'assert(code.match(/100%\s*?{\s*?background-color:\s*?yellow;\s*?top:\s*?0(px)?;\s*?left:\s*?-25px;\s*?}/gi), "The <code>@keyframes</code> rule for <code>100%</code> should use the <code>left</code> offset of -25px.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  div {
    height: 40px;
    width: 70%;
    background: black;
    margin: 50px auto;
    border-radius: 5px;
    position: relative;
  }

#rect {
  animation-name: rainbow;
  animation-duration: 4s;
}

@keyframes rainbow {
  0% {
    background-color: blue;
    top: 0px;

  }
  50% {
    background-color: green;
    top: 50px;

  }
  100% {
    background-color: yellow;
    top: 0px;

  }
}
</style>

<div id="rect"></div>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

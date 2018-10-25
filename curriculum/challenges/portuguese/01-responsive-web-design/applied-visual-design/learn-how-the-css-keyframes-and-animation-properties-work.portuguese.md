---
id: 587d78a7367417b2b2512adf
title: Learn How the CSS @keyframes and animation Properties Work
challengeType: 0
videoUrl: ''
localeTitle: Saiba como funcionam as propriedades CSS @keyframes e animação
---

## Description
<section id="description"> Para animar um elemento, você precisa saber sobre as propriedades da animação e a regra <code>@keyframes</code> . As propriedades de animação controlam como a animação deve se comportar e a regra <code>@keyframes</code> controla o que acontece durante a animação. Existem oito propriedades de animação no total. Este desafio irá mantê-lo simples e cobrir os dois mais importantes em primeiro lugar: <code>animation-name</code> define o nome da animação, que é posteriormente usado por <code>@keyframes</code> para dizer ao CSS quais regras vão com quais animações. <code>animation-duration</code> define o período de tempo para a animação. <code>@keyframes</code> é como especificar exatamente o que acontece dentro da animação ao longo da duração. Isso é feito fornecendo propriedades CSS para &quot;quadros&quot; específicos durante a animação, com porcentagens variando de 0% a 100%. Se você comparar isso com um filme, as propriedades CSS para 0% são como o elemento é exibido na cena de abertura. As propriedades CSS para 100% são como o elemento aparece no final, logo antes da rolagem dos créditos. Em seguida, o CSS aplica a mágica para fazer a transição do elemento durante a duração determinada para representar a cena. Aqui está um exemplo para ilustrar o uso de <code>@keyframes</code> e as propriedades da animação: <blockquote>#anim {<br>&nbsp;&nbsp;animation-name: colorful;<br>&nbsp;&nbsp;animation-duration: 3s;<br>}<br>@keyframes colorful {<br>&nbsp;&nbsp;0% {<br>&nbsp;&nbsp;&nbsp;&nbsp;background-color: blue;<br>&nbsp;&nbsp;}<br>&nbsp;&nbsp;100% {<br>&nbsp;&nbsp;&nbsp;&nbsp;background-color: yellow;<br>&nbsp;&nbsp;}<br>}</blockquote> Para o elemento com o <code>anim</code> id, o trecho de código acima define o <code>animation-name</code> da <code>animation-name</code> para <code>colorful</code> e define a <code>animation-duration</code> da <code>animation-duration</code> como 3 segundos. Em seguida, a regra <code>@keyframes</code> vinculada às propriedades de animação com o nome <code>colorful</code> . Ele define a cor para azul no início da animação (0%), que passará para amarelo no final da animação (100%). Você não está limitado a apenas transições de início e fim, você pode definir propriedades para o elemento para qualquer porcentagem entre 0% e 100%. </section>

## Instructions
<section id="instructions"> Crie uma animação para o elemento com o id <code>rect</code> , definindo o <code>animation-name</code> da <code>animation-name</code> como rainbow e a <code>animation-duration</code> da <code>animation-duration</code> como 4 segundos. Em seguida, declare uma regra <code>@keyframes</code> e defina a <code>background-color</code> no início da animação ( <code>0%</code> ) como azul, o meio da animação ( <code>50%</code> ) como verde e o final da animação ( <code>100%</code> ) como amarelo. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: O elemento com o id de <code>rect</code> deve ter uma propriedade de <code>animation-name</code> com um valor de arco-íris.
    testString: 'assert($("#rect").css("animation-name") == "rainbow", "The element with id of <code>rect</code> should have an <code>animation-name</code> property with a value of rainbow.");'
  - text: O elemento com id de <code>rect</code> deve ter uma propriedade de <code>animation-duration</code> com um valor de 4s.
    testString: 'assert($("#rect").css("animation-duration") == "4s", "The element with id of <code>rect</code> should have an <code>animation-duration</code> property with a value of 4s.");'
  - text: A regra <code>@keyframes</code> deve usar o <code>animation-name</code> da <code>animation-name</code> do arco <code>animation-name</code> íris.
    testString: 'assert(code.match(/@keyframes\s+?rainbow\s*?{/g), "The <code>@keyframes</code> rule should use the <code>animation-name</code> of rainbow.");'
  - text: A regra <code>@keyframes</code> para arco-íris deve usar uma <code>background-color</code> de fundo azul em 0%.
    testString: 'assert(code.match(/0%\s*?{\s*?background-color:\s*?blue;\s*?}/gi), "The <code>@keyframes</code> rule for rainbow should use a <code>background-color</code> of blue at 0%.");'
  - text: A regra <code>@keyframes</code> para arco-íris deve usar uma <code>background-color</code> de fundo verde em 50%.
    testString: 'assert(code.match(/50%\s*?{\s*?background-color:\s*?green;\s*?}/gi), "The <code>@keyframes</code> rule for rainbow should use a <code>background-color</code> of green at 50%.");'
  - text: A regra <code>@keyframes</code> para arco-íris deve usar uma <code>background-color</code> de <code>background-color</code> de amarelo em 100%.
    testString: 'assert(code.match(/100%\s*?{\s*?background-color:\s*?yellow;\s*?}/gi), "The <code>@keyframes</code> rule for rainbow should use a <code>background-color</code> of yellow at 100%.");'

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
  }

  #rect {


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

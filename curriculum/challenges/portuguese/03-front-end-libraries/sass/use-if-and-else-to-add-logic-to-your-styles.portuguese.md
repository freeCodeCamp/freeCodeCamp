---
id: 587d7dbe367417b2b2512bb8
title: Use @if and @else to Add Logic To Your Styles
challengeType: 0
videoUrl: ''
localeTitle: Use @if e @else para adicionar lógica aos seus estilos
---

## Description
<section id="description"> A diretiva <code>@if</code> no Sass é útil para testar um caso específico - funciona da mesma forma que a instrução <code>if</code> em JavaScript. <blockquote> @mixin make-bold ($ bool) { <br> @if $ bool == true { <br> intensidade da fonte: Negrito; <br> } <br> } </blockquote> E, assim como no JavaScript, <code>@else if</code> e <code>@else</code> test para mais condições: <blockquote> @mixin text-effect ($ val) { <br> @if $ val == danger { <br> cor vermelha; <br> } <br> @else if $ val == alert { <br> cor amarela; <br> } <br> @else if $ val == success { <br> cor verde; <br> } <br> @outro { <br> cor preta; <br> } <br> } </blockquote></section>

## Instructions
<section id="instructions"> Crie um <code>mixin</code> chamado <code>border-stroke</code> que use um parâmetro <code>$val</code> . O <code>mixin</code> deve verificar as seguintes condições usando <code>@if</code> , <code>@else if</code> e <code>@else</code> : <blockquote> luz - 1px preto sólido <br> médio - preto sólido 3px <br> pesado - preto sólido de 6px </blockquote>
Certifique-se de que seus elementos <code>li</code> não contêm um string de espaço vazio ou somente espaço em branco.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Seu código deve declarar um <code>mixin</code> chamado <code>border-stroke</code> que tenha um parâmetro chamado <code>$val</code> .
    testString: 'assert(code.match(/@mixin\s+?border-stroke\s*?\(\s*?\$val\s*?\)\s*?{/gi), "Your code should declare a <code>mixin</code> named <code>border-stroke</code> which has a parameter named <code>$val</code>.");'
  - text: Seu <code>mixin</code> deve ter uma instrução <code>@if</code> para verificar se <code>$val</code> é leve e para definir a <code>border</code> como 1px em preto sólido.
    testString: 'assert(code.match(/@if\s+?\$val\s*?===?\s*?light\s*?{\s*?border\s*?:\s*?1px\s+?solid\s+?black\s*?;\s*?}/gi), "Your <code>mixin</code> should have an <code>@if</code> statement to check if <code>$val</code> is light, and to set the <code>border</code> to 1px solid black.");'
  - text: Seu <code>mixin</code> deve ter uma declaração <code>@else if</code> para verificar se <code>$val</code> é médio e para definir a <code>border</code> como 3px em preto sólido.
    testString: 'assert(code.match(/@else\s+?if\s+?\$val\s*?===?\s*?medium\s*?{\s*?border\s*?:\s*?3px\s+?solid\s+?black\s*?;\s*?}/gi), "Your <code>mixin</code> should have an <code>@else if</code> statement to check if <code>$val</code> is medium, and to set the <code>border</code> to 3px solid black.");'
  - text: Seu <code>mixin</code> deve ter uma instrução <code>@else if</code> para verificar se <code>$val</code> é pesado e para definir a <code>border</code> como preto sólido de 6px.
    testString: 'assert(code.match(/@else\s+?if\s+?\$val\s*?===?\s*?heavy\s*?{\s*?border\s*?:\s*?6px\s+?solid\s+?black\s*?;\s*?}/gi), "Your <code>mixin</code> should have an <code>@else if</code> statement to check if <code>$val</code> is heavy, and to set the <code>border</code> to 6px solid black.");'
  - text: Seu <code>mixin</code> deve ter uma instrução <code>@else</code> para definir a <code>border</code> como none.
    testString: 'assert(code.match(/@else\s*?{\s*?border\s*?:\s*?none\s*?;\s*?}/gi), "Your <code>mixin</code> should have an <code>@else</code> statement to set the <code>border</code> to none.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style type='text/sass'>



  #box {
    width: 150px;
    height: 150px;
    background-color: red;
    @include border-stroke(medium);
  }
</style>

<div id="box"></div>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

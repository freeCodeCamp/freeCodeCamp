---
id: 587d7dbd367417b2b2512bb6
title: Create Reusable CSS with Mixins
challengeType: 0
videoUrl: ''
localeTitle: Crie CSS Reutilizável com Mixins
---

## Description
<section id="description"> No Sass, um <code>mixin</code> é um grupo de declarações CSS que podem ser reutilizadas em toda a folha de estilo. Os novos recursos do CSS levam tempo antes de serem totalmente adotados e prontos para serem usados ​​em todos os navegadores. Como os recursos são adicionados aos navegadores, as regras CSS que os usam podem precisar de prefixos de fornecedores. Considere &quot;box-shadow&quot;: <blockquote> div { <br> -webkit-box-shadow: 0px 0px 4px #fff; <br> -moz-box-shadow: 0px 0px 4px #fff; <br> -ms-box-shadow: 0px 0px 4px #fff; <br> box-shadow: 0px 0px 4px #fff; <br> } </blockquote> É muita digitação para reescrever esta regra para todos os elementos que possuem uma <code>box-shadow</code> , ou para alterar cada valor para testar diferentes efeitos. <code>Mixins</code> são como funções para CSS. Aqui está como escrever um: <blockquote> @mixin box-shadow ($x, $y, $blur, $c) { <br> -webkit-box-shadow: $x $y $blur $c; <br> -moz-box-shadow: $x $y $blur $c; <br> -ms-box-shadow: $x $y $blur $c; <br> box-shadow: $x $y $blur $c; <br> } </blockquote> A definição começa com <code>@mixin</code> seguido por um nome personalizado. Os parâmetros ( <code>$x</code> , <code>$y</code> , <code>$blur</code> e <code>$c</code> no exemplo acima) são opcionais. Agora, sempre que uma regra de <code>box-shadow</code> é necessária, apenas uma linha chamando o <code>mixin</code> substitui a necessidade de digitar todos os prefixos do fornecedor. Um <code>mixin</code> é chamado com a diretiva <code>@include</code> : <blockquote> div { <br> @include box-shadow (0px, 0px, 4px, #fff); <br> } </blockquote></section>

## Instructions
<section id="instructions"> Escreva um <code>mixin</code> para <code>border-radius</code> e atribua a ele um parâmetro <code>$radius</code> . Deve usar todos os prefixos do fornecedor do exemplo. Em seguida, utilizar a <code>border-radius</code> <code>mixin</code> para dar o <code>#awesome</code> elemento de um raio de fronteira de 15 pixels. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Seu código deve declarar um <code>mixin</code> chamado <code>border-radius</code> que tenha um parâmetro chamado <code>$radius</code> .
    testString: 'assert(code.match(/@mixin\s+?border-radius\s*?\(\s*?\$radius\s*?\)\s*?{/gi), "Your code should declare a <code>mixin</code> named <code>border-radius</code> which has a parameter named <code>$radius</code>.");'
  - text: Seu código deve incluir o <code>-webkit-border-radius</code> que usa o parâmetro <code>$radius</code> .
    testString: 'assert(code.match(/-webkit-border-radius:\s*?\$radius;/gi), "Your code should include the <code>-webkit-border-radius</code> vender prefix that uses the <code>$radius</code> parameter.");'
  - text: Seu código deve incluir o prefixo de vendedor <code>-moz-border-radius</code> que usa o parâmetro <code>$radius</code> .
    testString: 'assert(code.match(/-moz-border-radius:\s*?\$radius;/gi), "Your code should include the <code>-moz-border-radius</code> vender prefix that uses the <code>$radius</code> parameter.");'
  - text: Seu código deve incluir o prefixo do <code>-ms-border-radius</code> que usa o parâmetro <code>$radius</code> .
    testString: 'assert(code.match(/-ms-border-radius:\s*?\$radius;/gi), "Your code should include the <code>-ms-border-radius</code> vender prefix that uses the <code>$radius</code> parameter.");'
  - text: 'Seu código deve incluir a regra geral <code>border-radius</code> , que usa o parâmetro <code>$radius</code> .'
    testString: 'assert(code.match(/border-radius:\s*?\$radius;/gi).length == 4, "Your code should include the general <code>border-radius</code> rule that uses the <code>$radius</code> parameter.");'
  - text: 'Seu código deve chamar o <code>@include</code> <code>border-radius mixin</code> usando a palavra-chave <code>@include</code> , configurando-a para 15px.'
    testString: 'assert(code.match(/@include\s+?border-radius\(\s*?15px\s*?\);/gi), "Your code should call the <code>border-radius mixin</code> using the <code>@include</code> keyword, setting it to 15px.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style type='text/sass'>



  #awesome {
    width: 150px;
    height: 150px;
    background-color: green;

  }
</style>

<div id="awesome"></div>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

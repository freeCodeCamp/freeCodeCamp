---
id: 587d7dbe367417b2b2512bb9
title: Use @for to Create a Sass Loop
challengeType: 0
videoUrl: ''
localeTitle: Use @for para criar um loop Sass
---

## Description
<section id="description"> O <code>@for</code> diretiva adiciona estilos em um loop, muito semelhante a um loop <code>for</code> em JavaScript. <code>@for</code> é usado de duas maneiras: &quot;início a fim&quot; ou &quot;início a fim&quot;. A principal diferença é que o &quot;início ao fim&quot; <em>exclui</em> o número final e &quot;início até o fim&quot; <em>inclui</em> o número final. Aqui está um começo <b>até o</b> final do exemplo: <blockquote> @ para $ i de 1 a 12 { <br> .col - # {$ i} {width: 100% / 12 * $ i; } <br> } </blockquote> A parte <code>#{$i}</code> é a sintaxe para combinar uma variável ( <code>i</code> ) com texto para criar uma string. Quando o arquivo Sass é convertido em CSS, é assim: <blockquote> .col-1 { <br> largura: 8,33333%; <br> } <br><br> .col-2 { <br> largura: 16,6667%; <br> } <br><br> ... <br><br> .col-12 { <br> largura: 100%; <br> } </blockquote> Esta é uma maneira poderosa de criar um layout de grade. Agora você tem doze opções para larguras de coluna disponíveis como classes CSS. </section>

## Instructions
<section id="instructions"> Escreva uma diretiva <code>@for</code> que tenha uma variável <code>$j</code> que vai de 1 <b>a</b> 6. Ela deve criar 5 classes chamadas <code>.text-1</code> para <code>.text-5</code> onde cada uma tem um <code>font-size</code> configurado para 10px multiplicado pelo índice. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Seu código deve usar o <code>@for</code> diretiva.
    testString: 'assert(code.match(/@for /g), "Your code should use the <code>@for</code> directive.");'
  - text: Sua classe <code>.text-1</code> deve ter um <code>font-size</code> de <code>font-size</code> de 10px.
    testString: 'assert($(".text-1").css("font-size") == "10px", "Your <code>.text-1</code> class should have a <code>font-size</code> of 10px.");'
  - text: Sua classe <code>.text-2</code> deve ter um <code>font-size</code> de <code>font-size</code> de 20px.
    testString: 'assert($(".text-2").css("font-size") == "20px", "Your <code>.text-2</code> class should have a <code>font-size</code> of 20px.");'
  - text: Sua classe <code>.text-3</code> deve ter um <code>font-size</code> de <code>font-size</code> de 30px.
    testString: 'assert($(".text-3").css("font-size") == "30px", "Your <code>.text-3</code> class should have a <code>font-size</code> of 30px.");'
  - text: Sua classe <code>.text-4</code> deve ter um <code>font-size</code> de <code>font-size</code> de 40px.
    testString: 'assert($(".text-4").css("font-size") == "40px", "Your <code>.text-4</code> class should have a <code>font-size</code> of 40px.");'
  - text: Sua classe <code>.text-5</code> deve ter um <code>font-size</code> de <code>font-size</code> de 50px.
    testString: 'assert($(".text-5").css("font-size") == "50px", "Your <code>.text-5</code> class should have a <code>font-size</code> of 50px.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style type='text/sass'>



</style>

<p class="text-1">Hello</p>
<p class="text-2">Hello</p>
<p class="text-3">Hello</p>
<p class="text-4">Hello</p>
<p class="text-5">Hello</p>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

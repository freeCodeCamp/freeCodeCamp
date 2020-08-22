---
id: 587d7dbf367417b2b2512bbb
title: Apply a Style Until a Condition is Met with @while
challengeType: 0
videoUrl: ''
localeTitle: Aplicar um estilo até que uma condição seja satisfeita com @while
---

## Description
<section id="description"> A diretiva <code>@while</code> é uma opção com funcionalidade semelhante ao loop <code>while</code> do JavaScript. Ele cria regras CSS até que uma condição seja atendida. O desafio <code>@for</code> deu um exemplo para criar um sistema de grade simples. Isso também pode funcionar com <code>@while</code>. 
  
```scss
$x: 1;
@while $x < 13 {
  .col-#{$x} { width: 100%/12 * $x;}
  $x: $x + 1;
}
```

Primeiro, defina uma variável <code>$x</code> e defina-a como 1. Em seguida, use a diretiva <code>@while</code> para criar o sistema de grade, <i>enquanto</i> <code>$x</code> é menor que 13. Depois de definir a regra CSS para <code>width</code> , <code>$x</code> é incrementado em 1 para evitar Loop infinito. </section>

## Instructions
<section id="instructions"> Use <code>@while</code> para criar uma série de classes com diferentes <code>font-sizes</code> . Deve haver 10 classes diferentes de <code>text-1</code> a <code>text-10</code> . Em seguida, defina <code>font-size</code> para 5 px multiplicado pelo número do índice atual. Certifique-se de evitar um loop infinito! </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Seu código deve usar a diretiva <code>@while</code> .
    testString: 'assert(code.match(/@while /g), "Your code should use the <code>@while</code> directive.");'
  - text: Seu código deve definir uma variável de índice como 1 para começar.
    testString: 'assert(code.match(/\$.*:\s*?1;/gi), "Your code should set an index variable to 1 to start.");'
  - text: Seu código deve incrementar a variável do contador.
    testString: 'assert(code.match(/\$(.*):\s*?\$\1\s*?\+\s*?1;/gi), "Your code should increment the counter variable.");'
  - text: Sua classe <code>.text-1</code> deve ter um <code>font-size</code> de <code>font-size</code> de 5px.
    testString: 'assert($(".text-1").css("font-size") == "5px", "Your <code>.text-1</code> class should have a <code>font-size</code> of 5px.");'
  - text: Sua classe <code>.text-2</code> deve ter um <code>font-size</code> de <code>font-size</code> de 10px.
    testString: 'assert($(".text-2").css("font-size") == "10px", "Your <code>.text-2</code> class should have a <code>font-size</code> of 10px.");'
  - text: Sua classe <code>.text-3</code> deve ter um <code>font-size</code> de <code>font-size</code> de 15px.
    testString: 'assert($(".text-3").css("font-size") == "15px", "Your <code>.text-3</code> class should have a <code>font-size</code> of 15px.");'
  - text: Sua classe <code>.text-4</code> deve ter um <code>font-size</code> de <code>font-size</code> de 20px.
    testString: 'assert($(".text-4").css("font-size") == "20px", "Your <code>.text-4</code> class should have a <code>font-size</code> of 20px.");'
  - text: Sua classe <code>.text-5</code> deve ter um <code>font-size</code> de <code>font-size</code> de 25px.
    testString: 'assert($(".text-5").css("font-size") == "25px", "Your <code>.text-5</code> class should have a <code>font-size</code> of 25px.");'
  - text: Sua classe <code>.text-6</code> deve ter um <code>font-size</code> de <code>font-size</code> de 30px.
    testString: 'assert($(".text-6").css("font-size") == "30px", "Your <code>.text-6</code> class should have a <code>font-size</code> of 30px.");'
  - text: Sua classe <code>.text-7</code> deve ter um <code>font-size</code> de <code>font-size</code> de 35px.
    testString: 'assert($(".text-7").css("font-size") == "35px", "Your <code>.text-7</code> class should have a <code>font-size</code> of 35px.");'
  - text: Sua classe <code>.text-8</code> deve ter um <code>font-size</code> de <code>font-size</code> de 40px.
    testString: 'assert($(".text-8").css("font-size") == "40px", "Your <code>.text-8</code> class should have a <code>font-size</code> of 40px.");'
  - text: Sua classe <code>.text-9</code> deve ter um <code>font-size</code> de <code>font-size</code> de 45px.
    testString: 'assert($(".text-9").css("font-size") == "45px", "Your <code>.text-9</code> class should have a <code>font-size</code> of 45px.");'
  - text: Sua classe <code>.text-10</code> deve ter um <code>font-size</code> de <code>font-size</code> de 50px.
    testString: 'assert($(".text-10").css("font-size") == "50px", "Your <code>.text-10</code> class should have a <code>font-size</code> of 50px.");'

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
<p class="text-6">Hello</p>
<p class="text-7">Hello</p>
<p class="text-8">Hello</p>
<p class="text-9">Hello</p>
<p class="text-10">Hello</p>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

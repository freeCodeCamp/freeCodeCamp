---
id: bad82fee1348bd9aedf08721
title: Use RGB to Mix Colors
challengeType: 0
videoUrl: ''
localeTitle: Use RGB para misturar cores
---

## Description
<section id="description"> Assim como com o código hexadecimal, você pode misturar cores em RGB usando combinações de valores diferentes. </section>

## Instructions
<section id="instructions"> Substitua os códigos hexadecimais em nosso elemento de <code>style</code> por seus valores RGB corretos. <table class="table table-striped"><tbody><tr><th> Cor </th><th> RGB </th></tr><tr><td> Azul </td><td> <code>rgb(0, 0, 255)</code> </td> </tr><tr><td> Vermelho </td><td> <code>rgb(255, 0, 0)</code> </td> </tr><tr><td> Orquídea </td><td> <code>rgb(218, 112, 214)</code> </td> </tr><tr><td> Sienna </td><td> <code>rgb(160, 82, 45)</code> </td> </tr></tbody></table></section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Dê seu elemento <code>h1</code> com o texto <code>I am red!</code> a <code>color</code> vermelha.
    testString: 'assert($(".red-text").css("color") === "rgb(255, 0, 0)", "Give your <code>h1</code> element with the text <code>I am red!</code> the <code>color</code> red.");'
  - text: Use <code>rgb</code> para a cor vermelha.
    testString: 'assert(code.match(/\.red-text\s*?{\s*?color:\s*?rgb\(\s*?255\s*?,\s*?0\s*?,\s*?0\s*?\)\s*?;\s*?}/gi), "Use <code>rgb</code> for the color red.");'
  - text: Dê seu elemento <code>h1</code> com o texto <code>I am orchid!</code> a orquídea <code>color</code> .
    testString: 'assert($(".orchid-text").css("color") === "rgb(218, 112, 214)", "Give your <code>h1</code> element with the text <code>I am orchid!</code> the <code>color</code> orchid.");'
  - text: Use <code>rgb</code> para a orquídea colorida.
    testString: 'assert(code.match(/\.orchid-text\s*?{\s*?color:\s*?rgb\(\s*?218\s*?,\s*?112\s*?,\s*?214\s*?\)\s*?;\s*?}/gi), "Use <code>rgb</code> for the color orchid.");'
  - text: Dê seu elemento <code>h1</code> com o texto que <code>I am blue!</code> a <code>color</code> azul.
    testString: 'assert($(".blue-text").css("color") === "rgb(0, 0, 255)", "Give your <code>h1</code> element with the text <code>I am blue!</code> the <code>color</code> blue.");'
  - text: Use <code>rgb</code> para a cor azul.
    testString: 'assert(code.match(/\.blue-text\s*?{\s*?color:\s*?rgb\(\s*?0\s*?,\s*?0\s*?,\s*?255\s*?\)\s*?;\s*?}/gi), "Use <code>rgb</code> for the color blue.");'
  - text: Dê seu elemento <code>h1</code> com o texto <code>I am sienna!</code> a <code>color</code> sienna.
    testString: 'assert($(".sienna-text").css("color") === "rgb(160, 82, 45)", "Give your <code>h1</code> element with the text <code>I am sienna!</code> the <code>color</code> sienna.");'
  - text: Use <code>rgb</code> para a cor sienna.
    testString: 'assert(code.match(/\.sienna-text\s*?{\s*?color:\s*?rgb\(\s*?160\s*?,\s*?82\s*?,\s*?45\s*?\)\s*?;\s*?}/gi), "Use <code>rgb</code> for the color sienna.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  .red-text {
    color: #000000;
  }
  .orchid-text {
    color: #000000;
  }
  .sienna-text {
    color: #000000;
  }
  .blue-text {
    color: #000000;
  }
</style>

<h1 class="red-text">I am red!</h1>

<h1 class="orchid-text">I am orchid!</h1>

<h1 class="sienna-text">I am sienna!</h1>

<h1 class="blue-text">I am blue!</h1>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

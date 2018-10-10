---
id: bad87fee1348bd9bedc08826
title: Target HTML Elements with Selectors Using jQuery
required:
  - link: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.2.0/animate.css'
challengeType: 6
videoUrl: ''
localeTitle: Целевые элементы HTML с селекторами Использование jQuery
---

## Description
<section id="description"> Теперь у нас есть <code>document ready function</code> . Теперь давайте напишем наш первый оператор jQuery. Все функции jQuery начинаются с <code>$</code> , обычно называемого <code>dollar sign operator</code> , или как <code>bling</code> . jQuery часто выбирает элемент HTML с <code>selector</code> , затем делает что-то с этим элементом. Например, давайте сделаем все ваши элементы <code>button</code> отскоком. Просто добавьте этот код в свою готовую документ: <code>$(&quot;button&quot;).addClass(&quot;animated bounce&quot;);</code> Обратите внимание, что мы уже включили библиотеку jQuery и библиотеку Animate.css в фоновом режиме, чтобы вы могли использовать их в редакторе. Таким образом, вы используете jQuery для применения класса <code>bounce</code> Animate.css к вашим элементам <code>button</code> . </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Используйте <code>addClass()</code> jQuery <code>addClass()</code> чтобы дать <code>animated</code> классы и <code>bounce</code> к вашим элементам <code>button</code> .
    testString: 'assert($("button").hasClass("animated") && $("button").hasClass("bounce"), "Use the jQuery <code>addClass&#40&#41</code> function to give the classes <code>animated</code> and <code>bounce</code> to your <code>button</code> elements.");'
  - text: 'Используйте только jQuery, чтобы добавить эти цвета к элементу.'
    testString: 'assert(!code.match(/class.*animated/g), "Only use jQuery to add these colors to the element.");'
  - text: Ваш код jQuery должен находиться в пределах <code>$(document).ready();</code> функция.
    testString: 'assert(code.match(/\$\(document\)\.ready\(function.*(\s|\n)*.*button.*.addClass.*\);/g), "Your jQuery code should be within the <code>$(document).ready();</code> function.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<script>
  $(document).ready(function() {

  });
</script>

<!-- Only change code above this line. -->

<div class="container-fluid">
  <h3 class="text-primary text-center">jQuery Playground</h3>
  <div class="row">
    <div class="col-xs-6">
      <h4>#left-well</h4>
      <div class="well" id="left-well">
        <button class="btn btn-default target" id="target1">#target1</button>
        <button class="btn btn-default target" id="target2">#target2</button>
        <button class="btn btn-default target" id="target3">#target3</button>
      </div>
    </div>
    <div class="col-xs-6">
      <h4>#right-well</h4>
      <div class="well" id="right-well">
        <button class="btn btn-default target" id="target4">#target4</button>
        <button class="btn btn-default target" id="target5">#target5</button>
        <button class="btn btn-default target" id="target6">#target6</button>
      </div>
    </div>
  </div>
</div>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

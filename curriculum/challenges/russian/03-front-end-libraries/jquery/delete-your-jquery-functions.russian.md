---
id: bad87fee1348bd9aeda08726
title: Delete Your jQuery Functions
required:
  - link: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.2.0/animate.css'
challengeType: 6
videoUrl: ''
localeTitle: Удалить функции jQuery
---

## Description
<section id="description"> Сначала эти анимации были классными, но теперь они становятся отвлекающими. Удалите все три из этих функций jQuery из функции <code>document ready function</code> , но не оставляйте свою <code>document ready function</code> неповрежденной. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Удалите все три функции jQuery из <code>document ready function</code> .
    testString: 'assert(code.match(/\{\s*\}\);/g), "Delete all three of your jQuery functions from your <code>document ready function</code>.");'
  - text: Оставьте свой элемент <code>script</code> неповрежденным.
    testString: 'assert(code.match(/<script>/g), "Leave your <code>script</code> element intact.");'
  - text: 'Оставьте свой <code>$(document).ready(function() {</code> до начала вашего элемента <code>script</code> .'
    testString: 'assert(code.match(/\$\(document\)\.ready\(function\(\)\s?\{/g), "Leave your <code>$&#40document&#41.ready&#40function&#40&#41 {</code> to the beginning of your <code>script</code> element.");'
  - text: 'Оставьте «закрытие документа» закрытым <code>})</code> неповрежденным.'
    testString: 'assert(code.match(/.*\s*\}\);/g), "Leave your "document ready function" closing <code>&#125;&#41;</code> intact.");'
  - text: ''
    testString: 'assert(code.match(/<\/script>/g) && code.match(/<script/g) && code.match(/<\/script>/g).length === code.match(/<script/g).length, "Leave your <code>script</code> element closing tag intact.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<script>
  $(document).ready(function() {
    $("button").addClass("animated bounce");
    $(".well").addClass("animated shake");
    $("#target3").addClass("animated fadeOut");

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

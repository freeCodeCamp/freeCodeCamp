---
id: bad87fee1348bd9acdd08826
title: Learn How Script Tags and Document Ready Work
challengeType: 6
forumTopicId: 18224
localeTitle: Узнайте, как работают теги сценариев и документы
---

## Description
<section id='description'>
Теперь мы готовы изучить jQuery, самый популярный инструмент JavaScript за все время. Прежде чем мы сможем начать использовать jQuery, нам нужно добавить некоторые вещи в наш HTML. Во-первых, добавьте элемент <code>script</code> в верхней части страницы. Не забудьте закрыть его в следующей строке. В вашем браузере будет запущен любой JavaScript внутри элемента <code>script</code> , включая jQuery. Внутри вашего <code>script</code> элемента добавьте этот код: <code>$(document).ready(function() {</code> в свой <code>script</code> . Затем закройте его в следующей строке (все еще внутри вашего элемента <code>script</code> ) с помощью: <code>});</code> Мы узнаем больше о <code>functions</code> позже. Важно знать, что код, введенный внутри этой <code>function</code> будет запущен, как только ваш браузер загрузит вашу страницу. Это важно, потому что без функции вашего <code>document ready function</code> , ваш код может работать до того, как ваш HTML будет отображаться, что приведет к ошибкам.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Create a <code>script</code> element making sure it is valid and has a closing tag.
    testString: assert(code.match(/<\/script\s*>/g) && code.match(/<script(\sasync|\sdefer)*(\s(charset|src|type)\s*=\s*["\"]+[^"\"]*["\"]+)*(\sasync|\sdefer)*\s*>/g) && code.match(/<\/script\s*>/g).length === code.match(/<script(\sasync|\sdefer)*(\s(charset|src|type)\s*=\s*["\"]+[^"\"]*["\"]+)*(\sasync|\sdefer)*\s*>/g).length);
  - text: You should add <code>$&#40;document&#41;.ready<wbr>&#40;function&#40;&#41; {</code> to the beginning of your <code>script</code> element.
    testString: assert(code.match(/\$\s*?\(\s*?document\s*?\)\.ready\s*?\(\s*?function\s*?\(\s*?\)\s*?\{/g));
  - text: Close your <code>$&#40;document&#41;.ready<wbr>&#40;function&#40;&#41; {</code> function with <code>}&#41;;</code>
    testString: assert(code.match(/\n*?\s*?\}\s*?\);/g));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
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

</section>

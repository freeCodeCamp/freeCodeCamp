---
id: bad87fee1348bd9aed208826
title: Target the Children of an Element Using jQuery
challengeType: 6
forumTopicId: 18320
localeTitle: Выбрать дочерние элементы с помощью jQuery
---

## Description
<section id='description'>
Когда HTML элементы размещены на один уровень ниже другого, они называются `дочерними` этого элемента. Например, элементы кнопки в этом задании с текстом "#target1", "#target2", и "#target3" являются `дочерними` элемента `<div class="well" id="left-well">`.

В jQuery есть функция `children()`, которая позволяет вам получить доступ к дочерним элементам любого выбранного вами элемента.

Ниже пример того, как бы вы использовали функцию `children()`, чтобы дать `синий` цвет дочерним элементам вашего `left-well`.

`$("#left-well").children().css("color", "blue")`
</section>

## Instructions
<section id='instructions'>
Дайте всем дочерним элементам вашего <code>right-well</code> элемента колорит оранжевый цвет.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: All children of <code>#right-well</code> should have orange text.
    testString: assert($("#right-well").children().css("color") === 'rgb(255, 165, 0)');
  - text: You should use the <code>children&#40&#41</code> function to modify these elements.
    testString: assert(code.match(/\.children\(\)\.css/g));
  - text: Only use jQuery to add these classes to the element.
    testString: assert(code.match(/<div class="well" id="right-well">/g));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<script>
  $(document).ready(function() {
    $("#target1").css("color", "red");
    $("#target1").prop("disabled", true);
    $("#target4").remove();
    $("#target2").appendTo("#right-well");
    $("#target5").clone().appendTo("#left-well");
    $("#target1").parent().css("background-color", "red");

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

```html
<script>
  $(document).ready(function() {
    $("#target1").css("color", "red");
    $("#target1").prop("disabled", true);
    $("#target4").remove();
    $("#target2").appendTo("#right-well");
    $("#target5").clone().appendTo("#left-well");
    $("#target1").parent().css("background-color", "red");
    $("#right-well").children().css("color", "orange");
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

---
id: bad87fee1348bd9aed608826
title: Use appendTo to Move Elements with jQuery
challengeType: 6
forumTopicId: 18340
localeTitle: Используйте appendTo для перемещения элементов с помощью jQuery
---

## Description
<section id='description'>
Теперь давайте попробуем переместить элементы из одного <code>div</code> в другой. Функция jQuery имеет функцию <code>appendTo()</code> которая позволяет вам выбирать элементы HTML и добавлять их к другому элементу. Например, если мы хотим перенести <code>target4</code> с нашей правой скважины на нашу левую скважину, мы будем использовать: <code>$(&quot;#target4&quot;).appendTo(&quot;#left-well&quot;);</code> Переместите элемент <code>target2</code> с <code>left-well</code> на <code>right-well</code> .
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your <code>target2</code> element should not be inside your <code>left-well</code>.
    testString: assert($("#left-well").children("#target2").length === 0);
  - text: Your <code>target2</code> element should be inside your <code>right-well</code>.
    testString: assert($("#right-well").children("#target2").length > 0);
  - text: Only use jQuery to move these elements.
    testString: assert(!code.match(/class.*animated/g));

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

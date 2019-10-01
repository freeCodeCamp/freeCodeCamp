---
id: bad87fee1348bd9aed508826
title: Clone an Element Using jQuery
challengeType: 6
forumTopicId: 16780
localeTitle: Клонирование элемента с помощью jQuery
---

## Description
<section id='description'>
В дополнение к движущимся элементам вы также можете копировать их из одного места в другое. jQuery имеет функцию <code>clone()</code> которая делает копию элемента. Например, если мы хотим скопировать <code>target2</code> из нашей <code>left-well</code> <code>target2</code> в нашу <code>right-well</code> <code>target2</code> , мы будем использовать: <code>$(&quot;#target2&quot;).clone().appendTo(&quot;#right-well&quot;);</code> Вы заметили, что это связано с объединением двух функций jQuery? Это называется <code>function chaining</code> и это удобный способ добиться успеха с помощью jQuery. <code>target5</code> свой элемент <code>target5</code> и добавьте его в <code>left-well</code> <code>target5</code> .
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your <code>target5</code> element should be inside your <code>right-well</code>.
    testString: assert($("#right-well").children("#target5").length > 0);
  - text: A copy of your <code>target5</code> element should also be inside your <code>left-well</code>.
    testString: assert($("#left-well").children("#target5").length > 0);
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

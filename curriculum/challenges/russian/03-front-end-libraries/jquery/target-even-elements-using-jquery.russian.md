---
id: bad87fee1348bd9aed008826
title: Target Even Elements Using jQuery
required:
  - link: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.2.0/animate.css'
challengeType: 6
forumTopicId: 18318
localeTitle: Целевые четные элементы с помощью jQuery
---

## Description
<section id='description'>
Вы также можете настроить таргетинг на основе своих позиций с помощью <code>:odd</code> или <code>:even</code> селекторов. Обратите внимание, что jQuery индексируется с нулевой отметкой, что означает, что первый элемент в элементе выбора имеет позицию 0. Это может быть немного запутанным, как, напротив, интуитивно <code>:odd</code> выбирает второй элемент (позиция 1), четвертый элемент (позиция 3) , и так далее. Вот как вы бы нацеливали все нечетные элементы с помощью <code>target</code> <code>$(&quot;.target:odd&quot;).addClass(&quot;animated shake&quot;);</code> класса и давали им классы: <code>$(&quot;.target:odd&quot;).addClass(&quot;animated shake&quot;);</code> Попробуйте выбрать все четные <code>target</code> элементы и дать им классы <code>animated</code> и <code>shake</code> . Помните, что <strong>даже</strong> относится к позиции элементов с нулевой системой в виду.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: All of the <code>target</code> elements that jQuery considers to be even should shake.
    testString: assert($('.target:even').hasClass('animated') && $('.target:even').hasClass('shake'));
  - text: You should use the <code>&#58;even</code> selector to modify these elements.
    testString: assert(code.match(/\:even/g));
  - text: Only use jQuery to add these classes to the element.
    testString: assert(code.match(/\$\(".target:even"\)/g) || code.match(/\$\('.target:even'\)/g) || code.match(/\$\(".target"\).filter\(":even"\)/g) || code.match(/\$\('.target'\).filter\(':even'\)/g));

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
    $("#right-well").children().css("color", "orange");
    $("#left-well").children().css("color", "green");
    $(".target:nth-child(2)").addClass("animated bounce");

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
    $("#left-well").children().css("color", "green");
    $(".target:nth-child(2)").addClass("animated bounce");
    $(".target:even").addClass("animated shake");
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

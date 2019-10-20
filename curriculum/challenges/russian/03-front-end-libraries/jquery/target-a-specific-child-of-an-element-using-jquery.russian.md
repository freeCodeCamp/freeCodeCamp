---
id: bad87fee1348bd9aed108826
title: Target a Specific Child of an Element Using jQuery
required:
  - link: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.2.0/animate.css'
challengeType: 6
forumTopicId: 18315
localeTitle: Назначение определенного дочернего элемента элемента с помощью jQuery
---

## Description
<section id='description'>
Вы видели, почему атрибуты id настолько удобны для таргетинга с помощью селекторов jQuery. Но у вас не всегда будут такие опрятные идентификаторы для работы. К счастью, у jQuery есть некоторые другие трюки для ориентации на нужные элементы. jQuery использует селектора CSS для целевых элементов. <code>target:nth-child(n)</code> селектор <code>target:nth-child(n)</code> CSS позволяет вам выбрать все n-ые элементы с целевым классом или типом элемента. Вот как вы бы дали третий элемент в каждой скважине класс отказов: <code>$(&quot;.target:nth-child(3)&quot;).addClass(&quot;animated bounce&quot;);</code> Сделайте второго ребенка в каждом из элементов вашего колодца. Вы должны выбрать дочерние элементы элементов с <code>target</code> классом.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The second element in your <code>target</code> elements should bounce.
    testString: assert($(".target:nth-child(2)").hasClass("animated") && $(".target:nth-child(2)").hasClass("bounce"));
  - text: Only two elements should bounce.
    testString: assert($(".animated.bounce").length === 2);
  - text: You should use the <code>&#58;nth-child&#40&#41</code> selector to modify these elements.
    testString: assert(code.match(/\:nth-child\(/g));
  - text: Only use jQuery to add these classes to the element.
    testString: assert(code.match(/\$\(".target:nth-child\(2\)"\)/g) || code.match(/\$\('.target:nth-child\(2\)'\)/g) || code.match(/\$\(".target"\).filter\(":nth-child\(2\)"\)/g) || code.match(/\$\('.target'\).filter\(':nth-child\(2\)'\)/g));

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

</section>

---
id: bad87fee1348bd9aed908826
title: Change the CSS of an Element Using jQuery
required:
  - link: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.2.0/animate.css'
challengeType: 6
forumTopicId: 16776
localeTitle: Изменение CSS элемента с помощью jQuery
---

## Description
<section id='description'>
Мы также можем изменить CSS элемента HTML непосредственно с помощью jQuery. Функция jQuery имеет функцию под названием <code>.css()</code> которая позволяет вам изменять CSS элемента. Вот как мы изменим его цвет на синий: <code>$(&quot;#target1&quot;).css(&quot;color&quot;, &quot;blue&quot;);</code> Это немного отличается от обычного объявления CSS, поскольку свойство CSS и его значение находятся в кавычках и разделены запятой, а не двоеточием. Удалите селектор jQuery, оставив свободную <code>document ready function</code> . Выберите <code>target1</code> и измените цвет на красный.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your <code>target1</code> element should have red text.
    testString: assert($("#target1").css("color") === 'rgb(255, 0, 0)');
  - text: Only use jQuery to add these classes to the element.
    testString: assert(!code.match(/class.*animated/g));

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
    $("button").removeClass("btn-default");

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
    $("button").addClass("animated bounce");
    $(".well").addClass("animated shake");
    $("#target3").addClass("animated fadeOut");
    $("button").removeClass("btn-default");
    $("#target1").css("color", "red");
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

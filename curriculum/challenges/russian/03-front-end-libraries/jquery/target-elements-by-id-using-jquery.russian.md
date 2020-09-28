---
id: bad87fee1348bd9aeda08826
title: Target Elements by id Using jQuery
required:
  - link: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.2.0/animate.css'
challengeType: 6
forumTopicId: 18317
localeTitle: Целевые элементы по id Использование jQuery
---

## Description
<section id='description'>
Вы также можете настраивать элементы по их атрибутам id. Сначала <code>target3</code> элемент <code>button</code> с <code>target3</code> с помощью селектора <code>$(&quot;#target3&quot;)</code> . Обратите внимание, что, как и в объявлениях CSS, вы вводите <code>#</code> перед именем id. Затем используйте <code>.addClass()</code> jQuery для добавления классов <code>animated</code> и <code>fadeOut</code> . Вот как вы делаете элемент <code>button</code> с id <code>target6</code> исчезающим: <code>$(&quot;#target6&quot;).addClass(&quot;animated fadeOut&quot;)</code> .
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Select the <code>button</code> element with the <code>id</code> of <code>target3</code> and use the jQuery <code>addClass&#40&#41</code> function to give it the class of <code>animated</code>.
    testString: assert($("#target3").hasClass("animated"));
  - text: Target the element with the id <code>target3</code> and use the jQuery <code>addClass&#40&#41</code> function to give it the class <code>fadeOut</code>.
    testString: assert(($("#target3").hasClass("fadeOut") || $("#target3").hasClass("fadeout"))  && code.match(/\$\(\s*.#target3.\s*\)/g));
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

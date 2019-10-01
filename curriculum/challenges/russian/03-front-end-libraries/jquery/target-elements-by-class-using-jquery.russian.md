---
id: bad87fee1348bd9aedc08826
title: Target Elements by Class Using jQuery
required:
  - link: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.2.0/animate.css'
challengeType: 6
forumTopicId: 18316
localeTitle: Целевые элементы по классам Использование jQuery
---

## Description
<section id='description'>
Вы видите, как мы отбросили все ваши элементы <code>button</code> ? Мы выбрали их с помощью <code>$(&quot;button&quot;)</code> , затем мы добавили к ним некоторые классы CSS с <code>.addClass(&quot;animated bounce&quot;);</code> , Вы только что использовали <code>.addClass()</code> jQuery, которая позволяет добавлять классы к элементам. Во- первых, давайте нацеливать свои <code>div</code> элементы с классом <code>well</code> с помощью <code>$(&quot;.well&quot;)</code> селектор. Обратите внимание, что, как и в объявлениях CSS, вы вводите a <code>.</code> перед именем класса. Затем с помощью jQuery в <code>.addClass()</code> функцию , чтобы добавить классы <code>animated</code> и <code>shake</code> . Например, вы можете сделать все элементы с <code>$(&quot;.text-primary&quot;).addClass(&quot;animated shake&quot;);</code> типа <code>text-primary</code> , добавив следующее к вашей <code>document ready function</code> : <code>$(&quot;.text-primary&quot;).addClass(&quot;animated shake&quot;);</code>
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Use the jQuery <code>addClass&#40&#41</code> function to give the classes <code>animated</code> and <code>shake</code> to all your elements with the class <code>well</code>.
    testString: assert($(".well").hasClass("animated") && $(".well").hasClass("shake"));
  - text: Only use jQuery to add these classes to the element.
    testString: assert(!code.match(/class\.\*animated/g));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<script>
  $(document).ready(function() {
    $("button").addClass("animated bounce");
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

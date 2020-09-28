---
id: bad87fee1348bd9aed808826
title: Disable an Element Using jQuery
challengeType: 6
forumTopicId: 17563
localeTitle: Отключить элемент с помощью jQuery
---

## Description
<section id='description'>
You can also change the non-CSS properties of HTML elements with jQuery. For example, you can disable buttons.
When you disable a button, it will become grayed-out and can no longer be clicked.
jQuery has a function called <code>.prop()</code> that allows you to adjust the properties of elements.
Here's how you would disable all buttons:
<code>$("button").prop("disabled", true);</code>
Disable only the <code>target1</code> button.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Disable your <code>target1</code> button.
    testString: assert($("#target1") && $("#target1").prop("disabled") && code.match(/["']disabled["'],( true|true)/g));
  - text: Do not disable any other buttons.
    testString: assert($("#target2") && !$("#target2").prop("disabled"));
  - text: Only use jQuery to add these classes to the element.
    testString: assert(!code.match(/disabled[^<]*>/g));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<script>
  $(document).ready(function() {
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

</div>

</section>

## Solution
<section id='solution'>

```html
<script>
  $(document).ready(function() {
    $("#target1").css("color", "red");
    $("#target1").prop("disabled", true);

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

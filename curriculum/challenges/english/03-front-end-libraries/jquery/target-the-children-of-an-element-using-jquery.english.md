---
id: bad87fee1348bd9aed208826
title: Target the Children of an Element Using jQuery
challengeType: 6
isHidden: false
forumTopicId: 18320
---

## Description
<section id='description'>
When HTML elements are placed one level below another they are called <dfn>children</dfn> of that element. For example, the button elements in this challenge with the text "#target1", "#target2", and "#target3" are all children of the <code>&#60;div class="well" id="left-well"&#62;</code> element.
jQuery has a function called <code>children()</code> that allows you to access the children of whichever element you've selected.
Here's an example of how you would use the <code>children()</code> function to give the children of your <code>left-well</code> element the color <code>blue</code>:
<code>$("#left-well").children().css("color", "blue")</code>
</section>

## Instructions
<section id='instructions'>
Give all the children of your <code>right-well</code> element the color orange.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: All children of <code>#right-well</code> should have orange text.
    testString: assert($("#right-well").children().css("color") === 'rgb(255, 165, 0)');
  - text: You should use the <code>children&#40&#41</code> function to modify these elements.
    testString: assert(code.match(/\.children\(\)\.css/g));
  - text: You should only use jQuery to add these classes to the element.
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

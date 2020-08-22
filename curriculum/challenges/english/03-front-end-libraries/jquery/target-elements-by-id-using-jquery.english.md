---
id: bad87fee1348bd9aeda08826
title: Target Elements by id Using jQuery
required:
  - link: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.2.0/animate.css'
challengeType: 6
isHidden: false
forumTopicId: 18317
---

## Description
<section id='description'>
You can also target elements by their id attributes.
First target your <code>button</code> element with the id <code>target3</code> by using the <code>$("#target3")</code> selector.
Note that, just like with CSS declarations, you type a <code>#</code> before the id's name.
Then use jQuery's <code>.addClass()</code> function to add the classes <code>animated</code> and <code>fadeOut</code>.
Here's how you'd make the <code>button</code> element with the id <code>target6</code> fade out:
<code>$("#target6").addClass("animated fadeOut")</code>.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: You should select the <code>button</code> element with the <code>id</code> of <code>target3</code> and use the jQuery <code>addClass&#40&#41</code> function to give it the class of <code>animated</code>.
    testString: assert($("#target3").hasClass("animated"));
  - text: You should target the element with the id <code>target3</code> and use the jQuery <code>addClass&#40&#41</code> function to give it the class <code>fadeOut</code>.
    testString: assert(($("#target3").hasClass("fadeOut") || $("#target3").hasClass("fadeout"))  && code.match(/\$\(\s*.#target3.\s*\)/g));
  - text: You should only use jQuery to add these classes to the element.
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

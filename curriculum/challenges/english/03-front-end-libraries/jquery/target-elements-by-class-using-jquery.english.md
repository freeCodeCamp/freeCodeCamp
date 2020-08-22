---
id: bad87fee1348bd9aedc08826
title: Target Elements by Class Using jQuery
required:
  - link: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.2.0/animate.css'
challengeType: 6
isHidden: false
forumTopicId: 18316
---

## Description
<section id='description'>
You see how we made all of your <code>button</code> elements bounce? We selected them with <code>$("button")</code>, then we added some CSS classes to them with <code>.addClass("animated bounce");</code>.
You just used jQuery's <code>.addClass()</code> function, which allows you to add classes to elements.
First, let's target your <code>div</code> elements with the class <code>well</code> by using the <code>$(".well")</code> selector.
Note that, just like with CSS declarations, you type a <code>.</code> before the class's name.
Then use jQuery's <code>.addClass()</code> function to add the classes <code>animated</code> and <code>shake</code>.
For example, you could make all the elements with the class <code>text-primary</code> shake by adding the following to your <code>document ready function</code>:
<code>$(".text-primary").addClass("animated shake");</code>
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: You should use the jQuery <code>addClass&#40&#41</code> function to give the classes <code>animated</code> and <code>shake</code> to all your elements with the class <code>well</code>.
    testString: assert($(".well").hasClass("animated") && $(".well").hasClass("shake"));
  - text: You should only use jQuery to add these classes to the element.
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

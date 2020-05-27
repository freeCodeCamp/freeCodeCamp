---
id: bad87fee1348bd9aed908626
title: Target the Same Element with Multiple jQuery Selectors
required:
  - link: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.2.0/animate.css'
challengeType: 6
isHidden: false
forumTopicId: 18322
---

## Description
<section id='description'>
Now you know three ways of targeting elements: by type: <code>$("button")</code>, by class: <code>$(".btn")</code>, and by id <code>$("#target1")</code>.
Although it is possible to add multiple classes in a single <code>.addClass()</code> call, let's add them to the same element in <em>three separate ways</em>.
Using <code>.addClass()</code>, add only one class at a time to the same element, three different ways:
Add the <code>animated</code> class to all elements with type <code>button</code>.
Add the <code>shake</code> class to all the buttons with class <code>.btn</code>.
Add the <code>btn-primary</code> class to the button with id <code>#target1</code>.
<strong>Note</strong><br>You should only be targeting one element and adding only one class at a time. Altogether, your three individual selectors will end up adding the three classes <code>shake</code>, <code>animated</code>, and <code>btn-primary</code> to <code>#target1</code>.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your code should use the <code>$&#40"button"&#41</code> selector.
    testString: assert(code.match(/\$\s*?\(\s*?(?:'|")\s*?button\s*?(?:'|")/gi));
  - text: Your code should use the <code>$&#40".btn"&#41</code> selector.
    testString: assert(code.match(/\$\s*?\(\s*?(?:'|")\s*?\.btn\s*?(?:'|")/gi));
  - text: Your code should use the <code>$&#40"#target1"&#41</code> selector.
    testString: assert(code.match(/\$\s*?\(\s*?(?:'|")\s*?#target1\s*?(?:'|")/gi));
  - text: You should only add one class with each of your three selectors.
    testString: assert(code.match(/addClass/g) && code.match(/addClass\s*?\(\s*?('|")\s*?[\w-]+\s*?\1\s*?\)/g).length > 2);
  - text: Your <code>#target1</code> element should have the classes <code>animated</code>&#130; <code>shake</code> and <code>btn-primary</code>.
    testString: assert($('#target1').hasClass('animated') && $('#target1').hasClass('shake') && $('#target1').hasClass('btn-primary'));
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
    $("button").addClass("animated");
    $(".btn").addClass("shake");
    $("#target1").addClass("btn-primary");
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

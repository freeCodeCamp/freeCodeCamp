---
id: bad87fee1348bd9aed308826
title: Target the Parent of an Element Using jQuery
challengeType: 6
forumTopicId: 18321
---

## Description
<section id='description'>
Every HTML element has a <code>parent</code> element from which it <code>inherits</code> properties.
For example, your <code>jQuery Playground</code> <code>h3</code> element has the parent element of <code>&#60;div class="container-fluid"&#62</code>, which itself has the parent <code>body</code>.
jQuery has a function called <code>parent()</code> that allows you to access the parent of whichever element you've selected.
Here's an example of how you would use the <code>parent()</code> function if you wanted to give the parent element of the <code>left-well</code> element a background color of blue:
<code>$("#left-well").parent().css("background-color", "blue")</code>
Give the parent of the <code>#target1</code> element a background-color of red.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your <code>left-well</code> element should have a red background.
    testString: assert($("#left-well").css("background-color") === 'red' || $("#left-well").css("background-color") === 'rgb(255, 0, 0)' || $("#left-well").css("background-color").toLowerCase() === '#ff0000' || $("#left-well").css("background-color").toLowerCase() === '#f00');
  - text: You should use the <code>&#46;parent&#40;&#41;</code> function to modify this element.
    testString: assert(code.match(/\.parent\s*\(\s*\)\s*\.css/g));
  - text: The <code>&#46;parent&#40;&#41;</code> method should be called on the <code>&#35;target1</code> element.
    testString: assert(code.match(/\$\s*?\(\s*?(?:'|")\s*?#target1\s*?(?:'|")\s*?\)\s*?\.parent/gi));
  - text: You should only use jQuery to add these classes to the element.
    testString: assert(code.match(/<div class="well" id="left-well">/g));

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

  });
</script>

<!-- Only change code above this line -->

<body>
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
</body>
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
  });
</script>

<!-- Only change code above this line -->

<body>
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
</body>
```

</section>

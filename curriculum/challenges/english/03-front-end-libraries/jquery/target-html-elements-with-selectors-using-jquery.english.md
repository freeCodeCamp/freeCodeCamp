---
id: bad87fee1348bd9bedc08826
title: Target HTML Elements with Selectors Using jQuery
required:
  - link: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.2.0/animate.css'
challengeType: 6
---

## Description
<section id='description'>
Now we have a <code>document ready function</code>.
Now let's write our first jQuery statement. All jQuery functions start with a <code>$</code>, usually referred to as a <code>dollar sign operator</code>, or as <code>bling</code>.
jQuery often selects an HTML element with a <code>selector</code>, then does something to that element.
For example, let's make all of your <code>button</code> elements bounce. Just add this code inside your document ready function:
<code>$("button").addClass("animated bounce");</code>
Note that we've already included both the jQuery library and the Animate.css library in the background so that you can use them in the editor. So you are using jQuery to apply the Animate.css <code>bounce</code> class to your <code>button</code> elements.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 'Use the jQuery <code>addClass&#40&#41</code> function to give the classes <code>animated</code> and <code>bounce</code> to your <code>button</code> elements.'
    testString: 'assert($("button").hasClass("animated") && $("button").hasClass("bounce"), "Use the jQuery <code>addClass&#40&#41</code> function to give the classes <code>animated</code> and <code>bounce</code> to your <code>button</code> elements.");'
  - text: Only use jQuery to add these classes to the element.
    testString: 'assert(!code.match(/class.*animated/g), "Only use jQuery to add these classes to the element.");'
  - text: Your jQuery code should be within the <code>$(document).ready();</code> function.
    testString: assert(code.match(/\$\(document\)\.ready\(function.*(\s|\n)*.*button.*.addClass.*\);/g), 'Your jQuery code should be within the <code>$(document).ready();</code> function.');

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

```js
// solution required
```
</section>

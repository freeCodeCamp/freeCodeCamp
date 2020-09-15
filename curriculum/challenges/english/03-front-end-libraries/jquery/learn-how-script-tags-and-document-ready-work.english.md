---
id: bad87fee1348bd9acdd08826
title: Learn How Script Tags and Document Ready Work
challengeType: 6
forumTopicId: 18224
---

## Description
<section id='description'>
Now we're ready to learn jQuery, the most popular JavaScript tool of all time.
Before we can start using jQuery, we need to add some things to our HTML.
First, add a <code>script</code> element at the top of your page. Be sure to close it on the following line.
Your browser will run any JavaScript inside a <code>script</code> element, including jQuery.
Inside your <code>script</code> element, add this code: <code>$(document).ready(function() {</code> to your <code>script</code>. Then close it on the following line (still inside your <code>script</code> element) with: <code>});</code>
We'll learn more about <code>functions</code> later. The important thing to know is that code you put inside this <code>function</code> will run as soon as your browser has loaded your page.
This is important because without your <code>document ready function</code>, your code may run before your HTML is rendered, which would cause bugs.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: You should create a <code>script</code> element making sure it is valid and has a closing tag.
    testString: 'assert(code.match(/<\/script\s*>/g) && code.match(/<script(\sasync|\sdefer)*(\s(charset|src|type)\s*=\s*["\"]+[^"\"]*["\"]+)*(\sasync|\sdefer)*\s*>/g) && code.match(/<\/script\s*>/g).length === code.match(/<script(\sasync|\sdefer)*(\s(charset|src|type)\s*=\s*["\"]+[^"\"]*["\"]+)*(\sasync|\sdefer)*\s*>/g).length);'
  - text: 'You should add <code>$&#40;document&#41;.ready<wbr>&#40;function&#40;&#41; {</code> to the beginning of your <code>script</code> element.'
    testString: 'assert(code.match(/\$\s*?\(\s*?document\s*?\)\.ready\s*?\(\s*?function\s*?\(\s*?\)\s*?\{/g));'
  - text: 'You should close your <code>$&#40;document&#41;.ready<wbr>&#40;function&#40;&#41; {</code> function with <code>}&#41;;</code>'
    testString: 'assert(code.match(/\n*?\s*?\}\s*?\);/g));'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<!-- Only change code above this line -->

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
  });
</script>
<!-- Only change code above this line -->

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

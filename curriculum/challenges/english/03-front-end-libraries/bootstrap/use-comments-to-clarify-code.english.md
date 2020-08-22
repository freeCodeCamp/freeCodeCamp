---
id: bad87fee1348bd9aec908857
title: Use Comments to Clarify Code
challengeType: 0
isHidden: false
forumTopicId: 18347
---

## Description
<section id='description'>
When we start using jQuery, we will modify HTML elements without needing to actually change them in HTML.
Let's make sure that everyone knows they shouldn't actually modify any of this code directly.
Remember that you can start a comment with <code>&#60;!--</code> and end a comment with <code>--&#62;</code>
Add a comment at the top of your HTML that says <code>Only change code above this line.</code>
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: You should start a comment with <code>&#60;!--</code> at the top of your HTML.
    testString: assert(code.match(/^\s*<!--/));
  - text: Your comment should have the text <code>Only change code above this line</code>.
    testString: assert(code.match(/<!--(?!(>|->|.*-->.*this line))\s*.*this line.*\s*-->/gi));
  - text: You should close your comment with <code>--&#62;</code>.
    testString: assert(code.match(/-->.*\n+.+/g));
  - text: You should have the same number of comment openers and closers.
    testString: assert(code.match(/<!--/g).length === code.match(/-->/g).length);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
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

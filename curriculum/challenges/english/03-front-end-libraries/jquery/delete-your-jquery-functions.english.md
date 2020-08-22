---
id: bad87fee1348bd9aeda08726
title: Delete Your jQuery Functions
required:
  - link: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.2.0/animate.css'
challengeType: 6
isHidden: false
forumTopicId: 17561
---

## Description
<section id='description'>
These animations were cool at first, but now they're getting kind of distracting.
Delete all three of these jQuery functions from your <code>document ready function</code>, but leave your <code>document ready function</code> itself intact.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: All three of your jQuery functions should be deleted from your <code>document ready function</code>.
    testString: assert(code.match(/\{\s*\}\);/g));
  - text: You should leave your <code>script</code> element intact.
    testString: assert(code.match(/<script>/g));
  - text: You should leave your <code>$&#40document&#41.ready&#40function&#40&#41 {</code> at the beginning of your <code>script</code> element.
    testString: assert(code.match(/\$\(document\)\.ready\(function\(\)\s?\{/g));
  - text: You should leave your "document ready function" closing <code>&#125;&#41;</code> intact.
    testString: assert(code.match(/.*\s*\}\);/g));
  - text: You should leave your <code>script</code> element closing tag intact.
    testString: assert(code.match(/<\/script>/g) && code.match(/<script/g) && code.match(/<\/script>/g).length === code.match(/<script/g).length);

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

</div>



</section>

## Solution
<section id='solution'>

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

</section>

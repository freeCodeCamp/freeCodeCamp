---
id: bad87fee1348bd9aec908853
title: Add id Attributes to Bootstrap Elements
challengeType: 0
forumTopicId: 16639
---

## Description
<section id='description'>
Recall that in addition to class attributes, you can give each of your elements an <code>id</code> attribute.
Each id must be unique to a specific element and used only once per page.
Let's give a unique id to each of our <code>div</code> elements of class <code>well</code>.
Remember that you can give an element an id like this:
<code>&#60;div class="well" id="center-well"&#62;</code>
Give the well on the left the id of <code>left-well</code>. Give the well on the right the id of <code>right-well</code>.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your left <code>well</code> should have the id of <code>left-well</code>.
    testString: assert($(".col-xs-6").children("#left-well") && $(".col-xs-6").children("#left-well").length > 0);
  - text: Your right <code>well</code> should have the id of <code>right-well</code>.
    testString: assert($(".col-xs-6").children("#right-well") && $(".col-xs-6").children("#right-well").length > 0);

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
      <div class="well">
        <button class="btn btn-default target"></button>
        <button class="btn btn-default target"></button>
        <button class="btn btn-default target"></button>
      </div>
    </div>
    <div class="col-xs-6">
      <div class="well">
        <button class="btn btn-default target"></button>
        <button class="btn btn-default target"></button>
        <button class="btn btn-default target"></button>
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
<div class="container-fluid">
  <h3 class="text-primary text-center">jQuery Playground</h3>
  <div class="row">
    <div class="col-xs-6">
      <div class="well" id="left-well">
        <button class="btn btn-default target"></button>
        <button class="btn btn-default target"></button>
        <button class="btn btn-default target"></button>
      </div>
    </div>
    <div class="col-xs-6">
      <div class="well" id="right-well">
        <button class="btn btn-default target"></button>
        <button class="btn btn-default target"></button>
        <button class="btn btn-default target"></button>
      </div>
    </div>
  </div>
</div>
```

</section>

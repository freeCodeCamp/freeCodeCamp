---
id: bad87fee1348bd9aec908855
title: Give Each Element a Unique id
challengeType: 0
videoUrl: ''
localeTitle: منح كل عنصر معرف فريد
---

## Description
<section id="description"> كما أننا سنرغب أيضًا في استخدام jQuery لاستهداف كل زر بمعرفه الفريد. امنح كل من الأزرار <code>target6</code> فريدًا ، بدءًا من <code>target1</code> وتنتهي بـ <code>target6</code> . تأكد من أن <code>target1</code> to <code>target3</code> في <code>#left-well</code> ، وأن <code>target4</code> to <code>target6</code> في <code>#right-well</code> . </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: ''
    testString: 'assert($("#left-well").children("#target1") && $("#left-well").children("#target1").length > 0, "One <code>button</code> element should have the id <code>target1</code>.");'
  - text: ''
    testString: 'assert($("#left-well").children("#target2") && $("#left-well").children("#target2").length > 0, "One <code>button</code> element should have the id <code>target2</code>.");'
  - text: يجب أن يكون عنصر واحد <code>button</code> معرف <code>target3</code> .
    testString: 'assert($("#left-well").children("#target3") && $("#left-well").children("#target3").length > 0, "One <code>button</code> element should have the id <code>target3</code>.");'
  - text: يجب أن يحتوي عنصر <code>button</code> الواحد على معرف <code>target4</code> .
    testString: 'assert($("#right-well").children("#target4") && $("#right-well").children("#target4").length > 0, "One <code>button</code> element should have the id <code>target4</code>.");'
  - text: يجب أن يكون عنصر <code>button</code> الواحد هو <code>target5</code> .
    testString: 'assert($("#right-well").children("#target5") && $("#right-well").children("#target5").length > 0, "One <code>button</code> element should have the id <code>target5</code>.");'
  - text: يجب أن يكون عنصر <code>button</code> الواحد هو <code>target6</code> .
    testString: 'assert($("#right-well").children("#target6") && $("#right-well").children("#target6").length > 0, "One <code>button</code> element should have the id <code>target6</code>.");'

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
        <button class="btn btn-default target"></button>
        <button class="btn btn-default target"></button>
        <button class="btn btn-default target"></button>
      </div>
    </div>
    <div class="col-xs-6">
      <h4>#right-well</h4>
      <div class="well" id="right-well">
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

```js
// solution required
```
</section>

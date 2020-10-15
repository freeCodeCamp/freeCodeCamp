---
id: bad87fee1348bd9aec908855
challengeType: 0
forumTopicId: 18191
title: 给每个元素一个唯一的 id
---

## Description
<section id='description'>
我们也可以通过 jQuery 根据每个按钮唯一的 id 来标识出它们。
给你的每一个按钮设置唯一的 id，以 <code>target1</code> 开始，<code>target6</code> 结束。
确保 <code>target1</code> 到 <code>target3</code> 在 <code>#left-well</code> 之中，<code>target4</code> 到 <code>target6</code> 在 <code>#right-well</code> 之中。
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 其中一个 <code>button</code> 元素应该有 id <code>target1</code>。
    testString: assert($("#left-well").children("#target1") && $("#left-well").children("#target1").length > 0);
  - text: 其中一个 <code>button</code> 元素应该有 id <code>target2</code>。
    testString: assert($("#left-well").children("#target2") && $("#left-well").children("#target2").length > 0);
  - text: 其中一个 <code>button</code> 元素应该有 id <code>target3</code>。
    testString: assert($("#left-well").children("#target3") && $("#left-well").children("#target3").length > 0);
  - text: 其中一个 <code>button</code> 元素应该有 id <code>target4</code>。
    testString: assert($("#right-well").children("#target4") && $("#right-well").children("#target4").length > 0);
  - text: 其中一个 <code>button</code> 元素应该有 id <code>target5</code>。
    testString: assert($("#right-well").children("#target5") && $("#right-well").children("#target5").length > 0);
  - text: 其中一个 <code>button</code> 元素应该有 id <code>target6</code>。
    testString: assert($("#right-well").children("#target6") && $("#right-well").children("#target6").length > 0);

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

```html
<div class="container-fluid">
  <h3 class="text-primary text-center">jQuery Playground</h3>
  <div class="row">
    <div class="col-xs-6">
      <h4>#left-well</h4>
      <div class="well" id="left-well">
        <button class="btn btn-default target" id="target1"></button>
        <button class="btn btn-default target" id="target2"></button>
        <button class="btn btn-default target" id="target3"></button>
      </div>
    </div>
    <div class="col-xs-6">
      <h4>#right-well</h4>
      <div class="well" id="right-well">
        <button class="btn btn-default target" id="target4"></button>
        <button class="btn btn-default target" id="target5"></button>
        <button class="btn btn-default target" id="target6"></button>
      </div>
    </div>
  </div>
</div>
```

</section>

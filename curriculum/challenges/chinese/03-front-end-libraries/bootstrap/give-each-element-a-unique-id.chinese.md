---
id: bad87fee1348bd9aec908855
title: Give Each Element a Unique id
challengeType: 0
videoUrl: ''
localeTitle: 为每个元素赋予唯一ID
---

## Description
<section id="description">我们还希望能够使用jQuery通过其唯一ID来定位每个按钮。每个按钮提供一个唯一的ID，从<code>target1</code> ，结束时用<code>target6</code> 。确保<code>target1</code>到<code>target3</code>在<code>#left-well</code> ，而<code>target4</code>到<code>target6</code>在<code>#right-well</code> 。 </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 一个<code>button</code>元素应该具有id <code>target1</code> 。
    testString: assert($("#left-well").children("#target1") && $("#left-well").children("#target1").length > 0);
  - text: 一个<code>button</code>元素应该具有id <code>target2</code> 。
    testString: assert($("#left-well").children("#target2") && $("#left-well").children("#target2").length > 0);
  - text: 一个<code>button</code>元素应该具有id <code>target3</code> 。
    testString: assert($("#left-well").children("#target3") && $("#left-well").children("#target3").length > 0);
  - text: 一个<code>button</code>元素应该具有id <code>target4</code> 。
    testString: assert($("#right-well").children("#target4") && $("#right-well").children("#target4").length > 0);
  - text: 一个<code>button</code>元素应该具有id <code>target5</code> 。
    testString: assert($("#right-well").children("#target5") && $("#right-well").children("#target5").length > 0);
  - text: 一个<code>button</code>元素应该具有id <code>target6</code> 。
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

```js
// solution required
```

/section>

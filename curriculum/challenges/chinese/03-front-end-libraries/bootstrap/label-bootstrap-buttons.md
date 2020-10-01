---
id: bad87fee1348bd9aec908856
challengeType: 0
forumTopicId: 18222
title: 给 Bootstrap 按钮贴标签
---

## Description
<section id='description'>
正如我们标注了每个 wells 一样，我们同样想要标注每一个按钮。
为每一个 <code>button</code> 元素设置与其 <code>id</code> 选择器相同的文本。
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 给 id 为 <code>target1</code> 的 <code>button</code> 元素设置文本 <code>#target1</code>。
    testString: assert(new RegExp("#target1","gi").test($("#target1").text()));
  - text: 给 id 为 <code>target2</code> 的 <code>button</code> 元素设置文本 <code>#target2</code>。
    testString: assert(new RegExp("#target2","gi").test($("#target2").text()));
  - text: 给 id 为 <code>target3</code> 的 <code>button</code> 元素设置文本 <code>#target3</code>。
    testString: assert(new RegExp("#target3","gi").test($("#target3").text()));
  - text: 给 id 为 <code>target4</code> 的 <code>button</code> 元素设置文本 <code>#target4</code>。
    testString: assert(new RegExp("#target4","gi").test($("#target4").text()));
  - text: 给 id 为 <code>target5</code> 的 <code>button</code> 元素设置文本 <code>#target5</code>。
    testString: assert(new RegExp("#target5","gi").test($("#target5").text()));
  - text: 给 id 为 <code>target6</code> 的 <code>button</code> 元素设置文本 <code>#target6</code>。
    testString: assert(new RegExp("#target6","gi").test($("#target6").text()));

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

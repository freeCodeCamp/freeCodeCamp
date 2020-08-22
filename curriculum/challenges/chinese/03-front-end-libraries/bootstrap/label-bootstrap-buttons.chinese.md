---
id: bad87fee1348bd9aec908856
title: Label Bootstrap Buttons
challengeType: 0
videoUrl: ''
localeTitle: 标签引导按钮
---

## Description
<section id="description">就像我们标记了我们的井，我们想要标记我们的按钮。为每个<code>button</code>元素提供与其<code>id</code>的选择器对应的文本。 </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '给你的<code>button</code>元素id为<code>target1</code>文本<code>#target1</code> 。'
    testString: assert(new RegExp("#target1","gi").test($("#target1").text()));
  - text: '给你的<code>button</code>元素id为<code>target2</code>文本<code>#target2</code> 。'
    testString: assert(new RegExp("#target2","gi").test($("#target2").text()));
  - text: '给你的<code>button</code>元素id为<code>target3</code>文本<code>#target3</code> 。'
    testString: assert(new RegExp("#target3","gi").test($("#target3").text()));
  - text: '给你的<code>button</code>元素id为<code>target4</code>文本<code>#target4</code> 。'
    testString: assert(new RegExp("#target4","gi").test($("#target4").text()));
  - text: '给你的<code>button</code>元素id为<code>target5</code>文本<code>#target5</code> 。'
    testString: assert(new RegExp("#target5","gi").test($("#target5").text()));
  - text: '使用id <code>target6</code>为您的<code>button</code>元素提供文本<code>#target6</code> 。'
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

```js
// solution required
```

/section>

---
id: bad87fee1348bd9aec908854
title: Label Bootstrap Wells
challengeType: 0
videoUrl: ''
localeTitle: 标签Bootstrap Wells
---

## Description
<section id="description">为了清楚起见，我们用它们的ID标记我们的两个井。在左侧井的上方，在其<code>col-xs-6</code> <code>div</code>元素内，添加一个带有文本<code>#left-well</code>的<code>h4</code>元素。在右侧井上方，在其<code>col-xs-6</code> <code>div</code>元素内，添加一个带有文本<code>#right-well</code>的<code>h4</code>元素。 </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 在每个<code>&lt;div class=&quot;col-xs-6&quot;&gt;</code>元素中添加一个<code>h4</code>元素。
    testString: assert($(".col-xs-6").children("h4") && $(".col-xs-6").children("h4").length > 1);
  - text: '一个<code>h4</code>元素应该有<code>#left-well</code>文本。'
    testString: assert(new RegExp("#left-well","gi").test($("h4").text()));
  - text: '一个<code>h4</code>元素应该有<code>#right-well</code>文本。'
    testString: assert(new RegExp("#right-well","gi").test($("h4").text()));
  - text: 确保所有<code>h4</code>元素都有结束标记。
    testString: assert(code.match(/<\/h4>/g) && code.match(/<h4/g) && code.match(/<\/h4>/g).length === code.match(/<h4/g).length);

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

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

/section>

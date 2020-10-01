---
id: bad87fee1348bd9aec908848
challengeType: 0
forumTopicId: 16825
title: 创建 Bootstrap Wells
---

## Description
<section id='description'>
Bootstrap 有一个叫做 <code>well</code> 的 class，作用是赋予列一种视觉上的深度感（视觉上的效果）。
在每一个 class 属性为 <code>col-xs-6</code> 的 <code>div</code> 元素中都嵌入一个带有 <code>well</code> 的 <code>div</code> 元素。
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: "在每一个 class 属性为 <code>'col-xs-6'</code> 的 <code>div</code> 元素中都嵌入一个带有 <code>well</code> 的 <code>div</code> 元素。"
    testString: assert($("div.col-xs-6").not(":has(>div.well)").length < 1);
  - text: "将你的两个 class 属性为 <code>'col-xs-6'</code> 的 <code>div</code> 元素都内嵌入一个带有 <code>'row'</code> 的 <code>div</code> 元素中。"
    testString: assert($("div.row > div.col-xs-6").length > 1);
  - text: 确保你的 <code>div</code> 元素都有一个闭合标签。
    testString: assert(code.match(/<\/div>/g) && code.match(/<div/g) && code.match(/<\/div>/g).length === code.match(/<div/g).length);

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

    </div>
    <div class="col-xs-6">

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
      <div class="well"></div>
    </div>
    <div class="col-xs-6">
      <div class="well"></div>
    </div>
  </div>
</div>
```

</section>

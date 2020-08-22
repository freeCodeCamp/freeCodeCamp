---
id: bad87fee1348bd9aec908848
title: Create Bootstrap Wells
challengeType: 0
videoUrl: ''
localeTitle: 创建Bootstrap Wells
---

## Description
<section id="description"> Bootstrap有一个名为<code>well</code>的类，可以为列创建视觉深度感。巢一个<code>div</code>与类元素<code>well</code>内每个的<code>col-xs-6</code> <code>div</code>元素。 </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 添加一个<code>div</code>与类元素<code>well</code>内部的每个的<code>div</code>与类元素<code>&quot;col-xs-6&quot;</code>
    testString: assert($("div.col-xs-6").not(":has(>div.well)").length < 1);
  - text: 巢既您的<code>div</code>与类元素<code>&quot;col-xs-6&quot;</code>你中<code>div</code>与类元素<code>&quot;row&quot;</code> 。
    testString: assert($("div.row > div.col-xs-6").length > 1);
  - text: 确保所有<code>div</code>元素都有结束标记。
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

```js
// solution required
```

/section>

---
id: bad87fee1348bd9aec908847
title: Split Your Bootstrap Row
challengeType: 0
videoUrl: ''
localeTitle: 拆分你的Bootstrap行
---

## Description
<section id="description">现在我们有了一个Bootstrap Row，让我们把它分成两列来容纳我们的元素。使用类<code>col-xs-6</code>在行中创建两个<code>div</code>元素。 </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 在<code>div class=&quot;row&quot;</code>元素中嵌套两个<code>div class=&quot;col-xs-6&quot;</code>元素。
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

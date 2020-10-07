---
id: bad87fee1348bd9aec908847
challengeType: 0
forumTopicId: 18306
title: 分割你的 Bootstrap Row
---

## Description
<section id='description'>
现在我们已经有了一个 Bootstrap Row，让我们把它分成两列来放置我们的元素。
在行内创建两个 class 属性为 <code>col-xs-6</code> 的 <code>div</code> 元素。
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: "将两个 <code>div class='col-xs-6'</code> 元素内嵌入你的 <code>div class='row'</code> 元素中。"
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
    <div class="col-xs-6"></div>
    <div class="col-xs-6"></div>
  </div>
</div>
```

</section>

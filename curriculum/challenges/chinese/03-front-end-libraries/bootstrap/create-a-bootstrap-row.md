---
id: bad87fee1348bd9bec908846
challengeType: 0
forumTopicId: 16813
title: 创建一个 Bootstrap Row
---

## Description
<section id='description'>
这次让我们为内联元素创建一个 Bootstrap 栅格系统的 Row（行）。
在 <code>h3</code> 标签下方创建一个 class 属性为 <code>row</code> 的 <code>div</code> 元素。
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>h3</code> 元素下增加一个 <code>div</code> 元素。
    testString: assert(($("div").length > 1) && ($("div.row h3.text-primary").length == 0) && ($("div.row + h3.text-primary").length == 0) && ($("h3.text-primary + div.row").length > 0));
  - text: <code>div</code> 元素的 class 属性应为 <code>row</code>。
    testString: assert($("div").hasClass("row"));
  - text: <code>row div</code> 应该内嵌于 <code>container-fluid div</code>。
    testString: assert($("div.container-fluid div.row").length > 0);
  - text: 确保所有 <code>div</code> 元素都有一个闭合标签。
    testString: assert(code.match(/<\/div>/g) && code.match(/<div/g) && code.match(/<\/div>/g).length === code.match(/<div/g).length);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<div class="container-fluid">
  <h3 class="text-primary text-center">jQuery Playground</h3>

</div>

```

</div>



</section>

## Solution
<section id='solution'>

```html
<div class="container-fluid">
  <h3 class="text-primary text-center">jQuery Playground</h3>
  <div class="row"></div>
</div>
```

</section>

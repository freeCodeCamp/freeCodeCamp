---
id: bad87fee1348bd9aec908746
challengeType: 0
forumTopicId: 18198
title: 将我们的页面放在 Fluid 容器中
---

## Description
<section id='description'>
现在让我们确保页面所有内容应该都是响应式的。
将我们的 <code>h3</code> 元素内嵌进一个具有 <code>container-fluid</code> class 的<code>div</code> 元素中。
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>div</code> 元素 class 属性应该为 <code>container-fluid</code>。
    testString: assert($("div").hasClass("container-fluid"));
  - text: 确保每一个 <code>div</code> 元素都有一个闭合标签。
    testString: assert(code.match(/<\/div>/g) && code.match(/<div/g) && code.match(/<\/div>/g).length === code.match(/<div/g).length);
  - text: <code>h3</code> 元素应该内嵌于 <code>div</code> 元素。
    testString: assert($("div").children("h3").length >0);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<h3 class="text-primary text-center">jQuery Playground</h3>

```

</div>



</section>

## Solution
<section id='solution'>

```html
<div class="container-fluid">
    <h3 class="text-primary text-center">jQuery Playground</h3>
</div>
```

</section>

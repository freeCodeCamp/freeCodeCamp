---
id: bad87fee1348bd9aec908746
title: House our page within a Bootstrap container-fluid div
challengeType: 0
videoUrl: ''
localeTitle: 将我们的页面放在Bootstrap容器 - 流体div中
---

## Description
<section id="description">现在让我们确保您网页上的所有内容都是移动响应式的。让我们使用类<code>container-fluid</code>将<code>h3</code>元素嵌套在<code>div</code>元素<code>container-fluid</code> 。 </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 你的<code>div</code>元素应该有class <code>container-fluid</code> 。
    testString: assert($("div").hasClass("container-fluid"));
  - text: 确保每个<code>div</code>元素都有一个结束标记。
    testString: assert(code.match(/<\/div>/g) && code.match(/<div/g) && code.match(/<\/div>/g).length === code.match(/<div/g).length);
  - text: 将<code>h3</code>元素<code>div</code>元素中。
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

```js
// solution required
```

/section>

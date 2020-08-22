---
id: bad87fee1348bd9bec908846
title: Create a Bootstrap Row
challengeType: 0
videoUrl: ''
localeTitle: 创建一个Bootstrap行
---

## Description
<section id="description">现在我们将为内联元素创建一个Bootstrap行。在<code>h3</code>标记下创建一个<code>div</code>元素，其中包含一个<code>row</code>类。 </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 在<code>h3</code>元素下面添加一个<code>div</code>元素。
    testString: assert(($("div").length > 1) && ($("div.row h3.text-primary").length == 0) && ($("div.row + h3.text-primary").length == 0) && ($("h3.text-primary + div.row").length > 0));
  - text: 你的<code>div</code>元素应该有类<code>row</code>
    testString: assert($("div").hasClass("row"));
  - text: 你的<code>row div</code>应该嵌套在<code>container-fluid div</code>
    testString: assert($("div.container-fluid div.row").length > 0);
  - text: 确保你的<code>div</code>元素有一个结束标记。
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

```js
// solution required
```

/section>

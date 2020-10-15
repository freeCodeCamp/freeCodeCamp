---
id: bad87fee1348bd9aedf08736
challengeType: 0
videoUrl: 'https://scrimba.com/c/cB77PHW'
forumTopicId: 18313
title: 给 HTML 的 Body 元素添加样式
---

## Description
<section id='description'>
现在让我们来讨论一下 CSS 继承。
每一个 HTML 页面都含有一个<code>body</code>元素。
</section>

## Instructions
<section id='instructions'>
我们可以通过设置<code>background-color</code>为<code>black</code>，来证明<code>body</code>元素的存在。
添加以下的代码到<code>style</code>标签里面：

```css
body {
  background-color: black;
}
```

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>body</code>元素的<code>background-color</code>应该是黑色的。'
    testString: assert($("body").css("background-color") === "rgb(0, 0, 0)");
  - text: '确保 CSS 规则格式书写正确，需要开关大括号。'
    testString: assert(code.match(/<style>\s*body\s*\{\s*background.*\s*:\s*.*;\s*\}\s*<\/style>/i));
  - text: '确保 CSS 规则要以分号结尾。'
    testString: assert(code.match(/<style>\s*body\s*\{\s*background.*\s*:\s*.*;\s*\}\s*<\/style>/i));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>

</style>
```

</div>



</section>

## Solution
<section id='solution'>

```html
// solution required
```

</section>
              
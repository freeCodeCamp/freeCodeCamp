---
id: 587d78a7367417b2b2512ae0
title: Use CSS Animation to Change the Hover State of a Button
challengeType: 0
videoUrl: 'https://scrimba.com/c/cg4vZAa'
forumTopicId: 301073
localeTitle: 使用CSS动画更改按钮的悬停状态
---

## Description
<section id='description'>
你可以在按钮悬停时使用 <code>@keyframes</code> 改变按钮的颜色。
下面是在图片悬停时改变图片宽度的例子：

```html
<style>
  img:hover {
    animation-name: width;
    animation-duration: 500ms;
  }

  @keyframes width {
    100% {
      width: 40px;
    }
  }
</style>

<img src="https://bit.ly/smallgooglelogo" alt="Google's Logo" />
```

</section>

## Instructions
<section id='instructions'>
注意 <code>ms</code> 代表毫秒，1000ms 等于 1s。
使用 <code>@keyframes</code> 来改变 <code>button</code> 元素的 <code>background-color</code>，使其当悬停时变成 <code>#4791d0</code>。<code>@keyframes</code> 规则应该只有一个 <code>100%</code> 条目。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>@keyframes</code> 规则的 <code>animation-name</code> 应该是 background-color。'
    testString: assert(code.match(/@keyframes\s+?background-color\s*?{/g));
  - text: '在 <code>@keyframes</code> 的 <code>100%</code> 条目里应该把 <code>background-color</code> 改成 <code>#4791d0</code>。'
    testString: assert(code.match(/100%\s*?{\s*?background-color:\s*?#4791d0;\s*?}/gi));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  button {
    border-radius: 5px;
    color: white;
    background-color: #0F5897;
    padding: 5px 10px 8px 10px;
  }
  
  button:hover {
    animation-name: background-color;
    animation-duration: 500ms;
  }
  
  
</style>
  
<button>注册</button>
```

</div>



</section>

## Solution
<section id='solution'>

```html
// solution required
```

</section>
              
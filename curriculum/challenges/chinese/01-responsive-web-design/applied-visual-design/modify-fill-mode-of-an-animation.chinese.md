---
id: 58a7a6ebf9a6318348e2d5aa
title: Modify Fill Mode of an Animation
challengeType: 0
videoUrl: 'https://scrimba.com/c/cVJDmcE'
forumTopicId: 301064
localeTitle: 修改动画的填充模式
---

## Description
<section id='description'>
太棒了，但是现在还不完美。注意动画在 <code>500ms</code> 之后重置了，所以按钮又变成了之前的颜色。而我们想要的效果是按钮在悬停时始终高亮。
这可以通过把 <code>animation-fill-mode</code> 设置成 <code>forwards</code> 来实现。<code>animation-fill-mode</code> 指定了在动画结束时元素的样式。你可以向这样设置它：
<code>animation-fill-mode: forwards;</code>
</section>

## Instructions
<section id='instructions'>
设置 <code>button:hover</code> 的 <code>animation-fill-mode</code>，使按钮悬停时保持高亮。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>button:hover</code> 应该有一个值为 <code>forwards</code> 的 <code>animation-fill-mode</code> 的属性。'
    testString: assert(code.match(/button\s*?:\s*?hover\s*?{[\s\S]*animation-fill-mode\s*?:\s*?forwards\s*?;[\s\S]*}/gi) && code.match(/button\s*?:\s*?hover\s*?{[\s\S]*animation-name\s*?:\s*?background-color\s*?;[\s\S]*}/gi) && code.match(/button\s*?:\s*?hover\s*?{[\s\S]*animation-duration\s*?:\s*?500ms\s*?;[\s\S]*}/gi));

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
    /* add your code below this line */
    
    /* add your code above this line */
  }
  @keyframes background-color {
    100% {
      background-color: #4791d0;
    }
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
              
---
id: 58a7a6ebf9a6318348e2d5aa
title: Modify Fill Mode of an Animation
challengeType: 0
videoUrl: ''
localeTitle: 修改动画的填充模式
---

## Description
<section id="description">这很好，但它还不能正常工作。注意动画在<code>500ms</code>过后如何重置，导致按钮恢复为原始颜色。您希望按钮保持突出显示。这可以通过设置来完成<code>animation-fill-mode</code>属性<code>forwards</code> 。 <code>animation-fill-mode</code>指定动画完成时应用于元素的样式。您可以这样设置： <code>animation-fill-mode: forwards;</code> </section>

## Instructions
<section id="instructions">设置<code>button:hover</code>的<code>animation-fill-mode</code>属性<code>button:hover</code> to <code>forwards</code>以便当用户将鼠标悬停在按钮上时按钮保持突出显示。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>button:hover</code>应该具有值为<code>forwards</code>的<code>animation-fill-mode</code>属性。'
    testString: 'assert(code.match(/button\s*?:\s*?hover\s*?{[\s\S]*animation-fill-mode\s*?:\s*?forwards\s*?;[\s\S]*}/gi) && code.match(/button\s*?:\s*?hover\s*?{[\s\S]*animation-name\s*?:\s*?background-color\s*?;[\s\S]*}/gi) && code.match(/button\s*?:\s*?hover\s*?{[\s\S]*animation-duration\s*?:\s*?500ms\s*?;[\s\S]*}/gi), "<code>button:hover</code> should have a <code>animation-fill-mode</code> property with a value of <code>forwards</code>.");'

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
<button>Register</button>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

---
id: 587d78a7367417b2b2512ae1
challengeType: 0
videoUrl: 'https://scrimba.com/c/c7amZfW'
forumTopicId: 301051
title: 使用 CSS 动画创建运动
---

## Description
<section id='description'>
当元素的 <code>position</code> 被指定，如 <code>fixed</code> 或者 <code>relative</code> 时，CSS 偏移属性 <code>right</code>、<code>left</code>、<code>top</code> 和 <code>bottom</code>可以用在动画规则里创建动作。
就像下面的例子展示的那样，你可以在 <code>50%</code >keyframe 处设置 <code>top</code> 属性为 50px， 在开始（0%）和最后（100%）keframe 处设置为 0px，以产生项目向下运动，然后返回的动作效果。

```css
@keyframes rainbow {
  0% {
    background-color: blue;
    top: 0px;
  }
  50% {
    background-color: green;
    top: 50px;
  }
  100% {
    background-color: yellow;
    top: 0px;
  }
}
```

</section>

## Instructions
<section id='instructions'>
让 <code>div</code> 水平运动。使用 <code>left</code> 偏移属性，添加 <code>@keyframes</code> 规则，让 rainbow 在 <code>0%</code> 的 0 像素开始，在 <code>50%</code> 时移动到 25 像素，在 <code>100%</code> 时时移动到 -25 像素。不要替换编辑器里的 <code>top</code> 属性，动画应该同时向水平和竖直方向运动。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>0%</code> 的 <code>@keyframes</code> 规则应该为向 <code>left</code> 偏移 <code>0px</code>。'
    testString: assert(code.match(/0%\s*?{\s*?background-color:\s*?blue;\s*?top:\s*?0(px)?;\s*?left:\s*?0(px)?;\s*?}/gi));
  - text: '<code>50%</code> 的 <code>@keyframes</code> 规则应该为向 <code>left</code> 偏移<code>25px</code>。'
    testString: assert(code.match(/50%\s*?{\s*?background-color:\s*?green;\s*?top:\s*?50px;\s*?left:\s*?25px;\s*?}/gi));
  - text: '<code>100%</code> 的 <code>@keyframes</code> 规则应该为向 <code>left</code> 偏移<code>-25px</code>。'
    testString: assert(code.match(/100%\s*?{\s*?background-color:\s*?yellow;\s*?top:\s*?0(px)?;\s*?left:\s*?-25px;\s*?}/gi));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  div {
    height: 40px;
    width: 70%;
    background: black;
    margin: 50px auto;
    border-radius: 5px;
    position: relative;
  }

#rect {
  animation-name: rainbow;
  animation-duration: 4s;
}

@keyframes rainbow {
  0% {
    background-color: blue;
    top: 0px;
    
  }
  50% {
    background-color: green;
    top: 50px;
    
  }
  100% {
    background-color: yellow;
    top: 0px;
    
  }
}
</style>

<div id="rect"></div>
```

</div>



</section>

## Solution
<section id='solution'>


```html
// solution required
```

</section>
              
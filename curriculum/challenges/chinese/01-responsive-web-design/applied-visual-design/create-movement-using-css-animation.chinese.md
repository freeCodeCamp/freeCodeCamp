---
id: 587d78a7367417b2b2512ae1
title: Create Movement Using CSS Animation
challengeType: 0
videoUrl: ''
localeTitle: 使用CSS动画创建运动
---

## Description
<section id="description">当元素具有指定<code>position</code> （例如<code>fixed</code>或<code>relative</code> ，可以在动画规则中使用<code>right</code> ， <code>left</code> ， <code>top</code>和<code>bottom</code>的CSS偏移属性来创建移动。如下面的示例所示，您可以通过将<code>50%</code>关键帧的<code>top</code>属性设置为50px向下然后向上推动项目，但将第一个（ <code>0%</code> ）和最后一个（ <code>100%</code> ）关键帧设置为0px。 <blockquote> @keyframes rainbow { <br> 0％{ <br>背景颜色：蓝色; <br>顶部：0px; <br> } <br> 50％{ <br>背景颜色：绿色; <br>上：50px; <br> } <br> 100％{ <br>背景颜色：黄色; <br>顶部：0px; <br> } <br> } </blockquote></section>

## Instructions
<section id="instructions">为<code>div</code>动画添加水平运动。使用<code>left</code>偏移属性，添加到<code>@keyframes</code>规则，因此彩虹从<code>0%</code> 0像素开始，在<code>50%</code>移动到25像素，在<code>100%</code>以-25像素结束。不要替换编辑器中的<code>top</code>属性 - 动画应该具有垂直和水平运动。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>0%</code>的<code>@keyframes</code>规则应使用0px的<code>left</code>偏移量。
    testString: 'assert(code.match(/0%\s*?{\s*?background-color:\s*?blue;\s*?top:\s*?0(px)?;\s*?left:\s*?0(px)?;\s*?}/gi), "The <code>@keyframes</code> rule for <code>0%</code> should use the <code>left</code> offset of 0px.");'
  - text: <code>50%</code>的<code>@keyframes</code>规则应该使用25px的<code>left</code>偏移量。
    testString: 'assert(code.match(/50%\s*?{\s*?background-color:\s*?green;\s*?top:\s*?50px;\s*?left:\s*?25px;\s*?}/gi), "The <code>@keyframes</code> rule for <code>50%</code> should use the <code>left</code> offset of 25px.");'
  - text: <code>100%</code>的<code>@keyframes</code>规则应使用-25px的<code>left</code>偏移量。
    testString: 'assert(code.match(/100%\s*?{\s*?background-color:\s*?yellow;\s*?top:\s*?0(px)?;\s*?left:\s*?-25px;\s*?}/gi), "The <code>@keyframes</code> rule for <code>100%</code> should use the <code>left</code> offset of -25px.");'

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

```js
// solution required
```
</section>

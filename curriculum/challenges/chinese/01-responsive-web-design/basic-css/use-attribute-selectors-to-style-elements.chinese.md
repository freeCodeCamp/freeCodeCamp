---
id: 58c383d33e2e3259241f3076
title: Use Attribute Selectors to Style Elements
challengeType: 0
videoUrl: 'https://scrimba.com/c/cnpymfJ'
forumTopicId: 301092
localeTitle: 使用属性选择器来设置元素的样式
---

## Description
<section id='description'>
你已经通过设置元素的<code>id</code>和<code>class</code>，来显示你想要的样式，而它们也被分别叫做 ID 选择器和 Class 选择器。另外，也还有其他的 CSS 选择器，可以让我们给特定的元素设置样式。
让我们再次通过猫咪图片项目来练习 CSS 选择器。
在这个挑战里，你会使用<code>[attr=value]</code>属性选择器修改复选框的样式。这个选择器使用特定的属性值来匹配和设置元素样式。例如，下面的代码会改变所有<code>type</code>为<code>radio</code>的元素的外边距。

```css
[type='radio'] {
  margin: 20px 0px 20px 0px;
}
```

</section>

## Instructions
<section id='instructions'>
使用<code>type</code>属性选择器，尝试改变复选框的上外边距为 10px，下外边距为 15px。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '使用<code>type</code>属性选择器来匹配复选框。'
    testString: assert(code.match(/<style>[\s\S]*?\[type=("|')checkbox\1\]\s*?{[\s\S]*?}[\s\S]*?<\/style>/gi));
  - text: '复选框的上外边距应为 10px。'
    testString: assert((function() {var count=0; $("[type='checkbox']").each(function() { if($(this).css('marginTop') === '10px') {count++;}});return (count===3)}()));
  - text: '复选框的下外边距应为 15px。'
    testString: assert((function() {var count=0; $("[type='checkbox']").each(function() { if($(this).css('marginBottom') === '15px') {count++;}});return (count===3)}()));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">
<style>
  .red-text {
    color: red;
  }

  h2 {
    font-family: Lobster, monospace;
  }

  p {
    font-size: 16px;
    font-family: monospace;
  }

  .thick-green-border {
    border-color: green;
    border-width: 10px;
    border-style: solid;
    border-radius: 50%;
  }

  .smaller-image {
    width: 100px;
  }

  .silver-background {
    background-color: silver;
  }
</style>

<h2 class="red-text">CatPhotoApp</h2>
<main>
  <p class="red-text">点击查看更多<a href="#">猫图</a>.</p>
  
  <a href="#"><img src="https://bit.ly/fcc-relaxing-cat" alt="一只仰卧着的萌猫" class="smaller-image thick-green-border"></a>
  
  <div class="silver-background">
    <p>猫咪最喜欢的三件东西：</p>
    <ul>
      <li>猫薄荷</li>
      <li>激光笔</li>
      <li>千层饼</li>
    </ul>
    <p>猫咪最讨厌的三件东西：</p>
    <ol>
      <li>跳蚤</li>
      <li>打雷</li>
      <li>同类</li>
    </ol>
  </div>
  
  <form action="https://freecatphotoapp.com/submit-cat-photo" id="cat-photo-form">
    <label><input type="radio" name="indoor-outdoor">室内</label>
    <label><input type="radio" name="indoor-outdoor">室外</label><br>
    <label><input type="checkbox" name="personality">忠诚</label>
    <label><input type="checkbox" name="personality">懒惰</label>
    <label><input type="checkbox" name="personality">积极</label><br>
    <input type="text" placeholder="猫咪图片地址" required>
    <button type="submit">提交</button>
  </form>
</main>
```

</div>



</section>

## Solution
<section id='solution'>

```html
// solution required
```

</section>
              
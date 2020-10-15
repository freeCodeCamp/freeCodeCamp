---
id: bad87fee1348bd9bedf08813
challengeType: 0
videoUrl: 'https://scrimba.com/c/c2MvnHZ'
forumTopicId: 16630
title: 在元素周围添加边框
---

## Description
<section id='description'>
CSS 边框具有<code>style</code>，<code>color</code>和<code>width</code>属性。
假如我们想要创建一个 5px 的红色实线边框包围一个 HTML 元素，我们可以这样做：

```html
<style>
  .thin-red-border {
    border-color: red;
    border-width: 5px;
    border-style: solid;
  }
</style>
```

</section>

## Instructions
<section id='instructions'>
创建一个<code>thick-green-border</code> CSS class，该 class 应在 HTML 元素周围添加一个 10px 的绿色实线边框，将它应用在猫咪照片上。
记得在一个元素上可以同时应用多个<code>class</code>，通过使用空格来分隔。例子如下：
<code>&lt;img class="class1 class2"&gt;</code>
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>img</code>元素应该含有<code>smaller-image</code> class。'
    testString: assert($("img").hasClass("smaller-image"));
  - text: '<code>img</code>元素应该含有<code>thick-green-border</code> class。'
    testString: assert($("img").hasClass("thick-green-border"));
  - text: '设置图片边框为<code>10px</code>。'
    testString: assert($("img").hasClass("thick-green-border") && parseInt($("img").css("border-top-width"), 10) >= 8 && parseInt($("img").css("border-top-width"), 10) <= 12);
  - text: '设置图片边框为<code>solid</code>实线。'
    testString: assert($("img").css("border-right-style") === "solid");
  - text: '<code>img</code>元素的边框颜色应该为绿色。'
    testString: assert($("img").css("border-left-color") === "rgb(0, 128, 0)");

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

  .smaller-image {
    width: 100px;
  }
</style>

<h2 class="red-text">CatPhotoApp</h2>
<main>
  <p class="red-text">点击查看更多<a href="#">猫图</a>。</p>
  
  <a href="#"><img src="https://bit.ly/fcc-relaxing-cat" alt="一只仰卧着的萌猫" class="smaller-image"></a>
  
  <div>
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
  
  <form action="https://freecatphotoapp.com/submit-cat-photo">
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
              
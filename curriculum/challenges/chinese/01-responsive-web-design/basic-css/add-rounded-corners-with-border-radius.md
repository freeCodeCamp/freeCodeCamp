---
id: bad87fee1348bd9aedf08814
challengeType: 0
videoUrl: 'https://scrimba.com/c/cbZm2hg'
forumTopicId: 16649
title: 用 border-radius 添加圆角边框
---

## Description
<section id='description'>
猫咪图片边角很尖锐，我们可以使用<code>border-radius</code>属性来让它变得圆润。
</section>

## Instructions
<section id='instructions'>
<code>border-radius</code>可以用<code>px</code>像素单位来赋值。给猫咪图片设置 10px 的<code>border-radius</code>。
注意：这个挑战有多个解决方法。例如，添加<code>border-radius</code>属性到<code>.thick-green-border</code>class 或<code>.smaller-image</code>class 里都是可行的。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '图片元素应具有 "thick-green-border" class 属性。'
    testString: assert($("img").hasClass("thick-green-border"));
  - text: '图片应含有<code>10px</code>的边框圆角。'
    testString: assert($("img").css("border-top-left-radius") === '10px' && $("img").css("border-top-right-radius") === '10px' && $("img").css("border-bottom-left-radius") === '10px' && $("img").css("border-bottom-right-radius") === '10px');

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
  }

  .smaller-image {
    width: 100px;
  }
</style>

<h2 class="red-text">CatPhotoApp</h2>
<main>
  <p class="red-text">点击查看更多<a href="#">猫图</a>.</p>
  
  <a href="#"><img src="https://bit.ly/fcc-relaxing-cat" alt="一只仰卧着的萌猫" class="smaller-image thick-green-border"></a>
  
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
              
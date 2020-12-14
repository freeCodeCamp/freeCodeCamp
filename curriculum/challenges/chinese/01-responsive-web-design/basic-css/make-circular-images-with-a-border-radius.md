---
id: bad87fee1348bd9aedf08815
challengeType: 0
videoUrl: 'https://scrimba.com/c/c2MvrcB'
forumTopicId: 18229
title: 用 border-radius 制作圆形图片
---

## Description
<section id='description'>
除像素外，你也可以使用百分比来指定<code>border-radius</code>的值。
</section>

## Instructions
<section id='instructions'>
将<code>border-radius</code>的值设置为<code>50%</code>。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '你图片的边框圆角应设置为<code>50%</code>，让它看起来就像一个完整的圆。'
    testString: assert(parseInt($("img").css("border-top-left-radius")) > 48);
  - text: '请确保百分值为<code>50%</code>。'
    testString: assert(code.match(/50%/g));

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
    border-radius: 10px;
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
              
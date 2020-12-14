---
id: bad87fee1348bd9acdf08812
challengeType: 0
videoUrl: 'https://scrimba.com/c/cM9MmCP'
forumTopicId: 18282
title: 调整图片的大小
---

## Description
<section id='description'>
CSS 的<code>width</code>属性可以控制元素的宽度。图片的<code>width</code>宽度类似于字体的<code>px</code>（像素)值。
假如，你想创建一个叫<code>larger-image</code>的 CSS class 来控制 HTML 元素的宽度为 500px，我们可以这样做：

```html
<style>
  .larger-image {
    width: 500px;
  }
</style>
```

</section>

## Instructions
<section id='instructions'>
创建一个<code>smaller-image</code>的 CSS class，设置图片的宽度为 100px。
<strong>注意：</strong><br>由于不同浏览器的差异性，你可能需要将浏览器缩放到 100% 来通过该挑战。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>img</code>元素应该含有<code>smaller-image</code> class。'
    testString: assert($("img[src='https://bit.ly/fcc-relaxing-cat']").attr('class') === "smaller-image");
  - text: '图片宽度应为 100px（像素），且浏览器缩放应为默认 100%。'
    testString: assert($("img").width() === 100);

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
</style>

<h2 class="red-text">CatPhotoApp</h2>
<main>
  <p class="red-text">点击查看更多<a href="#">猫图</a>.</p>
  
  <a href="#"><img src="https://bit.ly/fcc-relaxing-cat" alt="一只仰卧着的萌猫"></a>
  
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

```js
// solution required
```

/section>
              
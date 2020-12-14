---
id: bad87eee1348bd9aede07836
challengeType: 0
videoUrl: 'https://scrimba.com/c/cN6MEc2'
forumTopicId: 18279
title: 设置元素的 id
---

## Description
<section id='description'>
除了class属性，每一个 HTML 元素也都有<code>id</code>属性。
使用<code>id</code>有几个好处：你可以通过<code>id</code>选择器来改变单个元素的样式，稍后的课程中，你也会了解到在 JavaScript 里面，可以通过<code>id</code>来选择元素和操作元素。
<code>id</code>属性应是唯一的。浏览器不强迫执行这规范，但是这是广泛认可的最佳实践。所以，请不要给多个元素设置相同的<code>id</code>属性。
设置<code>h2</code>元素的 id 为<code>cat-photo-app</code>的方法如下：
<code>&#60;h2 id="cat-photo-app"></code>
</section>

## Instructions
<section id='instructions'>
设置<code>form</code>元素的 id 为<code>cat-photo-form</code>。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>form</code>元素的 id 应为<code>cat-photo-form</code>。'
    testString: assert($("form").attr("id") === "cat-photo-form");

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
              
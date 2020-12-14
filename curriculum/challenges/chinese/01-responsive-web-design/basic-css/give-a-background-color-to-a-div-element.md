---
id: bad87fed1348bd9aede07836
challengeType: 0
videoUrl: 'https://scrimba.com/c/cdRKMCk'
forumTopicId: 18190
title: 给 div 元素添加背景色
---

## Description
<section id='description'>
<code>background-color</code>属性可以设置元素的背景颜色。
例如，你想将一个元素的背景颜色改为<code>green</code>，可以在<code>style</code>里面这样写：

```css
.green-background {
  background-color: green;
}
```

</section>

## Instructions
<section id='instructions'>
创建一个<code>silver-background</code>class 并设置<code>background-color</code>为<code>silver</code>。 并用在<code>div</code>元素上。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>div</code>元素应有<code>silver-background</code> class。'
    testString: assert($("div").hasClass("silver-background"));
  - text: '<code>div</code>元素背景颜色应设置为<code>silver</code>。'
    testString: assert($("div").css("background-color") === "rgb(192, 192, 192)");
  - text: 'class 名 <code>silver-background</code> 应该定义在 <code>style</code> 元素内，<code>silver</code> 的值应该指定 <code>background-color</code> 属性'
    testString: assert(code.match(/\.silver-background\s*{\s*background-color:\s*silver;\s*}/));

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
              
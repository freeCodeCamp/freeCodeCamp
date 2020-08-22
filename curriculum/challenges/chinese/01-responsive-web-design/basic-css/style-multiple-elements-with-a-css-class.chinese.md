---
id: bad87fee1348bd9aefe08806
title: Style Multiple Elements with a CSS Class
challengeType: 0
videoUrl: 'https://scrimba.com/c/cRkVbsQ'
forumTopicId: 18311
localeTitle: 使用 class 选择器设置多个元素的样式
---

## Description
<section id='description'>
通过 CSS class 选择器，多个 HTML 元素可以使用相同的 CSS 样式规则。你可以将<code>red-text</code>class 选择器应用在第一个<code>p</code>元素上。
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>h2</code>元素应该是红色的。'
    testString: assert($("h2").css("color") === "rgb(255, 0, 0)");
  - text: '<code>h2</code>元素应该含有<code>red-text</code> class 选择器。'
    testString: assert($("h2").hasClass("red-text"));
  - text: '第一个<code>p</code>元素应该为红色。'
    testString: assert($("p:eq(0)").css("color") === "rgb(255, 0, 0)");
  - text: '第二和第三个<code>p</code>元素不应该为红色。'
    testString: assert(!($("p:eq(1)").css("color") === "rgb(255, 0, 0)") && !($("p:eq(2)").css("color") === "rgb(255, 0, 0)"));
  - text: '第一个<code>p</code>元素应该包含<code>red-text</code> class 选择器。'
    testString: assert($("p:eq(0)").hasClass("red-text"));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  .red-text {
    color: red;
  }
</style>

<h2 class="red-text">CatPhotoApp</h2>
<main>
  <p>点击查看更多<a href="#">猫图</a>.</p>

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

```html
// solution required
```

</section>
              
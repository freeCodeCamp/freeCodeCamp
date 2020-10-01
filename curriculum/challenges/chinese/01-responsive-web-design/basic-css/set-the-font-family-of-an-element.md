---
id: bad87fee1348bd9aede08807
challengeType: 0
videoUrl: 'https://scrimba.com/c/c3bvpCg'
forumTopicId: 18278
title: 设置元素的字体家族
---

## Description
<section id='description'>
通过<code>font-family</code>属性，可以设置元素里面的字体样式。
如果你想设置<code>h2</code>元素的字体为<code>sans-serif</code>，你可以用以下的 CSS 规则：

```css
h2 {
  font-family: sans-serif;
}
```

</section>

## Instructions
<section id='instructions'>
确保<code>p</code>元素使用<code>monospace</code>字体。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>p</code>元素应该使用<code>monospace</code>字体。'
    testString: assert($("p").not(".red-text").css("font-family").match(/monospace/i));

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

  p {
    font-size: 16px;
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

```html
// solution required
```

</section>
              
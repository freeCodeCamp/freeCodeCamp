---
id: bad87fee1348bd9aedf08806
title: Change the Font Size of an Element
challengeType: 0
videoUrl: 'https://scrimba.com/c/cPp7VfD'
forumTopicId: 1
localeTitle: 更改元素的字体大小
---

## Description
<section id='description'>
字体大小由<code>font-size</code>属性控制，如下所示：

```css
h1 {
  font-size: 30px;
}
```

</section>

## Instructions
<section id='instructions'>
在包含<code>red-text</code>class 选择器的<code>&#60;style&#62;</code>声明区域的里，创建一个<code>p</code>元素样式规则，并设置<code>font-size</code>为<code>16px</code>。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '在<code>style</code>样式声明区域里，<code>p</code>元素的<code>font-size</code>的值应为<code>16px</code>，浏览器和文本缩放应设置为 100％。'
    testString: assert(code.match(/p\s*{\s*font-size\s*:\s*16\s*px\s*;\s*}/i));

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
              
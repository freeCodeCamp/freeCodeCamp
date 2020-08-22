---
id: bad87fee1348bd9aedf08803
title: Change the Color of Text
challengeType: 0
videoUrl: 'https://scrimba.com/c/cPp7VfD'
forumTopicId: 1
localeTitle: 更改文本的颜色
---

## Description
<section id='description'>
现在让我们来修改一下文本的颜色。
我们通过修改<code>h2</code>元素的<code>style</code>属性的<code>color</code>值来改变文本颜色。
以下是改变<code>h2</code>元素为蓝色的方法：
<code>&#60;h2 style="color: blue;"&#62;CatPhotoApp&#60;/h2&#62;</code>
请注意行内<code>style</code>最好以<code>;</code>来结束。
</section>

## Instructions
<section id='instructions'>
请把<code>h2</code>元素的文本颜色设置为红色。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>h2</code> 元素应该有一个<code>style</code>声明。
    testString: assert($("h2").attr('style'));
  - text: <code>h2</code>元素应该为<code>red</code>。
    testString: assert($("h2")[0].style.color === "red");
  - text: <code>style</code> 声明应该以 <code>;</code> 结尾。
    testString: assert($("h2").attr('style') && $("h2").attr('style').endsWith(';'));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<h2>CatPhotoApp</h2>
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
              
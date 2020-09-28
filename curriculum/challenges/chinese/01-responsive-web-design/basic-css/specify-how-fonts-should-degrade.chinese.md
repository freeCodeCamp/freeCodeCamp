---
id: bad87fee1348bd9aedf08808
title: Specify How Fonts Should Degrade
challengeType: 0
videoUrl: 'https://scrimba.com/c/cpVKBfQ'
forumTopicId: 18304
localeTitle: 字体如何优雅降级
---

## Description
<section id='description'>
所有浏览器都有几种默认字体。这些通用字体包括<code>monospace</code>，<code>serif</code>和<code>sans-serif</code>。
当字体不可用，你可以告诉浏览器通过 “降级” 去使用其他字体。
例如，如果你想将一个元素的字体设置成<code>Helvetica</code>，当<code>Helvetica</code>不可用时，降级使用<code>sans-serif</code>字体，那么可以这样写：

```css
p {
  font-family: Helvetica, sans-serif;
}
```

通用字体名字不区分大小写。同时，也不需要使用引号，因为它们是 CSS 关键字。
</section>

## Instructions
<section id='instructions'>
首先，添加<code>monospace</code>字体到<code>h2</code>元素里，它现在拥有着<code>Lobster</code>和<code>monospace</code>两种字体。
在上一个挑战里，你已经通过<code>link</code>标签引入谷歌<code>Lobster</code>字体。现在让我们注释掉谷歌<code>Lobster</code>字体的引入（使用我们之前学过的<code>HTML</code>注释），使字体失效。你会发现<code>h2</code>元素降级到了<code>monospace</code>字体。
<strong>注意：</strong><br>如果电脑已经安装了<code>Lobster</code>字体，你将看不到这个降级过程，因为浏览器会找到该字体。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>h2</code>元素应该含有<code>Lobster</code>字体。'
    testString: assert($("h2").css("font-family").match(/^"?lobster/i));
  - text: '当<code>Lobster</code>字体失效时，<code>h2</code>元素应该降级使用<code>monospace</code>字体。'
    testString: assert(/\s*h2\s*\{\s*font-family\:\s*(\'|")?Lobster(\'|")?,\s*monospace\s*;\s*\}/gi.test(code));
  - text: '通过添加<code>&#60!--</code>，注释掉谷歌<code>Lobster</code>字体的引入。'
    testString: assert(new RegExp("<!--[^fc]", "gi").test(code));
  - text: '确保注释要以<code>--&#62;</code>结束。'
    testString: assert(new RegExp("[^fc]-->", "gi").test(code));

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
    font-family: Lobster;
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

```html
// solution required
```

</section>
              
---
id: bad87fee1348bd9aedf08805
title: Use CSS Selectors to Style Elements
challengeType: 0
videoUrl: 'https://scrimba.com/c/cJKMBT2'
forumTopicId: 18349
localeTitle: 使用元素选择器来设置元素的样式
---

## Description
<section id='description'>
在 CSS 中，页面样式的属性有几百个，但常用的不过几十个。
通过行内样式<code>&#60;h2 style="color: red;"&#62;CatPhotoApp&#60;/h2&#62;</code>，就可以修改<code>h2</code>元素的颜色为红色。
当我们只需要改变元素的某个样式时，行内样式最简单直观。当我们需要同时改变元素的很多样式时，<code>层叠样式表</code>往往是一个更好的选择。
在代码的顶部，创建一个<code>style</code>声明区域，如下方所示：

```html
<style>
</style>
```

在<code>style</code>样式声明区域内，可以创建一个<code>元素选择器</code>，应用于所有的<code>h2</code>元素。例如，如果你想所有<code>h2</code>元素变成红色，可以添加下方的样式规则：

```html
<style>
  h2 {
    color: red;
  }
</style>
```

注意，在每个元素的样式声明区域里，左右花括号（<code>{</code> 和 <code>}</code>）一定要写全。你需要确保所有样式规则位于花括号之间，并且每条样式规则都以分号结束。
</section>

## Instructions
<section id='instructions'>
删除<code>h2</code>元素的行内样式，然后创建<code>style</code>样式声明区域，最后添加 CSS 样式规则使<code>h2</code>元素变为蓝色。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 删除<code>h2</code>元素的行内样式。
    testString: assert(!$("h2").attr("style"));
  - text: 创建一个<code>style</code>样式声明区域。
    testString: assert($("style") && $("style").length >= 1);
  - text: <code>h2</code>元素颜色应为蓝色。
    testString: assert($("h2").css("color") === "rgb(0, 0, 255)");
  - text: 确保<code>h2</code>选择器的内容被花括号所围绕，并且样式规则以分号结束。
    testString: assert(code.match(/h2\s*\{\s*color\s*:.*;\s*\}/g));
  - text: 所有<code>style</code>应该是有效的且有一个结束标签。
    testString: assert(code.match(/<\/style>/g) && code.match(/<\/style>/g).length === (code.match(/<style((\s)*((type|media|scoped|title|disabled)="[^"]*")?(\s)*)*>/g) || []).length);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<h2 style="color: red;">CatPhotoApp</h2>
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
              
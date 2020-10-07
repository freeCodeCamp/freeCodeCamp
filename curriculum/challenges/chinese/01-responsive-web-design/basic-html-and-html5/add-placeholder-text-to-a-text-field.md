---
id: bad87fee1348bd9aedf08830
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/cKdJDhg'
forumTopicId: 16647
title: 给输入框添加占位符文本
---

## Description
<section id='description'>
<code>Placeholder</code>占位符是用户在<code>input</code>输入框中输入任何东西前的预定义文本。
你可以像这样创建一个占位符：
<code>&#60;input type="text" placeholder="this is placeholder text"&#62;</code>
</section>

## Instructions
<section id='instructions'>
把<code>input</code>输入框的<code>placeholder</code>占位符文本设置为 “猫咪图片地址”。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 给现有的<code>input</code>输入框添加一个<code>placeholder</code>属性。
    testString: assert($("input[placeholder]").length > 0);
  - text: 设置<code>placeholder</code>属性的值为 ”猫咪图片地址“。
    testString: assert($("input") && $("input").attr("placeholder") && $("input").attr("placeholder").match(/猫咪图片地址/gi));
  - text: 完整的<code>input</code>元素应有一个结束标签
    testString: assert(!code.match(/<input.*\/?>.*<\/input>/gi));
  - text: <code>input</code>输入框的语法必须正确。
    testString: assert($("input[type=text]").length > 0);
```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<h2>CatPhotoApp</h2>
<main>
<p>点击查看更多<a href="#">猫咪图片</a>。</p>
  
  <a href="#"><img src="https://bit.ly/fcc-relaxing-cat" alt="一只仰卧着的萌猫"></a>
  
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
  <input type="text">
</main>
```

</div>



</section>

## Solution
<section id='solution'>
</section>
              
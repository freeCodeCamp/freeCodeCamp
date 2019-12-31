---
id: bad87fee1348bd9aedf08829
title: Create a Text Field
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/c2EVnf6'
forumTopicId: 16823
localeTitle: 创建一个输入框
---

## Description
<section id='description'>
现在让我们来创建一个<code>form</code>表单。
<code>input</code>输入框可以让你轻松获得用户的输入。
你可以像这样创建一个文本输入框：
<code>&#60;input type="text"&#62;</code>
注意：<code>input</code>输入框是没有结束标记的。
</section>

## Instructions
<section id='instructions'>
在列表下面创建一个<code>type</code>属性为<code>text</code>的<code>input</code>输入框。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '网页中有一个<code>type</code>属性为<code>text</code>的<code>input</code>输入框。'
    testString: assert($("input[type=text]").length > 0);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<h2>CatPhotoApp</h2>
<main>
  <p>Click here to view more <a href="#">cat photos</a>.</p>
  
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
  
  
</main>
```

</div>



</section>

## Solution
<section id='solution'>
</section>
              
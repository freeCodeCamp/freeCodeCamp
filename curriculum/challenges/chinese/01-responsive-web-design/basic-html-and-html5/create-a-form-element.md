---
id: bad87fee1348bd9aede08830
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/cmQ3Kfa'
forumTopicId: 16817
title: 创建一个表单
---

## Description
<section id='description'>
如果想使用 HTML 向服务器提交数据，可以给<code>form</code>添加<code>action</code>属性。
例如:
<code>&#60;form action="/url-where-you-want-to-submit-form-data"&#62;&#60;/form&#62;</code>
</section>

## Instructions
<section id='instructions'>
在<code>input</code>输入框外层创建一个<code>form</code>表单，然后设置表单的<code>action</code>属性为<code>"https://freecatphotoapp.com/submit-cat-photo"</code>。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '在<code>input</code>输入框外层创建一个<code>form</code>表单。'
    testString: assert($("form") && $("form").children("input") && $("form").children("input").length > 0);
  - text: '确保表单的<code>action</code>属性为<code>"https://freecatphotoapp.com/submit-cat-photo"</code>。'
    testString: assert($("form").attr("action") === "https://freecatphotoapp.com/submit-cat-photo");
  - text: '确保表单有开始标记和结束标记。'
    testString: assert(code.match(/<\/form>/g) && code.match(/<form [^<]*>/g) && code.match(/<\/form>/g).length === code.match(/<form [^<]*>/g).length);

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
  <input type="text" placeholder="猫咪图片地址">
</main>
```

</div>



</section>

## Solution
<section id='solution'>
</section>
              
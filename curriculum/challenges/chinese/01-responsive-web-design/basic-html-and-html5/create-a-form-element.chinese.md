---
id: bad87fee1348bd9aede08830
title: Create a Form Element
challengeType: 0

videoUrl: ''
localeTitle: Create a Form Element
---

## Description
<section id='description'>
通过给<code>form</code>表单添加一个<code>action</code>属性，你可以使用纯 HTML 来构建向服务器提交数据的 Web 表单。
例如:
<code>&#60;form action="/url-where-you-want-to-submit-form-data"&#62;&#60;/form&#62;</code>
</section>

## Instructions
<section id='instructions'>
在<code>input</code>输入框外层创建一个<code>form</code>表单，然后设置表单的<code>action</code>属性为<code>"/submit-cat-photo"</code>。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 在<code>input</code>输入框外层创建一个<code>form</code>表单。
    testString: assert($("form") && $("form").children("input") && $("form").children("input").length > 0, '在<code>input</code>输入框外层创建一个<code>form</code>表单。');
  - text: "确保表单的<code>action</code>属性为<code>'/submit-cat-photo'</code>。"
    testString: assert($("form").attr("action") === "/submit-cat-photo", '确保表单的<code>action</code>属性为<code>"/submit-cat-photo"</code>。');
  - text: 确保表单有开始标记和结束标记。
    testString: assert(code.match(/<\/form>/g) && code.match(/<form [^<]*>/g) && code.match(/<\/form>/g).length === code.match(/<form [^<]*>/g).length, '确保表单有开始标记和结束标记。');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

    <div id='html-seed'>
```html
<h2>CatPhotoApp</h2>,<main>,  ,  <a href="#"><img src="http://cdn.freecodecamp.cn/relaxing-cat.jpg" alt="一只仰卧着的萌猫"></a>,  ,  <p>猫咪最喜欢的三件东西：</p>,  <ul>,    <li>猫薄荷</li>,    <li>激光笔</li>,    <li>千层饼</li>,  </ul>,  <p>猫咪最讨厌的三件东西：</p>,  <ol>,    <li>跳蚤</li>,    <li>打雷</li>,    <li>同类</li>,  </ol>,  <input type="text" placeholder="猫咪图片地址">,</main>
```





</div>





</section>

              
---
id: bad87fee1348bd9aedc08830
title: Use HTML5 to Require a Field
challengeType: 0

videoUrl: ''
localeTitle: Use HTML5 to Require a Field
---

## Description
<section id='description'>
当你设计表单时，你可以指定某些字段为必填项(required)，只有当用户填写了该字段后，才可以提交表单。
如果你想把文本输入框设置为必填项，在<code>input</code>元素中加上required属性就可以了，例如：<code>&#60;input type="text" required&#62;</code>
</section>

## Instructions
<section id='instructions'>
确保<code>input</code>元素中有<code>required</code>属性，否则无法提交表单。
试试输入框不填写任何文本，直接点击<code>Submit</code>按钮提交表单，看看浏览器是如何提示的。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>input</code>元素必须有<code>required</code>属性。
    testString: assert($("input").prop("required"), '<code>input</code>元素必须有<code>required</code>属性。');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

    <div id='html-seed'>
```html
<h2>CatPhotoApp</h2>,<main>,  ,  <a href="#"><img src="http://cdn.freecodecamp.cn/relaxing-cat.jpg" alt="一只仰卧着的萌猫"></a>,  ,  <p>猫咪最喜欢的三件东西：</p>,  <ul>,    <li>猫薄荷</li>,    <li>激光笔</li>,    <li>千层饼</li>,  </ul>,  <p>猫咪最讨厌的三件东西：</p>,  <ol>,    <li>跳蚤</li>,    <li>打雷</li>,    <li>同类</li>,  </ol>,  <form action="/submit-cat-photo">,    <input type="text" placeholder="猫咪图片地址">,    <button type="submit">提交</button>,  </form>,</main>
```





</div>





</section>

              
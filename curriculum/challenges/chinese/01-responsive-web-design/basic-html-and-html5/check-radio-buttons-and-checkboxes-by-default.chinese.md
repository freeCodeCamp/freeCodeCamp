---
id: bad87fee1348bd9aedd08835
title: Check Radio Buttons and Checkboxes by Default
challengeType: 0

videoUrl: ''
localeTitle: Check Radio Buttons and Checkboxes by Default
---

## Description
<section id='description'>
通过添加<code>checked</code>属性，你可以设置某个单选按钮或多选按钮被默认选中。
为此，只需给<code>input</code>元素添加 "checked" 属性。 例如:
<code>&#60;input type="radio" name="test-name" checked&#62;</code>
</section>

## Instructions
<section id='instructions'>
把第一个<code>radio button</code>和第一个<code>checkbox</code>都设置为默认选中。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 表单的第一个单选按钮应该被默认选中。
    testString: assert($('input[type="radio"]').prop("checked"), '表单的第一个单选按钮应该被默认选中。');
  - text: 表单的第一个多选按钮应该被默认选中。
    testString: assert($('input[type="checkbox"]').prop("checked"), '表单的第一个多选按钮应该被默认选中。');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

    <div id='html-seed'>
```html
<h2>CatPhotoApp</h2>,<main>,  ,  <a href="#"><img src="http://cdn.freecodecamp.cn/relaxing-cat.jpg" alt="一只仰卧着的萌猫"></a>,  ,  <p>猫咪最喜欢的三件东西：</p>,  <ul>,    <li>猫薄荷</li>,    <li>激光笔</li>,    <li>千层饼</li>,  </ul>,  <p>猫咪最讨厌的三件东西：</p>,  <ol>,    <li>跳蚤</li>,    <li>打雷</li>,    <li>同类</li>,  </ol>,  <form action="/submit-cat-photo">,    <label><input type="radio" name="indoor-outdoor">室内</label>,    <label><input type="radio" name="indoor-outdoor">室外</label><br>,    <label><input type="checkbox" name="personality">忠诚</label>,    <label><input type="checkbox" name="personality">懒惰</label>,    <label><input type="checkbox" name="personality">积极</label><br>,    <input type="text" placeholder="猫咪图片地址" required>,    <button type="submit">提交</button>,  </form>,</main>
```





</div>





</section>

              
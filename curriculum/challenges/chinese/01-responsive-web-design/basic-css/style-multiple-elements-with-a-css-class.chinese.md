---
id: bad87fee1348bd9aefe08806
title: Style Multiple Elements with a CSS Class
challengeType: 0

videoUrl: ''
localeTitle: Style Multiple Elements with a CSS Class
---

## Description
<section id='description'>
CSS 的<code>class</code>具有可重用性，可应用于各种 HTML 元素。
一个 CSS<code>class</code>声明示例，如下所示：
<blockquote>&#60;style&#62;<br>&nbsp;&nbsp;.blue-text {<br>&nbsp;&nbsp;&nbsp;&nbsp;color: blue;<br>&nbsp;&nbsp;}<br>&#60;/style&#62;</blockquote>
可以看到，我们在<code>&#60;style&#62;</code>样式声明区域里，创建了一个名为<code>blue-text</code>的<code>class</code>选择器。
你可以将 CSS<code>class</code>选择器应用到一个HTML元素里，如下所示：
<code>&#60;h2 class="blue-text"&#62;CatPhotoApp&#60;/h2&#62;</code>
注意：在<code>style</code>样式区域声明里，<code>class</code>需以<code>.</code>开头。而在 HTML 元素里，<code>class</code>属性的前面不能添加<code>.</code>。
</section>

## Instructions
<section id='instructions'>
在<code>style</code>样式声明里，把<code>h2</code>元素选择器改为<code>.red-text</code>class 选择器，同时将颜色<code>blue</code>变为<code>red</code>。
在<code>h2</code>元素里，添加一个<code>class</code>属性，且值为<code>'red-text'</code>。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>h2</code>元素应该是红色的。
    testString: assert($("h2").css("color") === "rgb(255, 0, 0)", '<code>h2</code>元素应该是红色的。');
  - text: <code>h2</code>元素应该含有<code>red-text</code> class 选择器。
    testString: assert($("h2").hasClass("red-text"), '<code>h2</code>元素应该含有<code>red-text</code> class 选择器。');
  - text: 第一个<code>p</code>元素应该为红色。
    testString: 'assert($("p:eq(0)").css("color") === "rgb(255, 0, 0)", "第一个<code>p</code>元素应该为红色。");'
  - text: 第二和第三个<code>p</code>元素不应该为红色。
    testString: 'assert(!($("p:eq(1)").css("color") === "rgb(255, 0, 0)") && !($("p:eq(2)").css("color") === "rgb(255, 0, 0)"), "第二和第三个<code>p</code>元素不应该为红色。");'
  - text: 第一个<code>p</code>元素应该包含<code>red-text</code> class 选择器。
    testString: 'assert($("p:eq(0)").hasClass("red-text"), "第一个<code>p</code>元素应该包含<code>red-text</code> class 选择器。");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

    <div id='html-seed'>
```html
<style>,  .red-text {,    color: red;,  },</style>,,<h2 class="red-text">CatPhotoApp</h2>,<main>,  <p>点击这里可以获取更多<a href="http://freecatphotoapp.com" target="_blank">猫图</a>。</p>,  <a href="#"><img src="http://cdn.freecodecamp.cn/relaxing-cat.jpg" alt="一只仰卧着的萌猫"></a>,  ,  <p>猫咪最喜欢的三件东西：</p>,  <ul>,    <li>猫薄荷</li>,    <li>激光笔</li>,    <li>千层饼</li>,  </ul>,  <p>猫咪最讨厌的三件东西：</p>,  <ol>,    <li>跳蚤</li>,    <li>打雷</li>,    <li>同类</li>,  </ol>,  ,  <form action="/submit-cat-photo">,    <label><input type="radio" name="indoor-outdoor">室内</label>,    <label><input type="radio" name="indoor-outdoor">室外</label><br>,    <label><input type="checkbox" name="personality">忠诚</label>,    <label><input type="checkbox" name="personality">懒惰</label>,    <label><input type="checkbox" name="personality">积极</label><br>,    <input type="text" placeholder="猫咪图片地址" required>,    <button type="submit">提交</button>,  </form>,</main>
```





</div>





</section>

              
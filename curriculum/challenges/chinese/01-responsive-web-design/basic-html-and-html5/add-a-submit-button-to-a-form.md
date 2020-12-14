---
id: bad87fee1348bd9aedd08830
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/cp2Nkhz'
forumTopicId: 16627
title: 给表单添加提交按钮
---

## Description
<section id='description'>
让我们来给表单添加一个<code>submit</code>提交按钮，当点击提交按钮时，表单中的数据将会被发送到<code>action</code>属性指定的 URL 上。
例如：
<code>&#60;button type="submit"&#62;this button submits the form&#60;/button&#62;</code>
</section>

## Instructions
<section id='instructions'>
在表单的底部创建一个<code>button</code>按钮，按钮的<code>type</code>属性值为<code>submit</code>，文本为<code>提交</code>。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '表单内部应该有一个按钮。'
    testString: assert($("form").children("button").length > 0);
  - text: '按钮的<code>type</code>属性值应该为<code>submit</code>。'
    testString: assert($("button").attr("type") === "submit");
  - text: '提交按钮的文本应该为<code>提交</code>。'
    testString: assert($("button").text().match(/^\s*submit\s*$/gi));
  - text: '确保按钮有结束标记。'
    testString: assert(code.match(/<\/button>/g) && code.match(/<button/g) && code.match(/<\/button>/g).length === code.match(/<button/g).length);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<h2>CatPhotoApp</h2>
<main>
  <p>点击查看更多<a href="#">猫咪图片</a>。</p>
  
  <a href="#"><img src="https://bit.ly/fcc-relaxing-cat" alt="一只仰卧着的橘猫"></a>
  
  <p>猫咪最喜欢的三件东西：</p>
  <ul>
    <li>猫薄荷</li>
    <li>激光笔</li>
    <li>千层面</li>
  </ul>
  <p>猫咪最讨厌的三件东西：</p>
  <ol>
    <li>祛跳蚤</li>
    <li>打雷</li>
    <li>同类</li>
  </ol>
  <form action="https://freecatphotoapp.com/submit-cat-photo">
    <input type="text" placeholder="猫咪图片地址">
  </form>
</main>
```

</div>
</section>

## Solution
<section id='solution'>
</section>
              
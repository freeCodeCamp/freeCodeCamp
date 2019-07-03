---
id: bad87fee1348bd9aec908857
title: Use Comments to Clarify Code
challengeType: 0

videoUrl: ''
localeTitle: Use Comments to Clarify Code
---

## Description
<section id='description'>
之前，在 freeCodeCamp 的 HTML5 和 CSS 章节中我们构建了一个 Cat Photo App。这次我们将会使用最受欢迎的响应式 CSS 框架 Bootstrap 来美化它。
Bootstrap 会根据你的屏幕大小来调节 HTML 元素的大小————因此称为 <code>响应式设计( Responsive Design )</code>。
通过响应式设计，我们将无需额外设计一个手机版的网页，因为它在任何尺寸的屏幕上看起来都还不错。
无论开发什么应用，你都可以通过将以下代码添加到你的 HTML 顶部来引入 Bootstrap 。
<code>&#60;link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous"/&#62;</code>
在该案例中，我们已经帮你把相应代码添加到页面中。记住使用 <code>></code> 和 <code>/></code> 闭合 <code>link</code> 标签来保证引入成功。
首先，我们应该把所有 HTML 标签放在 class 为 <code>container-fluid</code> 的 <code>div</code> 元素下（除了 <code>link</code> 标签和 <code>style</code> 标签）。
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 在添加注释前，在你的 HTML 顶部增加此代码 <code>&#60;!--</code>。
    testString: assert(code.match(/^\s*<!--/), '在添加注释前，在你的 HTML 顶部增加此代码 <code>&#60;!--</code>。');
  - text: 注释内容应该为 <code>Only change code above this line</code>。
    testString: assert(code.match(/<!--(?!(>|->|.*-->.*this line))\s*.*this line.*\s*-->/gi), '你的注释内容应该为 <code>Only change code above this line</code>。');
  - text: 注释应该用 <code>--&#62;</code> 进行闭合。
    testString: assert(code.match(/-->.*\n+.+/g), '注释应该用 <code>--&#62;</code> 进行闭合。');
  - text: 注意，注释的开始标签和闭合标签数量应该一一对应，保持数量一致。
    testString: assert(code.match(/<!--/g).length === code.match(/-->/g).length, '注意，注释的开始标签和闭合标签数量应该一一对应，保持数量一致。');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

    <div id='html-seed'>
```html
<div class="container-fluid">,  <h3 class="text-primary text-center">jQuery Playground</h3>,  <div class="row">,    <div class="col-xs-6">,      <h4>#left-well</h4>,      <div class="well" id="left-well">,        <button class="btn btn-default target" id="target1">#target1</button>,        <button class="btn btn-default target" id="target2">#target2</button>,        <button class="btn btn-default target" id="target3">#target3</button>,      </div>,    </div>,    <div class="col-xs-6">,      <h4>#right-well</h4>,      <div class="well" id="right-well">,        <button class="btn btn-default target" id="target4">#target4</button>,        <button class="btn btn-default target" id="target5">#target5</button>,        <button class="btn btn-default target" id="target6">#target6</button>,      </div>,    </div>,  </div>,</div>
```





</div>





</section>

              
---
id: bad87fee1348bd9aec908846
title: Create a Bootstrap Headline
challengeType: 0

videoUrl: ''
localeTitle: Create a Bootstrap Headline
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
  - text: 为你的页面添加一个 <code>h3</code> 元素。
    testString: assert($("h3") && $("h3").length > 0, '为你的页面添加一个 <code>h3</code> 元素。');
  - text: 确保你的 <code>h3</code> 元素有一个闭合标签。
    testString: assert(code.match(/<\/h3>/g) && code.match(/<h3/g) && code.match(/<\/h3>/g).length === code.match(/<h3/g).length, '确保你的 <code>h3</code> 元素有一个闭合标签。');
  - text: 为了确保成功上色，<code>h3</code> 元素应该具有 <code>text-primary</code> class。
    testString: assert($("h3").hasClass("text-primary"), '为了确保成功上色，<code>h3</code> 元素应该具有 <code>text-primary</code> class。');
  - text: 为了确保文本居中显示，你的 <code>h3</code> 元素应该具有 <code>text-center</code> class。
    testString: assert($("h3").hasClass("text-center"), '为了确保文本居中显示，你的 <code>h3</code> 元素应该具有 <code>text-center</code> class。');
  - text: <code>h3</code> 元素文本为 <code>jQuery Playground</code>。
    testString: assert.isTrue((/jquery(\s)+playground/gi).test($("h3").text()), '你的 <code>h3</code> 元素文本为 <code>jQuery Playground</code>。');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

    <div id='html-seed'>
```html

```





</div>





</section>

              
---
id: bad87fee1348bd9aedf08801
title: Inform with the Paragraph Element
challengeType: 0

videoUrl: ''
localeTitle: Inform with the Paragraph Element
---

## Description
<section id='description'>
<code>p</code>是<code>paragraph</code>的缩写，通常被用来创建一个段落，就和你写作文一样。
你可以像这样创建一个段落：
<code>&#60;p&#62;I'm a p tag!&#60;/p&#62;</code>
</section>

## Instructions
<section id='instructions'>
在<code>h2</code>元素下面新增一个<code>p</code>元素，元素内容是：<code>Hello Paragraph</code>。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 创建一个<code>p</code>元素。
    testString: assert(($("p").length > 0), '创建一个<code>p</code>元素。');
  - text: <code>p</code>元素的内容应为：<code>Hello Paragraph</code>。
    testString: assert.isTrue((/hello(\s)+paragraph/gi).test($("p").text()), '<code>p</code>元素的内容应该为：<code>Hello Paragraph</code>。');
  - text: <code>p</code>元素应该有结束标记。
    testString: assert(code.match(/<\/p>/g) && code.match(/<\/p>/g).length === code.match(/<p/g).length, '<code>p</code>元素应该有结束标记。');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

    <div id='html-seed'>
```html
<h1>Hello World</h1>,<h2>CatPhotoApp</h2>
```





</div>





</section>

              
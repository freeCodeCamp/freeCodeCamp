---
id: bad87fee1348bd9aedf08833
title: Fill in the Blank with Placeholder Text
challengeType: 0

videoUrl: ''
localeTitle: Fill in the Blank with Placeholder Text
---

## Description
<section id='description'>
Web 开发者通常用<a href='http://www.ruanyifeng.com/blog/2009/04/lorem_ipsum.html'>lorem ipsum text</a>来做占位符，占位符就是占着位置的一些文字，没有实际意义。
为什么叫<code>lorem ipsum text</code>呢?是因为<code>lorem ipsum</code>是古罗马西塞罗谚语的前两个单词。
从公元16世纪开始<code>lorem ipsum text</code>就被当做占位符了，这种传统延续到了互联网时代。与此同时，孙悟空也在五指山下被压了500年，然后就进化成程序猿了，是不是很巧合。^_^
</section>

## Instructions
<section id='instructions'>
把<code>p</code>元素的内容更换为：<code>Monkey code 猴哥猴哥，你真了不得，金箍棒在手，问世间谁是英雄。</code>
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>p</code>元素的内容必须包含<code>Monkey code</code>。
    testString: assert.isTrue((/Monkey(\s)+code/gi).test($("p").text()), '<code>p</code>元素的内容必须包含<code>Monkey code</code>。');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

    <div id='html-seed'>
```html
<h1>Hello World</h1>,,<h2>CatPhotoApp</h2>,,<p>Hello Paragraph</p>
```





</div>





</section>

              
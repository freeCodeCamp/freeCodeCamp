---
id: bad87fee1348bd9aedf08833
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/cgR7Dc7'
forumTopicId: 18178
title: 用占位符文本填充空白
---

## Description
<section id='description'>
Web 开发者通常用<a href='https://baike.baidu.com/item/Lorem%20ipsum/3684081'>lorem ipsum text</a>来做占位符，占位符就是占着位置的一些文字，没有实际意义。
为什么叫<code>lorem ipsum text</code>呢?是因为<code>lorem ipsum</code>是古罗马西塞罗谚语的前两个单词。
</section>

## Instructions
<section id='instructions'>
把<code>p</code>元素的内容更换为：<code>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</code>
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>p</code>元素的内容必须包含<code>Monkey code</code>。'
    testString: assert.isTrue((/Kitty(\s)+ipsum/gi).test($("p").text()));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<h1>Hello World</h1>

<h2>CatPhotoApp</h2>

<p>Hello Paragraph</p>
```

</div>



</section>

## Solution
<section id='solution'>
</section>
              
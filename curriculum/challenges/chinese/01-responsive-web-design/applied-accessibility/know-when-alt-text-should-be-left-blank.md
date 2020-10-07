---
id: 587d774c367417b2b2512a9d
challengeType: 0
videoUrl: 'https://scrimba.com/c/cM9P4t2'
forumTopicId: 301019
title: 知道 Alt 文本何时应该留空
---

## Description
<section id='description'>
在上一个挑战中，我们了解到<code>img</code>标签必须有一个<code>alt</code>属性。在图片已经有了文字说明，或者仅仅为了美化页面的情况下，<code>alt</code>属性似乎有些多余。
即便如此，我们仍然需要为<code>img</code>标签添加<code>alt</code>属性，这时可以把它设为空，例如：
<code>&lt;img src=&quot;visualDecoration.jpeg&quot; alt=&quot;&quot;&gt;</code>
背景图片通常起装饰作用，而且含有 CSS 类，所以屏幕阅读器无法读取。
<strong>注意：</strong><br>对于有标题的图片，我们依然需要添加<code>alt</code>属性，因为这样有助于搜索引擎记录图片内容。
</section>

## Instructions
<section id='instructions'>
Camper Cat 已经大体写好了博客页面。他打算使用忍者刀图片作为两篇文章之间的分割线，并为图片添加一个空的<code>alt</code>属性（注意：这里<code>img</code>标签的<code>src</code>属性提供的链接是无效的，因此页面上可能不会显示图片，不用担心）。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '你的<code>img</code>标签应该包含<code>alt</code>属性。'
    testString: assert(!($('img').attr('alt') == undefined));
  - text: '<code>alt</code>属性对应的值应该为空。'
    testString: assert($('img').attr('alt') == '');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<h1>Deep Thoughts with Master Camper Cat</h1>
<article>
  <h2>Defeating your Foe: the Red Dot is Ours!</h2>
  <p>To Come...</p>
</article>

<img src="samuraiSwords.jpeg">

<article>
  <h2>Is Chuck Norris a Cat Person?</h2>
  <p>To Come...</p>
</article>
```

</div>



</section>

## Solution
<section id='solution'>

```html
// solution required
```

</section>
              
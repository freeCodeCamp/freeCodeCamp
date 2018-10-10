---
id: 587d774c367417b2b2512a9d
title: Know When Alt Text Should be Left Blank
challengeType: 0
videoUrl: ''
localeTitle: 知道Alt文本应该留空
---

## Description
<section id="description">在上一个挑战中，您了解到在img标记上包含<code>alt</code>属性是必需的。但是，有时图像与已经描述它们的标题分组，或仅用于装饰。在这些情况下， <code>alt</code>文本可能看似多余或不必要。在已经使用文本内容解释图像或者没有为页面添加含义的情况下， <code>img</code>仍然需要<code>alt</code>属性，但可以将其设置为空字符串。这是一个例子： <code>&lt;img src=&quot;visualDecoration.jpeg&quot; alt=&quot;&quot;&gt;</code>背景图片通常也属于“装饰”标签。但是，它们通常应用CSS规则，因此不是标记屏幕阅读器进程的一部分。 <strong>注意</strong> <br>对于带有标题的图像，您可能仍希望包含<code>alt</code>文本，因为它有助于搜索引擎对图像内容进行编目。 </section>

## Instructions
<section id="instructions"> Camper Cat已为其网站的博客部分编写了一个骨架页面。他计划在他的两篇文章之间用武士刀的装饰图像添加一个视觉中断。将<code>alt</code>属性添加到<code>img</code>标记并将其设置为空字符串。 （请注意，图像<code>src</code>不会链接到实际文件 - 不要担心显示屏中没有显示剑。） </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 你的<code>img</code>标签应该有一个<code>alt</code>属性。
    testString: 'assert(!($("img").attr("alt") == undefined), "Your <code>img</code> tag should have an <code>alt</code> attribute.");'
  - text: <code>alt</code>属性应设置为空字符串。
    testString: 'assert($("img").attr("alt") == "", "The <code>alt</code> attribute should be set to an empty string.");'

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

```js
// solution required
```
</section>

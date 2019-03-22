---
id: bad87fee1348bd9aedf08827
title: Create a Bulleted Unordered List
challengeType: 0
videoUrl: ''
localeTitle: 创建项目符号无序列表
---

## Description
<section id="description"> HTML具有用于创建<code>unordered lists</code>或项目符号样式列表的特殊元素。无序列表以开头<code>&lt;ul&gt;</code>元素开头，后跟任意数量的<code>&lt;li&gt;</code>元素。最后，无序列表以<code>&lt;/ul&gt;</code>结尾例如： <blockquote> &lt;UL&gt; <br> &lt;LI&gt;乳&lt;/ LI&gt; <br> &lt;LI&gt;干酪&lt;/ LI&gt; <br> &lt;/ UL&gt; </blockquote>会创建一个“牛奶”和“奶酪”的子弹点样式列表。 </section>

## Instructions
<section id="instructions">删除最后两个<code>p</code>元素，并在页面底部创建猫喜爱的三件事的无序列表。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 创建一个<code>ul</code>元素。
    testString: 'assert($("ul").length > 0, "Create a <code>ul</code> element.");'
  - text: 你的<code>ul</code>元素中应该有三个<code>li</code>元素。
    testString: 'assert($("ul li").length > 2, "You should have three <code>li</code> elements within your <code>ul</code> element.");'
  - text: 确保你的<code>ul</code>元素有一个结束标记。
    testString: 'assert(code.match(/<\/ul>/gi) && code.match(/<ul/gi) && code.match(/<\/ul>/gi).length === code.match(/<ul/gi).length, "Make sure your <code>ul</code> element has a closing tag.");'
  - text: 确保您的<code>li</code>元素具有结束标记。
    testString: 'assert(code.match(/<\/li>/gi) && code.match(/<li[\s>]/gi) && code.match(/<\/li>/gi).length === code.match(/<li[\s>]/gi).length, "Make sure your <code>li</code> elements have closing tags.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<h2>CatPhotoApp</h2>
<main>
  <p>Click here to view more <a href="#">cat photos</a>.</p>

  <a href="#"><img src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>

  <p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
  <p>Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</p>
</main>

```

</div>



</section>

## Solution
<section id='solution'>

```js
<h2>CatPhotoApp</h2>
<main>
  <p>Click here to view more <a href="#">cat photos</a>.</p>
  
  <a href="#"><img src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>
  
 Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.
 Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.
  <ul>
    <li>milk</li>
    <li>food</li>
    <li>toys</li>
  </ul>
</main>
```
</section>

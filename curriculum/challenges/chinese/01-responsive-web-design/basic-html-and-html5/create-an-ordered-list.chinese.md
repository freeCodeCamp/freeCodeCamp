---
id: bad87fee1348bd9aedf08828
title: Create an Ordered List
challengeType: 0
videoUrl: ''
localeTitle: 创建有序列表
---

## Description
<section id="description"> HTML还有另一个用于创建<code>ordered lists</code>或编号列表的特殊元素。有序列表以开头<code>&lt;ol&gt;</code>元素开头，后跟任意数量的<code>&lt;li&gt;</code>元素。最后，有序列表以<code>&lt;/ol&gt;</code>结尾例如： <blockquote> &lt;OL&gt; <br> &lt;LI&gt;加菲尔德&lt;/ LI&gt; <br> &lt;LI&gt;西尔威斯特&lt;/ LI&gt; <br> &lt;/醇&gt; </blockquote>将创建一个编号列表“加菲猫”和“西尔维斯特”。 </section>

## Instructions
<section id="instructions">创建猫最讨厌的前三件事的有序列表。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 你应该有一个“猫讨厌的三件事”的有序列表：
    testString: 'assert((/Top 3 things cats hate:/i).test($("ol").prev().text()), "You should have an ordered list for "Top 3 things cats hate:"");'
  - text: 你应该有一个无序的列表“猫爱的东西：”
    testString: 'assert((/Things cats love:/i).test($("ul").prev().text()), "You should have an unordered list for "Things cats love:"");'
  - text: 你应该只有一个<code>ul</code>元素。
    testString: 'assert.equal($("ul").length, 1, "You should have only one <code>ul</code> element.");'
  - text: 你应该只有一个<code>ol</code>元素。
    testString: 'assert.equal($("ol").length, 1, "You should have only one <code>ol</code> element.");'
  - text: 你的<code>ul</code>元素中应该有三个<code>li</code>元素。
    testString: 'assert.equal($("ul li").length, 3, "You should have three <code>li</code> elements within your <code>ul</code> element.");'
  - text: 你的<code>ol</code>元素中应该有三个<code>li</code>元素。
    testString: 'assert.equal($("ol li").length, 3, "You should have three <code>li</code> elements within your <code>ol</code> element.");'
  - text: 确保你的<code>ul</code>元素有一个结束标记。
    testString: 'assert(code.match(/<\/ul>/g) && code.match(/<\/ul>/g).length === code.match(/<ul>/g).length, "Make sure your <code>ul</code> element has a closing tag.");'
  - text: 确保您的<code>ol</code>元素具有结束标记。
    testString: 'assert(code.match(/<\/ol>/g) && code.match(/<\/ol>/g).length === code.match(/<ol>/g).length, "Make sure your <code>ol</code> element has a closing tag.");'
  - text: ''
    testString: 'assert(code.match(/<\/li>/g) && code.match(/<li>/g) && code.match(/<\/li>/g).length === code.match(/<li>/g).length, "Make sure your <code>li</code> element has a closing tag.");'

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

  <p>Things cats love:</p>
  <ul>
    <li>cat nip</li>
    <li>laser pointers</li>
    <li>lasagna</li>
  </ul>
  <p>Top 3 things cats hate:</p>

</main>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

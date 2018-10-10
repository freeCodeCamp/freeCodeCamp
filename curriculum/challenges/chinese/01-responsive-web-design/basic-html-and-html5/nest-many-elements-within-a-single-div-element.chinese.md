---
id: bad87fee1348bd9aede08835
title: Nest Many Elements within a Single div Element
challengeType: 0
videoUrl: ''
localeTitle: 在单个div元素中嵌套许多元素
---

## Description
<section id="description"> <code>div</code>元素也称为除法元素，是其他元素的通用容器。 <code>div</code>元素可能是所有人中最常用的HTML元素。就像任何其他非自闭元素一样，您可以使用<code>&lt;div&gt;</code>打开<code>div</code>元素，然后使用<code>&lt;/div&gt;</code>其关闭到另一行。 </section>

## Instructions
<section id="instructions">嵌套你的“猫喜欢的东西”和“猫讨厌的东西”列出了一个<code>div</code>元素。提示：尝试将您的开始<code>div</code>标记放在“Things cats love” <code>p</code>元素上方，并将结束的<code>div</code>标记放在结束的<code>ol</code>标记之后，这样两个列表都在一个<code>div</code> 。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 将<code>p</code>元素嵌套在<code>div</code>元素中。
    testString: 'assert($("div").children("p").length > 1, "Nest your <code>p</code> elements inside your <code>div</code> element.");'
  - text: 将您的<code>ul</code>元素<code>div</code>元素中。
    testString: 'assert($("div").children("ul").length > 0, "Nest your <code>ul</code> element inside your <code>div</code> element.");'
  - text: 将您的<code>ol</code>元素<code>div</code>元素中。
    testString: 'assert($("div").children("ol").length > 0, "Nest your <code>ol</code> element inside your <code>div</code> element.");'
  - text: 确保你的<code>div</code>元素有一个结束标记。
    testString: 'assert(code.match(/<\/div>/g) && code.match(/<\/div>/g).length === code.match(/<div>/g).length, "Make sure your <code>div</code> element has a closing tag.");'

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
  <ol>
    <li>flea treatment</li>
    <li>thunder</li>
    <li>other cats</li>
  </ol>

  <form action="/submit-cat-photo">
    <label><input type="radio" name="indoor-outdoor" checked> Indoor</label>
    <label><input type="radio" name="indoor-outdoor"> Outdoor</label><br>
    <label><input type="checkbox" name="personality" checked> Loving</label>
    <label><input type="checkbox" name="personality"> Lazy</label>
    <label><input type="checkbox" name="personality"> Energetic</label><br>
    <input type="text" placeholder="cat photo URL" required>
    <button type="submit">Submit</button>
  </form>
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

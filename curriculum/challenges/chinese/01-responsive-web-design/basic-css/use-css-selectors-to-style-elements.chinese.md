---
id: bad87fee1348bd9aedf08805
title: Use CSS Selectors to Style Elements
challengeType: 0
videoUrl: ''
localeTitle: 使用CSS选择器设置样式元素
---

## Description
<section id="description">使用CSS，您可以使用数百种CSS <code>properties</code>来更改元素在页面上的显示方式。当您输入<code>&lt;h2 style=&quot;color: red;&quot;&gt;CatPhotoApp&lt;/h2&gt;</code> ，您使用<code>inline CSS</code> （代表<code>Cascading Style Sheets</code>对单个<code>h2</code>元素进行<code>Cascading Style Sheets</code> 。这是指定元素样式的一种方法，但有一种更好的方法来应用<code>CSS</code> 。在代码的顶部，创建一个<code>style</code>块，如下所示： <blockquote> &lt;风格&gt; <br> &lt;/样式&gt; </blockquote>在该样式块中，您可以为所有<code>h2</code>元素创建<code>CSS selector</code> 。例如，如果您希望所有<code>h2</code>元素都是红色，则可以添加如下所示的样式规则： <blockquote> &lt;风格&gt; <br> h2 {color：red;} <br> &lt;/样式&gt; </blockquote>请注意，在每个元素的样式规则周围同时打开和关闭花括号（ <code>{</code>和<code>}</code> ）非常重要。您还需要确保元素的样式定义位于开始和结束样式标记之间。最后，请务必在每个元素的样式规则的末尾添加分号。 </section>

## Instructions
<section id="instructions">删除<code>h2</code>元素的样式属性，而不是创建CSS <code>style</code>块。添加必要的CSS以将所有<code>h2</code>元素变为蓝色。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 測試文本
    testString: assert(true);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<h2 style="color: red;">CatPhotoApp</h2>
<main>
  <p>Click here to view more <a href="#">cat photos</a>.</p>

  <a href="#"><img src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>

  <div>
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
  </div>

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

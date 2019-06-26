---
id: bad87fee1348bd9aecf08806
title: Use a CSS Class to Style an Element
challengeType: 0
videoUrl: ''
localeTitle: 使用CSS类来设置元素的样式
---

## Description
<section id="description">类是可重用的样式，可以添加到HTML元素中。这是一个CSS类声明示例： <blockquote> &lt;风格&gt; <br> .blue-text { <br>颜色：蓝色; <br> } <br> &lt;/样式&gt; </blockquote>您可以看到我们在<code>&lt;style&gt;</code>标记内创建了一个名为<code>blue-text</code>的CSS类。您可以将类应用于HTML元素，如下所示： <code>&lt;h2 class=&quot;blue-text&quot;&gt;CatPhotoApp&lt;/h2&gt;</code>请注意，在CSS <code>style</code>元素中，类名以句点开头。在HTML元素的class属性中，类名不包含句点。 </section>

## Instructions
<section id="instructions">在<code>style</code>元素中，将<code>h2</code>选择器更改为<code>.red-text</code>并将颜色的值从<code>blue</code>更新为<code>red</code> 。为您的<code>h2</code>元素提供值为<code>&#39;red-text&#39;</code>的<code>class</code>属性。 </section>

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
<style>
  h2 {
    color: blue;
  }
</style>

<h2>CatPhotoApp</h2>
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

---
id: bad87fee1348bd9aedf08835
title: Create a Set of Checkboxes
challengeType: 0
videoUrl: ''
localeTitle: 创建一组复选框
---

## Description
<section id="description">表单通常使用<code>checkboxes</code>来表示可能有多个答案的问题。复选框是一种类型的<code>input</code>您的每一个复选框可以嵌套自身的内<code>label</code>元素。通过将<code>input</code>元素包装在<code>label</code>元素内部，它将自动将复选框输入与其周围的标签元素相关联。所有相关的复选框输入应具有相同的<code>name</code>属性。通过在<code>label</code>元素上设置<code>for</code>属性以匹配关联<code>input</code>元素的<code>id</code>属性，最佳做法是明确定义复选框<code>input</code>与其对应<code>label</code>之间的关系。这是一个复选框的示例： <code>&lt;label for=&quot;loving&quot;&gt;&lt;input id=&quot;loving&quot; type=&quot;checkbox&quot; name=&quot;personality&quot;&gt; Loving&lt;/label&gt;</code> </section>

## Instructions
<section id="instructions">在表单中添加一组三个复选框。每个复选框应嵌套在自己的<code>label</code>元素中。这三者都应该分享<code>personality</code>的<code>name</code>属性。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 您的页面应该有三个复选框元素。
    testString: 'assert($("input[type="checkbox"]").length > 2, "Your page should have three checkbox elements.");'
  - text: 三个复选框元素中的每一个都应嵌套在自己的<code>label</code>元素中。
    testString: 'assert($("label > input[type="checkbox"]:only-child").length > 2, "Each of your three checkbox elements should be nested in its own <code>label</code> element.");'
  - text: 确保每个<code>label</code>元素都有一个结束标记。
    testString: 'assert(code.match(/<\/label>/g) && code.match(/<label/g) && code.match(/<\/label>/g).length === code.match(/<label/g).length, "Make sure each of your <code>label</code> elements has a closing tag.");'
  - text: 为您的复选框提供<code>personality</code>的<code>name</code>属性。
    testString: 'assert($("label > input[type="checkbox"]").filter("[name="personality"]").length > 2, "Give your checkboxes the <code>name</code> attribute of <code>personality</code>.");'

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
    <label for="indoor"><input id="indoor" type="radio" name="indoor-outdoor"> Indoor</label>
    <label for="outdoor"><input id="outdoor" type="radio" name="indoor-outdoor"> Outdoor</label><br>
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

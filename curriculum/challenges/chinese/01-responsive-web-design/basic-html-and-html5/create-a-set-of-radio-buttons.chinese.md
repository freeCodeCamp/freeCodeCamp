---
id: bad87fee1348bd9aedf08834
title: Create a Set of Radio Buttons
challengeType: 0
videoUrl: ''
localeTitle: 创建一组单选按钮
---

## Description
<section id="description">您可以使用<code>radio buttons</code>来解决您希望用户仅从多个选项中给出一个答案的问题。单选按钮是一种<code>input</code> 。每个单选按钮都可以嵌套在自己的<code>label</code>元素中。通过将<code>input</code>元素包装在<code>label</code>元素内部，它将自动将单选按钮输入与其周围的标签元素相关联。所有相关的单选按钮应具有相同的<code>name</code>属性以创建单选按钮组。通过创建无线电组，选择任何单个单选按钮将自动取消选择同一组内的其他按钮，确保用户只提供一个答案。这是一个单选按钮的示例： <blockquote> &lt;标签&gt; <br> &lt;input type =“radio”name =“indoor-outdoor”&gt;室内<br> &lt;/标签&gt; </blockquote>最佳做法是在<code>label</code>元素上设置<code>for</code>属性，其值与<code>input</code>元素的<code>id</code>属性值相匹配。这允许辅助技术在标签和子<code>input</code>元素之间创建链接关系。例如： <blockquote> &lt;label for =“室内”&gt; <br> &lt;input id =“indoor”type =“radio”name =“indoor-outdoor”&gt;室内<br> &lt;/标签&gt; </blockquote></section>

## Instructions
<section id="instructions">在表单中添加一对单选按钮，每个按钮都嵌套在自己的标签元素中。一个应该有<code>indoor</code>选择，另一个应该可以选择<code>outdoor</code> 。两者都应该共享<code>indoor-outdoor</code>的<code>name</code>属性来创建一个无线电组。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 您的页面应该有两个单选按钮元素。
    testString: 'assert($("input[type="radio"]").length > 1, "Your page should have two radio button elements.");'
  - text: 为您的单选按钮提供<code>indoor-outdoor</code>的<code>name</code>属性。
    testString: 'assert($("label > input[type="radio"]").filter("[name="indoor-outdoor"]").length > 1, "Give your radio buttons the <code>name</code> attribute of <code>indoor-outdoor</code>.");'
  - text: 两个单选按钮元素中的每一个都应嵌套在自己的<code>label</code>元素中。
    testString: 'assert($("label > input[type="radio"]:only-child").length > 1, "Each of your two radio button elements should be nested in its own <code>label</code> element.");'
  - text: 确保每个<code>label</code>元素都有一个结束标记。
    testString: 'assert((code.match(/<\/label>/g) && code.match(/<label/g) && code.match(/<\/label>/g).length === code.match(/<label/g).length), "Make sure each of your <code>label</code> elements has a closing tag.");'
  - text: 您的一个单选按钮应该是<code>indoor</code>标签。
    testString: 'assert($("label").text().match(/indoor/gi), "One of your radio buttons should have the label <code>indoor</code>.");'
  - text: 您的一个单选按钮应该是<code>outdoor</code>标签。
    testString: 'assert($("label").text().match(/outdoor/gi), "One of your radio buttons should have the label <code>outdoor</code>.");'
  - text: 应在<code>form</code>标记中添加每个单选按钮元素。
    testString: 'assert($("label").parent().get(0).tagName.match("FORM"), "Each of your radio button elements should be added within the <code>form</code> tag.");'

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

---
id: 587d778a367417b2b2512aa6
title: Improve Form Field Accessibility with the label Element
challengeType: 0
videoUrl: ''
localeTitle: 使用标签元素改进表单字段可访问性
---

## Description
<section id="description">使用语义HTML标记提高可访问性适用于使用适当的标记名称和属性。接下来的几个挑战包括使用表单中的属性的一些重要场景。 <code>label</code>标签包装特定表单控件项的文本，通常是选项的名称或标签。这与项目的意义联系在一起，使表单更具可读性。 <code>label</code>标签上的<code>for</code>属性明确地将该<code>label</code>与表单控件相关联，并由屏幕阅读器使用。您在“基本HTML”部分的课程中了解了单选按钮及其标签。在该课程中，我们将单选按钮输入元素与标签文本一起包装在<code>label</code>元素中，以使文本可单击。另一种实现此目的的方法是使用本课程中介绍的<code>for</code>属性。 <code>for</code>属性的值必须与表单控件的<code>id</code>属性的值相同。这是一个例子： <blockquote> &lt;FORM&gt; <br> &lt;label for =“name”&gt;名称：&lt;/ label&gt; <br> &lt;input type =“text”id =“name”name =“name”&gt; <br> &lt;/ FORM&gt; <br></blockquote></section>

## Instructions
<section id="instructions"> Camper Cat期望对他有思想的博客文章感兴趣，并希望包含一个电子邮件注册表单。在电子邮件<code>label</code>上添加与其<code>input</code>字段中的<code>id</code>匹配的<code>for</code>属性。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 您的代码应该在<code>label</code>标签上具有非空的<code>for</code>属性。
    testString: 'assert($("label").attr("for"), "Your code should have a <code>for</code> attribute on the <code>label</code> tag that is not empty.");'
  - text: 您的<code>for</code>属性值应与电子邮件<code>input</code>中的<code>id</code>值匹配。
    testString: 'assert($("label").attr("for") == "email", "Your <code>for</code> attribute value should match the <code>id</code> value on the email <code>input</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<body>
  <header>
    <h1>Deep Thoughts with Master Camper Cat</h1>
  </header>
  <section>
    <form>
      <p>Sign up to receive Camper Cat's blog posts by email here!</p>


      <label>Email:</label>
      <input type="text" id="email" name="email">


      <input type="submit" name="submit" value="Submit">
    </form>
  </section>
  <article>
    <h2>The Garfield Files: Lasagna as Training Fuel?</h2>
    <p>The internet is littered with varying opinions on nutritional paradigms, from catnip paleo to hairball cleanses. But let's turn our attention to an often overlooked fitness fuel, and examine the protein-carb-NOM trifecta that is lasagna...</p>
  </article>
  <img src="samuraiSwords.jpeg" alt="">
  <article>
    <h2>Defeating your Foe: the Red Dot is Ours!</h2>
    <p>Felines the world over have been waging war on the most persistent of foes. This red nemesis combines both cunning stealth and lightening speed. But chin up, fellow fighters, our time for victory may soon be near...</p>
  </article>
  <img src="samuraiSwords.jpeg" alt="">
  <article>
    <h2>Is Chuck Norris a Cat Person?</h2>
    <p>Chuck Norris is widely regarded as the premier martial artist on the planet, and it's a complete coincidence anyone who disagrees with this fact mysteriously disappears soon after. But the real question is, is he a cat person?...</p>
  </article>
  <footer>&copy; 2018 Camper Cat</footer>
</body>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

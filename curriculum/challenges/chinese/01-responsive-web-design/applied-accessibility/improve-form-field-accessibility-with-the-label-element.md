---
id: 587d778a367417b2b2512aa6
challengeType: 0
videoUrl: 'https://scrimba.com/c/cGJMMAN'
forumTopicId: 301016
title: 使用 label 元素提高表单的可访问性
---

## Description
<section id='description'>
合理地使用语义化的 HTML 标签和属性可以提升页面可访问性。在接下来的挑战中，你将会看到使用表单属性的重要场景。
<code>label</code>标签用于呈现特定表单控件的文本，通常是选项的名称。这些文本代表了选项的含义，使表单具有更好的可读性。<code>label</code>标签的<code>for</code>属性指定了与<code>label</code>绑定的表单控件，并且屏幕阅读器也会读取<code>for</code>属性。
在 HTML 基础章节的课程中，我们已经了解了单选按钮标签。在那节课程中，我们为了可以点击单选按钮的名称，将<code>input</code>标签放在<code>label</code>标签中。在本节课程中，我们介绍了另外一种实现这个功能的方法，那就是使用<code>for</code>属性。
<code>for</code>属性的值必须与表单控件的<code>id</code>属性的值相同。举个例子：

```html
<form>
  <label for="name">Name:</label>
  <input type="text" id="name" name="name">
</form>
```

</section>

## Instructions
<section id='instructions'>
Camper Cat 希望他的博客文章能有很多订阅，他想添加一个电子邮件注册表单。请为表示电子邮件的<code>label</code>标签添加<code>for</code>属性，并设置属性值与<code>input</code>标签的<code>id</code>属性值相同。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '你的<code>label</code>标签应该有 1 个非空的<code>for</code>属性。'
    testString: assert($('label').attr('for'));
  - text: '<code>for</code>属性的值应该与<code>input</code>标签的 id 值 email 相同。'
    testString: assert($('label').attr('for') == 'email');

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
    <p>Felines the world over have been waging war on the most persistent of foes. This red nemesis combines both cunning stealth and lightning speed. But chin up, fellow fighters, our time for victory may soon be near...</p>
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

```html
// solution required
```

</section>
              
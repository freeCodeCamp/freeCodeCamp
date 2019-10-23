---
id: 587d778b367417b2b2512aa7
title: Wrap Radio Buttons in a fieldset Element for Better Accessibility
challengeType: 0
videoUrl: ''
localeTitle: 在字段集元素中包裹单选按钮以获得更好的可访问性
---

## Description
<section id="description">下一个表单主题包括单选按钮的可访问性。每个选项都有一个<code>label</code>其中一个<code>for</code>属性与最后一个挑战中涵盖的相应项目的<code>id</code>相关联。由于单选按钮通常位于用户必须选择一个的组中，因此有一种方法可以在语义上显示选项是一组的一部分。 <code>fieldset</code>标记围绕整个单选按钮组以实现此目的。它通常使用<code>legend</code>标记来提供分组的描述，屏幕阅读器可以为<code>fieldset</code>元素中的每个选项读取该描述。当选项不言自明时，如性别选择，则不需要<code>fieldset</code>包装器和<code>legend</code>标签。使用带有每个单选按钮的<code>for</code>属性的<code>label</code>就足够了。这是一个例子： <blockquote> &lt;FORM&gt; <br> &lt;字段集&gt; <br> &lt;legend&gt;选择以下三个项目之一：&lt;/ legend&gt; <br> &lt;input id =“one”type =“radio”name =“items”value =“one”&gt; <br> &lt;label for =“one”&gt; Choice One &lt;/ label&gt; &lt;br&gt; <br> &lt;input id =“two”type =“radio”name =“items”value =“two”&gt; <br> &lt;label for =“two”&gt;选择二&lt;/ label&gt; &lt;br&gt; <br> &lt;input id =“three”type =“radio”name =“items”value =“three”&gt; <br> &lt;label for =“three”&gt;选择三&lt;/ label&gt; <br> &lt;/字段集&gt; <br> &lt;/ FORM&gt; <br></blockquote></section>

## Instructions
<section id="instructions"> Camper Cat在注册其电子邮件列表时需要有关其用户的忍者级别的信息。他增加了一组单选按钮，并从我们过去的经验教训使用标签与标签<code>for</code>每个选择属性。去野营猫！但是，他的代码仍需要一些帮助。将单选按钮周围的<code>div</code>标签更改为<code>fieldset</code>标签，并将其中的<code>p</code>标签更改为<code>legend</code> 。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 您的代码应该在单选按钮集周围有一个<code>fieldset</code>标记。
    testString: 'assert($("fieldset").length == 1, "Your code should have a <code>fieldset</code> tag around the radio button set.");'
  - text: 确保您的<code>fieldset</code>元素具有结束标记。
    testString: 'assert(code.match(/<\/fieldset>/g) && code.match(/<\/fieldset>/g).length === code.match(/<fieldset>/g).length, "Make sure your <code>fieldset</code> element has a closing tag.");'
  - text: 您的代码应该在文本周围有一个<code>legend</code>标记，询问用户的忍者级别。
    testString: 'assert($("legend").length == 1, "Your code should have a <code>legend</code> tag around the text asking what level ninja a user is.");'
  - text: 您的代码不应包含任何<code>div</code>标记。
    testString: 'assert($("div").length == 0, "Your code should not have any <code>div</code> tags.");'
  - text: 你的代码不应该在文本周围有一个<code>p</code>标记，询问用户是什么级别的忍者。
    testString: 'assert($("p").length == 4, "Your code should no longer have a <code>p</code> tag around the text asking what level ninja a user is.");'

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
      <label for="email">Email:</label>
      <input type="text" id="email" name="email">


      <!-- Add your code below this line -->
      <div>
        <p>What level ninja are you?</p>
        <input id="newbie" type="radio" name="levels" value="newbie">
        <label for="newbie">Newbie Kitten</label><br>
        <input id="intermediate" type="radio" name="levels" value="intermediate">
        <label for="intermediate">Developing Student</label><br>
        <input id="master" type="radio" name="levels" value="master">
        <label for="master">Master</label>
      </div>
      <!-- Add your code above this line -->


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

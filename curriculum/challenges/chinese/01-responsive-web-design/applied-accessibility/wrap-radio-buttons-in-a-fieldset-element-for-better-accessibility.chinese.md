---
id: 587d778b367417b2b2512aa7
title: Wrap Radio Buttons in a fieldset Element for Better Accessibility
challengeType: 0

videoUrl: ''
localeTitle: Wrap Radio Buttons in a fieldset Element for Better Accessibility
---

## Description
<section id='description'>
下一个表单主题与单选按钮的可访问性有关。在上一个挑战中，单选按钮含有一个拥有<code>for</code>属性的<code>label</code>标签，<code>for</code>属性指向相关选项的<code>id</code>。然而单选按钮通常成组出现，用户必须其中选择一项。本次挑战介绍一种可以语义化呈现单选按钮组的方法。
使用<code>fieldset</code>标签将单选按钮组包含在里面就可以实现这个目的，通常还会使用<code>legend</code>标签来为单选按钮组提供文字说明。屏幕阅读器也可以朗读这些文字。
当选项的含义很明确时，如：性别选择，<code>fieldset</code>标签与<code>legend</code>标签就可以省略。这时，使用含有<code>for</code>属性的<code>label</code>标签就足够了。
举个例子：
<blockquote>&lt;form&gt;<br>&nbsp;&nbsp;&lt;fieldset&gt;<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;legend&gt;Choose one of these three items:&lt;/legend&gt;<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;input id=&quot;one&quot; type=&quot;radio&quot; name=&quot;items&quot; value=&quot;one&quot;&gt;<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;label for=&quot;one&quot;&gt;Choice One&lt;/label&gt;&lt;br&gt;<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;input id=&quot;two&quot; type=&quot;radio&quot; name=&quot;items&quot; value=&quot;two&quot;&gt;<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;label for=&quot;two&quot;&gt;Choice Two&lt;/label&gt;&lt;br&gt;<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;input id=&quot;three&quot; type=&quot;radio&quot; name=&quot;items&quot; value=&quot;three&quot;&gt;<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;label for=&quot;three&quot;&gt;Choice Three&lt;/label&gt;<br>&nbsp;&nbsp;&lt;/fieldset&gt;<br>&lt;/form&gt;<br></blockquote>
</section>

## Instructions
<section id='instructions'>
当用户使用邮件注册时，Camper Cat 想知道他们的忍者等级。通过上一个挑战的学习，Camper Cat 创建了一组单选按钮，并为每个选项的<code>label</code>标签添加了<code>for</code>属性，但是 Camper Cat 的代码依然需要你的帮助。请将包含单选按钮组的<code>div</code>标签替换为<code>fieldset</code>标签；将<code>p</code>标签替换为<code>legend</code>标签。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 你的代码应该使用 1 个<code>fieldset</code>标签包含单选按钮组。
    testString: assert($('fieldset').length == 1, '你的代码应该使用 1 个<code>fieldset</code>标签包含单选按钮组。');
  - text: 确保<code>fieldset</code>标签是闭合的。
    testString: assert(code.match(/<\/fieldset>/g) && code.match(/<\/fieldset>/g).length === code.match(/<fieldset>/g).length, '确保<code>fieldset</code>标签是闭合的。');
  - text: 你的代码应该有 1 个包含询问用户忍者等级文字的<code>legend</code>标签。
    testString: assert($('legend').length == 1, '你的代码应该有 1 个包含询问用户忍者等级文字的<code>legend</code>标签。');
  - text: 你的代码不应该含有<code>div</code>标签。
    testString: assert($('div').length == 0, '你的代码不应该含有<code>div</code>标签。');
  - text: 你的代码不应该有包含询问用户忍者等级文字的<code>p</code>标签。
    testString: assert($('p').length == 4, '你的代码不应该有包含询问用户忍者等级文字的<code>p</code>标签。');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

    <div id='html-seed'>
```html
<body>,  <header>,    <h1>Deep Thoughts with Master Camper Cat</h1>,  </header>,  <section>,    <form>,      <p>Sign up to receive Camper Cat's blog posts by email here!</p>,      <label for="email">Email:</label>,      <input type="text" id="email" name="email">,      ,      ,      <!-- Add your code below this line -->,      <div>,        <p>What level ninja are you?</p>,        <input id="newbie" type="radio" name="levels" value="newbie">,        <label for="newbie">Newbie Kitten</label><br>,        <input id="intermediate" type="radio" name="levels" value="intermediate">,        <label for="intermediate">Developing Student</label><br>,        <input id="master" type="radio" name="levels" value="master">,        <label for="master">Master</label>,      </div>,      <!-- Add your code above this line -->,      ,      ,      <input type="submit" name="submit" value="Submit">,    </form>,  </section>,  <article>,    <h2>The Garfield Files: Lasagna as Training Fuel?</h2>,    <p>The internet is littered with varying opinions on nutritional paradigms, from catnip paleo to hairball cleanses. But let's turn our attention to an often overlooked fitness fuel, and examine the protein-carb-NOM trifecta that is lasagna...</p>,  </article>,  <img src="samuraiSwords.jpeg" alt="">,  <article>,    <h2>Defeating your Foe: the Red Dot is Ours!</h2>,    <p>Felines the world over have been waging war on the most persistent of foes. This red nemesis combines both cunning stealth and lightening speed. But chin up, fellow fighters, our time for victory may soon be near...</p>,  </article>,  <img src="samuraiSwords.jpeg" alt="">,  <article>,    <h2>Is Chuck Norris a Cat Person?</h2>,    <p>Chuck Norris is widely regarded as the premier martial artist on the planet, and it's a complete coincidence anyone who disagrees with this fact mysteriously disappears soon after. But the real question is, is he a cat person?...</p>,  </article>,  <footer>&copy; 2016 Camper Cat</footer>,</body>
```





</div>





</section>

              
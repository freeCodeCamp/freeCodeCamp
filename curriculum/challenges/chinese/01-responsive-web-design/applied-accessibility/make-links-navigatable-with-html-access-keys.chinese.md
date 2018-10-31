---
id: 587d7790367417b2b2512aaf
title: Make Links Navigatable with HTML Access Keys
challengeType: 0
videoUrl: ''
localeTitle: 使链接可以使用HTML访问密钥进行导航
---

## Description
<section id="description"> HTML提供了<code>accesskey</code>属性，用于指定要激活元素或将焦点置于元素的快捷键。这可以使键盘用户的导航更有效。 HTML5允许在任何元素上使用此属性，但在与交互元素一起使用时，它特别有用。这包括链接，按钮和表单控件。这是一个例子： <code>&lt;button accesskey=&quot;b&quot;&gt;Important Button&lt;/button&gt;</code> </section>

## Instructions
<section id="instructions"> Camper Cat希望两个博客文章标题之间的链接具有键盘快捷键，这样他的网站用户就可以快速浏览完整的故事。为两个链接添加一个<code>accesskey</code>属性，并将第一个设置为“g”（对于加菲猫），将第二个设置为“c”（对于Chuck Norris）。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 您的代码应该为<code>id</code>为“first” <code>a</code>标记添加一个<code>accesskey</code>属性。
    testString: 'assert($("#first").attr("accesskey"), "Your code should add an <code>accesskey</code> attribute to the <code>a</code> tag with the <code>id</code> of "first".");'
  - text: 您的代码应该为<code>id</code>为“second” <code>a</code>标记添加一个<code>accesskey</code>属性。
    testString: 'assert($("#second").attr("accesskey"), "Your code should add an <code>accesskey</code> attribute to the <code>a</code> tag with the <code>id</code> of "second".");'
  - text: 您的代码应在<code>id</code>为“first”到“g” <code>a</code>标记上设置<code>accesskey</code>属性。请注意，案件很重要。
    testString: 'assert($("#first").attr("accesskey") == "g", "Your code should set the <code>accesskey</code> attribute on the <code>a</code> tag with the <code>id</code> of "first" to "g". Note that case matters.");'
  - text: 您的代码应设置<code>accesskey</code>的属性<code>a</code>标签与<code>id</code> “第二”到“C”的。请注意，案件很重要。
    testString: 'assert($("#second").attr("accesskey") == "c", "Your code should set the <code>accesskey</code> attribute on the <code>a</code> tag with the <code>id</code> of "second" to "c". Note that case matters.");'

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
  <article>


    <h2><a id="first" href="">The Garfield Files: Lasagna as Training Fuel?</a></h2>


    <p>The internet is littered with varying opinions on nutritional paradigms, from catnip paleo to hairball cleanses. But let's turn our attention to an often overlooked fitness fuel, and examine the protein-carb-NOM trifecta that is lasagna...</p>
  </article>
  <article>


    <h2><a id="second" href="">Is Chuck Norris a Cat Person?</a></h2>


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

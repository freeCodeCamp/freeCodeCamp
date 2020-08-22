---
id: 587d7790367417b2b2512aaf
title: Make Links Navigable with HTML Access Keys
challengeType: 0
videoUrl: 'https://scrimba.com/c/cQvmaTp'
forumTopicId: 1
localeTitle: 通过给元素添加 accesskey 属性来让用户可以在链接之间快速导航
---

## Description
<section id='description'>
HTML 提供<code>accesskey</code>属性，用于指定激活标签或者使标签获得焦点的快捷键，这可以使键盘用户的导航更加便捷。
HTML5 允许在任何标签上使用这个属性。该属性  （如链接、按钮、表单控件等）十分有用。
举个例子：
<code>&lt;button accesskey=&quot;b&quot;&gt;Important Button&lt;/button&gt;</code>
</section>

## Instructions
<section id='instructions'>
Camper Cat 希望为他的两篇博客的标题的链接设置快捷键，以使用户可以快速导航到文章的全文。请为这两个链接添加<code>accesskey</code>属性，并将第一个设置为 "g"（表示 Garfield），第二个设置为 "c"（表示 Chuck Norris）。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '你应该为<code>id</code>是 "first" 的<code>a</code>标签添加<code>accesskey</code>属性。'
    testString: assert($('#first').attr('accesskey'));
  - text: '你应该为<code>id</code>是 "second" 的<code>a</code>标签添加<code>accesskey</code>属性。'
    testString: assert($('#second').attr('accesskey'));
  - text: '你应该将<code>id</code>是 "first" 的<code>a</code>标签的<code>accesskey</code>属性值设置为小写 "g"。'
    testString: assert($('#first').attr('accesskey') == 'g');
  - text: '你应该将<code>id</code>是 "second" 的<code>a</code>标签的<code>accesskey</code>属性值设置为小写 "c"。'
    testString: assert($('#second').attr('accesskey') == 'c');

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

```html
// solution required
```

</section>
              
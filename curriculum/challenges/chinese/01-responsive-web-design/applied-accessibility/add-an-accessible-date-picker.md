---
id: 587d778b367417b2b2512aa8
title: Add an Accessible Date Picker
challengeType: 0
videoUrl: 'https://scrimba.com/c/cR3bRbCV'
forumTopicId: 301008
localeTitle: 添加可访问的日期选择器
---

## Description
<section id='description'>
表单中经常出现<code>input</code>标签，它可以用来创建多种表单控件。它的<code>type</code>属性指定了所要创建的<code>input</code>标签类型。
在以前的挑战中，你可能已经见过<code>text</code>与<code>submit</code>类型的<code>input</code>标签，HTML5 引入了<code>date</code>类型来创建时间选择器。依赖于浏览器的支持，当点击<code>input</code>标签时，时间选择器会显示出来，这可以让用户填写表单更加容易。
对于旧版本的浏览器，<code>type</code>属性的默认值是<code>text</code>。这种情况下，可以利用<code>label</code>标签或者占位文本来提示用户<code>input</code>标签的输入类型为日期。
举个例子：

```html
<label for="input1">Enter a date:</label>
<input type="date" id="input1" name="input1">
```

</section>

## Instructions
<section id='instructions'>
Camper Cat 想举办一场比武大会，他想收集参赛者的最佳参赛时间。请为 Camper Cat 的页面添加一个<code>input</code>标签，其<code>type</code>属性值为 date，<code>id</code>属性为 pickdate，<code>name</code>属性为 date。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '你的代码中应该有 1 个<code>input</code>标签。'
    testString: assert($('input').length == 2);
  - text: '你的<code>input</code>标签的<code>type</code>属性值应该为 date。'
    testString: assert($('input').attr('type') == 'date');
  - text: '你的<code>input</code>标签的<code>id</code>属性值应该为 pickdate。'
    testString: assert($('input').attr('id') == 'pickdate');
  - text: '你的<code>input</code>标签的<code>name</code>属性值应该为 date。'
    testString: assert($('input').attr('name') == 'date');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<body>
  <header>
    <h1>Tournaments</h1>
  </header>
  <main>
    <section>
      <h2>Mortal Kombat Tournament Survey</h2>
      <form>
        <p>Tell us the best date for the competition</p>
        <label for="pickdate">Preferred Date:</label>
        
        <!-- Add your code below this line -->



        <!-- Add your code above this line -->
        
        <input type="submit" name="submit" value="Submit">
      </form>
    </section>
  </main>
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
              
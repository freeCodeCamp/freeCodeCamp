---
id: 587d778b367417b2b2512aa8
title: Add an Accessible Date Picker
challengeType: 0
videoUrl: ''
localeTitle: 添加无障碍日期选择器
---

## Description
<section id="description">表单通常包含<code>input</code>字段，可用于创建多个不同的表单控件。此元素的<code>type</code>属性指示将创建哪种输入。您可能已经注意到<code>text</code>并在先前的挑战中<code>submit</code>输入类型，HTML5引入了一个指定<code>date</code>字段的选项。根据浏览器支持，当日期选择器处于焦点时，它会在<code>input</code>字段中显示，这使得所有用户都可以更轻松地填写表单。对于旧版浏览器，该类型将默认为<code>text</code> ，因此有助于向用户显示标签中的预期日期格式或以及占位符文本以防万一。这是一个例子： <blockquote> &lt;label for =“input1”&gt;输入日期：&lt;/ label&gt; <br> &lt;input type =“date”id =“input1”name =“input1”&gt; <br></blockquote></section>

## Instructions
<section id="instructions"> Camper Cat正在举办一场真人快打比赛，并想让他的竞争对手看看哪个日期效果最佳。添加一个<code>input</code>标记，其<code>type</code>属性为“date”， <code>id</code>属性为“pickdate”， <code>name</code>属性为“date”。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 您的代码应为日期选择器字段添加一个<code>input</code>标记。
    testString: 'assert($("input").length == 2, "Your code should add one <code>input</code> tag for the date selector field.");'
  - text: 您的<code>input</code>标记应具有值为date的<code>type</code>属性。
    testString: 'assert($("input").attr("type") == "date", "Your <code>input</code> tag should have a <code>type</code> attribute with a value of date.");'
  - text: 您的<code>input</code>标记应具有值为pickdate的<code>id</code>属性。
    testString: 'assert($("input").attr("id") == "pickdate", "Your <code>input</code> tag should have an <code>id</code> attribute with a value of pickdate.");'
  - text: 您的<code>input</code>标记应具有值为date的<code>name</code>属性。
    testString: 'assert($("input").attr("name") == "date", "Your <code>input</code> tag should have a <code>name</code> attribute with a value of date.");'

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

```js
// solution required
```
</section>

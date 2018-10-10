---
id: 587d7790367417b2b2512ab1
title: Use tabindex to Specify the Order of Keyboard Focus for Several Elements
challengeType: 0
videoUrl: ''
localeTitle: 使用tabindex指定多个元素的键盘焦点顺序
---

## Description
<section id="description"> <code>tabindex</code>属性还指定元素的确切Tab键顺序。当属性的值被设置为1或更高的正数时，可以实现这一点。设置tabindex =“1”将首先将键盘焦点放在该元素上。然后循环显示指定<code>tabindex</code>值（2,3等）的序列，然后移至默认值和<code>tabindex=&quot;0&quot;</code>项。重要的是要注意，当以这种方式设置Tab键顺序时，它会覆盖默认顺序（使用HTML源）。这可能会使期望从页面顶部开始导航的用户感到困惑。在某些情况下，这种技术可能是必要的，但就可访问性而言，在应用之前要小心。这是一个例子： <code>&lt;div tabindex=&quot;1&quot;&gt;I get keyboard focus, and I get it first!&lt;/div&gt;</code> <code>&lt;div tabindex=&quot;2&quot;&gt;I get keyboard focus, and I get it second!&lt;/div&gt;</code> </section>

## Instructions
<section id="instructions"> Camper Cat在他的Inspirational Quotes页面上有一个搜索字段，他计划使用CSS在右上角定位。他希望搜索<code>input</code>并将<code>input</code>表单控件提交为Tab键顺序中的前两项。将<code>tabindex</code>属性设置为“1”到搜索<code>input</code> ， <code>tabindex</code>属性设置为“2”到提交<code>input</code> 。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 您的代码应该向搜索<code>input</code>标记添加<code>tabindex</code>属性。
    testString: 'assert($("#search").attr("tabindex"), "Your code should add a <code>tabindex</code> attribute to the search <code>input</code> tag.");'
  - text: 您的代码应该向提交<code>input</code>标记添加<code>tabindex</code>属性。
    testString: 'assert($("#submit").attr("tabindex"), "Your code should add a <code>tabindex</code> attribute to the submit <code>input</code> tag.");'
  - text: 您的代码应将搜索<code>input</code>标记上的<code>tabindex</code>属性设置为值1。
    testString: 'assert($("#search").attr("tabindex") == "1", "Your code should set the <code>tabindex</code> attribute on the search <code>input</code> tag to a value of 1.");'
  - text: 您的代码应将submit <code>input</code>标记上的<code>tabindex</code>属性设置为值2。
    testString: 'assert($("#submit").attr("tabindex") == "2", "Your code should set the <code>tabindex</code> attribute on the submit <code>input</code> tag to a value of 2.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<body>
  <header>
    <h1>Even Deeper Thoughts with Master Camper Cat</h1>
    <nav>
      <ul>
        <li><a href="">Home</a></li>
        <li><a href="">Blog</a></li>
        <li><a href="">Training</a></li>
      </ul>
    </nav>
  </header>
  <form>
    <label for="search">Search:</label>


    <input type="search" name="search" id="search">
    <input type="submit" name="submit" value="Submit" id="submit">


  </form>
  <h2>Inspirational Quotes</h2>
  <blockquote>
    <p>&ldquo;There's no Theory of Evolution, just a list of creatures I've allowed to live.&rdquo;<br>
    - Chuck Norris</p>
  </blockquote>
  <blockquote>
    <p>&ldquo;Wise men say forgiveness is divine, but never pay full price for late pizza.&rdquo;<br>
    - TMNT</p>
  </blockquote>
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

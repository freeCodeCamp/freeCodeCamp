---
id: 587d7790367417b2b2512ab1
challengeType: 0
videoUrl: 'https://scrimba.com/c/cmzRRcb'
forumTopicId: 301028
title: 使用 tabindex 指定多个元素的键盘焦点顺序
---

## Description
<section id='description'>
<code>tabindex</code>属性还可以指定标签的 tab 键顺序，将它的值设置为大于或等于 1 就可以实现这个功能。
<code>tabindex</code>属性值为 1 的标签将首先获得键盘焦点，然后焦点将按照指定的<code>tabindex</code>的值（如：2，3 等）的顺序进行移动，直到回到默认的或<code>tabindex</code>值为 0 的标签上，如此循环。
需要注意的是，当按照这种方式设置 tab 键顺序时，将会覆盖默认的顺序（标签在文档流中出现的顺序）。这可能会令那些希望从页面顶部开始导航的用户感到困惑。这个技术在某些情况下可能是必要的，但是对可访问性而言，在应用时要十分小心。
举个例子：
<code>&lt;div tabindex=&quot;1&quot;&gt;I get keyboard focus, and I get it first!&lt;/div&gt;</code>
<code>&lt;div tabindex=&quot;2&quot;&gt;I get keyboard focus, and I get it second!&lt;/div&gt;</code>
</section>

## Instructions
<section id='instructions'>
Camper Cat 在他的励志名言页面中有一个搜索区域，他打算使用 CSS 将这个区域定位在页面的右上角。Camper Cat 希望他的搜索<code>input</code>与提交<code>input</code>表单控件是 tab 键顺序的前两项。请为搜索<code>input</code>添加<code>tabindex</code>属性，其值为 1。为提交<code>input</code>添加<code>tabindex</code>属性，其值为 2。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '你应该为搜索<code>input</code>标签添加<code>tabindex</code>属性。'
    testString: assert($('#search').attr('tabindex'));
  - text: '你应该为提交<code>input</code>标签添加<code>tabindex</code>属性。'
    testString: assert($('#submit').attr('tabindex'));
  - text: '搜索<code>input</code>标签的<code>tabindex</code>属性值应该为 1。'
    testString: assert($('#search').attr('tabindex') == '1');
  - text: '提交<code>input</code>标签的<code>tabindex</code>属性值应该为 2。'
    testString: assert($('#submit').attr('tabindex') == '2');

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

```html
// solution required
```

</section>
              
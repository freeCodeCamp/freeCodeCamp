---
id: 587d778c367417b2b2512aa9
title: Standardize Times with the HTML5 datetime Attribute
challengeType: 0
videoUrl: ''
localeTitle: 使用HTML5 datetime属性标准化Times
---

## Description
<section id="description">继续使用日期主题，HTML5还引入了<code>time</code>元素和<code>datetime</code>属性来标准化时间。这是一个可以在页面上包装日期或时间的内联元素。该日期的有效格式由<code>datetime</code>属性保存。这是辅助设备访问的值。它通过陈述标准化版本的时间来避免混淆，即使它是在文本中以非正式或口语方式编写的。以下是一个例子： <code>&lt;p&gt;Master Camper Cat officiated the cage match between Goro and Scorpion &lt;time datetime=&quot;2013-02-13&quot;&gt;last Wednesday&lt;/time&gt;, which ended in a draw.&lt;/p&gt;</code> </section>

## Instructions
<section id="instructions">露营猫的真人快打调查结果在！在文本“9月15日星期四&lt;sup&gt; th &lt;/ sup&gt;”周围包装一个<code>time</code>标记，并为其设置“2016-09-15”添加<code>datetime</code>属性。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 測試文本
    testString: assert(true);

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
  <article>
    <h2>Mortal Kombat Tournament Survey Results</h2>

    <!-- Add your code below this line -->

    <p>Thank you to everyone for responding to Master Camper Cat's survey. The best day to host the vaunted Mortal Kombat tournament is Thursday, September 15<sup>th</sup>. May the best ninja win!</p>

    <!-- Add your code above this line -->

    <section>
      <h3>Comments:</h3>
      <article>
        <p>Posted by: Sub-Zero on <time datetime="2016-08-13T20:01Z">August 13<sup>th</sup></time></p>
        <p>Johnny Cage better be there, I'll finish him!</p>
      </article>
      <article>
        <p>Posted by: Doge on <time datetime="2016-08-15T08:12Z">August 15<sup>th</sup></time></p>
        <p>Wow, much combat, so mortal.</p>
      </article>
      <article>
        <p>Posted by: The Grim Reaper on <time datetime="2016-08-16T00:00Z">August 16<sup>th</sup></time></p>
        <p>Looks like I'll be busy that day.</p>
      </article>
    </section>
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

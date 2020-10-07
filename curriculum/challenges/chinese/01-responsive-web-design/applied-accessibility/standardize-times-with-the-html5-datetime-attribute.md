---
id: 587d778c367417b2b2512aa9
challengeType: 0
videoUrl: 'https://scrimba.com/c/cmzMgtz'
forumTopicId: 301025
title: 使用 HTML5 的 datatime 属性标准化时间
---

## Description
<section id='description'>
继续日期主题。HTML5 还引入了<code>time</code>标签与<code>datetime</code>属性来标准化时间。<code>time</code>是一个行内标签，用于在页面中呈现日期或时间，而<code>datetime</code>属性保存了日期的有效格式，辅助设备可以访问这个值。通过标准化时间格式，即使时间在文本中是以非正式的或口语化的形式编写，辅助设备依然可以获取准确的时间和日期。
举个例子：
<code>&lt;p&gt;Master Camper Cat officiated the cage match between Goro and Scorpion &lt;time datetime=&quot;2013-02-13&quot;&gt;last Wednesday&lt;/time&gt;, which ended in a draw.&lt;/p&gt;</code>
</section>

## Instructions
<section id='instructions'>
Camper Cat 的比武大会的时间确定了！请使用<code>time</code>标签包含文本 "Thursday, September 15&lt;sup&gt;th&lt;/sup&gt;"，并将<code>datetime</code>属性设置为 "2016-09-15"。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>time</code>标签应该包含文本"Thursday, September 15&lt;sup&gt;th&lt;/sup&gt;"。'
    testString: assert(timeElement.length);
  - text: '<code>time</code>标签应该有 1 个非空的<code>datetime</code>属性。'
    testString: assert(timeElement.length && $(timeElement).html().trim() === "Thursday, September 15<sup>th</sup>");
  - text: '<code>datetime</code>属性的值应该为 2016-09-15。'
    testString: assert(datetimeAttr && datetimeAttr.length);
  - text: '确保<code>time</code>标签是闭合的。'
    testString: assert(datetimeAttr === "2016-09-15");
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

<div id='html-teardown'>

```html
<script>
const pElement = $("article > p")
  .filter((_, elem) => $(elem).text().includes("Thank you to everyone for responding to Master Camper Cat's survey."));
const timeElement = pElement[0] ? $(pElement[0]).find("time") : null;
const datetimeAttr = $(timeElement).attr("datetime");
</script>
```

</div>

</section>

## Solution
<section id='solution'>

```html
// solution required
```

</section>
              
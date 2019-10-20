---
id: 587d778c367417b2b2512aa9
title: Standardize Times with the HTML5 datetime Attribute
challengeType: 0
videoUrl: ''
localeTitle: توحيد الأوقات باستخدام سمة datetime HTML5
---

## Description
<section id="description"> استمرارًا بموضوع التاريخ ، قدم HTML5 أيضًا عنصر <code>time</code> مع سمة <code>datetime</code> لتوحيد الأوقات. هذا عنصر مضمّن يمكن أن يلف تاريخًا أو وقتًا على الصفحة. يتم الاحتفاظ بتنسيق صالح لذلك التاريخ بواسطة السمة <code>datetime</code> . هذه هي القيمة التي يتم الوصول إليها بواسطة الأجهزة المساعدة. يساعد على تجنب الارتباك عن طريق ذكر نسخة موحدة من الوقت ، حتى لو كان مكتوبا بطريقة غير رسمية أو عامية في النص. في ما يلي مثال على ذلك: <code>&lt;p&gt;Master Camper Cat officiated the cage match between Goro and Scorpion &lt;time datetime=&quot;2013-02-13&quot;&gt;last Wednesday&lt;/time&gt;, which ended in a draw.&lt;/p&gt;</code> </section>

## Instructions
<section id="instructions"> نتائج الاستطلاع &quot;مورتال كومبات&quot; كامبر كات في! لف علامة <code>time</code> حول النص &quot;الخميس 15 سبتمبر &lt;sup&gt; th &lt;/ sup&gt;&quot; وأضف سمة <code>datetime</code> لتعيينها على &quot;2016-09-15&quot;. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب أن تلتف علامات <code>time</code> حول النص &quot;الخميس 15 سبتمبر &lt;sup&gt; th &lt;/ sup&gt;&quot;.
    testString: 'assert($("time").text().match(/Thursday, September 15th/g), "Your <code>time</code> tags should wrap around the text "Thursday, September 15&lt;sup&gt;th&lt;/sup&gt;".");'
  - text: يجب أن تحتوي علامة <code>time</code> الخاصة بك على سمة <code>datetime</code> غير فارغة.
    testString: 'assert($("time").attr("datetime"), "Your <code>time</code> tag should have a <code>datetime</code> attribute that is not empty.");'
  - text: يجب تعيين السمة <code>datetime</code> الخاصة بك إلى قيمة 2016-09-15.
    testString: 'assert($("time").attr("datetime") === "2016-09-15", "Your <code>datetime</code> attribute should be set to a value of 2016-09-15.");'
  - text: تأكد من أن عنصر <code>time</code> يحتوي على علامة إغلاق.
    testString: 'assert(code.match(/<\/time>/g) && code.match(/<\/time>/g).length === 4, "Make sure your <code>time</code> element has a closing tag.");'

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

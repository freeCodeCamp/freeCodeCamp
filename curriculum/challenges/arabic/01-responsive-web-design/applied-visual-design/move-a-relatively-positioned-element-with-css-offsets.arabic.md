---
id: 587d781e367417b2b2512aca
title: Move a Relatively Positioned Element with CSS Offsets
challengeType: 0
videoUrl: ''
localeTitle: انقل عنصر تم تحديد موضعه نسبيًا باستخدام إزاحات CSS
---

## Description
<section id="description"> تخبر إزاحات CSS <code>top</code> أو <code>bottom</code> ، وإلى <code>left</code> أو <code>right</code> المتصفح عن مدى إزاحة عنصر متعلق بالمكان الذي سيجلس فيه في التدفق العادي للمستند. يتم تعويض عنصر بعيدًا عن نقطة معينة ، والتي تحرك العنصر بعيدًا عن الجانب المشار إليه (على نحو فعال ، في الاتجاه المعاكس). كما رأيت في التحدي الأخير ، فإن استخدام الإزاحة الأعلى نقل <code>h2</code> الأسفل. وبالمثل ، فإن استخدام إزاحة اليسار يؤدي إلى تحريك عنصر إلى اليمين. <h2 style=";text-align:right;direction:rtl"> تعليمات </h2><section id="instructions"> استخدم إزاحات CSS لنقل وحدات بكسل <code>h2</code> 15 إلى اليمين و 10 بكسل لأعلى. </section><h2 style=";text-align:right;direction:rtl"> اختبارات </h2><section id="tests"><pre style=";text-align:right;direction:rtl"> <code class="language-yml">tests: - text: &#39;Your code should use a CSS offset to relatively position the &lt;code&gt;h2&lt;/code&gt; 10px upwards. In other words, move it 10px away from the &lt;code&gt;bottom&lt;/code&gt; of where it normally sits.&#39; testString: &#39;assert($(&quot;h2&quot;).css(&quot;bottom&quot;) == &quot;10px&quot;, &quot;Your code should use a CSS offset to relatively position the &lt;code&gt;h2&lt;/code&gt; 10px upwards. In other words, move it 10px away from the &lt;code&gt;bottom&lt;/code&gt; of where it normally sits.&quot;);&#39; - text: &#39;Your code should use a CSS offset to relatively position the &lt;code&gt;h2&lt;/code&gt; 15px towards the right. In other words, move it 15px away from the &lt;code&gt;left&lt;/code&gt; of where it normally sits.&#39; testString: &#39;assert($(&quot;h2&quot;).css(&quot;left&quot;) == &quot;15px&quot;, &quot;Your code should use a CSS offset to relatively position the &lt;code&gt;h2&lt;/code&gt; 15px towards the right. In other words, move it 15px away from the &lt;code&gt;left&lt;/code&gt; of where it normally sits.&quot;);&#39;</code> </pre></section><h2 style=";text-align:right;direction:rtl"> بذور التحدي </h2><section id="challengeSeed"><div id="html-seed" style=";text-align:right;direction:rtl"><pre style=";text-align:right;direction:rtl"> <code class="language-html">&lt;head&gt; &lt;style&gt; h2 { position: relative; } &lt;/style&gt; &lt;/head&gt; &lt;body&gt; &lt;h1&gt;On Being Well-Positioned&lt;/h1&gt; &lt;h2&gt;Move me!&lt;/h2&gt; &lt;p&gt;I still think the h2 is where it normally sits.&lt;/p&gt; &lt;/body&gt;</code> </pre></div></section><h2 style=";text-align:right;direction:rtl"> حل </h2><section id="solution"><pre style=";text-align:right;direction:rtl"> <code class="language-js">// solution required</code> </pre></section></section>

## Instructions
<section id="instructions"> استخدم إزاحات CSS لنقل وحدات بكسل <code>h2</code> 15 إلى اليمين و 10 بكسل لأعلى. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب أن تستخدم شفرتك إزاحة CSS لوضع <code>h2</code> 10px صعودًا نسبيًا. بعبارة أخرى ، حركه بمقدار 10 بكسل بعيدًا عن <code>bottom</code> المكان الذي يجلس فيه عادةً.
    testString: 'assert($("h2").css("bottom") == "10px", "Your code should use a CSS offset to relatively position the <code>h2</code> 10px upwards. In other words, move it 10px away from the <code>bottom</code> of where it normally sits.");'
  - text: يجب أن تستخدم شفرتك تخالف CSS لوضع <code>h2</code> 15px نسبيًا نحو اليمين. بعبارة أخرى ، حركه بمقدار 15 بكسل بعيدًا عن <code>left</code> المكان الذي يجلس فيه عادةً.
    testString: 'assert($("h2").css("left") == "15px", "Your code should use a CSS offset to relatively position the <code>h2</code> 15px towards the right. In other words, move it 15px away from the <code>left</code> of where it normally sits.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<head>
<style>
  h2 {
    position: relative;


  }
</style>
</head>
<body>
  <h1>On Being Well-Positioned</h1>
  <h2>Move me!</h2>
  <p>I still think the h2 is where it normally sits.</p>
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

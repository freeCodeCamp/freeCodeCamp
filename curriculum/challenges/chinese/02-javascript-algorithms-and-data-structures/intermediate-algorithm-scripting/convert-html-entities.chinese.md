---
id: a6b0bb188d873cb2c8729495
title: Convert HTML Entities
isRequired: true
challengeType: 5
videoUrl: ''
localeTitle: 转换HTML实体
---

## Description
<section id="description">将字符串中的字符<code>&amp;</code> ， <code>&lt;</code> ， <code>&gt;</code> ， <code>&quot;</code> （双引号）和<code>&#39;</code> （撇号）转换为相应的HTML实体。如果卡住，请记住使用<a href="https://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck-coding/19514" target="_blank">Read-Search-Ask</a> 。尝试配对程序。写下你的自己的代码。 </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>convertHTML(&quot;Dolce &amp; Gabbana&quot;)</code>应该返回<code>Dolce &amp;​amp; Gabbana</code> 。
    testString: assert.match(convertHTML("Dolce & Gabbana"), /Dolce &amp; Gabbana/);
  - text: <code>convertHTML(&quot;Hamburgers &lt; Pizza &lt; Tacos&quot;)</code>应该返回<code>Hamburgers &amp;​lt; Pizza &amp;​lt; Tacos</code> 。
    testString: assert.match(convertHTML("Hamburgers < Pizza < Tacos"), /Hamburgers &lt; Pizza &lt; Tacos/);
  - text: <code>convertHTML(&quot;Sixty &gt; twelve&quot;)</code>应返回<code>Sixty &amp;​gt; twelve</code> 。
    testString: assert.match(convertHTML("Sixty > twelve"), /Sixty &gt; twelve/);
  - text: '<code>convertHTML(&#39;Stuff in &quot;quotation marks&quot;&#39;)</code>应该<code>convertHTML(&#39;Stuff in &quot;quotation marks&quot;&#39;)</code>返回<code>Stuff in &amp;​quot;quotation marks&amp;​quot;</code> 。'
    testString: assert.match(convertHTML('Stuff in "quotation marks"'), /Stuff in &quot;quotation marks&quot;/);
  - text: '<code>convertHTML(&quot;Schindler&#39;s List&quot;)</code>应该返回<code>Schindler&amp;​apos;s List</code> 。'
    testString: assert.match(convertHTML("Schindler's List"), /Schindler&apos;s List/);
  - text: <code>convertHTML(&quot;&lt;&gt;&quot;)</code>应返回<code>&amp;​lt;&amp;​gt;</code> 。
    testString: assert.match(convertHTML('<>'), /&lt;&gt;/);
  - text: <code>convertHTML(&quot;abc&quot;)</code>应该返回<code>abc</code> 。
    testString: assert.strictEqual(convertHTML('abc'), 'abc');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function convertHTML(str) {
  // &colon;&rpar;
  return str;
}

convertHTML("Dolce & Gabbana");

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

/section>

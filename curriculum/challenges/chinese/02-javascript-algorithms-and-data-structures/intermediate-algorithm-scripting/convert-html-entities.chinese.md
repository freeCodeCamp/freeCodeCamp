---
id: a6b0bb188d873cb2c8729495
title: Convert HTML Entities
isRequired: true
challengeType: 5
videoUrl: ''
localeTitle: 转换HTML实体
---

## Description
<section id="description">将字符串中的字符<code>&amp;</code> ， <code>&lt;</code> ， <code>&gt;</code> ， <code>&quot;</code> （双引号）和<code>&#39;</code> （撇号）转换为相应的HTML实体。如果卡住，请记住使用<a href="http://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck/19514" target="_blank">Read-Search-Ask</a> 。尝试配对程序。写下你的自己的代码。 </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>convertHTML(&quot;Dolce &amp; Gabbana&quot;)</code>应该返回<code>Dolce &amp;​amp; Gabbana</code> 。
    testString: 'assert.match(convertHTML("Dolce & Gabbana"), /Dolce &amp; Gabbana/, "<code>convertHTML("Dolce & Gabbana")</code> should return <code>Dolce &amp; Gabbana</code>.");'
  - text: <code>convertHTML(&quot;Hamburgers &lt; Pizza &lt; Tacos&quot;)</code>应该返回<code>Hamburgers &amp;​lt; Pizza &amp;​lt; Tacos</code> 。
    testString: 'assert.match(convertHTML("Hamburgers < Pizza < Tacos"), /Hamburgers &lt; Pizza &lt; Tacos/, "<code>convertHTML("Hamburgers < Pizza < Tacos")</code> should return <code>Hamburgers &lt; Pizza &lt; Tacos</code>.");'
  - text: <code>convertHTML(&quot;Sixty &gt; twelve&quot;)</code>应返回<code>Sixty &amp;​gt; twelve</code> 。
    testString: 'assert.match(convertHTML("Sixty > twelve"), /Sixty &gt; twelve/, "<code>convertHTML("Sixty > twelve")</code> should return <code>Sixty &gt; twelve</code>.");'
  - text: '<code>convertHTML(&#39;Stuff in &quot;quotation marks&quot;&#39;)</code>应该<code>convertHTML(&#39;Stuff in &quot;quotation marks&quot;&#39;)</code>返回<code>Stuff in &amp;​quot;quotation marks&amp;​quot;</code> 。'
    testString: 'assert.match(convertHTML("Stuff in "quotation marks""), /Stuff in &quot;quotation marks&quot;/, "<code>convertHTML(&apos;Stuff in "quotation marks"&apos;)</code> should return <code>Stuff in &quot;quotation marks&quot;</code>.");'
  - text: '<code>convertHTML(&quot;Schindler&#39;s List&quot;)</code>应该返回<code>Schindler&amp;​apos;s List</code> 。'
    testString: 'assert.match(convertHTML("Schindler"s List"), /Schindler&apos;s List/, "<code>convertHTML("Schindler&apos;s List")</code> should return <code>Schindler&apos;s List</code>.");'
  - text: <code>convertHTML(&quot;&lt;&gt;&quot;)</code>应返回<code>&amp;​lt;&amp;​gt;</code> 。
    testString: 'assert.match(convertHTML("<>"), /&lt;&gt;/, "<code>convertHTML("<>")</code> should return <code>&lt;&gt;</code>.");'
  - text: <code>convertHTML(&quot;abc&quot;)</code>应该返回<code>abc</code> 。
    testString: 'assert.strictEqual(convertHTML("abc"), "abc", "<code>convertHTML("abc")</code> should return <code>abc</code>.");'

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
</section>

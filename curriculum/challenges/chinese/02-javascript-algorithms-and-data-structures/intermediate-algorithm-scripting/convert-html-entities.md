---
id: a6b0bb188d873cb2c8729495
challengeType: 5
title: 转换HTML实体
---

## Description
<section id='description'>
在这道题目中，我们需要写一个转换 HTML entity 的函数。需要转换的 HTML entity 有<code>&</code>、<code><</code>、<code>></code>、<code>"</code>（双引号）和<code>'</code>（单引号）。  
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: "<code>convertHTML('Dolce & Gabbana')</code>应该返回<code>Dolce &&#8203;amp; Gabbana</code>。"
    testString: assert.match(convertHTML("Dolce & Gabbana"), /Dolce &amp; Gabbana/);
  - text: "<code>convertHTML('Hamburgers < Pizza < Tacos')</code>应该返回<code>Hamburgers &&#8203;lt; Pizza &&#8203;lt; Tacos</code>。"
    testString: assert.match(convertHTML("Hamburgers < Pizza < Tacos"), /Hamburgers &lt; Pizza &lt; Tacos/);
  - text: "<code>convertHTML('Sixty > twelve')</code>应该返回<code>Sixty &&#8203;gt; twelve</code>。"
    testString: assert.match(convertHTML("Sixty > twelve"), /Sixty &gt; twelve/);
  - text: "<code>convertHTML(&apos;Stuff in \"quotation marks\"&apos;)</code>应该返回<code>Stuff in &&#8203;quot;quotation marks&&#8203;quot;</code>。"
    testString: assert.match(convertHTML('Stuff in "quotation marks"'), /Stuff in &quot;quotation marks&quot;/);
  - text: "<code>convertHTML('Schindler&apos;s List')</code>应该返回<code>Schindler&&#8203;apos;s List</code>。"
    testString: assert.match(convertHTML("Schindler's List"), /Schindler&apos;s List/);
  - text: "<code>convertHTML('<>')</code>应该返回<code>&&#8203;lt;&&#8203;gt;</code>。"
    testString: assert.match(convertHTML('<>'), /&lt;&gt;/);
  - text: "<code>convertHTML('abc')</code>应该返回<code>abc</code>。"
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
var MAP = { '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&apos;'};

function convertHTML(str) {
  return str.replace(/[&<>"']/g, function(c) {
    return MAP[c];
  });
}
```

</section>

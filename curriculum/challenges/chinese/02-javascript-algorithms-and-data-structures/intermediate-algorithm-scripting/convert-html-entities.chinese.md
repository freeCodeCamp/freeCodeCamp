---
id: a6b0bb188d873cb2c8729495
title: Convert HTML Entities
challengeType: 5
isRequired: true
videoUrl: ''
localeTitle: Convert HTML Entities
---

## Description
<section id='description'>
给出一个含有两个数字的数组，我们需要写一个函数，让它返回这两个数字间所有数字（包含这两个数字）的总和。
注意，较小数不一定总是出现在数组的第一个元素。
如果你遇到了问题，请点击<a href='https://forum.freecodecamp.one/t/topic/157' target='_blank'>帮助</a>。
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: "<code>convertHTML('Dolce & Gabbana')</code>应该返回<code>Dolce &&#8203;amp; Gabbana</code>。"
    testString: assert.match(convertHTML("Dolce & Gabbana"), /Dolce &amp; Gabbana/, '<code>convertHTML("Dolce & Gabbana")</code>应该返回<code>Dolce &&#8203;amp; Gabbana</code>。');
  - text: "<code>convertHTML('Hamburgers < Pizza < Tacos')</code>应该返回<code>Hamburgers &&#8203;lt; Pizza &&#8203;lt; Tacos</code>。"
    testString: assert.match(convertHTML("Hamburgers < Pizza < Tacos"), /Hamburgers &lt; Pizza &lt; Tacos/, '<code>convertHTML("Hamburgers < Pizza < Tacos")</code>应该返回<code>Hamburgers &&#8203;lt; Pizza &&#8203;lt; Tacos</code>。');
  - text: "<code>convertHTML('Sixty > twelve')</code>应该返回<code>Sixty &&#8203;gt; twelve</code>。"
    testString: assert.match(convertHTML("Sixty > twelve"), /Sixty &gt; twelve/, '<code>convertHTML("Sixty > twelve")</code>应该返回<code>Sixty &&#8203;gt; twelve</code>。');
  - text: "<code>convertHTML(&apos;Stuff in 'quotation marks'&apos;)</code>应该返回<code>Stuff in &&#8203;quot;quotation marks&&#8203;quot;</code>。"
    testString: assert.match(convertHTML('Stuff in "quotation marks"'), /Stuff in &quot;quotation marks&quot;/, '<code>convertHTML(&apos;Stuff in "quotation marks"&apos;)</code>应该返回<code>Stuff in &&#8203;quot;quotation marks&&#8203;quot;</code>。');
  - text: "<code>convertHTML('Schindler&apos;s List')</code>应该返回<code>Schindler&&#8203;apos;s List</code>。"
    testString: assert.match(convertHTML("Schindler's List"), /Schindler&apos;s List/, '<code>convertHTML("Schindler&apos;s List")</code>应该返回<code>Schindler&&#8203;apos;s List</code>。');
  - text: "<code>convertHTML('<>')</code>应该返回<code>&&#8203;lt;&&#8203;gt;</code>。"
    testString: assert.match(convertHTML('<>'), /&lt;&gt;/, '<code>convertHTML("<>")</code>应该返回<code>&&#8203;lt;&&#8203;gt;</code>。');
  - text: "<code>convertHTML('abc')</code>应该返回<code>abc</code>。"
    testString: assert.strictEqual(convertHTML('abc'), 'abc', '<code>convertHTML("abc")</code>应该返回<code>abc</code>。');

```

</section>

## Challenge Seed
<section id='challengeSeed'>















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
              
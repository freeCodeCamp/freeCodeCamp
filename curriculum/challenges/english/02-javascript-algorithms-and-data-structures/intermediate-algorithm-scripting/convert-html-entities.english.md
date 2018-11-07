---
id: a6b0bb188d873cb2c8729495
title: Convert HTML Entities
isRequired: true
challengeType: 5
---

## Description
<section id='description'>
Convert the characters <code>&</code>, <code><</code>, <code>></code>, <code>"</code> (double quote), and <code>'</code> (apostrophe), in a string to their corresponding HTML entities.
Remember to use <a href='http://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck/19514' target='_blank'>Read-Search-Ask</a> if you get stuck. Try to pair program. Write your own code.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>convertHTML("Dolce & Gabbana")</code> should return <code>Dolce &amp; Gabbana</code>.
    testString: assert.match(convertHTML("Dolce & Gabbana"), /Dolce &amp; Gabbana/, '<code>convertHTML("Dolce & Gabbana")</code> should return <code>Dolce &amp; Gabbana</code>.');
  - text: <code>convertHTML("Hamburgers < Pizza < Tacos")</code> should return <code>Hamburgers &lt; Pizza &lt; Tacos</code>.
    testString: assert.match(convertHTML("Hamburgers < Pizza < Tacos"), /Hamburgers &lt; Pizza &lt; Tacos/, '<code>convertHTML("Hamburgers < Pizza < Tacos")</code> should return <code>Hamburgers &lt; Pizza &lt; Tacos</code>.');
  - text: <code>convertHTML("Sixty > twelve")</code> should return <code>Sixty &gt; twelve</code>.
    testString: assert.match(convertHTML("Sixty > twelve"), /Sixty &gt; twelve/, '<code>convertHTML("Sixty > twelve")</code> should return <code>Sixty &gt; twelve</code>.');
  - text: <code>convertHTML(&apos;Stuff in "quotation marks"&apos;)</code> should return <code>Stuff in &quot;quotation marks&quot;</code>.
    testString: assert.match(convertHTML('Stuff in "quotation marks"'), /Stuff in &quot;quotation marks&quot;/, '<code>convertHTML(&apos;Stuff in "quotation marks"&apos;)</code> should return <code>Stuff in &quot;quotation marks&quot;</code>.');
  - text: <code>convertHTML("Schindler&apos;s List")</code> should return <code>Schindler&apos;s List</code>.
    testString: assert.match(convertHTML("Schindler's List"), /Schindler&apos;s List/, '<code>convertHTML("Schindler&apos;s List")</code> should return <code>Schindler&apos;s List</code>.');
  - text: <code>convertHTML("<>")</code> should return <code>&lt;&gt;</code>.
    testString: assert.match(convertHTML('<>'), /&lt;&gt;/, '<code>convertHTML("<>")</code> should return <code>&lt;&gt;</code>.');
  - text: <code>convertHTML("abc")</code> should return <code>abc</code>.
    testString: assert.strictEqual(convertHTML('abc'), 'abc', '<code>convertHTML("abc")</code> should return <code>abc</code>.');

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

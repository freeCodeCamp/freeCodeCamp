---
id: a6b0bb188d873cb2c8729495
title: Convert HTML Entities
isRequired: true
challengeType: 5
forumTopicId: 16007
localeTitle: Преобразование HTML-объектов
---

## Description
<section id='description'>
Преобразуйте символы <code>&amp;</code> , <code>&lt;</code> , <code>&gt;</code> , <code>&quot;</code> (двойная кавычка) и <code>&#39;</code> (апострофа) в строку в соответствующие HTML-объекты. Не забудьте использовать <a href="https://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck-coding/19514" target="_blank">Read-Search-Ask,</a> если вы застряли. собственный код.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>convertHTML("Dolce & Gabbana")</code> should return <code>Dolce &amp;amp; Gabbana</code>.
    testString: assert.match(convertHTML("Dolce & Gabbana"), /Dolce &amp; Gabbana/);
  - text: <code>convertHTML("Hamburgers < Pizza < Tacos")</code> should return <code>Hamburgers &amp;lt; Pizza &amp;lt; Tacos</code>.
    testString: assert.match(convertHTML("Hamburgers < Pizza < Tacos"), /Hamburgers &lt; Pizza &lt; Tacos/);
  - text: <code>convertHTML("Sixty > twelve")</code> should return <code>Sixty &amp;gt; twelve</code>.
    testString: assert.match(convertHTML("Sixty > twelve"), /Sixty &gt; twelve/);
  - text: <code>convertHTML(&apos;Stuff in "quotation marks"&apos;)</code> should return <code>Stuff in &amp;quot;quotation marks&amp;quot;</code>.
    testString: assert.match(convertHTML('Stuff in "quotation marks"'), /Stuff in &quot;quotation marks&quot;/);
  - text: <code>convertHTML("Schindler&apos;s List")</code> should return <code>Schindler&amp;apos;s List</code>.
    testString: assert.match(convertHTML("Schindler's List"), /Schindler&apos;s List/);
  - text: <code>convertHTML("<>")</code> should return <code>&amp;lt;&amp;gt;</code>.
    testString: assert.match(convertHTML('<>'), /&lt;&gt;/);
  - text: <code>convertHTML("abc")</code> should return <code>abc</code>.
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

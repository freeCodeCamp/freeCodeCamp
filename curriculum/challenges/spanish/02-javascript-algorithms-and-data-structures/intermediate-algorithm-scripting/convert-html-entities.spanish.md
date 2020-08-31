---
id: a6b0bb188d873cb2c8729495
title: Convert HTML Entities
isRequired: true
challengeType: 5
videoUrl: ''
localeTitle: Convertir entidades HTML
---

## Description
<section id="description"> Convierta los caracteres <code>&amp;</code> , <code>&lt;</code> , <code>&gt;</code> , <code>&quot;</code> (comillas dobles) y <code>&#39;</code> (apóstrofe), en una cadena con sus correspondientes entidades en HTML. Recuerde usar la <a href="https://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck-coding/19514" target="_blank">Lectura-Búsqueda-Preguntar</a> si tiene dificultades. Intente vincular el programa. Escriba su propio código. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>convertHTML(&quot;Dolce &amp; Gabbana&quot;)</code> debe devolver <code>Dolce &amp;​amp; Gabbana</code> .
    testString: 'assert.match(convertHTML("Dolce & Gabbana"), /Dolce &amp; Gabbana/, "<code>convertHTML("Dolce & Gabbana")</code> should return <code>Dolce &amp; Gabbana</code>.");'
  - text: <code>convertHTML(&quot;Hamburgers &lt; Pizza &lt; Tacos&quot;)</code> debe devolver <code>Hamburgers &amp;​lt; Pizza &amp;​lt; Tacos</code>
    testString: 'assert.match(convertHTML("Hamburgers < Pizza < Tacos"), /Hamburgers &lt; Pizza &lt; Tacos/, "<code>convertHTML("Hamburgers < Pizza < Tacos")</code> should return <code>Hamburgers &lt; Pizza &lt; Tacos</code>.");'
  - text: <code>convertHTML(&quot;Sixty &gt; twelve&quot;)</code> debe devolver <code>Sixty &amp;​gt; twelve</code> .
    testString: 'assert.match(convertHTML("Sixty > twelve"), /Sixty &gt; twelve/, "<code>convertHTML("Sixty > twelve")</code> should return <code>Sixty &gt; twelve</code>.");'
  - text: '<code>convertHTML(&#39;Stuff in &quot;quotation marks&quot;&#39;)</code> debería devolver <code>Stuff in &amp;​quot;quotation marks&amp;​quot;</code> .'
    testString: 'assert.match(convertHTML("Stuff in "quotation marks""), /Stuff in &quot;quotation marks&quot;/, "<code>convertHTML(&apos;Stuff in "quotation marks"&apos;)</code> should return <code>Stuff in &quot;quotation marks&quot;</code>.");'
  - text: '<code>convertHTML(&quot;Schindler&#39;s List&quot;)</code> debe devolver la <code>Schindler&amp;​apos;s List</code> .'
    testString: 'assert.match(convertHTML("Schindler"s List"), /Schindler&apos;s List/, "<code>convertHTML("Schindler&apos;s List")</code> should return <code>Schindler&apos;s List</code>.");'
  - text: <code>convertHTML(&quot;&lt;&gt;&quot;)</code> debe devolver <code>&amp;​lt;&amp;​gt;</code> .
    testString: 'assert.match(convertHTML("<>"), /&lt;&gt;/, "<code>convertHTML("<>")</code> should return <code>&lt;&gt;</code>.");'
  - text: <code>convertHTML(&quot;abc&quot;)</code> debe devolver <code>abc</code> .
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

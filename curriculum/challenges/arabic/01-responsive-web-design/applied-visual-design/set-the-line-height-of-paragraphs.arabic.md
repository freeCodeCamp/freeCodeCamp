---
id: 587d781d367417b2b2512ac5
title: Set the line-height of Paragraphs
challengeType: 0
videoUrl: ''
localeTitle: قم بتعيين ارتفاع سطر الفقرات
---

## Description
<section id="description"> توفر CSS خاصية <code>line-height</code> لتغيير ارتفاع كل سطر في كتلة نص. كما يوحي الاسم ، فإنه يغير مقدار المساحة العمودية التي يحصل عليها كل سطر من النص. </section>

## Instructions
<section id="instructions"> أضف خاصية <code>line-height</code> إلى علامة <code>p</code> واضبطها على 25 بكسل. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب أن تحدد الشفرة <code>line-height</code> علامة <code>p</code> إلى 25 بكسل.
    testString: 'assert($("p").css("line-height") == "25px", "Your code should set the <code>line-height</code> of the <code>p</code> tag to 25 pixels.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  p {
    font-size: 16px;

  }
</style>
<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
</p>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

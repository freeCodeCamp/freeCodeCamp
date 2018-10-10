---
id: 587d7db4367417b2b2512b92
title: Extract Matches
challengeType: 1
videoUrl: ''
localeTitle: استخراج مباريات
---

## Description
<section id="description"> حتى الآن ، كنت تتحقق فقط مما إذا كان هناك نمط موجود أم لا داخل سلسلة. يمكنك أيضًا استخراج التطابقات الفعلية التي وجدتها مع طريقة <code>.match()</code> . لاستخدام طريقة <code>.match()</code> ، قم بتطبيق الطريقة على سلسلة وتمريرها في regex داخل الأقواس. إليك مثال على ذلك: <blockquote style=";text-align:right;direction:rtl"> &quot;مرحبا ، العالم!&quot;. المباراة (/ مرحبا /) ؛ <br> // إرجاع [&quot;مرحبًا&quot;] <br> دع ourStr = &quot;التعبيرات العادية&quot;؛ <br> اسمحوا ourRegex = / تعبيرات / ؛ <br> ourStr.match (ourRegex)؛ <br> // إرجاع [&quot;التعبيرات&quot;] </blockquote></section>

## Instructions
<section id="instructions"> قم <code>.match()</code> طريقة <code>.match()</code> لاستخراج كلمة <code>coding</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: و <code>result</code> يجب أن يكون كلمة <code>coding</code>
    testString: 'assert(result.join() === "coding", "The <code>result</code> should have the word <code>coding</code>");'
  - text: يجب أن يبحث <code>codingRegex</code> regex <code>codingRegex</code> عن <code>coding</code>
    testString: 'assert(codingRegex.source === "coding", "Your regex <code>codingRegex</code> should search for <code>coding</code>");'
  - text: يجب عليك استخدام طريقة <code>.match()</code> .
    testString: 'assert(code.match(/\.match\(.*\)/), "You should use the <code>.match()</code> method.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /change/; // Change this line
let result = extractStr; // Change this line

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
